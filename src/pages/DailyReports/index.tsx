// import axios from "axios";
import { useEffect, useState } from "react";
import DailyReportsLayout from "../../layout/DailyReportsLayout";
import { ChevronDownIcon } from "../../assets/icons";
import TableBody from "../../components/DailyReport/TableBody";
import TableHeader from "../../components/DailyReport/TableHeader";
import {
  DAILYREPORTDATA as dailyData,
  DAILYREPORTSUMMARYDATA as summaryData,
} from "../../store/data";
import getWeekRanges from "../../helpers/getWeekRanges";
import ReactPaginate from "react-paginate";

function DailyReports() {
  const stored = localStorage.getItem("tableType");
  const [tableType, setTableType] = useState(stored || "weekly-report");
  const [tableData, setTableData] = useState<any>(dailyData);
  const weekRanges = getWeekRanges();
  useEffect(() => {
    if (tableType === "summary") {
      setTableData(summaryData);
    } else {
      setTableData(dailyData);
    }
    localStorage.setItem("tableType", tableType);
  }, [tableType]);

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

  // comment this in when you have the API
  // Fetches user activity report
  // const fetchUserActivities = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:5269/api/analytics/userActivityReport",
  //       {
  //         headers: {
  //           accept: "application/json",
  //           "x-user-id": "861f4c04-e718-43f4-9c4f-656910d71cd9",
  //         },
  //       }
  //     );
  //     setTableData(response.data);
  //   } catch (error) {
  //     console.error("Error fetching user activities:", error);
  //   }
  // };

  // type UserActivity = {
  //   username: string;
  //   userId: string;
  //   daysSinceOnboarding: string;
  //   activityCounts: {
  //     [key: string]: number;
  //   };
  // };

  // Fetches user activity summary
  // const fetchUserActivitySummary = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:5269/api/analytics/userActivitySummary",
  //       {
  //         headers: {
  //           accept: "application/json",
  //           "x-user-id": "861f4c04-e718-43f4-9c4f-656910d71cd9",
  //         },
  //       }
  //     );

  //     // Log the raw response data for debugging
  //     console.log("Raw summary data:", response.data);

  //     const transformedData = response.data.map((user: UserActivity) => ({
  //       username: user.username,
  //       userId: user.userId,
  //       logged_in: user.activityCounts["Logged In"]
  //         ? user.activityCounts["Logged In"].toString()
  //         : "0",
  //       created_bubble: user.activityCounts["Created Bubble"]
  //         ? user.activityCounts["Created Bubble"].toString()
  //         : "0",
  //       created_comment: user.activityCounts["Created Comment"]
  //         ? user.activityCounts["Created Comment"].toString()
  //         : "0",
  //       no_activity: user.activityCounts["No Activity"]
  //         ? user.activityCounts["No Activity"].toString()
  //         : "--",
  //       days_since_onboarding: user.daysSinceOnboarding.toString(),
  //     }));

  //     // Log the transformed data for debugging
  //     console.log("Transformed summary data:", transformedData);

  //     setTableData(transformedData);
  //   } catch (error) {
  //     console.error("Error fetching user activity summary:", error);
  //   }
  // };

  // useEffect(() => {
  //   if (tableType === "summary") {
  //     fetchUserActivitySummary();
  //   } else {
  //     fetchUserActivities();
  //   }
  // }, [tableType]);

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
      <div className="overflow-x-auto no-scrollbar">
        <table className="min-w-full text-left text-xs rounded-t-lg  bg-offwhite border-collapse">
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
    </DailyReportsLayout>
  );
}

export default DailyReports;
