import { useEffect, useState } from "react";
import DailyReportsLayout from "../../layout/DailyReportsLayout";
import { ChevronDownIcon } from "../../assets/icons";
import {
  GROUPREPORTDATA as groupTableData,
  GROUPREPORTSUMMARYDATA as summaryTableData,
} from "../../store/data";
import TableBody from "../../components/DailyReport/TableBody";
import TableHeader from "../../components/DailyReport/TableHeader";
import getWeekRanges from "../../helpers/getWeekRanges";
import ReactPaginate from "react-paginate";

function GroupReports() {
  const stored = localStorage.getItem("tableType");
  const [tableType, setTableType] = useState(stored || "");
  const [tableData, setTableData] = useState<any>(groupTableData);
  const weekRanges = getWeekRanges();

  useEffect(() => {
    if (tableType === "summary") {
      setTableData(summaryTableData);
    } else {
      setTableData(groupTableData);
    }
    localStorage.setItem("tableType", tableType);
  }, [tableType]);

  //pagination logic
  const itemsPerPage = 24;
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(tableData.length / itemsPerPage);

  const handlePageChange = ({ selected }: { selected: any }) => {
    setCurrentPage(selected);
  };
  const displayedData = tableData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <DailyReportsLayout>
      <div className="my-6 w-full py-3 flex gap-4 text-xs border-solid border-x-0 border-y-[1px] border-[#DBDBDB]">
        <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl p-2 w-fit">
          <select
            defaultValue={tableType}
            onChange={(e) => setTableType(e.target.value)}
            className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent"
          >
            <option value={"weekly-report"}>Weekly Report</option>
            <option value={"summary"}>Summary</option>
          </select>
          <ChevronDownIcon width={12} />
        </div>

        <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl p-2 w-fit">
          <select className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
            {weekRanges.reverse().map((week) => (
              <option key={week} value={week}>
                {week}
              </option>
            ))}
            <option value={"archive"}>Archive</option>
          </select>
          <ChevronDownIcon width={12} />
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <table className="min-w-full text-left text-xs rounded-t-lg mt-6  bg-offwhite border-collapse">
          <TableHeader tableData={displayedData} tableType={tableType} />
          <TableBody tableData={displayedData} />
        </table>
      </div>

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
    </DailyReportsLayout>
  );
}

export default GroupReports;
