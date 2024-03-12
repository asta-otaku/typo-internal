import { useState } from "react";

import arrow from "../assets/Arrow---Right-Circle.svg";
import DashboardNav from "../components/DashboardNav";
import DashboardLayout from "./DashboardLayout";

function AnalyticsLayout({
  children,
  currentStep,
  setCurrentStep,
}: {
  children: React.ReactNode;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <DashboardLayout>
      <DashboardNav
        title="Analytics"
        description="A breakdown of your screen-time and also your crash reports"
      />
      <div className="mt-6 px-2 overflow-x-auto flex flex-col lg:flex-row items-center md:items-start justify-between gap-8 w-full">
        <ul className="max-w-[200px] w-full flex flex-col gap-2 py-5 px-3 bg-offwhite rounded-xl">
          <li className="text-sm text-black/50">SELECT MENU</li>
          <ListItem
            step={1}
            setCurrentStep={setCurrentStep}
            name="Screen-Time"
            currentStep={currentStep}
          />
          <ListItem
            step={2}
            setCurrentStep={setCurrentStep}
            name="Crash Reports"
            currentStep={currentStep}
          />
          <ListItem
            step={3}
            setCurrentStep={setCurrentStep}
            name="Messages Sent"
            currentStep={currentStep}
          />
        </ul>
        <section className="max-w-5xl w-full">{children}</section>
      </div>
    </DashboardLayout>
  );
}

export default AnalyticsLayout;

function ListItem({
  step,
  setCurrentStep,
  name,
  currentStep,
}: {
  step: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  currentStep: number;
}) {
  const [arrowState, setArrowState] = useState(false);
  const handleMouseEnter = () => setArrowState(true);
  const handleMouseLeave = () => setArrowState(false);

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div
        onClick={() => setCurrentStep(step)}
        className={`p-2 w-full cursor-pointer flex items-center justify-between text-sm no-underline hover:bg-white hover:text-primary ${
          step == currentStep
            ? "bg-white rounded-md text-primary"
            : "text-black/50"
        }`}
      >
        <span>{name}</span>
        <img
          src={arrow}
          className={`${
            step == currentStep || arrowState ? "block" : "hidden"
          }`}
        />
      </div>
    </li>
  );
}
