import { useState } from "react";
import AnalyticsLayout from "../layout/AnalyticsLayout";
import ScreenTime from "../components/Analytics/ScreenTime";
import CrashReport from "../components/Analytics/CrashReport";
import MessagesSent from "../components/Analytics/MessagesSent";

function Analytics() {
  const [currentStep, setCurrrentStep] = useState(1);
  return (
    <AnalyticsLayout currentStep={currentStep} setCurrentStep={setCurrrentStep}>
      {
        {
          1: <ScreenTime />,
          2: <CrashReport />,
          3: <MessagesSent />,
        }[currentStep]
      }
    </AnalyticsLayout>
  );
}

export default Analytics;
