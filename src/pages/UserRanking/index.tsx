import { useState } from "react";
import UserRankingLayout from "../../layout/UserRankingLayout";
import bubble from "../../assets/BlueTicket.svg";
import { USERRANKINGDATA as data } from "../../store/data";

function UserRanking() {
  const [filter, setFilter] = useState("login");

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
                team
              </th>
              <th scope="col" className="px-6 py-4 whitespace-nowrap">
                score
              </th>
            </tr>
          </thead>
          <tbody className="bg-white font-medium">
            {data.map((user: any) => (
              <tr
                key={user.rank}
                className="border-gray-100 border-0 border-b border-solid cursor-pointer hover:bg-primary/10"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-primary bg-primary/10 px-2 py-1 text-center rounded-full">
                    {user.rank}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-black">
                    {user.name}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="font-medium text-black">{user.team}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="p-2 text-xs font-medium text-primary bg-primary/10 rounded-2xl">
                    {filter === "login" ? (
                      <span className="flex items-center gap-1">
                        <img src={bubble} alt="bubble" className="w-4 h-4" />
                        {user[filter]}
                      </span>
                    ) : (
                      <span>{user[filter]}</span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </UserRankingLayout>
  );
}

export default UserRanking;
