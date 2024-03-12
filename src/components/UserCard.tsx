import { UserStatusIcon, SmartPhoneIcon, ComputerIcon } from "../assets/icons";
import close from "../assets/Close-Square.svg";
import locationicon from "../assets/location-user-01.svg";
import useStore from "../store";

export default function Card({
  name,
  company,
  type,
  tags,
  color,
  activity,
  Icons,
}: {
  name: string;
  company: string;
  type: string;
  tags: string[];
  color: string;
  activity: string[];
  Icons: any[];
}) {
  const setModal = useStore((state: any) => state.setModal);
  return (
    <article className="bg-offwhite rounded-3xl py-6 px-4 flex flex-col max-w-sm text-xs w-full text-black/50 min-h-[300px]">
      <div className="w-full flex justify-between">
        <h6 className="text-xs text-black font-medium">Activity Log</h6>
        <div
          className={`flex gap-2 items-center ${
            type === "Dormant" && "hidden"
          }`}
        >
          <SmartPhoneIcon color="#999" />
          <span>Phone - 30%</span>
          <ComputerIcon color="#999" />
          <span>Web - 70%</span>
        </div>
      </div>

      <div className="w-full flex justify-between mt-4">
        <div>
          <h2 className="font-semibold text-black text-sm">{name}</h2>
          <h6 className="font-medium text-black text-xs">{company}</h6>
          <p>Last Activity 4 hours ago</p>
        </div>
        <div className="flex items-center bg-white h-fit p-2 rounded-md">
          <img src={locationicon} alt="" />
          <span className="text-primary font-medium">{type}</span>
        </div>
      </div>

      <div className="flex items-center my-2">
        {tags.map((tag, i) => (
          <div
            key={i}
            className={`text-[13px] py-2 w-[120px] text-center ${
              i === tags.length - 1 &&
              `text-[${color}] font-medium border-solid border-[${color}] border-[0.5px] rounded-2xl bg-[${color}]/10`
            }`}
          >
            {tag}
          </div>
        ))}
      </div>

      <div className="my-4">
        {activity.map((act, i) => {
          const Icon = Icons[i];
          if (i > 1) return;
          return (
            <div
              key={i}
              className="flex items-center w-full gap-5 border-0 border-b-[0.5px] border-solid py-3 justify-between"
            >
              <div className="flex items-center gap-1">
                <UserStatusIcon color={color} />
                <div>
                  <h5 className={`text-[${color}] text-xs font-medium`}>
                    {"Activity"}
                  </h5>
                  <p className="text-xs font-medium">{act}</p>
                </div>
              </div>
              <div>
                <h5 className={`text-[${color}] text-xs font-medium`}>
                  {"Time"}
                </h5>
                <p className="text-black text-xs font-medium">
                  {"Tuesday 20th, 5:20AM"}
                </p>
              </div>
              <Icon color={color} />
            </div>
          );
        })}
        <p
          onClick={() =>
            setModal(
              <Modal
                name={name}
                company={company}
                type={type}
                tags={tags}
                color={color}
                activity={activity}
                Icons={Icons}
              />
            )
          }
          className={`mt-4 font-medium text-primary text-center cursor-pointer ${
            type === "Dormant" && "hidden"
          }`}
        >
          View More
        </p>
      </div>
    </article>
  );
}

function Modal({ name, company, type, tags, color, activity, Icons }: any) {
  const setModal = useStore((state: any) => state.setModal);
  return (
    <div className="flex flex-col shadow-sm w-72 sm:w-96 text-black/50 text-xs font-light bg-[#FFFFFF] relative rounded-2xl p-5">
      <span onClick={() => setModal(null)} className="absolute top-5 right-5">
        <img src={close} alt="" />
      </span>
      <h6 className="text-xs text-black font-medium">Activity Log</h6>
      <div className="mt-4 mb-6 w-full py-3 flex gap-4">
        <select className="outline-none text-black/50 text-xs font-semibold bg-white border border-solid border-[#DBDBDB] rounded-2xl p-3 w-[110px]">
          <option value={"user"}>User Type</option>
        </select>
        <select className="outline-none text-black/50 text-xs font-semibold bg-white border border-solid border-[#DBDBDB] rounded-2xl p-3 w-[110px]">
          <option value={"all"}>All Activity</option>
        </select>
        <select className="outline-none text-black/50 text-xs font-semibold bg-white border border-solid border-[#DBDBDB] rounded-2xl p-3 w-[110px]">
          <option value={"24-hours"}>24 Hours</option>
        </select>
      </div>
      <div className="w-full flex justify-between mt-4">
        <div>
          <h2 className="font-semibold text-black text-sm">{name}</h2>
          <h6 className="font-medium text-black text-xs">{company}</h6>
          <p>Last Activity 4 hours ago</p>
        </div>
        <div className="flex items-center bg-white h-fit p-2 rounded-md">
          <img src={locationicon} alt="" />
          <span className="text-primary font-medium">{type}</span>
        </div>
      </div>

      <div className="flex items-center my-2">
        {tags.map((tag: string, i: number) => (
          <div
            key={i}
            className={`text-[13px] py-2 w-[120px] text-center ${
              i === tags.length - 1 &&
              `text-[${color}] font-medium border-solid border-[${color}] border-[0.5px] rounded-2xl bg-[${color}]/10`
            }`}
          >
            {tag}
          </div>
        ))}
      </div>

      <div className="my-4">
        {activity.map((act: any, i: any) => {
          const Icon = Icons[i];
          return (
            <div
              key={i}
              className="flex items-center w-full gap-5 border-0 border-b-[0.5px] border-solid py-3 justify-between"
            >
              <div className="flex items-center gap-1">
                <UserStatusIcon color={color} />
                <div>
                  <h5 className={`text-[${color}] text-xs font-medium`}>
                    {"Activity"}
                  </h5>
                  <p className="text-xs font-medium">{act}</p>
                </div>
              </div>
              <div>
                <h5 className={`text-[${color}] text-xs font-medium`}>
                  {"Time"}
                </h5>
                <p className="text-black text-xs font-medium">
                  {"Tuesday 20th, 5:20AM"}
                </p>
              </div>
              <Icon color={color} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
