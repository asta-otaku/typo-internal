import DashboardLayout from "../layout/DashboardLayout";
import DashboardNav from "../components/DashboardNav";
import useStore from "../store";
import TableModal from "../components/DailyReport/TableModal";

const users = {
  retained: ["Sahil Handa", "Bardi Moradi", "Lukas Dong"],
  almostRetained: ["Sahil Handa", "Bardi Moradi", "Lukas Dong"],
  failed: ["Sahil Handa", "Bardi Moradi", "Lukas Dong"],
  churned: ["Sahil Handa", "Bardi Moradi", "Lukas Dong"],
};

function Retention() {
  const { setModal } = useStore();

  return (
    <DashboardLayout>
      <div>
        <DashboardNav title="D5/D7" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
          <ul className="flex flex-col gap-5 grow">
            <li className="text-lg font-medium w-full text-white bg-[#0DA200] rounded-xl py-2 pl-5">
              Retained
            </li>
            {users.retained.map((user) => (
              <li
                onClick={() => setModal(<TableModal user={user} />)}
                key={user}
                className="ml-5 cursor-pointer"
              >
                {user}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-5 grow">
            <li className="text-lg font-medium w-full text-white bg-[#F0B531] rounded-xl py-2 pl-5">
              Almost Retained
            </li>
            {users.almostRetained.map((user) => (
              <li
                onClick={() => setModal(<TableModal user={user} />)}
                key={user}
                className="ml-5 cursor-pointer"
              >
                {user}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-5 grow">
            <li className="text-lg font-medium w-full text-white bg-[#FF0000] rounded-xl py-2 pl-5">
              Failed to Retain
            </li>
            {users.retained.map((user) => (
              <li
                onClick={() => setModal(<TableModal user={user} />)}
                key={user}
                className="ml-5 cursor-pointer"
              >
                {user}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-5 grow">
            <li className="text-lg font-medium w-full text-white bg-[#696969] rounded-xl py-2 pl-5">
              Churned
            </li>
            {users.retained.map((user) => (
              <li
                onClick={() => setModal(<TableModal user={user} />)}
                key={user}
                className="ml-5 cursor-pointer"
              >
                {user}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Retention;
