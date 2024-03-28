import { useState, useEffect } from "react";
import axios from "axios";
import DashboardLayout from "../layout/DashboardLayout";
import chat from "../assets/Chatwhite.svg";
import send from "../assets/Send.svg";
import greenarrow from "../assets/greenarrow.svg";
import redarrow from "../assets/redarrow.svg";
import AreaChart from "../charts/AreaChart";
import BarChart from "../charts/BarChart";
import DoughnutChart from "../charts/DoughnutChart";
import LineChart from "../charts/LineChart";
import { ChevronDownIcon } from "../assets/icons";

function App() {
  const [totalMessages, setTotalMessages] = useState<string | null>(null);
  const [totalComments, setTotalComments] = useState<string | null>(null);
  const [totalArtifacts, setTotalArtifacts] = useState<string | null>(null);
  const [messagesPercentageChange, setMessagesPercentageChange] = useState<
    number | null
  >(null);
  const [bubblesPercentageChange, setBubblesPercentageChange] = useState<
    number | null
  >(null);
  const [commentsPercentageChange, setCommentsPercentageChange] = useState<
    number | null
  >(null);

  useEffect(() => {
    const fetchTotalMessages = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5269/api/analytics/messages/count",
          {
            headers: {
              accept: "*/*",
              "x-user-id": "dc60dc1e-182b-4314-b2e7-f9eff78b7450",
            },
          }
        );
        // console.log('Total Messages response:', JSON.stringify(response.data, null, 2));
        setTotalMessages(response.data.totalMessagesSent);
      } catch (error) {
        console.error("Error fetching total messages:", error);
      }
    };

    const fetchTotalComments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5269/api/analytics/comments/count",
          {
            headers: {
              accept: "*/*",
              "x-user-id": "048bff35-6fbd-4f69-9b55-55a0e291b37c",
            },
          }
        );
        setTotalComments(response.data.totalCommentsSent);
      } catch (error) {
        console.error("Error fetching total comments:", error);
      }
    };

    const fetchTotalArtifacts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5269/api/analytics/artifacts/count",
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
          "http://localhost:5269/api/analytics/messages/percentageChange",
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
          "http://localhost:5269/api/analytics/artifacts/percentageChange",
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
          "http://localhost:5269/api/analytics/comments/percentageChange",
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
      <div className="flex flex-col md:flex-row flex-wrap gap-6 items-stretch md:justify-between w-full my-5">
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
          imagepath={chat}
        />
        <Card
          title="Comments Sent"
          value={totalComments || "Loading..."}
          percentage={commentsPercentageChange || 0}
          imagepath={chat}
        />
      </div>
      <div className="rounded-3xl border border-solid border-[#D9D9D9] w-full flex flex-col lg:flex-row flex-wrap justify-between items-stretch">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 p-4 lg:w-[300px] grow border border-solid lg:border-y-0 border-x-0 lg:border-x-2 border-[#D9D9D9] first:border-0 last:border-0 overflow-clip"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-black text-sm">Log-in Counts</h3>
                <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl p-2 w-fit">
                  <select className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
                    <option>All Time</option>
                  </select>
                  <ChevronDownIcon width={12} />
                </div>
              </div>
              <div className="flex gap-1 items-baseline">
                <h3 className="text-black text-3xl font-bold">24</h3>
                <div className="flex gap-1">
                  <img src={greenarrow} alt="" />
                  <p className="text-[#0DA200] text-xs font-medium">5%</p>
                </div>
              </div>
              <p className="text-fadedBlack text-xs">Compared to last week</p>
              <div className="max-w-sm w-full lg:w-full">
                <AreaChart />
              </div>
            </div>
          ))}
      </div>

      <div className="my-5 flex flex-col lg:flex-row items-center md:items-stretch flex-wrap justify-between gap-4 w-full">
        <div className="rounded-3xl border border-solid border-[#D9D9D9] lg:max-w-[55%] w-full p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-black font-medium text-xs md:text-sm">
              Aggregate Level
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
                <select className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
                  <option>All Time</option>
                </select>
                <ChevronDownIcon width={12} />
              </div>
            </div>
          </div>
          <div>
            <BarChart />
          </div>
        </div>

        <div className="rounded-3xl border border-solid border-[#D9D9D9] lg:max-w-[40%] w-full p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-black font-medium text-sm">Aggregate Level</h3>
            <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl p-2 w-fit">
              <select className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
                <option>All Time</option>
              </select>
              <ChevronDownIcon width={12} />
            </div>
          </div>
          <span className="self-center max-w-[150px] md:max-w-xs">
            <DoughnutChart />
          </span>
          <div className="flex flex-col gap-2 md:-mt-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-3 rounded-sm bg-primary" />
              <p className="text-fadedBlack text-sm">Bubbles</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-3 rounded-sm bg-[#ABB0BC]" />
              <p className="text-fadedBlack text-sm">Comments</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-solid border-[#D9D9D9] w-full p-6 flex flex-col justify-between">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-black font-medium text-sm">Aggregate Level</h3>
          <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl p-2 w-fit">
            <select className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
              <option>All Time</option>
            </select>
            <ChevronDownIcon width={12} />
          </div>
        </div>
        <div>
          <LineChart />
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
          <h3 className="font-bold text-black text-xl md:text-3xl">{value}</h3>
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
