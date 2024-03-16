import { useEffect, useState } from "react";
import DailyReportsLayout from "../../layout/DailyReportsLayout";
import { ChevronDownIcon } from "../../assets/icons";
import {
  GROUPREPORTDATA as groupTableData,
  GROUPREPORTSUMMARYDATA as summaryTableData,
} from "../../store/data";
import TableBody from "../../components/DailyReport/TableBody";
import TableHeader from "../../components/DailyReport/TableHeader";

function GroupReports() {
  const [tableType, setTableType] = useState("");
  const [tableData, setTableData] = useState<any>(groupTableData);

  useEffect(() => {
    if (tableType === "summary") {
      setTableData(summaryTableData);
    } else {
      setTableData(groupTableData);
    }
  }, [tableType]);

  return (
    <DailyReportsLayout>
      <div className="my-6 w-full py-3 flex gap-4 text-xs border-solid border-x-0 border-y-[1px] border-[#DBDBDB]">
        <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl px-1 py-2 w-[150px]">
          <select
            onChange={(e) => setTableType(e.target.value)}
            className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent"
          >
            <option value={"weekly-report"}>Weekly Report</option>
            <option value={"summary"}>Summary</option>
          </select>
          <ChevronDownIcon width={12} />
        </div>

        <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl px-1 py-2 w-[180px]">
          <select className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
            <option value={"weekly-report"}>6 Jan - 12 Jan</option>
            <option value={"29dec-5jan"}>29th Dec - 5 Jan</option>
          </select>
          <ChevronDownIcon width={12} />
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <table className="min-w-full text-left text-xs rounded-t-lg mt-6  bg-offwhite border-collapse">
          <TableHeader tableData={tableData} tableType={tableType} />
          <TableBody tableData={tableData} />
        </table>
      </div>
    </DailyReportsLayout>
  );
}

export default GroupReports;
