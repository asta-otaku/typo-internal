import greenarrow from "../../assets/greenarrow.svg";
import { ChevronDownIcon } from "../../assets/icons";
import redarrow from "../../assets/redarrow.svg";

const cardData = [
  {
    category: "Individual",
    value: "4 hours 20 mins",
    percentage: 5,
  },
  {
    category: "Groups",
    value: "2 hours 20 mins",
    percentage: 5,
  },
  {
    category: "Total",
    value: "6 hours 40 mins",
    percentage: 5,
  },
  {
    category: "Average",
    value: "2 hours 20 mins",
    percentage: -5,
  },
];

function ScreenTime() {
  return (
    <div>
      <h4 className="text-lg md:text-xl text-black font-semibold">
        Screen-Time
      </h4>
      <p className="text-fadedBlack text-xs mt-1">
        Analysis of the usage of the application
      </p>
      <div className="flex flex-wrap justify-center md:justify-start gap-4 my-5">
        {cardData.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>
    </div>
  );
}

export default ScreenTime;

function Card({
  category,
  value,
  percentage,
}: {
  category: string;
  value: string;
  percentage: number;
}) {
  return (
    <div className="rounded-3xl bg-offwhite p-8 flex flex-col justify-between h-[300px] max-w-[320px] w-full">
      <div className="flex justify-between items-center">
        <div>
          <h6 className="text-base font-light">Screen-Time</h6>
          <h4 className="text-primary font-semibold mt-1">{category}</h4>
        </div>
        <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl p-2 w-fit self-end">
          <select className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
            <option>This Week</option>
          </select>
          <ChevronDownIcon width={12} />
        </div>
      </div>

      <div>
        <div className="flex items-baseline gap-2">
          <h2 className="text-black font-semibold text-2xl">{value}</h2>
          <div className="flex gap-1">
            <img src={percentage > 0 ? greenarrow : redarrow} alt="" />
            <p
              className={`text-xs font-medium ${
                percentage > 0 ? "text-[#0DA200]" : "text-[#A20000]"
              }`}
            >
              {percentage}%
            </p>
          </div>
        </div>
        <p className="text-xs text-fadedBlack">Compared to last week</p>
      </div>
    </div>
  );
}