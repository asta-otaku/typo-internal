import axios from "axios";
import { useEffect, useState } from "react";
import UserRankingLayout from "../../layout/UserRankingLayout";
import bubble from "../../assets/BlueTicket.svg";

type UserRanking = {
  name: string;
  team: string;
  loginCount: number;
  screenTime: number;
  bubblesSent: number;
  commentsSent: number;
  messagesSent: number;
  typoScore: number;
  [key: string]: string | number;
};

function UserRanking() {
  const [filter, setFilter] = useState<string>("typoScore");
  const [userData, setUserData] = useState<UserRanking[]>([]);
  const [sortedData, setSortedData] = useState<UserRanking[]>([]);

  useEffect(() => {
    const fetchUserRankingData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5269/api/analytics/userRanking",
          {
            headers: {
              accept: "application/json",
              "x-user-id": "dc60dc1e-182b-4314-b2e7-f9eff78b7450",
            },
          }
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user ranking data:", error);
      }
    };

    fetchUserRankingData();
  }, []);

  useEffect(() => {
    const sortData = () => {
      const sorted = [...userData].sort((a, b) => {
        const valueA = a[filter];
        const valueB = b[filter];

        if (typeof valueA === "number" && typeof valueB === "number") {
          return valueB - valueA;
        }

        console.error("Attempting to sort non-numeric data");
        return 0;
      });
      setSortedData(sorted);
    };

    sortData();
  }, [userData, filter]);

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
            {sortedData.map((user, index) => (
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
                  <span className="text-sm font-medium text-black">
                    {user.name}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="font-medium text-black">{user.team}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="p-2 w-fit text-xs font-medium text-primary bg-primary/10 rounded-2xl">
                    {typeof user[filter] === "number" ? (
                      <span className="flex items-center gap-1">
                        {filter === "loginCount" && (
                          <img src={bubble} alt="bubble" className="w-4 h-4" />
                        )}
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
