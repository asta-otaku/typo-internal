import greenarrow from "../../assets/greenarrow.svg";
import redarrow from "../../assets/redarrow.svg";

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
        <Card category="Individual" value="4 hours 20 mins" percentage={5} />
        <Card category="Groups" value="2 hours 20 mins" percentage={5} />
        <Card category="Total" value="6 hours 40 mins" percentage={5} />
        <Card category="Average" value="2 hours 20 mins" percentage={-5} />
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
        <select className="outline-none text-fadedBlack text-xs font-medium bg-white border border-solid border-[#DBDBDB] rounded-md p-3 w-[100px]">
          <option>This week</option>
        </select>
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
