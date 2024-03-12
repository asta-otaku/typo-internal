import DailyReportsLayout from "../../layout/DailyReportsLayout";
import TableModal from "../../components/TableModal";
import useStore from "../../store";
import { ProfileIcon } from "../../assets/icons";
import { GROUPREPORTDATA as tableData } from "../../store/data";

function GroupReports() {
  const setModal = useStore((state: any) => state.setModal);

  const getColor = (value: string) => {
    if (value === "No Activity") return "text-[#FF6B00]";
    else if (value === "Logged In") return "text-[#0019FF]";
    else if (value === "Created Bubble") return "text-[#178A4C]";
    else if (value === "Created Comment") return "text-[#6F00B3]";
    else if (value === "5636R36T36") return "text-black/50";
    else return "text-black";
  };

  return (
    <DailyReportsLayout>
      <div className="overflow-x-auto no-scrollbar">
        <table className="min-w-full text-left text-xs rounded-t-lg mt-6  bg-offwhite border-collapse">
          <thead className="text-black/50 font-semibold">
            <tr className="capitalize">
              {Object.keys(tableData[0]).map((key) => (
                <th
                  key={key}
                  scope="col"
                  className="px-6 py-4 whitespace-nowrap"
                >
                  {key.replace("_", " ")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white font-medium">
            {tableData.map((data: { [key: string]: string }, index: number) => (
              <tr
                key={index}
                className="cursor-pointer hover:bg-primary/10"
                onClick={() => setModal(<TableModal data={data} />)}
              >
                {Object.entries(data).map(([key, value]) => (
                  <td
                    key={key}
                    className={`px-6 py-4 whitespace-nowrap ${getColor(value)}`}
                  >
                    {key === "username" ? (
                      <div className="flex items-center gap-3 text-bold text-black">
                        <ProfileIcon width={12} />
                        <span>{value}</span>
                      </div>
                    ) : (
                      value
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DailyReportsLayout>
  );
}

export default GroupReports;
