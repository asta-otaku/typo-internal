import DashboardLayout from "../layout/DashboardLayout";
import DashboardNav from "../components/DashboardNav";

const day5 = ["Sahil Handa", "Bardi Moradi", "Lukas Dong"];
const day6 = ["Sahil Handa"];

function Retention() {
  return (
    <DashboardLayout>
      <div>
        <DashboardNav title="D5/D7" />
        <div className="flex flex-wrap gap-8 justify-center md:justify-between mt-6 w-full">
          <ul className="flex flex-col gap-3 font-semibold max-w-[400px] w-full">
            <li className="bg-primary text-white text-base w-full p-3 pr-5 rounded-md">
              {"Day 5"} Log
            </li>
            {day5.map((name, index) => (
              <li
                key={index}
                className="bg-offwhite text-black text-sm w-full p-3 pl-5 rounded-md"
              >
                {name}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-3 font-semibold max-w-[400px] w-full">
            <li className="bg-[#0DA200] text-white text-base w-full p-3 pr-5 rounded-md">
              {"Day 7"} Log
            </li>
            {day6.map((name, index) => (
              <li
                key={index}
                className="bg-offwhite text-black text-sm w-full p-3 pl-5 rounded-md"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Retention;
