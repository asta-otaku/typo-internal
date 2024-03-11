import { Link, useLocation } from "react-router-dom";

function DailyReportsLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <div>
      <nav className="mt-6 font-medium text-sm flex items-center justify-evenly p-0.5 rounded-md bg-offwhite max-w-[200px]">
        {[
          {
            name: "Users",
            page: "/daily-reports",
          },
          {
            name: "Groups",
            page: "/daily-reports/groups",
          },
        ].map(({ page, name }) => (
          <Link
            to={page}
            key={page}
            className={`p-2 min-w-fit decoration-transparent text-center text-black w-1/2 ${
              location.pathname === page.toLowerCase().replace(" ", "")
                ? "bg-white rounded-md"
                : ""
            }`}
          >
            {name}
          </Link>
        ))}
      </nav>
      <section className="my-2">{children}</section>
    </div>
  );
}

export default DailyReportsLayout;
