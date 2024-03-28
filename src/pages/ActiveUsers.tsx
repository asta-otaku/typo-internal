import axios from "axios";
import { useEffect, useState } from "react";
import DashboardNav from "../components/DashboardNav";
import DashboardLayout from "../layout/DashboardLayout";
import Card from "../components/UserCard"; // Ensure the correct path is provided
import { ChevronDownIcon } from "../assets/icons";

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

  useEffect(() => {
    const fetchActiveUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5269/api/activeUsers",
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
    };

    fetchActiveUsers();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNav
        title="Active Users"
        description="Select the category to view the leaderboards"
      />
      <div className="my-6 w-full py-3 flex gap-4">
        <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl p-2 w-fit">
          <select className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
            <option>User Type</option>
          </select>
          <ChevronDownIcon width={12} />
        </div>
        <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl p-2 w-fit">
          <select className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
            <option>All Activity</option>
          </select>
          <ChevronDownIcon width={12} />
        </div>
        <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl p-2 w-fit">
          <select className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
            <option>24 Hours</option>
          </select>
          <ChevronDownIcon width={12} />
        </div>
      </div>

      <div className="flex  items-stretch flex-wrap gap-4 md:gap-y-8">
        {activeUsers.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>
    </DashboardLayout>
  );
}

export default ActiveUsers;
