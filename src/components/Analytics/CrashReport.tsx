import { useState } from "react";
import greenarrow from "../../assets/greenarrow.svg";
import redarrow from "../../assets/redarrow.svg";
import { ChevronDownIcon, ProfileIcon } from "../../assets/icons";

const generalData = [
  {
    title: "No of Occurence",
    value: 400,
  },
  {
    title: "No of Users Affected",
    value: 400,
  },
  {
    title: "Frequency",
    value: "1 / 78",
  },
];

const reasonData = [
  {
    reason: "Bad Connection",
    color: "#0DA200",
    users: "400",
    percentage: 5,
    frequency: "1/30",
  },
  {
    reason: "Bad Server",
    color: "#FB3E3E",
    users: "400",
    percentage: 5,
    frequency: 400,
  },
  {
    reason: "HEIC not Loaded",
    color: "#FF6B00",
    users: "400",
    percentage: 5,
    frequency: 400,
  },
  {
    reason: "Bad Server",
    color: "#6F00B3",
    users: "400",
    percentage: -5,
    frequency: 400,
  },
];

function CrashReport() {
  const [type, setType] = useState("general");
  const [affectedType, setAffectedType] = useState("all");

  return (
    <div className="flex flex-col">
      <h4 className="text-lg md:text-xl text-black font-semibold">
        Crash Report
      </h4>
      <p className="text-fadedBlack text-xs mt-1">
        Analysis of the usage of the application
      </p>

      <nav className="font-medium mt-3 text-sm flex items-center justify-evenly p-0.5 rounded-2xl bg-offwhite max-w-sm w-full">
        {[
          {
            name: "General",
            value: "general",
          },
          {
            name: "Reason",
            value: "reason",
          },
          {
            name: "Affected",
            value: "affected",
          },
        ].map(({ value, name }) => (
          <div
            key={value}
            onClick={() => setType(value)}
            className={`p-2 min-w-fit decoration-transparent text-sm text-center text-black w-1/2 cursor-pointer ${
              type === value ? "bg-white rounded-2xl" : ""
            }`}
          >
            {name}
          </div>
        ))}
      </nav>
      <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl px-1 py-2 w-[120px] self-end">
        <select className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
          <option>This Week</option>
        </select>
        <ChevronDownIcon width={12} />
      </div>

      <div className="my-4">
        {
          {
            general: (
              <div className="flex justify-center md:justify-start gap-4 flex-wrap">
                {generalData.map((data, index) => (
                  <GeneralCard key={index} {...data} />
                ))}
              </div>
            ),
            reason: (
              <div className="flex justify-center md:justify-start gap-4 flex-wrap">
                {reasonData.map((data, index) => (
                  <ReasonCard key={index} {...data} />
                ))}
              </div>
            ),
            affected: (
              <div>
                <div className="max-w-[280px] w-full flex items-center justify-between">
                  <div
                    onClick={() => setAffectedType("all")}
                    className={`px-3 py-2 font-medium text-xs rounded-2xl cursor-pointer ${
                      affectedType === "all"
                        ? "bg-primary text-white"
                        : "bg-offwhite text-black"
                    }`}
                  >
                    All
                  </div>
                  <div
                    onClick={() => setAffectedType("bad-server")}
                    className={`px-3 py-2 font-medium text-xs rounded-2xl cursor-pointer ${
                      affectedType === "bad-server"
                        ? "bg-primary text-white"
                        : "bg-offwhite text-black"
                    }`}
                  >
                    Bad Server
                  </div>
                  <div
                    onClick={() => setAffectedType("bad-connection")}
                    className={`px-3 py-2 font-medium text-xs rounded-2xl cursor-pointer ${
                      affectedType === "bad-connection"
                        ? "bg-primary text-white"
                        : "bg-offwhite text-black"
                    }`}
                  >
                    Bad Connection
                  </div>
                </div>
                <div className="mt-5   overflow-x-auto">
                  <table className="min-w-full text-left text-xs rounded-t-lg  bg-offwhite border-collapse">
                    <thead className="text-fadedBlack font-semibold">
                      <tr className="capitalize">
                        <th scope="col" className="px-6 py-4 whitespace-nowrap">
                          username
                        </th>
                        <th scope="col" className="px-6 py-4 whitespace-nowrap">
                          user ID
                        </th>
                        <th scope="col" className="px-6 py-4 whitespace-nowrap">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-4 whitespace-nowrap">
                          Time
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white font-medium">
                      {Array(10)
                        .fill(0)
                        .map((_, index) => (
                          <tr
                            key={index}
                            className="cursor-pointer hover:bg-primary/10"
                          >
                            {[
                              "Ronaldo",
                              "5636R36T36",
                              "24-10 -2023",
                              "10:24 PM",
                            ].map((value, index) => (
                              <td
                                key={index}
                                className={`px-6 py-4 whitespace-nowrap`}
                              >
                                {value === "Ronaldo" ? (
                                  <div className="flex items-center gap-3 text-bold text-black">
                                    <ProfileIcon width={12} />
                                    <span>{value}</span>
                                  </div>
                                ) : (
                                  value
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ),
          }[type]
        }
      </div>
    </div>
  );
}

export default CrashReport;

function GeneralCard({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className="p-6 rounded-3xl bg-offwhite flex items-center gap-8 max-w-xs w-full">
      <div>
        <h6 className="text-fadedBlack text-sm font-light">Crash</h6>
        <h5 className="text-primary font-semibold text-sm">{title}</h5>
      </div>
      <span className="text-black font-semibold text-2xl">
        {typeof value === "string" ? (
          <div className="flex items-baseline gap-1">
            {value}
            <span className="text-xs font-light">Login</span>
          </div>
        ) : (
          value
        )}
      </span>
    </div>
  );
}

function ReasonCard({
  reason,
  color,
  users,
  percentage,
  frequency,
}: {
  reason: string;
  color: string;
  users: string;
  percentage: number;
  frequency: string | number;
}) {
  return (
    <div className="rounded-3xl bg-offwhite p-8 flex flex-col justify-between h-[250px] max-w-[320px] w-full">
      <div>
        <h6 className="text-fadedBlack text-sm font-light">Crash</h6>
        <h5 style={{ color: color }} className="font-semibold text-sm">
          {reason}
        </h5>
      </div>
      <div>
        <div className="flex items-baseline gap-2">
          <span
            style={{ backgroundColor: color }}
            className={`w-1 h-4 rounded-3xl`}
          />
          <h2 className="text-black font-semibold text-2xl">{users}</h2>
          <div className="flex gap-1">
            <img src={percentage > 0 ? greenarrow : redarrow} alt="" />
            <p style={{ color }} className="text-xs font-medium]">
              {Math.abs(percentage)}%
            </p>
          </div>
        </div>
        <p className="text-xs text-fadedBlack font-light">Affected Users</p>
      </div>
      <div>
        <div className="flex items-baseline gap-2">
          <span
            style={{ backgroundColor: color }}
            className={`w-1 h-4 rounded-3xl`}
          />
          <h2 className="text-black font-semibold text-2xl">
            {typeof frequency === "string" ? (
              <div className="flex items-baseline gap-1">
                {frequency}
                <span className="text-xs font-light">Logins</span>
              </div>
            ) : (
              frequency
            )}
          </h2>
          <div className="flex gap-1">
            <img src={percentage > 0 ? greenarrow : redarrow} alt="" />
            <p style={{ color }} className="text-xs font-medium]">
              {Math.abs(percentage)}%
            </p>
          </div>
        </div>
        <p className="text-xs text-fadedBlack font-light">Frequency</p>
      </div>
    </div>
  );
}
