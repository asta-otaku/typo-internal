import { ArrowLeftIcon } from "../assets/icons";
import { Link } from "react-router-dom";

function DashboardNav({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div>
      <Link to="/">
        <ArrowLeftIcon width={18} color="#999999" />
      </Link>
      <h3 className="font-bold text-black text-xl md:text-3xl my-1">{title}</h3>
      <p className="text-xs text-black/50">{description} </p>
    </div>
  );
}

export default DashboardNav;
