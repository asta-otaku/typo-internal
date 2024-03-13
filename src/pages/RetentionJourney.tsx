import { useState } from "react";
import DashboardNav from "../components/DashboardNav";
import DashboardLayout from "../layout/DashboardLayout";
import UserProductProgress from "../components/UserProductProgress";

const data = [
  {
    name: "Austin Wu",
    id: "001",
    retentionStatus: "-",
    actionCompleted: 4,
    daysSinceFirstActivity: "1 day",
    pastTimeOnboarding: "2 days",
    dayToCompleteOnboarding: "7 days",
  },
  {
    name: "Austin Wu",
    id: "002",
    retentionStatus: "-",
    actionCompleted: 8,
    daysSinceFirstActivity: "2 days",
    pastTimeOnboarding: "1 day",
    dayToCompleteOnboarding: "pending",
  },
];

function RetentionJourney() {
  const [step, setStep] = useState(1);
  const [passedData, setPassedData] = useState(null);
  return (
    <DashboardLayout>
      {
        {
          1: (
            <div>
              <DashboardNav
                title="Retention Journey"
                description="Select the category to view leaderboards."
              />
              <div className="my-5 overflow-x-auto no-scrollbar">
                <table className="min-w-full text-left text-xs rounded-t-lg  bg-offwhite border-collapse">
                  <thead className="text-fadedBlack font-semibold">
                    <tr className="capitalize">
                      <th scope="col" className="px-6 py-4 whitespace-nowrap">
                        names
                      </th>
                      <th scope="col" className="px-6 py-4 whitespace-nowrap">
                        ID
                      </th>
                      <th scope="col" className="px-6 py-4 whitespace-nowrap">
                        Retention status
                      </th>
                      <th scope="col" className="px-6 py-4 whitespace-nowrap">
                        action completed
                      </th>
                      <th scope="col" className="px-6 py-4 whitespace-nowrap">
                        days since first activity
                      </th>
                      <th scope="col" className="px-6 py-4 whitespace-nowrap">
                        pass time onboarding
                      </th>
                      <th scope="col" className="px-6 py-4 whitespace-nowrap">
                        day to complete onboarding
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {data.map((item: any, index) => (
                      <tr
                        key={index}
                        onClick={() => {
                          setPassedData(item);
                          setStep(2);
                        }}
                        className="cursor-pointer hover:bg-primary/10 text-fadedBlack"
                      >
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-black">
                          {item.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.retentionStatus}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap flex items-center gap-1">
                          <div>{item.actionCompleted}/10</div>
                          <div className="flex items-center bg-offwhite rounded-xl w-12 h-2">
                            <span
                              style={{ width: `${item.actionCompleted * 10}%` }}
                              className="rounded-xl bg-primary h-2"
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.daysSinceFirstActivity}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.pastTimeOnboarding}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.dayToCompleteOnboarding}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ),
          2: <UserProductProgress data={passedData} />,
        }[step]
      }
    </DashboardLayout>
  );
}

export default RetentionJourney;
