import { useState } from "react";
import DashboardNav from "../components/DashboardNav";
import DashboardLayout from "../layout/DashboardLayout";
import { WAITLISTDATA as tableData } from "../store/data";
import ReactPaginate from "react-paginate";

function Waitlist() {
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
    <DashboardLayout>
      <DashboardNav
        title="Waitlist"
        description="Select the category to view the leaderboards.  "
      />
      <div className="overflow-x-auto mt-6 no-scrollbar">
        <table className="min-w-full text-left text-xs rounded-t-lg  bg-offwhite border-collapse">
          <thead className="text-fadedBlack font-medium">
            <tr className="capitalize">
              {Object.keys(tableData[0]).map((key) => (
                <th
                  key={key}
                  scope="col"
                  className="px-6 py-4 whitespace-nowrap"
                >
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {displayedData.map((data: { [key: string]: string }, index) => (
              <tr key={index} className="cursor-pointer hover:bg-primary/10">
                {Object.keys(data).map((key) => (
                  <td key={key} className={`px-6 py-4 whitespace-nowrap`}>
                    {data[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
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
    </DashboardLayout>
  );
}

export default Waitlist;
