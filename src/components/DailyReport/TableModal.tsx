import idea from "../../assets/idea-01.svg";
import alarm from "../../assets/alarm-clock.svg";
import chat from "../../assets/Chat.svg";
import mail from "../../assets/Message.svg";
import cancel from "../../assets/cancel.svg";
import greenarrow from "../../assets/greenarrow.svg";
import redarrow from "../../assets/redarrow.svg";
import uptrend from "../../assets/UpTrend.svg";
import downtrend from "../../assets/DownTrend.svg";
import upengagement from "../../assets/UpEngagement.svg";
import downengagement from "../../assets/DownEngagement.svg";
import notrend from "../../assets/NoTrend.svg";
import moderateengagement from "../../assets/ModerateEngagement.svg";
import profile from "../../assets/profile.svg";
import close from "../../assets/Close-Square.svg";
import useStore from "../../store";

function TableModal({ data, user }: { data?: any; user?: any }) {
  const setModal = useStore((state: any) => state.setModal);
  const personData = {
    engagement: "Moderate",
    engStatus: "up",
    retainment: "Retained",
    retStatus: "down",
    percentage: 18.23,
  };

  const getTextColor = (engagement: string) => {
    if (engagement === "Moderate") {
      return "#FF6B00";
    } else if (engagement === "High") {
      return "#0019FF";
    } else {
      return "#FB3E3E";
    }
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="z-[200] flex flex-col items-center shadow-sm max-w-lg w-full text-fadedBlack text-xs font-light bg-[#F5F5F5] relative rounded-3xl py-5"
    >
      <div className="w-full flex justify-between items-start px-5">
        <div className="flex gap-2 items-start">
          <img src={profile} alt="users" />
          <div className="flex flex-col gap-1">
            <h2 className="text-base md:text-lg text-black">
              {user ? user : data?.username}
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-xs text-black">Louive Vuitton</span>
              <span className="text-xs pl-2 border-0 border-l border-black text-black">
                Last activity: 3hrs ago
              </span>
            </div>
            <div className="flex flex-wrap my-2 gap-1 md:gap-3">
              <div className={`rounded-3xl bg-white pl-1 flex gap-1.5`}>
                <div className="flex items-center gap-0.5">
                  <img
                    src={
                      personData.engagement === "High"
                        ? upengagement
                        : personData.engStatus === "Low"
                        ? downengagement
                        : moderateengagement
                    }
                    alt=""
                  />
                  <span
                    style={{
                      color: getTextColor(personData.engagement),
                    }}
                  >
                    {personData.engagement} Engagement
                  </span>
                </div>
                <div className="flex items-center gap-0.5">
                  {personData.engStatus === "up" ? (
                    <div className="p-1 rounded-3xl flex gap-0.5 bg-[#DBFFD8]">
                      <span className="text-[#0DA200] text-[10px]">
                        Trending
                      </span>
                      <img src={uptrend} alt="" />
                    </div>
                  ) : personData.engStatus === "down" ? (
                    <div className="p-1 rounded-3xl flex gap-0.5 bg-[#FFF1F1]">
                      <span className="text-[#FB3E3E] text-[10px]">
                        Trending
                      </span>
                      <img src={downtrend} alt="" />
                    </div>
                  ) : (
                    <div className="p-1 rounded-3xl flex gap-0.5 bg-[#F3E0FF]">
                      <span className="text-[#6F00B3] text-[10px]">
                        No change
                      </span>
                      <img src={notrend} alt="" />
                    </div>
                  )}
                </div>
              </div>

              <div className={`rounded-3xl flex items-center bg-white px-1`}>
                {personData.retStatus === "churned" ? (
                  <div className="flex items-center gap-1.5 pr-1">
                    <img src={cancel} alt="" />
                    <h2 className="text-[#696969] text-xs">Churned</h2>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5">
                    {personData.retainment === "Retained" ? (
                      <h2 className="text-[#0DA200] text-xs">✅ Retained</h2>
                    ) : personData.retainment === "Not Retained" ? (
                      <h2 className="text-[#FB3E3E] text-xs">
                        ❌ Not Retained
                      </h2>
                    ) : (
                      <h2 className="text-[#F0B531] text-xs">
                        🤏 Almost Retained
                      </h2>
                    )}
                    <div className="flex items-center gap-0.5">
                      {personData.retStatus === "up" ? (
                        <div className="p-1 rounded-3xl flex gap-0.5 bg-[#DBFFD8]">
                          <span className="text-[#0DA200] text-[10px]">
                            Trending
                          </span>
                          <img src={uptrend} alt="" />
                        </div>
                      ) : personData.retStatus === "down" ? (
                        <div className="p-1 rounded-3xl flex gap-0.5 bg-[#FFF1F1]">
                          <span className="text-[#FB3E3E] text-[10px]">
                            Trending
                          </span>
                          <img src={downtrend} alt="" />
                        </div>
                      ) : (
                        <div className="p-1 rounded-3xl flex gap-0.5 bg-[#F3E0FF]">
                          <span className="text-[#6F00B3] text-[10px]">
                            No change
                          </span>
                          <img src={notrend} alt="" />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <img
          onClick={() => setModal(false)}
          src={close}
          alt="close"
          className="cursor-pointer"
        />
      </div>

      <div className="bg-white w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 rounded-3xl my-4 p-5">
        <Metric
          image={alarm}
          title="Screen Time"
          value="3hours 20 Minutes"
          percentage={12.2}
        />
        <Metric
          image={chat}
          title="Comment Created"
          value="100 Bubbles"
          percentage={-2.2}
        />
        <Metric
          image={mail}
          title="Messages Sent"
          value="100 Messages"
          percentage={18.23}
        />
        <Metric
          image={idea}
          title="Bubble Created"
          value="20"
          percentage={18.23}
        />
      </div>
      <p className="text-center text-black text-xs mt-3">
        33 Days since onboarding
      </p>
    </div>
  );
}

export default TableModal;

function Metric({
  image,
  title,
  value,
  percentage,
}: {
  image: string;
  title: string;
  value: string;
  percentage: number;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-start gap-1.5">
        <img src={image} alt="" className="mt-1" />
        <div className="items-center">
          <h2 className="text-sm text-black">{title}</h2>
          <p className="text-xs text-[#696969]">{value}</p>
        </div>
      </div>
      <div className="flex gap-1 items-center">
        <img src={percentage > 0 ? greenarrow : redarrow} alt="" />
        <span
          className={`text-xs ${
            percentage > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {Math.abs(percentage)}%
        </span>
      </div>
    </div>
  );
}
