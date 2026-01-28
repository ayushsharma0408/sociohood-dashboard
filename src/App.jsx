import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./pages/Dashboard";
import VisitorManagement from "./pages/VisitorManagement";
import StaffManagement from "./pages/StaffManagement";
import ResiderManagement from "./pages/ResiderManagement";
import GateSettings from "./pages/GateSettings";

import { dummyComplaints } from "./data/complaints";

export default function App() {

  // Save dummy data once
  useEffect(() => {
    if (!localStorage.getItem("complaints")) {
      localStorage.setItem(
        "complaints",
        JSON.stringify(dummyComplaints)
      );
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <Topbar />

        {/* Pages */}
        <main className="flex-1 p-6 overflow-y-auto">

          <Routes>

            <Route path="/" element={<Dashboard />} />

            <Route
              path="/visitor"
              element={<VisitorManagement />}
            />

            <Route
              path="/staff"
              element={<StaffManagement />}
            />

            <Route path="/resider" 
            element={<ResiderManagement />} 
            />

            <Route path="/gate-settings"
             element={<GateSettings />} 
            />

          </Routes>

        </main>

      </div>

    </div>
  );
}
