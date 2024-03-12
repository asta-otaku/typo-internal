import { useState } from "react";
import UserRankingLayout from "../../layout/UserRankingLayout";
import bubble from "../../assets/BlueTicket.svg";
import { GROUPUSERRANKINGDATA as data } from "../../store/data";

function GroupRanking() {
  const [filter, setFilter] = useState("login");

  return (
    <UserRankingLayout setFilter={setFilter}>
      <div className="flex flex-col gap-2">
        {data.map((user: any) => (
          <div
            key={user.id}
            className="flex items-center justify-between border-gray-100 border-0 border-b border-solid py-2"
          >
            <div className="flex items-center gap-8">
              <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 text-center rounded-full">
                {user.id}
              </span>
              <span className="text-sm font-medium text-black">
                {user.name}
              </span>
            </div>
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
          </div>
        ))}
      </div>
    </UserRankingLayout>
  );
}

export default GroupRanking;
