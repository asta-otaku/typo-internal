import DashboardNav from "../components/DashboardNav";
import DashboardLayout from "../layout/DashboardLayout";
import Card from "../components//UserCard";
import { ChevronDownIcon } from "../assets/icons";

function ActiveUsers() {
  return (
    <DashboardLayout>
      <DashboardNav
        title="Active Users"
        description="Select the category to view the leaderboards"
      />
      <div className="my-6 w-full py-3 flex gap-4">
        <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl px-1 py-2 w-[120px]">
          <select className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
            <option>User Type</option>
          </select>
          <ChevronDownIcon width={12} />
        </div>
        <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl px-1 py-2 w-[120px]">
          <select className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
            <option>All Activity</option>
          </select>
          <ChevronDownIcon width={12} />
        </div>
        <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl px-1 py-2 w-[120px]">
          <select className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
            <option>24 Hours</option>
          </select>
          <ChevronDownIcon width={12} />
        </div>
      </div>

      <div className="flex  items-stretch flex-wrap gap-4 md:gap-y-8">
        <Card
          name="Austin Wu"
          company="A&H"
          type="New User"
          tags={["Logged In", "Bubble Created"]}
          color="#FF6B00"
          activity={[
            ["Logged In", "Comments", "Logged In"],
            ["Bubble Created", "Logged In", "Comments"],
          ]}
          deviceType={[
            ["computer", "phone", "computer"],
            ["phone", "computer", "phone"],
          ]}
        />
        <Card
          name="Holly Li"
          company="A&H"
          type="Comebacker"
          tags={["Logged In"]}
          color="#0DA200"
          activity={[["Logged In", "Logged In", "Logged In"]]}
          deviceType={[["computer", "phone", "phone"]]}
        />
        <Card
          name="Campbell Baron"
          company="Mantra"
          type="Regular"
          tags={["Logged In", "Bubble Created", "Comments"]}
          color="#9B51E0"
          activity={[
            ["Logged In", "Logged In", "Logged In"],
            ["Bubble Created", "Logged In", "Logged In"],
            ["Comments", "Logged In", "Logged In"],
          ]}
          deviceType={[
            ["computer", "phone", "phone"],
            ["computer", "phone", "phone"],
            ["computer", "phone", "phone"],
          ]}
        />
        <Card
          name="Ethan Daly"
          company="Earshot"
          type="Dormant"
          tags={["No Activity"]}
          color="#EB5757"
          activity={[[]]}
          deviceType={[[]]}
        />
      </div>
    </DashboardLayout>
  );
}

export default ActiveUsers;
