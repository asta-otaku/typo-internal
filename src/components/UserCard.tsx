import {
  UserStatusIcon,
  SmartPhoneIcon,
  ComputerIcon,
  ChevronDownIcon,
} from "../assets/icons";
import close from "../assets/Close-Square.svg";
import locationicon from "../assets/location-user-01.svg";
import useStore from "../store";
import { useState, useEffect } from "react";

// Function to determine the background color based on activity
const getActivityColor = (activity: string) => {
  switch (activity) {
    case "Logged In":
      return "#0DA200";
    case "Created Bubble":
      return "#FF6B00";
    case "Created Comment":
      return "#9B51E0";
    default:
      return "#000000"; // Default color
  }
};

// Function to determine the background color for the activity tags
const getBGColor = (activity: string) => {
  const color = getActivityColor(activity);
  return `bg-[${color}]/10`; // Adjust the opacity as needed
};
interface ActivityDetails {
  activity: string;
  device: string;
  timestamp: string;
}

export default function Card({
  name,
  team,
  userType,
  tags,
  activity,
  activityTimestamps,
  deviceType,
  lastActivityTime,
}: {
  name: string;
  team: string;
  userType: string;
  tags: string[];
  activity: string[][];
  activityTimestamps: string[][];
  deviceType: string[][];
  lastActivityTime: number;
}) {
  const setModal = useStore((state: any) => state.setModal);
  const [selectedTag, setSelectedTag] = useState(0);

  type TagOrder = {
    "Logged In": number;
    "Created Bubble": number;
    "Created Comment": number;
    "No Activity": number;
  };

  const tagOrder: TagOrder = {
    "Logged In": 1,
    "Created Bubble": 2,
    "Created Comment": 3,
    "No Activity": 4,
  };

  // Sort tags based on the predefined order
  const sortedTags = tags.sort(
    (a, b) => tagOrder[a as keyof TagOrder] - tagOrder[b as keyof TagOrder]
  );

  // Select the first tag by default (sorted)
  useEffect(() => {
    setSelectedTag(0);
  }, [sortedTags]);

  return (
    <article className="bg-offwhite rounded-3xl py-6 px-4 flex flex-col max-w-sm text-xs w-full text-fadedBlack min-h-[300px]">
      <div className="w-full flex justify-between">
        <h6 className="text-sm text-black font-medium">Activity Log</h6>
        <div
          className={`flex gap-2 items-center ${
            userType === "Dormant" && "hidden"
          }`}
        >
          <SmartPhoneIcon color="#999" />
          <span>Mobile - 100%</span>
          <ComputerIcon color="#999" />
          <span>Desktop - 0%</span>
        </div>
      </div>

      <div className="w-full flex justify-between mt-4">
        <div>
          <h2 className="font-semibold text-black">{name}</h2>
          <h6 className="font-medium text-black my-2 text-xs">{team}</h6>
          <p className="text-xs">Last Activity: {lastActivityTime} hours ago</p>
        </div>
        <div className="flex items-center bg-white h-fit p-2 rounded-md">
          <img src={locationicon} alt="" />
          <span className="text-primary font-medium">{userType}</span>
        </div>
      </div>

      <div className="flex items-center my-2">
        {sortedTags.map((tag, i) => {
          const tagColor = getActivityColor(tag); // Get color based on the activity type
          return (
            <div
              key={i}
              onClick={() => setSelectedTag(i)}
              style={{
                color: i === selectedTag ? tagColor : "black", // Use tagColor here
              }}
              className={`text-[13px] py-2 w-[120px] text-center cursor-pointer ${
                i === selectedTag &&
                `font-medium border-solid border-[0.5px] rounded-2xl ${getBGColor(
                  tagColor // Use tagColor for background color
                )}`
              }`}
            >
              {tag}
            </div>
          );
        })}
      </div>

      <div className="my-4">
        {activity
          .flatMap((actGroup, groupIndex) =>
            actGroup.map((act, actIndex) => ({
              activity: act,
              device: deviceType[groupIndex][actIndex],
              timestamp: activityTimestamps[groupIndex][actIndex],
            }))
          )
          .filter(({ activity }) => activity === tags[selectedTag])
          .sort(
            (a: ActivityDetails, b: ActivityDetails) =>
              new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
          )
          .slice(0, 2)
          .slice(0, 2) // Show only up to two activities
          .map(({ activity, device, timestamp }, i) => {
            const activityColor = getActivityColor(activity);
            const IconComponent =
              device === "phone" ? SmartPhoneIcon : ComputerIcon;
            const activityDate = new Date(timestamp); // Ensure timestamp is in correct format

            return (
              <div
                key={i}
                className="grid grid-cols-2 border-0 border-b-[0.5px] first:border-solid border-[#DBDBDB] py-3"
              >
                <div className="flex items-center gap-1">
                  <UserStatusIcon color={activityColor} />
                  <div>
                    <h5
                      className="text-xs font-medium"
                      style={{ color: activityColor }}
                    >
                      {"Activity"}
                    </h5>
                    <p className="text-xs font-medium">{activity}</p>
                  </div>
                </div>
                <div className="flex items-center w-full justify-between">
                  <div>
                    <h5
                      className="text-xs font-medium"
                      style={{ color: activityColor }}
                    >
                      {"Time"}
                    </h5>
                    <p className="text-black/80 text-xs font-medium">
                      {activityDate.toLocaleString()}
                    </p>
                  </div>
                  <IconComponent color={activityColor} />
                </div>
              </div>
            );
          })}
        <p
          onClick={() =>
            setModal(
              <Modal
                name={name}
                team={team}
                userType={userType}
                tags={tags}
                activity={activity}
                activityTimestamps={activityTimestamps}
                deviceType={deviceType}
                lastActivityTime={lastActivityTime}
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
  userType,
  team,
  tags,
  activity,
  activityTimestamps,
  deviceType,
  lastActivityTime,
}: any) {
  const setModal = useStore((state: any) => state.setModal);
  const [selectedTag, setSelectedTag] = useState(0);

  const getActivityColor = (activity: string) => {
    switch (activity) {
      case "Logged In":
        return "#0DA200";
      case "Created Bubble":
        return "#FF6B00";
      case "Created Comment":
        return "#9B51E0";
      default:
        return "#000000"; // Default color
    }
  };

  // Function to determine the background color for the activity tags
  const getBGColor = (activity: string) => {
    const color = getActivityColor(activity);
    return `bg-[${color}]/10`; // Adjust the opacity as needed
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col shadow-sm max-w-md w-full text-fadedBlack text-xs font-light bg-offwhite relative rounded-3xl p-5"
    >
      <span onClick={() => setModal(null)} className="absolute top-5 right-5">
        <img src={close} alt="" />
      </span>
      <h6 className="text-sm text-black font-medium">Activity Log</h6>
      <div className="mt-4 mb-6 w-full py-3 flex justify-between">
        <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl p-2 w-fit">
          <select className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
            <option value={"user"}>User Type</option>
          </select>
          <ChevronDownIcon width={12} />
        </div>
        <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl p-2 w-f">
          <select className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
            <option value={"all"}>All Activity</option>
          </select>
          <ChevronDownIcon width={12} />
        </div>
        <div className="flex items-center justify-center gap-2 bg-white border border-solid border-[#DBDBDB] rounded-2xl p-2 w-f">
          <select className="outline-none text-fadedBlack text-xs md:text-sm font-semibold appearance-none border-none bg-transparent">
            <option value={"24hours"}>24 Hours</option>
          </select>
          <ChevronDownIcon width={12} />
        </div>
      </div>
      <div className="w-full flex justify-between mt-4">
        <div>
          <h2 className="font-semibold text-black max-w-[150px] overflow-hidden truncate">
            {name}
          </h2>
          <h6 className="font-medium text-black my-2 text-xs">{team}</h6>
          <p className="text-xs">Last Activity: {lastActivityTime} hours ago</p>
        </div>
        <div className="flex items-center bg-white h-fit p-2 rounded-md">
          <img src={locationicon} alt="" />
          <span className="text-primary font-medium">{userType}</span>
        </div>
      </div>

      <div className="flex items-center my-4">
        {tags.map((tag: string, i: number) => {
          const tagColor = getActivityColor(tag); // Correctly getting the tag color based on the activity
          return (
            <div
              key={i}
              onClick={() => setSelectedTag(i)}
              className={`text-[13px] py-2 w-[120px] text-center cursor-pointer ${
                i === selectedTag
                  ? `font-medium border-solid border-[0.5px] rounded-2xl ${getBGColor(
                      tagColor
                    )}`
                  : ""
              }`}
              style={{
                color: i === selectedTag ? tagColor : "black", // Using tagColor here
              }}
            >
              {tag}
            </div>
          );
        })}
      </div>

      <div className="my-4">
        {activity
          .flatMap((actGroup: string[], groupIndex: number) =>
            actGroup.map((act: string, actIndex: number) => ({
              activity: act,
              device: deviceType[groupIndex][actIndex],
              timestamp: activityTimestamps[groupIndex][actIndex],
            }))
          )
          .filter(
            ({ activity }: ActivityDetails) => activity === tags[selectedTag]
          )
          .sort(
            (a: ActivityDetails, b: ActivityDetails) =>
              new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
          )
          .slice(0, 10)
          .map(
            ({ activity, device, timestamp }: ActivityDetails, i: number) => {
              const activityColor = getActivityColor(activity);
              const IconComponent =
                device === "phone" ? SmartPhoneIcon : ComputerIcon;
              const activityDate = new Date(timestamp);

              return (
                <div
                  key={i}
                  className="grid grid-cols-2 border-0 border-b-[0.5px] border-solid border-[#DBDBDB] py-3"
                >
                  <div className="flex items-center gap-1">
                    <UserStatusIcon color={activityColor} />
                    <div>
                      <h5
                        className="text-xs font-medium"
                        style={{ color: activityColor }}
                      >
                        {"Activity"}
                      </h5>
                      <p className="text-xs font-medium">{activity}</p>
                    </div>
                  </div>
                  <div className="flex items-center w-full justify-between">
                    <div>
                      <h5
                        className="text-xs font-medium"
                        style={{ color: activityColor }}
                      >
                        {"Time"}
                      </h5>
                      <p className="text-black/80 text-xs font-medium">
                        {activityDate.toLocaleString()}
                      </p>
                    </div>
                    <IconComponent color={activityColor} />
                  </div>
                </div>
              );
            }
          )}
      </div>
    </div>
  );
}
