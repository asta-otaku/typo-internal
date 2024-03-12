import { useState } from "react";
import greenarrow from "../../assets/Frame 22.svg";
import redarrow from "../../assets/Frame 32.svg";
import { ProfileIcon } from "../../assets/icons";

function CrashReport() {
  const [type, setType] = useState("general");
  const [affectedType, setAffectedType] = useState("all");

  return (
    <div className="flex flex-col">
      <h4 className="text-lg md:text-xl text-black font-semibold">
        Crash Report
      </h4>
      <p className="text-black/50 text-xs mt-1">
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
      <select className="outline-none text-black/50 text-xs font-medium my-2 bg-white border border-solid border-[#DBDBDB] rounded-md p-3 w-[100px] self-end">
        <option>This week</option>
      </select>

      <div className="my-4">
        {
          {
            general: (
              <div className="flex justify-center md:justify-start gap-4 flex-wrap">
                <GeneralCard title="No of Occurence" value={400} />
                <GeneralCard title="No of Users Affected" value={400} />
                <GeneralCard title="Frequency" value={"1 / 78"} />
              </div>
            ),
            reason: (
              <div className="flex justify-center md:justify-start gap-4 flex-wrap">
                <ReasonCard
                  reason="Bad Connection"
                  color="#0DA200"
                  users="400"
                  percentage={5}
                  frequency={"1/30"}
                  imagepath={greenarrow}
                />
                <ReasonCard
                  reason="Bad Server"
                  color="#FB3E3E"
                  users="400"
                  percentage={5}
                  frequency={400}
                  imagepath={greenarrow}
                />
                <ReasonCard
                  reason="HEIC not Loaded"
                  color="#FF6B00"
                  users="400"
                  percentage={5}
                  frequency={400}
                  imagepath={greenarrow}
                />
                <ReasonCard
                  reason="Bad Server"
                  color="#6F00B3"
                  users="400"
                  percentage={5}
                  frequency={400}
                  imagepath={redarrow}
                />
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
                    <thead className="text-black/50 font-semibold">
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
        <h6 className="text-black/50 text-sm font-light">Crash</h6>
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
  imagepath,
}: {
  reason: string;
  color: string;
  users: string;
  percentage: number;
  frequency: string | number;
  imagepath: string;
}) {
  return (
    <div className="rounded-3xl bg-offwhite p-8 flex flex-col justify-between h-[250px] max-w-[320px] w-full">
      <div>
        <h6 className="text-black/50 text-sm font-light">Crash</h6>
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
            <img src={imagepath} alt="" />
            <p className={`text-xs font-medium text-[${color}]`}>
              {percentage}%
            </p>
          </div>
        </div>
        <p className="text-xs text-black/50 font-light">Affected Users</p>
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
            <img src={imagepath} alt="" />
            <p className={`text-xs font-medium text-[${color}]`}>
              {percentage}%
            </p>
          </div>
        </div>
        <p className="text-xs text-black/50 font-light">Frequency</p>
      </div>
    </div>
  );
}
