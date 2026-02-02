import { useEffect, useState } from "react";
import { Bell, User, Clock, Menu } from "lucide-react";

export default function Topbar({ onMenuClick }) {

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
    <header className="
      h-16
      bg-white
      shadow
      flex
      items-center
      px-3 sm:px-6
      relative
    ">

      {/* LEFT */}
      <div className="flex items-center gap-3">

        {/* Mobile */}
        <button
          onClick={onMenuClick}
          className="md:hidden text-blue-600"
        >
          <Menu size={22} />
        </button>

        {/* Title */}
        <h1 className="
          text-sm
          sm:text-lg
          font-semibold
          truncate
        ">
          Tata Motors Township
        </h1>

      </div>

      {/* CENTER CLOCK  */}
      <div className="
        hidden
        md:flex
        absolute
        left-1/2
        transform
        -translate-x-1/2
        items-center
        gap-2
        text-sm
        text-gray-600
      ">

        <Clock size={16} />

        <span className="font-medium">
          {time}
        </span>

      </div>

      {/* RIGHT */}
      <div className="ml-auto flex items-center gap-3 sm:gap-4">

        <Bell
          size={20}
          className="cursor-pointer hover:text-blue-600"
        />

        {/* User  */}
        <div className="flex items-center gap-2 cursor-pointer">

          <User size={18} />

          <span className="
            hidden
            sm:inline
            text-sm
            font-medium
          ">
            Admin
          </span>

        </div>

      </div>

    </header>
  );
}
