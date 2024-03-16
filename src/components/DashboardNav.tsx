import { ArrowLeftIcon } from "../assets/icons";

function DashboardNav({
  back,
  title,
  description,
}: {
  back?: () => void;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <div
        onClick={back ?? (() => window.history.back())}
        className="cursor-pointer"
      >
        <ArrowLeftIcon width={18} color="#999999" />
      </div>
      <h3 className="font-bold text-black text-xl md:text-3xl my-1">{title}</h3>
      <p className="text-xs text-fadedBlack">{description} </p>
    </div>
  );
}

export default DashboardNav;
