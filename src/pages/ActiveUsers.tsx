import axios from "axios";
import { useEffect, useState } from "react";
import DashboardNav from "../components/DashboardNav";
import DashboardLayout from "../layout/DashboardLayout";
import Card from "../components/UserCard";
import { ChevronDownIcon } from "../assets/icons";
import ReactPaginate from "react-paginate";
import { apiUrl } from "../config";

type ActiveUserDto = {
  name: string;
  team: string;
  userType: string;
  tags: string[];
  activity: string[][];
  activityTimestamps: string[][];
  deviceType: string[][];
  lastActivityTime: number;
};

function ActiveUsers() {
  const [activeUsers, setActiveUsers] = useState<ActiveUserDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchActiveUsers = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${apiUrl}/activeUsers`,
          {
            headers: {
              accept: "application/json",
              "x-user-id": "dc60dc1e-182b-4314-b2e7-f9eff78b7450",
            },
          }
        );
        const sortedUsers = response.data.sort(
          (a: ActiveUserDto, b: ActiveUserDto) =>
            a.lastActivityTime - b.lastActivityTime
        );
        setActiveUsers(sortedUsers);
      } catch (error) {
        console.error("Error fetching active users:", error);
      }
      finally {
        setIsLoading(false); // End loading
      }
    };

    fetchActiveUsers();
  }, []);

  //pagination logic

  const itemsPerPage = 21;

  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(activeUsers.length / itemsPerPage);

  const handlePageChange = ({ selected }: { selected: any }) => {
    setCurrentPage(selected);
  };

  const displayedData = activeUsers.slice(
    currentPage * itemsPerPage,

    (currentPage + 1) * itemsPerPage
  );

  return (
    <DashboardLayout>
      <DashboardNav
        title="Active Users"
        description="Select the category to view the leaderboards"
      />
      <div className="my-6 w-full py-3 flex gap-4">
        <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl p-2 w-fit">
          <select className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
            <option>All Users</option>
            <option>Regular Users</option>
            <option>Flaky</option>
            <option>Dormant Users</option>
          </select>
          <ChevronDownIcon width={12} />
        </div>
        <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl p-2 w-fit">
          <select className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
            <option>All Activity</option>
            <option>Created Bubble</option>
            <option>Created Comment</option>

          </select>
          <ChevronDownIcon width={12} />
        </div>
        <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl p-2 w-fit">
          <select className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
            <option>Last 24 Hours</option>
            <option>Last 7 Days</option>
            <option>Last 14 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>Last 180 Days</option>
            <option>Custom Date Range</option>


          </select>
          <ChevronDownIcon width={12} />
        </div>
      </div>

           {/* Conditional rendering based on isLoading */}
           {isLoading ? (
        <div className="flex justify-center items-center">
          <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-800 border-4 h-12 w-12"></div>
        </div>
      ) : (
        <div className="flex items-stretch flex-wrap gap-4 md:gap-y-8">
          {displayedData.map((data, index) => (
            <Card key={index} {...data} />
          ))}
        </div>
      )}

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
    </DashboardLayout>
  );
}

export default ActiveUsers;
