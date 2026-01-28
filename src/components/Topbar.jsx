import { useEffect, useState } from "react";
import { Bell, User, Clock } from "lucide-react";

export default function Topbar() {

  const [time, setTime] = useState("");

  useEffect(() => {

    function updateTime() {
      const now = new Date();

      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      const dateString = now.toLocaleDateString("en-US");

      setTime(`${timeString}, ${dateString}`);
    }

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);

  }, []);

  return (
    <header className="h-16 bg-white shadow flex items-center px-6 relative">

      {/* Left */}
      <h1 className="text-lg font-semibold">
        Tata Motors Township
      </h1>

      {/* Center Clock */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-sm text-gray-600">

        <Clock size={16} />

        <span className="font-medium">
          {time}
        </span>

      </div>

      {/* Right */}
      <div className="ml-auto flex items-center gap-4">

        <Bell className="cursor-pointer hover:text-blue-600" />

        <div className="flex items-center gap-2 cursor-pointer">

          <User size={18} />

          <span className="text-sm font-medium">
            Admin
          </span>

        </div>

      </div>

    </header>
  );
}
