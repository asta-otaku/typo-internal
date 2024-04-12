import AreaChart from "../charts/AreaChart";
import greenarrow from "../assets/greenarrow.svg";
import redarrow from "../assets/redarrow.svg";
import { ChevronDownIcon } from "../assets/icons";

function Chart({
  data,
  title,
  value,
  percentage,
}: {
  data: number[];
  title: string;
  value: string;
  percentage: number;
}) {
  return (
    <div className="flex flex-col gap-3 p-4 grow border border-x-0 lg:border-x first:border-t-0 last:border-b-0 lg:border-y-0 lg:first:border-l-0 lg:last:border-r-0 lg:border-[#D9D9D9] overflow-clip">
      <div className="flex justify-between items-center">
        <h3 className="text-black text-[13px] font-semibold">{title}</h3>
        <div className="flex items-center justify-between bg-white border border-solid border-[#DBDBDB] rounded-2xl p-2 w-fit">
          <select className="outline-none text-fadedBlack text-[8px] font-semibold appearance-none border-none bg-transparent">
            <option>All Time</option>
          </select>
          <ChevronDownIcon width={12} />
        </div>
      </div>
      <div className="flex gap-1 items-baseline">
        <h3 className="text-black text-2xl font-bold">{value}</h3>
        <div className="flex gap-1">
          <img src={percentage > 0 ? greenarrow : redarrow} alt="" />
          <p
            className={`${
              percentage > 0 ? "text-[#0DA200]" : "text-[#A20000]"
            } text-xs font-medium`}
          >
            5%
          </p>
        </div>
      </div>
      <p className="text-fadedBlack text-[10px]">Compared to last week</p>
      <div className="max-w-sm w-full lg:w-full">
        <AreaChart data={data} />
      </div>
    </div>
  );
}

export default Chart;
