import { useEffect, useState } from "react";
import DailyReportsLayout from "../../layout/DailyReportsLayout";
import TableModal from "../../components/TableModal";
import { DAILYREPORTDATA as weeklyTableData } from "../../store/data";
import { DAILYREPORTSUMMARYDATA as summaryTableData } from "../../store/data";
import useStore from "../../store";
import { ProfileIcon } from "../../assets/icons";

function DailyReports() {
  const [tableType, setTableType] = useState("");
  const [tableData, setTableData] = useState<any>(weeklyTableData);
  const setModal = useStore((state: any) => state.setModal);

  useEffect(() => {
    if (tableType === "summary") {
      setTableData(summaryTableData);
    } else {
      setTableData(weeklyTableData);
    }
  }, [tableType]);

  const getColor = (value: string) => {
    if (tableType === "summary") return "text-black/50";
    else {
      if (value === "No Activity") return "text-[#FF6B00]";
      else if (value === "Logged In") return "text-[#0019FF]";
      else if (value === "Created Bubble") return "text-[#178A4C]";
      else if (value === "Created Comment") return "text-[#6F00B3]";
      else if (value === "5636R36T36") return "text-black/50";
      else return "text-black";
    }
  };

  return (
    <DailyReportsLayout>
      <div className="my-6 w-full py-3 flex gap-4 text-xs border-solid border-x-0 border-y-[1px] border-[#DBDBDB]">
        <select
          onChange={(e) => setTableType(e.target.value)}
          className="outline-none text-black/50 font-semibold bg-white border border-solid border-[#DBDBDB] rounded-2xl p-3 w-[150px]"
        >
          <option value={"weekly-report"}>Weekly Report</option>
          <option value={"summary"}>Summary</option>
        </select>
        <select className="outline-none text-black/50 font-semibold bg-white border border-solid border-[#DBDBDB] rounded-2xl p-3 w-[150px]">
          <option value={"weekly-report"}>6 Jan - 12 Jan</option>
          <option value={"29dec-5jan"}>29th Dec - 5 Jan</option>
        </select>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <table className="min-w-full text-left text-xs rounded-t-lg  bg-offwhite border-collapse">
          <thead className="text-black/50 font-semibold">
            <tr className="capitalize">
              {Object.keys(tableData[0]).map((key) => (
                <th
                  key={key}
                  scope="col"
                  className="px-6 py-4 whitespace-nowrap"
                >
                  {key.replace("_", " ")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white font-medium">
            {tableData.map((data: { [key: string]: string }, index: number) => (
              <tr
                key={index}
                className="cursor-pointer hover:bg-primary/10"
                onClick={() => setModal(<TableModal data={data} />)}
              >
                {Object.entries(data).map(([key, value]) => (
                  <td
                    key={key}
                    className={`px-6 py-4 whitespace-nowrap ${getColor(value)}`}
                  >
                    {key === "username" ? (
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
    </DailyReportsLayout>
  );
}

export default DailyReports;
