import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import DesktopSidebar from "./components/DesktopSidebar";
import MobileSidebar from "./components/MobileSidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./pages/Dashboard";
import VisitorManagement from "./pages/VisitorManagement";
import StaffManagement from "./pages/StaffManagement";
import ResiderManagement from "./pages/ResiderManagement";
import GateSettings from "./pages/GateSettings";
import Notice from "./pages/Notice";

import { dummyComplaints } from "./data/complaints";

export default function App() {

  /* Mobile sidebar state */
  const [mobileOpen, setMobileOpen] = useState(false);


  /* Save dummy data */
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


      {/* Desktop Sidebar */}
      <div className="hidden md:block">

        <DesktopSidebar />

      </div>


      {/* Mobile Sidebar */}
      <div className="md:hidden">

        <MobileSidebar
          open={mobileOpen}
          setOpen={setMobileOpen}
        />

      </div>


      {/* Main Area */}
      <div className="flex-1 flex flex-col">


        {/* Topbar */}
        <Topbar onMenuClick={() => setMobileOpen(true)} />


        {/* Pages */}
        <main className="flex-1 p-3 sm:p-6 overflow-y-auto">

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

            <Route
              path="/resider"
              element={<ResiderManagement />}
            />

            <Route
              path="/gate-settings"
              element={<GateSettings />}
            />

            <Route
              path="/notice"
              element={<Notice />}
            />

          </Routes>

        </main>

      </div>

    </div>

  );
}
