import users from "../assets/3User.svg";
import chat from "../assets/Chat.svg";
import bubble from "../assets/Ticket.svg";
import mail from "../assets/Message.svg";
import profile from "../assets/Frame215.png";
import close from "../assets/Close-Square.svg";
import useStore from "../store";

function TableModal({ data }: { data: any }) {
  const setModal = useStore((state: any) => state.setModal);

  return (
    <div className="flex flex-col items-center shadow-sm max-w-sm w-full text-fadedBlack text-xs font-light bg-[#FFFFFF] relative rounded p-5">
      <span onClick={() => setModal(null)} className="absolute top-5 right-5">
        <img src={close} alt="" />
      </span>
      <img src={profile} alt="" className="w-20 h-20 rounded-full" />
      <h2 className="text-xl font-bold mt-5 text-black">{data?.username}</h2>
      <p className="my-2">4567EDSHSGT</p>
      <p>333 days since sign up</p>
      <div className="w-full flex justify-center items-center gap-1 md:gap-4 my-2">
        <div className="flex items-center gap-1">
          <img src={users} alt="" />
          <span>4 groups</span>
        </div>
        <div className="flex items-center gap-1">
          <img src={mail} alt="" />
          <span>200 Messages</span>
        </div>
        <div className="flex items-center gap-1">
          <img src={chat} alt="" />
          <span>100 Comments</span>
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-1 md:gap-4">
        <div className="flex items-center gap-1">
          <img src={bubble} alt="" />
          <span>3hours 20 Minutes</span>
        </div>
        <div className="flex items-center gap-1">
          <img src={chat} alt="" />
          <span>100 Bubbles</span>
        </div>
      </div>
    </div>
  );
}

export default TableModal;
