import RecentComplaints from "../components/RecentComplaints";
import MiniDashboard from "../components/MiniDashboard";
import QuickActions from "../components/QuickActions";

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-8">

      {/* ================= TOP SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

        {/* ========== LEFT SIDE ========== */}
        <div className="lg:col-span-3 space-y-6">

          {/* Welcome Card */}
          <div className="bg-white rounded-xl lg:px-12 lg:py-16 sm:px-8 sm:py10 min-h-[220px] lg:min-h[280] flex items-center">

            <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-6">

              {/* Left Text */}
              <div className="max-w-xl space-y-3 text-center lg:text-left">

                <h1 className="text-xl sm:text-base font-bold text-gray-600 leading-relaxed">
                  Welcome, Sociohood Technologies
                </h1>

                <p className="text-gray-600 leading-relaxed">
                  Track, manage, and resolve your issues with ease.
                  Stay updated on every step, from submission to resolution.
                </p>

                <button className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
                  Get Started
                </button>

              </div>

              {/* Right Illustration  */}
              <div className="hidden md:block">
                
              </div>

            </div>

          </div>

          {/* Wave */}
          <div className="relative -mt-10">
            <svg
              viewBox="0 0 1440 120"
              className="w-full"
              preserveAspectRatio="none"
            >
              <path
                fill="#2563eb"
                d="M0,32L60,48C120,64,240,96,360,96C480,96,600,64,720,58.7C840,53,960,75,1080,74.7C1200,75,1320,53,1380,42.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              />
            </svg>
          </div>

          {/* Quick Actions */}
          <QuickActions />

        </div>

        {/* ========== RIGHT SIDE ========== */}
        <div className="lg:col-span-2">
          <RecentComplaints />
        </div>

      </div>

      {/* MINI DASHBOARD */}
      <MiniDashboard />

    </div>
  );
}
