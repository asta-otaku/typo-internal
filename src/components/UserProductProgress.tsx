import DashboardNav from "./DashboardNav";
import { CheckMarkIcon } from "../assets/icons";

function UserProductProgress({ data }: { data: any }) {
  return (
    <div>
      <DashboardNav
        title="User Product's Progress"
        description="Select the category to view leaderboards."
      />
      <div className="my-5 bg-offwhite p-3 md:p-5 md:pb-24 rounded-xl">
        <div className="flex flex-wrap justify-between max-w-lg w-full gap-2">
          <div>
            <h4 className="text-fadedBlack text-xs font-semibold">User Name</h4>
            <h4 className="text-xs text-fadedBlack font-normal mt-1">
              {data.name}
            </h4>
          </div>
          <div>
            <h4 className="text-fadedBlack text-xs font-semibold">User ID</h4>
            <h4 className="text-xs text-fadedBlack font-normal mt-1">
              {data.id}
            </h4>
          </div>
          <div>
            <h4 className="text-fadedBlack text-xs font-semibold">
              Time between last action and first action
            </h4>
            <h4 className="text-xs text-fadedBlack font-normal mt-1">
              {data.daysSinceFirstActivity}
            </h4>
          </div>
          <div>
            <h4 className="text-fadedBlack text-xs font-semibold">Behaviour</h4>
            <h4 className="text-xs text-red-400 font-normal p-0.5 rounded-xl text-center border border-solid border-red-400 mt-1">
              Risky
            </h4>
          </div>
        </div>

        <h3 className="font-semibold text-black text-lg md:text-2xl my-3">
          Progress Bar
        </h3>
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex min-w-full gap-2">
            {Array(data.actionCompleted)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="w-5 md:w-28 h-2 md:h-5 rounded-lg bg-[#0DA200] " />
                  <div className="flex flex-col gap-1 items-center">
                    <CheckMarkIcon color="#0DA200" className="w-3 md:w-full" />
                    <p className="text-[10px] font-light hidden md:block text-[#626262]">
                      Tuesday 24, 2024
                    </p>
                    <p className="text-xs font-medium hidden md:block text-[#0DA200]">
                      Created Bubble
                    </p>
                  </div>
                </div>
              ))}
            {Array(10 - data.actionCompleted)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="w-5 md:w-28 h-2 md:h-5 rounded-lg bg-[#D9D9D9] " />
                  <div className="flex flex-col gap-1 items-center">
                    <CheckMarkIcon
                      color="#62626280"
                      className="w-3 md:w-full"
                    />
                    <p className="text-xs font-light hidden md:block text-[#626262]">
                      Created Bubble
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProductProgress;
