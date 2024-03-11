import DashboardNav from "../components/DashboardNav";
import DashboardLayout from "../layout/DashboardLayout";
import Card from "../components//UserCard";
import { SmartPhoneIcon, ComputerIcon } from "../assets/icons";

function ActiveUsers() {
  return (
    <DashboardLayout>
      <DashboardNav
        title="Active Users"
        description="Select the category to view the leaderboards"
      />
      <div className="my-6 w-full py-3 flex gap-4">
        <select className="outline-none text-black/50 text-xs font-semibold bg-white border border-solid border-[#DBDBDB] rounded-md p-3 w-[110px]">
          <option defaultValue={"Weekly Report"} value={"weekly-report"}>
            User Type
          </option>
        </select>
        <select className="outline-none text-black/50 text-xs font-semibold bg-white border border-solid border-[#DBDBDB] rounded-md p-3 w-[110px]">
          <option defaultValue={"6jan-12jan"} value={"weekly-report"}>
            All Activity
          </option>
        </select>
        <select className="outline-none text-black/50 text-xs font-semibold bg-white border border-solid border-[#DBDBDB] rounded-md p-3 w-[110px]">
          <option defaultValue={"6jan-12jan"} value={"weekly-report"}>
            24 Hours
          </option>
        </select>
      </div>

      <div className="flex  items-stretch flex-wrap gap-4 md:gap-y-8">
        <Card
          name="Austin Wu"
          company="A&H"
          type="New User"
          tags={["Logged In", "Bubble Created"]}
          color="#FF6B00"
          activity={[
            "Bubble Created",
            "Bubble Created",
            "Logged In",
            "Bubble Created",
          ]}
          Icons={[SmartPhoneIcon, ComputerIcon, SmartPhoneIcon, ComputerIcon]}
        />
        <Card
          name="Holly Li"
          company="A&H"
          type="Comebacker"
          tags={["Logged In"]}
          color="#0DA200"
          activity={["Logged In", "Logged In", "Logged In"]}
          Icons={[SmartPhoneIcon, SmartPhoneIcon, ComputerIcon]}
        />
        <Card
          name="Campbell Baron"
          company="Mantra"
          type="Regular"
          tags={["Logged In", "Bubble Created", "Comments"]}
          color="#9B51E0"
          activity={["Bubble Created", "Bubble Created", "Logged In"]}
          Icons={[ComputerIcon, ComputerIcon, ComputerIcon]}
        />
        <Card
          name="Ethan Daly"
          company="Earshot"
          type="Dormant"
          tags={["No Activity"]}
          color="#EB5757"
          activity={[]}
          Icons={[]}
        />
      </div>
    </DashboardLayout>
  );
}

export default ActiveUsers;
