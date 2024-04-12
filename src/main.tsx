import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import ActiveUsers from "./pages/ActiveUsers.tsx";
import Analytics from "./pages/Analytics.tsx";
import App from "./pages/App.tsx";
import DailyReports from "./pages/DailyReports/index.tsx";
import ForgotPassword from "./pages/ForgotPassword.tsx";
import GroupRanking from "./pages/UserRanking/GroupRanking.tsx";
import GroupReports from "./pages/DailyReports/GroupReport.tsx";
import Retention from "./pages/Retention.tsx";
import RetentionJourney from "./pages/RetentionJourney.tsx";
import Reset from "./pages/Reset.tsx";
import Signin from "./pages/Signin.tsx";
import Signup from "./pages/Signup.tsx";
import UserRanking from "./pages/UserRanking/index.tsx";
import Waitlist from "./pages/Waitlist.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/active-users" element={<ActiveUsers />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/daily-reports" element={<DailyReports />} />
        <Route path="/daily-reports/groups" element={<GroupReports />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/user-ranking/groups" element={<GroupRanking />} />
        <Route path="/retention" element={<Retention />} />
        <Route path="/retention-journey" element={<RetentionJourney />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user-ranking" element={<UserRanking />} />
        <Route path="waitlist" element={<Waitlist />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
