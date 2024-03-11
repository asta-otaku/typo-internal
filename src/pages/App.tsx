import DashboardLayout from "../layout/DashboardLayout";

function App() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8 items-center justify-center h-screen">
        <h1 className="text-3xl font-medium">Welcome to the Dashboard</h1>
        <p>Check Retentio, Daily Reports, User, Active Users and Waitlist</p>
        <p>Tomorrow I will continue from User Ranking</p>
      </div>
    </DashboardLayout>
  );
}

export default App;
