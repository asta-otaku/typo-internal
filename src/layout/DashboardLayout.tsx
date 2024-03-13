import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  CloseIcon,
  ChartIcon,
  Cog6ToothIcon,
  DiscountIcon,
  DocumentTextIcon,
  Hamburger,
  RetentionJourneyIcon,
  Squares2X2Icon,
  WaitListIcon,
} from "../assets/icons";
import logo from "../assets/logo.svg";
import ModalLayout from "./ModalLayout";
import useStore from "../store";

function DashboardLayout({ children }: any) {
  const currentModal = useStore((state: any) => state.currentModal);
  const location = useLocation();
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);

  return (
    <div className="bg-offwhite">
      {/* General Modal */}
      {currentModal && <ModalLayout />}
      <div
        className={`md:flex grow gap-6 p-2 min-h-screen md:p-6 max-w-[1800px] mx-auto ${
          currentModal && "blur-sm"
        }`}
      >
        {/* Nav section */}
        <nav className="w-full md:w-[200px] lg:w-[280px] md:fixed z-[100] flex shrink-0 justify-between">
          <div className="w-full flex flex-col">
            <Link to="/">
              <img src={logo} alt="logo" className="w-[12rem] md:w-full py-2" />
            </Link>
            <ul
              className={`${
                nav ? "block" : "hidden"
              } md:block font-medium my-0 lg:my-9 w-full`}
            >
              <li>
                <Link
                  to="/"
                  className={`flex gap-3 items-center w-full py-3 pl-2 my-1 hover:bg-blue-400 rounded-md no-underline ${
                    location.pathname === "/"
                      ? "bg-primary text-white"
                      : "text-fadedBlack"
                  }`}
                >
                  <Squares2X2Icon width={22} />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/retention"
                  className={`flex gap-3 items-center w-full py-3 pl-2 my-1 hover:bg-blue-400 rounded-md no-underline ${
                    location.pathname === "/retention"
                      ? "bg-primary text-white"
                      : "text-fadedBlack"
                  }`}
                >
                  <ChartIcon width={22} />
                  <span>Retention</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/daily-reports"
                  className={`flex gap-3 items-center w-full py-3 pl-2 my-1 hover:bg-blue-400 rounded-md no-underline ${
                    location.pathname.startsWith("/daily-reports")
                      ? "bg-primary text-white"
                      : "text-fadedBlack"
                  }`}
                >
                  <DocumentTextIcon width={22} />
                  <span>Daily Reports</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/analytics"
                  className={`flex gap-3 items-center w-full py-3 pl-2 my-1 hover:bg-blue-400 rounded-md no-underline ${
                    location.pathname === "/analytics"
                      ? "bg-primary text-white"
                      : "text-fadedBlack"
                  }`}
                >
                  <ChartIcon width={22} />
                  <span>Analytics</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/user-ranking"
                  className={`flex gap-3 items-center w-full py-3 pl-2 my-1 hover:bg-blue-400 rounded-md no-underline ${
                    location.pathname.startsWith("/user-ranking")
                      ? "bg-primary text-white"
                      : "text-fadedBlack"
                  }`}
                >
                  <DiscountIcon width={22} />
                  <span>User Ranking</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/active-users"
                  className={`flex gap-3 items-center w-full py-3 pl-2 my-1 hover:bg-blue-400 rounded-md no-underline ${
                    location.pathname === "/active-users"
                      ? "bg-primary text-white"
                      : "text-fadedBlack"
                  }`}
                >
                  <Cog6ToothIcon width={22} />
                  <span>Active Users</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/waitlist"
                  className={`flex gap-3 items-center w-full py-3 pl-2 my-1 hover:bg-blue-400 rounded-md no-underline ${
                    location.pathname === "/waitlist"
                      ? "bg-primary text-white"
                      : "text-fadedBlack"
                  }`}
                >
                  <WaitListIcon width={22} />
                  <span>Waitlist</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/retention-journey"
                  className={`flex gap-3 items-center w-full py-3 pl-2 my-1 hover:bg-blue-400 rounded-md no-underline ${
                    location.pathname === "/retention-journey"
                      ? "bg-primary text-white"
                      : "text-fadedBlack"
                  }`}
                >
                  <RetentionJourneyIcon width={22} />
                  <span>Retention Journey</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className={`md:hidden flex gap-3 items-center w-full py-3 pl-2 hover:bg-blue-400 rounded-md no-underline ${
                    location.pathname === "/settings"
                      ? "bg-primary text-white"
                      : "text-fadedBlack"
                  }`}
                >
                  <Cog6ToothIcon width={22} />
                  <span>Settings</span>
                </Link>
              </li>
            </ul>
            <div className="hidden md:flex items-center gap-3 text-fadedBlack font-medium cursor-pointer hover:bg-blue-400 rounded-md w-full pl-2 py-3">
              <Cog6ToothIcon width={22} />
              <span>Settings</span>
            </div>
          </div>

          <span
            className="md:hidden pt-4 p-2 cursor-pointer"
            onClick={toggleNav}
          >
            {nav ? <CloseIcon width={22} /> : <Hamburger width={22} />}
          </span>
        </nav>

        <main className="bg-white md:ml-[232px] lg:ml-[312px] md:max-w-[calc(100vw-312px)] min-h-screen md:min-h-[100vh-48px] border shadow-sm shadow-gray-300 p-4 md:p-6 rounded-xl grow">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
