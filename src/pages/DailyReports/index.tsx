import axios from "axios";
import { useEffect, useState, useRef } from "react";
import DailyReportsLayout from "../../layout/DailyReportsLayout";
import { ChevronDownIcon } from "../../assets/icons";
import TableBody from "../../components/DailyReport/TableBody";
import TableHeader from "../../components/DailyReport/TableHeader";
import getWeekRanges from "../../helpers/getWeekRanges";
import ReactPaginate from "react-paginate";
import { apiUrl } from "../../config";

function DailyReports() {
  const stored = localStorage.getItem("tableType");
  console.log("Retrieved tableType from localStorage:", stored);
  const [tableType, setTableType] = useState(stored || "weekly-report");
  const axiosCancelToken = useRef(axios.CancelToken.source());
  const [tableData, setTableData] = useState<any>([]);
  const weekRanges = getWeekRanges();
  const [isLoading, setIsLoading] = useState(true);

  //pagination logic
  const itemsPerPage = 24;
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(tableData.length / itemsPerPage);

  const handlePageChange = ({ selected }: { selected: any }) => {
    setCurrentPage(selected);
  };
  const displayedData = tableData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  useEffect(() => {
    // This function decides which data fetching function to call based on the tableType.
    const fetchData = async () => {
      axiosCancelToken.current.cancel("New request initiated");
      axiosCancelToken.current = axios.CancelToken.source();

      if (tableType === "summary") {
        await fetchUserActivitySummary();
      } else {
        await fetchUserActivities();
      }
    };

    fetchData().catch(console.error);

    // Store the tableType in localStorage to remember the user's choice.
    localStorage.setItem("tableType", tableType);
    console.log("Saved tableType to localStorage:", tableType);
    

    // Cleanup function to cancel any ongoing Axios request
    // when the component unmounts or before the effect runs again
    return () => {
      axiosCancelToken.current.cancel(
        "Component unmounted or new request initiated"
      );
    };
  }, [tableType]);

  // Fetches user activity report with loading state management
  const fetchUserActivities = async () => {
    setIsLoading(true);
    axiosCancelToken.current.cancel();
    axiosCancelToken.current = axios.CancelToken.source();
    try {
      const response = await axios.get(
        `${apiUrl}/analytics/userActivityReport`,
        {
          headers: {
            accept: "application/json",
            "x-user-id": "861f4c04-e718-43f4-9c4f-656910d71cd9",
          },
          cancelToken: axiosCancelToken.current.token,
        }
      );
      setTableData(response.data);
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.error("Error fetching user activities:", error);
      }
    } finally {
      setIsLoading(false); // Ensures loading is stopped regardless of fetch success
    }
  };

  type UserActivity = {
    username: string;
    daysSinceOnboarding: string;
    activityCounts: {
      [key: string]: number;
    };
  };

  // Fetches user activity summary
  const fetchUserActivitySummary = async () => {
    setIsLoading(true);
    axiosCancelToken.current.cancel();
    axiosCancelToken.current = axios.CancelToken.source();
    try {
      const response = await axios.get(
        `${apiUrl}/analytics/userActivitySummary`,
        {
          headers: {
            accept: "application/json",
            "x-user-id": "861f4c04-e718-43f4-9c4f-656910d71cd9",
          },
          cancelToken: axiosCancelToken.current.token,
        }
      );

      // Log the raw response data for debugging
      console.log("Raw summary data:", response.data);

      const transformedData = response.data.map((user: UserActivity) => ({
        username: user.username,
        logged_in: user.activityCounts["Logged In"]
          ? user.activityCounts["Logged In"].toString()
          : "0",
        created_bubble: user.activityCounts["Created Bubble"]
          ? user.activityCounts["Created Bubble"].toString()
          : "0",
        created_comment: user.activityCounts["Created Comment"]
          ? user.activityCounts["Created Comment"].toString()
          : "0",
        no_activity: user.activityCounts["No Activity"]
          ? user.activityCounts["No Activity"].toString()
          : "--",
        days_since_onboarding: user.daysSinceOnboarding.toString(),
      }));

      // Log the transformed data for debugging
      console.log("Transformed summary data:", transformedData);

      setTableData(transformedData);
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.error("Error fetching user activity summary:", error);
      }
    } finally {
      setIsLoading(false); // Ensures loading is stopped regardless of fetch success
    }
  };

  return (
    <DailyReportsLayout>
      <div className="my-6 w-full py-3 flex gap-4 text-xs border-solid border-x-0 border-y-[1px] border-[#DBDBDB]">
        <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl p-2 w-fit">
          <select
            defaultValue={tableType}
            onChange={(e) => setTableType(e.target.value)}
            className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent"
          >
            <option value={"weekly-report"}>Weekly Report</option>
            <option value={"summary"}>Summary</option>
          </select>
          <ChevronDownIcon width={12} />
        </div>

        <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl p-2 w-fit">
          <select className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
            {weekRanges.reverse().map((week) => (
              <option key={week} value={week}>
                {week}
              </option>
            ))}
            <option value={"archive"}>Archive</option>
          </select>
          <ChevronDownIcon width={12} />
        </div>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-800 border-4 h-12 w-12"></div>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto no-scrollbar">
            <table className="min-w-full text-left text-xs rounded-t-lg bg-offwhite border-collapse">
              <TableHeader tableData={displayedData} tableType={tableType} />
              <TableBody tableData={displayedData} />
            </table>
          </div>

          <ReactPaginate
            previousLabel={""}
            nextLabel={""}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={handlePageChange}
            pageClassName="block border hover:bg-primary/80 hover:text-white border-primary rounded-lg p-1.5 cursor-pointer"
            containerClassName="flex justify-center items-center font-medium mt-12 gap-5"
            activeClassName="bg-primary border border-primary text-white"
          />
        </>
      )}
    </DailyReportsLayout>
  );
}

export default DailyReports;
