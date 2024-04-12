import { useState, useEffect } from "react";
import axios from "axios";
import DashboardLayout from "../layout/DashboardLayout";
import bulb from "../assets/bulb.svg";
import chat from "../assets/Chatwhite.svg";
import send from "../assets/Send.svg";
import greenarrow from "../assets/greenarrow.svg";
import redarrow from "../assets/redarrow.svg";
import BarChart from "../charts/BarChart";
import Chart from "../components/Chart";
import DoughnutChart from "../charts/DoughnutChart";
import LineChart from "../charts/LineChart";
import { ChevronDownIcon, CalendarIcon } from "../assets/icons";
import { apiUrl } from "../config";
import getWeekRanges from "../helpers/getWeekRanges";

function App() {
  const [totalMessages, setTotalMessages] = useState<string | null>(null);
  const [totalComments, setTotalComments] = useState<string | null>(null);
  const [totalArtifacts, setTotalArtifacts] = useState<string | null>(null);
  const [analyticsToggle, setAnalyticsToggle] = useState(1);
  const [messagesPercentageChange, setMessagesPercentageChange] = useState<
    number | null
  >(null);
  const [bubblesPercentageChange, setBubblesPercentageChange] = useState<
    number | null
  >(null);
  const [commentsPercentageChange, setCommentsPercentageChange] = useState<
    number | null
  >(null);
  const [bubblePercentage, setBubblePercentage] = useState("0");
  const [commentPercentage, setCommentPercentage] = useState("0");

  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString()
  );

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  const weekRanges = getWeekRanges();

  useEffect(() => {
    const fetchTotalMessages = async () => {
      try {
        const response = await axios.get(`${apiUrl}/analytics/messages/count`, {
          headers: {
            accept: "*/*",
            "x-user-id": "dc60dc1e-182b-4314-b2e7-f9eff78b7450",
          },
        });
        setTotalMessages(response.data.totalMessagesSent);
      } catch (error) {
        console.error("Error fetching total messages:", error);
      }
    };

    const fetchTotalComments = async () => {
      try {
        const response = await axios.get(`${apiUrl}/analytics/comments/count`, {
          headers: {
            accept: "*/*",
            "x-user-id": "861f4c04-e718-43f4-9c4f-656910d71cd9",
          },
        });
        setTotalComments(response.data.totalCommentsCount);
      } catch (error) {
        console.error("Error fetching total comments:", error);
      }
    };

    const fetchTotalArtifacts = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/analytics/artifacts/count`,
          {
            headers: {
              accept: "*/*",
              "x-user-id": "861f4c04-e718-43f4-9c4f-656910d71cd9",
            },
          }
        );
        setTotalArtifacts(response.data.totalArtifactsCount);
      } catch (error) {
        console.error("Error fetching total artifacts:", error);
      }
    };

    const fetchMessagesPercentageChange = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/analytics/messages/percentageChange`,
          {
            headers: {
              accept: "*/*",
              "x-user-id": "861f4c04-e718-43f4-9c4f-656910d71cd9",
            },
          }
        );
        setMessagesPercentageChange(
          parseFloat(response.data.percentageChange.toFixed(2))
        );
      } catch (error) {
        console.error("Error fetching messages percentage change:", error);
      }
    };

    const fetchArtifactsPercentageChange = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/analytics/artifacts/percentageChange`,
          {
            headers: {
              accept: "*/*",
              "x-user-id": "861f4c04-e718-43f4-9c4f-656910d71cd9",
            },
          }
        );
        setBubblesPercentageChange(
          parseFloat(response.data.percentageChange.toFixed(2))
        );
      } catch (error) {
        console.error("Error fetching artifacts percentage change:", error);
      }
    };

    const fetchCommentsPercentageChange = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/analytics/comments/percentageChange`,
          {
            headers: {
              accept: "*/*",
              "x-user-id": "861f4c04-e718-43f4-9c4f-656910d71cd9",
            },
          }
        );
        setCommentsPercentageChange(
          parseFloat(response.data.percentageChange.toFixed(2))
        );
      } catch (error) {
        console.error("Error fetching comments percentage change:", error);
      }
    };

    fetchMessagesPercentageChange();
    fetchArtifactsPercentageChange();
    fetchCommentsPercentageChange();
    fetchTotalMessages();
    fetchTotalComments();
    fetchTotalArtifacts();
  }, []);

  return (
    <DashboardLayout>
      <p className="text-xs text-fadedBlack">Welcome Sahil</p>
      <h3 className="font-bold text-black text-xl md:text-3xl my-1">
        Dashboard
      </h3>

      <div className="my-5 p-4 rounded-3xl border border-solid">
        <div className="mb-3 flex items-center gap-4">
          <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] shadow-sm shadow-[#1212121A] rounded-lg p-2 w-fit">
            <select className="outline-none text-[#6D6D6D] text-xs font-medium appearance-none border-none bg-transparent">
              <option>Monthly</option>
            </select>
            <ChevronDownIcon width={12} />
          </div>
          <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] shadow-sm shadow-[#1212121A] rounded-lg p-2 w-fit">
            <CalendarIcon width={12} />
            <select className="outline-none text-[#6D6D6D] text-xs font-medium appearance-none border-none bg-transparent">
              {weekRanges.reverse().map((week) => (
                <option key={week} value={week}>
                  {week}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          <Card
            title="Messages Sent"
            value={totalMessages || "Loading..."}
            percentage={messagesPercentageChange || 0}
            imagepath={send}
          />
          <Card
            title="Bubbles Sent"
            value={totalArtifacts || "Loading..."}
            percentage={bubblesPercentageChange || 0}
            imagepath={bulb}
          />
          <Card
            title="Comments Sent"
            value={totalComments || "Loading..."}
            percentage={commentsPercentageChange || 0}
            imagepath={chat}
          />
        </div>
      </div>

      <div className="rounded-3xl border border-solid border-[#D9D9D9] grid grid-cols-1 lg:grid-cols-4 w-full">
        <Chart
          title="Daily Active Users"
          value="24"
          percentage={5}
          data={[65, 59, 80, 81]}
        />
        <Chart
          title="Weekly Active Users"
          value="24"
          percentage={-5}
          data={[65, 59, 80, 81]}
        />
        <Chart
          title="Monthly Active Users"
          value="24"
          percentage={5}
          data={[65, 59, 80, 81]}
        />
        <Chart
          title="Retained Users"
          value="24"
          percentage={5}
          data={[65, 59, 80, 81]}
        />
      </div>

      <div className="my-5 flex flex-col lg:flex-row items-center md:items-stretch flex-wrap justify-between gap-4 w-full">
        <div className="rounded-3xl border border-solid border-[#D9D9D9] lg:max-w-[55%] w-full p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-black font-medium text-xs md:text-sm">
              Monthly Breakdown
            </h3>
            <div className="flex items-center gap-1 md:gap-3">
              <div className="flex items-center gap-0.5 md:gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <p className="text-fadedBlack text-xs">Bubbles</p>
              </div>
              <div className="flex items-center gap-0.5 md:gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ABB0BC]" />
                <p className="text-fadedBlack text-xs">Comments</p>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl p-2 w-fit">
                <select
                  className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent"
                  onChange={handleYearChange}
                  value={selectedYear}
                >
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                </select>
                <ChevronDownIcon width={12} />
              </div>
            </div>
          </div>
          <div>
            <BarChart year={selectedYear} />
          </div>
        </div>

        <div className="rounded-3xl border border-solid border-[#D9D9D9] lg:max-w-[40%] w-full p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-black font-medium text-sm">
              Message Split by Type
            </h3>
            <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl p-2 w-fit">
              <select className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
                <option>All Time</option>
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
          <span className="self-center max-w-[150px] md:max-w-xs">
            <DoughnutChart
              setBubblePercentage={setBubblePercentage}
              setCommentPercentage={setCommentPercentage}
            />
          </span>
          <div className="flex flex-col gap-2 md:-mt-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-3 rounded-sm bg-primary" />
              <p className="text-fadedBlack text-sm">
                Bubbles {bubblePercentage}%
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-3 rounded-sm bg-[#ABB0BC]" />
              <p className="text-fadedBlack text-sm">
                Comments {commentPercentage}%
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-solid border-[#D9D9D9] w-full p-6 flex flex-col justify-between">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-black font-semibold text-sm">Analytics</h3>
          <div className="flex items-center justify-between gap-1 bg-white border border-solid border-[#DBDBDB] rounded-2xl p-2 w-fit">
            <select className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
              <option>All Time</option>
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
        <div className="my-2 bg-[#F5F5F5] p-0.5 rounded-lg flex justify-between items-center max-w-xs w-full">
          <button
            onClick={() => setAnalyticsToggle(1)}
            className={`py-1.5 px-5 text-[10px] ${
              analyticsToggle === 1
                ? "text-black font-medium bg-white"
                : "text-fadedBlack"
            } rounded-lg`}
          >
            Messages
          </button>
          <button
            onClick={() => setAnalyticsToggle(2)}
            className={`py-1.5 px-5 text-[10px] ${
              analyticsToggle === 2
                ? "text-black font-medium bg-white"
                : "text-fadedBlack"
            } rounded-lg`}
          >
            Comment
          </button>
          <button
            onClick={() => setAnalyticsToggle(3)}
            className={`py-1.5 px-5 text-[10px] ${
              analyticsToggle === 3
                ? "text-black font-medium bg-white"
                : "text-fadedBlack"
            } rounded-lg`}
          >
            Bubble
          </button>
          <button
            onClick={() => setAnalyticsToggle(4)}
            className={`py-1.5 px-5 text-[10px] ${
              analyticsToggle === 4
                ? "text-black font-medium bg-white"
                : "text-fadedBlack"
            } rounded-lg`}
          >
            Users
          </button>
        </div>
        <div>
          {
            {
              1: (
                <LineChart data={[1000, 2100, 3800, 3600, 4200, 4100, 4500]} />
              ),
              2: <LineChart data={[100, 210, 380, 360, 420, 410, 400]} />,
              3: (
                <LineChart data={[1000, 2100, 3800, 3600, 4200, 4100, 4500]} />
              ),
              4: <LineChart data={[100, 210, 380, 360, 420, 410, 400]} />,
            }[analyticsToggle]
          }
        </div>
      </div>
    </DashboardLayout>
  );
}

export default App;

function Card({
  title,
  value,
  percentage,
  imagepath,
}: {
  title: string;
  value: string;
  percentage: number;
  imagepath: string;
}) {
  return (
    <div className="p-6 rounded-3xl border border-solid border-[#D9D9D9] flex justify-between items-center gap-8 min-w-xs grow">
      <div className="flex items-center gap-4">
        <span className="p-1.5 bg-primary rounded-lg flex justify-center items-center">
          <img src={imagepath} alt="" />
        </span>
        <div>
          <p className="text-fadedBlack text-xs">{title}</p>
          <h3 className="font-bold text-black text-xl md:text-2xl">{value}</h3>
        </div>
      </div>
      <div className="flex gap-1">
        <img src={percentage > 0 ? greenarrow : redarrow} alt="" />
        <p
          className={`text-xs font-medium ${
            percentage > 0 ? "text-[#0DA200]" : "text-[#A20000]"
          }`}
        >
          {Math.abs(percentage)}%
        </p>
      </div>
    </div>
  );
}
