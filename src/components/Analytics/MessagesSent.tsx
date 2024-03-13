// import bigareachart from "../../assets/Chart 10.svg";
// import smallareachart from "../../assets/Chart 13.svg";
import greenarrow from "../../assets/Frame 22.svg";
import AreaChart from "../../utils/AreaChart";

function MessagesSent() {
  return (
    <div className="flex flex-col">
      <h4 className="text-lg md:text-xl text-black font-semibold">Message</h4>
      <p className="text-fadedBlack text-xs mt-1">
        Analysis of the usage of the application
      </p>
      <select className="outline-none text-fadedBlack text-xs font-medium bg-white border border-solid border-[#DBDBDB] rounded-md p-3 w-[100px] self-end">
        <option>This week</option>
      </select>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div className="rounded-2xl bg-offwhite w-full">
          <div className="p-8">
            <h6 className="text-fadedBlack text-sm font-light">Messages</h6>
            <h5 className="font-semibold text-sm text-primary mt-1">Total</h5>
            <h2 className="text-black font-semibold text-lg lg:text-2xl mt-3">
              1400
            </h2>
          </div>
          <AreaChart />
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full gap-4">
          <div className="rounded-2xl bg-offwhite w-full md:w-[48%]">
            <div className="p-4 lg:p-8">
              <h6 className="text-fadedBlack text-xs lg:text-sm font-light">
                Messages
              </h6>
              <h5 className="font-semibold text-xs lg:text-sm text-primary mt-1">
                Sent
              </h5>
              <div>
                <div className="flex items-baseline gap-2 mt-3">
                  <h2 className="text-black font-semibold text-lg lg:text-2xl">
                    {"200"}
                  </h2>
                  <div className="flex gap-1">
                    <img src={greenarrow} alt="" />
                    <p className="text-xs font-medium text-[#0DA200]">{"5"}%</p>
                  </div>
                </div>
                <p className="text-xs text-fadedBlack font-light">
                  Compared to last week
                </p>
              </div>
            </div>
            <AreaChart />
          </div>

          <div className="rounded-2xl bg-offwhite w-full md:w-[48%]">
            <div className="p-4 lg:p-8">
              <h6 className="text-fadedBlack text-xs lg:text-sm font-light">
                Messages
              </h6>
              <h5 className="font-semibold text-xs lg:text-sm text-primary mt-1">
                Received
              </h5>
              <div>
                <div className="flex items-baseline gap-2 mt-3">
                  <h2 className="text-black font-semibold text-lg lg:text-2xl">
                    {"200"}
                  </h2>
                  <div className="flex gap-1">
                    <img src={greenarrow} alt="" />
                    <p className="text-xs font-medium text-[#0DA200]">{"5"}%</p>
                  </div>
                </div>
                <p className="text-xs text-fadedBlack font-light">
                  Compared to last
                </p>
              </div>
            </div>
            <AreaChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagesSent;
