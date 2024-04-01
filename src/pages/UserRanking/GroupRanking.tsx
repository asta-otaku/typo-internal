import { useState } from "react";
import UserRankingLayout from "../../layout/UserRankingLayout";
import { GROUPUSERRANKINGDATA as data } from "../../store/data";
import ReactPaginate from "react-paginate";

function GroupRanking() {
  const [filter, setFilter] = useState("login");

  //pagination logic
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = ({ selected }: { selected: any }) => {
    setCurrentPage(selected);
  };
  const displayedData = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <UserRankingLayout setFilter={setFilter}>
      <div className="flex flex-col gap-2 overflow-x-auto">
        <table className="min-w-full text-left text-xs rounded-t-lg  bg-offwhite border-collapse">
          <thead className="text-fadedBlack font-semibold">
            <tr className="capitalize">
              <th scope="col" className="px-6 py-4 whitespace-nowrap">
                rank
              </th>
              <th scope="col" className="px-6 py-4 whitespace-nowrap">
                name
              </th>
              <th scope="col" className="px-6 py-4 whitespace-nowrap">
                score
              </th>
            </tr>
          </thead>
          <tbody className="bg-white font-medium">
            {displayedData.map((user: any, index) => (
              <tr
                key={index + 1}
                className="border-gray-100 border-0 border-b border-solid cursor-pointer hover:bg-primary/10"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-primary bg-primary/10 px-2 py-1 text-center rounded-full">
                    {index + 1}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex">
                    <span className="text-sm font-medium text-black w-[250px] overflow-hidden truncate">
                      {user.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="p-2 w-fit text-xs font-medium text-primary bg-primary/10 rounded-2xl">
                    <span>{user[filter]}</span>
                  </div>
                </td>
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
    </UserRankingLayout>
  );
}

export default GroupRanking;
