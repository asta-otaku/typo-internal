import {
  UserStatusIcon,
  SmartPhoneIcon,
  ComputerIcon,
  ChevronDownIcon,
} from "../assets/icons";
import close from "../assets/Close-Square.svg";
import locationicon from "../assets/location-user-01.svg";
import useStore from "../store";
import { useState } from "react";

const getBGColor = (color: string) => {
  switch (color) {
    case "#FF6B00":
      return "bg-[#FF6B00]/10";
    case "#0DA200":
      return "bg-[#0DA200]/10";
    case "#9B51E0":
      return "bg-[#9B51E0]/10";
    case "#EB5757":
      return "bg-[#EB5757/10]";
    default:
      return "bg-[#FF6B00]/10";
  }
};

export default function Card({
  name,
  company,
  type,
  tags,
  color,
  activity,
  deviceType,
}: {
  name: string;
  company: string;
  type: string;
  tags: string[];
  color: string;
  activity: string[][];
  deviceType: string[][];
}) {
  const setModal = useStore((state: any) => state.setModal);
  const [selectedTag, setSelectedTag] = useState(tags.length - 1);
  return (
    <article className="bg-offwhite rounded-3xl py-6 px-4 flex flex-col max-w-sm text-xs w-full text-fadedBlack min-h-[300px]">
      <div className="w-full flex justify-between">
        <h6 className="text-sm text-black font-medium">Activity Log</h6>
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
          <h2 className="font-semibold text-black">{name}</h2>
          <h6 className="font-medium text-black my-2 text-xs">{company}</h6>
          <p className="text-xs">Last Activity 4 hours ago</p>
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
            onClick={() => setSelectedTag(i)}
            style={{
              color: i === selectedTag ? color : "black",
            }}
            className={`text-[13px] py-2 w-[120px] text-center cursor-pointer ${
              i === selectedTag &&
              `font-medium border-solid border-[0.5px] rounded-2xl ${getBGColor(
                color
              )}`
            }`}
          >
            {tag}
          </div>
        ))}
      </div>

      <div className="my-4">
        {activity[selectedTag].map((act, i) => {
          if (i > 1) return;
          return (
            <div
              key={i}
              className="grid grid-cols-2 border-0 border-b-[0.5px] first:border-solid border-[#DBDBDB] py-3"
            >
              <div className="flex items-center gap-1">
                <UserStatusIcon color={color} />
                <div>
                  <h5 style={{ color }} className="text-xs font-medium">
                    {"Activity"}
                  </h5>
                  <p className="text-xs font-medium">{act}</p>
                </div>
              </div>
              <div className="flex items-center w-full justify-between">
                <div>
                  <h5 style={{ color }} className="text-xs font-medium">
                    {"Time"}
                  </h5>
                  <p className="text-black/80 text-xs font-medium">
                    {"Tuesday 20th, 5:20AM"}
                  </p>
                </div>
                {deviceType[selectedTag][i] === "phone" ? (
                  <SmartPhoneIcon color={color} />
                ) : (
                  <ComputerIcon color={color} />
                )}
              </div>
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
                deviceType={deviceType}
              />
            )
          }
          className="mt-4 font-medium text-primary text-center cursor-pointer"
        >
          View More
        </p>
      </div>
    </article>
  );
}

function Modal({
  name,
  type,
  company,
  tags,
  color,
  activity,
  deviceType,
}: any) {
  const setModal = useStore((state: any) => state.setModal);
  const [selectedTag, setSelectedTag] = useState(tags.length - 1);

  return (
    <div className="flex flex-col shadow-sm max-w-md w-full text-fadedBlack text-xs font-light bg-offwhite relative rounded-3xl p-5">
      <span onClick={() => setModal(null)} className="absolute top-5 right-5">
        <img src={close} alt="" />
      </span>
      <h6 className="text-sm text-black font-medium">Activity Log</h6>
      <div className="mt-4 mb-6 w-full py-3 flex justify-between">
        <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl px-1 py-2 w-[100px] md:w-[120px]">
          <select className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
            <option value={"user"}>User Type</option>
          </select>
          <ChevronDownIcon width={12} />
        </div>
        <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl px-1 py-2 w-[100px] md:w-[120px]">
          <select className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
            <option value={"all"}>All Activity</option>
          </select>
          <ChevronDownIcon width={12} />
        </div>
        <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl px-1 py-2 w-[100px] md:w-[120px]">
          <select className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
            <option value={"24hours"}>24 Hours</option>
          </select>
          <ChevronDownIcon width={12} />
        </div>
      </div>
      <div className="w-full flex justify-between mt-4">
        <div>
          <h2 className="font-semibold text-black">{name}</h2>
          <h6 className="font-medium text-black my-2 text-xs">{company}</h6>
          <p className="text-xs">Last Activity 4 hours ago</p>
        </div>
        <div className="flex items-center bg-white h-fit p-2 rounded-md">
          <img src={locationicon} alt="" />
          <span className="text-primary font-medium">{type}</span>
        </div>
      </div>

      <div className="flex items-center my-4">
        {tags.map((tag: string, i: number) => (
          <div
            key={i}
            onClick={() => setSelectedTag(i)}
            style={{
              color: i === selectedTag ? color : "black",
            }}
            className={`text-[13px] py-2 w-[120px] text-center cursor-pointer ${
              i === selectedTag &&
              `font-medium border-solid border-[0.5px] rounded-2xl ${getBGColor(
                color
              )}`
            }`}
          >
            {tag}
          </div>
        ))}
      </div>

      <div className="my-4">
        {activity[selectedTag].map((act: any, i: any) => (
          <div
            key={i}
            className="grid grid-cols-2 border-0 border-b-[0.5px] border-solid last:border-none border-[#DBDBDB] py-3"
          >
            <div className="flex items-center gap-1">
              <UserStatusIcon color={color} />
              <div>
                <h5 style={{ color }} className="text-xs font-medium">
                  {"Activity"}
                </h5>
                <p className="text-xs font-medium">{act}</p>
              </div>
            </div>
            <div className="flex items-center w-full justify-between">
              <div>
                <h5 style={{ color }} className="text-xs font-medium">
                  {"Time"}
                </h5>
                <p className="text-black/80 text-xs font-medium">
                  {"Tuesday 20th, 5:20AM"}
                </p>
              </div>
              {deviceType[selectedTag][i] === "phone" ? (
                <SmartPhoneIcon color={color} />
              ) : (
                <ComputerIcon color={color} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
