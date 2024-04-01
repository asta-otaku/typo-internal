import { getCurrentWeekDates } from "../../helpers/getWeekdays";

function TableHeader({
  tableType,
  tableData,
}: {
  tableType: string;
  tableData: any;
}) {
  const dateRange = getCurrentWeekDates();
  return (
    <thead className="text-fadedBlack font-semibold">
      {tableType !== "summary" ? (
        <tr className="capitalize text-center">
          <th scope="col" className="px-6 py-4 whitespace-nowrap">
            usernames
          </th>
          <th scope="col" className="px-6 py-4 whitespace-nowrap">
            <div className="flex flex-col gap-1">
              <span>Sunday</span>
              <span>{dateRange[0]}</span>
            </div>
          </th>
          <th scope="col" className="px-6 py-4 whitespace-nowrap">
            <div className="flex flex-col gap-1">
              <span>Monday</span>
              <span>{dateRange[1]}</span>
            </div>
          </th>
          <th scope="col" className="px-6 py-4 whitespace-nowrap">
            <div className="flex flex-col gap-1">
              <span>Tuesday</span>
              <span>{dateRange[2]}</span>
            </div>
          </th>
          <th scope="col" className="px-6 py-4 whitespace-nowrap">
            <div className="flex flex-col gap-1">
              <span>Wednesday</span>
              <span>{dateRange[3]}</span>
            </div>
          </th>
          <th scope="col" className="px-6 py-4 whitespace-nowrap">
            <div className="flex flex-col gap-1">
              <span>Thursday</span>
              <span>{dateRange[4]}</span>
            </div>
          </th>
          <th scope="col" className="px-6 py-4 whitespace-nowrap">
            <div className="flex flex-col gap-1">
              <span>Friday</span>
              <span>{dateRange[5]}</span>
            </div>
          </th>
          <th scope="col" className="px-6 py-4 whitespace-nowrap">
            <div className="flex flex-col gap-1">
              <span>Saturday</span>
              <span>{dateRange[6]}</span>
            </div>
          </th>
        </tr>
      ) : (
        <tr className="capitalize">
          {Object.keys(tableData[0]).map((key) => (
            <th key={key} scope="col" className="px-6 py-4 whitespace-nowrap">
              {key.replace("_", " ").replace("_", " ")}
            </th>
          ))}
        </tr>
      )}
    </thead>
  );
}

export default TableHeader;
