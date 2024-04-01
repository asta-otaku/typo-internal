import { ProfileIcon } from "../../assets/icons";
import TableModal from "./TableModal";
import useStore from "../../store";

function TableBody({ tableData }: { tableData: any[] }) {
  const setModal = useStore((state: any) => state.setModal);

  const getColor = (value: string) => {
    if (value === "No Activity") return "text-[#FF6B00]";
    else if (value === "Logged In") return "text-[#0019FF]";
    else if (value === "Created Bubble") return "text-[#178A4C]";
    else if (value === "Created Comment") return "text-[#6F00B3]";
    else if (value === "5636R36T36") return "text-fadedBlack";
    else return "text-black";
  };

  return (
    <tbody className="bg-white font-medium">
      {tableData
        .map(({ userId, ...rest }) => rest)
        .map((data: { [key: string]: string }, index: number) => (
          <tr
            key={index}
            className="cursor-pointer hover:bg-primary/10"
            onClick={() => setModal(<TableModal data={data} />)}
          >
            {Object.entries(data).map(([key, value]) =>
              Array.isArray(value) ? (
                <TableCellArray getColor={getColor} values={value} key={key} />
              ) : (
                <TableCell
                  getColor={getColor}
                  value={value}
                  tableKey={key}
                  key={key}
                />
              )
            )}
          </tr>
        ))}
    </tbody>
  );
}

export default TableBody;

const TableCell = ({
  value,
  tableKey,
  getColor,
}: {
  value: string;
  tableKey: string;
  getColor: any;
}) => {
  return (
    <td className={`px-6 py-4 whitespace-nowrap ${getColor(value)}`}>
      {tableKey === "username" ? (
        <div className="flex items-center gap-3 text-bold text-black">
          <ProfileIcon width={12} />
          <span className="truncate w-[150px] overflow-hidden">{value}</span>
        </div>
      ) : (
        <span>{value}</span>
      )}
    </td>
  );
};

const TableCellArray = ({
  values,
  getColor,
}: {
  values: string[];
  getColor: any;
}) => (
  <td className="px-6 py-4 whitespace-nowrap">
    {values.map((value, index) => (
      <span
        className={`${getColor(
          value
        )} flex flex-col bg-offwhite py-1 px-2 mb-1 w-fit rounded-3xl`}
        key={index}
      >
        {value}
      </span>
    ))}
  </td>
);
