import DashboardNav from "../components/DashboardNav";
import DashboardLayout from "../layout/DashboardLayout";
import { WAITLISTDATA as tableData } from "../store/data";

function Waitlist() {
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
            {tableData.map((data: { [key: string]: string }, index) => (
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
    </DashboardLayout>
  );
}

export default Waitlist;
