import { Link, useLocation } from "react-router-dom";

import DashboardNav from "../components/DashboardNav";
import DashboardLayout from "./DashboardLayout";
import { ChevronDownIcon } from "../assets/icons";

function UserRankingLayout({
  children,
  setFilter,
}: {
  children: React.ReactNode;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}) {
  const location = useLocation();
  return (
    <DashboardLayout>
      <DashboardNav
        title="User Ranking"
        description="Select the category to view the leaderboards."
      />
      <div className="mt-6 px-2 overflow-x-auto flex flex-col lg:flex-row items-center md:items-start justify-between gap-8 w-full">
        <div className="max-w-[340px] w-full flex gap-4 justify-between items-center">
          <div className="flex items-center justify-center gap-2 bg-offwhite border border-solid border-[#DBDBDB] rounded-2xl px-1 py-2 w-[150px]">
            <select
              onChange={(e: any) => setFilter(e.target.value)}
              className="outline-none text-primary text-xs md:text-sm font-semibold appearance-none border-none bg-transparent"
            >
              <option value={"login"} defaultValue={"login"}>
                Log-In
              </option>
              <option value={"screenTime"}>Screen-Time</option>
              <option value={"bubblesSent"}>Bubbles Sent</option>
              <option value={"commentsSent"}>Comments Sent</option>
              <option value={"messagesSent"}>Messages Sent</option>
            </select>
            <ChevronDownIcon width={12} />
          </div>

          <div className="flex items-center justify-center gap-2 bg-offwhite border border-solid border-[#DBDBDB] rounded-2xl px-1 py-2 w-[150px]">
            <select className="outline-none text-primary text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
              <option value={"today"} defaultValue={"today"}>
                Today
              </option>
              <option value={"7-days"}>Last 7 Days</option>
              <option value={"30-days"}>Last 30 Days</option>
              <option value={"60-days"}>Last 60 Days</option>
              <option value={"80-days"}>Last 80 Days</option>
            </select>
            <ChevronDownIcon width={12} />
          </div>
        </div>
        <div className="max-w-4xl w-full flex flex-col gap-4 lg:mt-12">
          <h4 className="text-black font-medium text-base md:text-lg">
            Leaderboard
          </h4>
          <nav className="font-medium text-sm flex items-center justify-evenly p-0.5 rounded-md bg-offwhite w-full">
            {[
              {
                name: "Users",
                page: "/user-ranking",
              },
              {
                name: "Groups",
                page: "/user-ranking/groups",
              },
            ].map(({ page, name }) => (
              <Link
                to={page}
                key={page}
                className={`p-2 min-w-fit decoration-transparent text-center text-black w-1/2 ${
                  location.pathname === page.toLowerCase().replace(" ", "")
                    ? "bg-white rounded-md"
                    : ""
                }`}
              >
                {name}
              </Link>
            ))}
          </nav>
          <section className="my-2">{children}</section>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default UserRankingLayout;
