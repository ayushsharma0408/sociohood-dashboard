import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  LayoutGrid,
  MessageSquare,
  BarChart3,
  Megaphone,
  Users,
  Building2,
  Settings,
  HelpCircle,
  BookUser,
  ChevronDown,
  Menu,
  Headphones,
  FileText,
  Star,
  CheckCircle,
  Layers,
  Sliders,
  BarChart2,
  UserPlus,
  UserCheck,
  Home,
  Group,
  Building,
  LifeBuoy,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export default function DesktopSidebar() {
  const [open, setOpen] = useState(true);
  const [openMenu, setOpenMenu] = useState(null);
  const [hoverMenu, setHoverMenu] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  /* ================= MENUS ================= */

  const menus = [
    {
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/",
    },

    {
      name: "Complaints",
      icon: MessageSquare,
      sub: [
        { name: "Helpdesk", path: "/helpdesk", icon: Headphones },
        { name: "All Complaints", path: "/complaints", icon: FileText },
        { name: "Ratings", path: "/ratings", icon: Star },
        { name: "Approvals", path: "/approvals", icon: CheckCircle },
        { name: "Complaint Levels", path: "/levels", icon: Layers },
        { name: "Configuration", path: "/config", icon: Sliders },
      ],
    },

    {
      name: "MIS Dashboard",
      icon: BarChart3,
      sub: [
        { name: "Complaint Dashboard", path: "/mis", icon: BarChart2 },
        { name: "Assigned Report", path: "/mis/assigned", icon: UserCheck },
        { name: "Closed Report", path: "/mis/closed", icon: CheckCircle },
        { name: "Cancelled Report", path: "/mis/cancelled", icon: Layers },
        { name: "Vendor Analytics", path: "/mis/vendor", icon: TrendingUp },
      ],
    },

    {
      name: "Communication",
      icon: Megaphone,
      sub: [
        { name: "Notice", path: "/notice", icon: FileText },
      ],
    },

    {
      name: "People",
      icon: Users,
      sub: [
        { name: "Users", path: "/users", icon: UserPlus },
      ],
    },

    {
      name: "Society Management",
      icon: Users,
      sub: [
        { name: "Society Manage",path:"/manage", icon: Building},
        { name: "Level", path: "/level", icon: Layers},
        { name: "Level Data", path: "/data", icon: BarChart2},
      ],
    },

    {
      name: "Gate Management",
      icon: Building2,
      sub: [
        { name: "Visitor", path: "/visitor", icon: UserPlus },
        { name: "Staff", path: "/staff", icon: UserCheck },
        { name: "Resider", path: "/resider", icon: Home },
        { name: "Settings", path: "/gate-settings", icon: Settings },
      ],
    },

    {
      name: "Settings",
      icon: Settings,
      sub: [
        { name: "Grouping", path: "/grouping", icon: Group},
        { name: "Role", path: "/role", icon: UserCheck },
        { name: "Token", path: "/token", icon: FileText },
      ],
    },

    {
      name: "Help Management",
      icon: HelpCircle,
      sub: [
        { name: "Add FAQ", path: "/faq", icon: FileText },
        { name: "Help Center", path: "/helpcenter", icon: LifeBuoy},
      ],
    },

    {
      name: "Contact Book",
      icon: BookUser,
      sub: [
        { name: "Directory", path: "/directory", icon: BookOpen},
      ]
    },
  ];

  /* ================= UI ================= */

  return (
    <aside
      className={`
        ${open ? "w-[280px]" : "w-[70px]"}
        bg-white
        border-r border-blue-200
        h-screen
        shrink-0
        flex flex-col
        transition-all duration-300
        relative
      `}
    >
      {/* ================= TOP ================= */}
      <div className="h-16 flex items-center px-4 border-b border-blue-200">

        <div className="flex items-center gap-3">

          <div
            onClick={() => setOpen(!open)}
            className="w-9 h-9 flex items-center justify-center
            border-2 border-blue-500 rounded cursor-pointer
            hover:bg-blue-50"
          >
            <Menu size={18} className="text-blue-500" />
          </div>

          {open && (
            <h1 className="text-xl font-bold text-blue-500">
              SocioHood
            </h1>
          )}

        </div>

      </div>


      {/* ================= MENU ================= */}
      <nav className="flex-1 py-3 relative overflow-y-auto">

        {menus.map((item) => {

          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => !open && setHoverMenu(item.name)}
              onMouseLeave={() => setHoverMenu(null)}
            >

              {/* MAIN ITEM */}
              <div
                onClick={() => {

                  if (item.path) navigate(item.path);

                  if (item.sub && open) {
                    setOpenMenu(
                      openMenu === item.name ? null : item.name
                    );
                  }

                }}
                className={`
                  flex items-center justify-between
                  px-4 py-3 mx-2 rounded-lg cursor-pointer
                  transition

                  ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                  }
                `}
              >

                <div className="flex items-center gap-3">

                  {/* MAIN ICON */}
                  <Icon size={20} />

                  {open && (
                    <span className="text-sm font-medium">
                      {item.name}
                    </span>
                  )}

                </div>


                {item.sub && open && (
                  <ChevronDown
                    size={16}
                    className={`transition text-blue-500 ${
                      openMenu === item.name ? "rotate-180" : ""
                    }`}
                  />
                )}

              </div>


              {/* SUB MENU (OPEN MODE) */}
              {open && item.sub && openMenu === item.name && (

                <div className="bg-blue-50 mx-4 rounded-lg my-1 border border-blue-100">

                  {item.sub.map((sub) => {

                    const SubIcon = sub.icon;
                    const isSubActive =
                      location.pathname === sub.path;

                    return (

                      <div
                        key={sub.name}
                        onClick={() => navigate(sub.path)}
                        className={`
                          flex items-center gap-3
                          pl-6 py-2 text-sm rounded cursor-pointer

                          ${
                            isSubActive
                              ? "bg-blue-100 text-blue-600 font-semibold"
                              : "text-gray-700 hover:bg-blue-100"
                          }
                        `}
                      >

                        {/* SUB ICON */}
                        {SubIcon && <SubIcon size={16} />}

                        <span>{sub.name}</span>

                      </div>

                    );
                  })}

                </div>

              )}


              {/* HOVER MENU (CLOSED MODE) */}
              {!open && item.sub && hoverMenu === item.name && (

                <div
                  className="
                    absolute
                    left-[75px]
                    top-0
                    bg-white
                    shadow-xl
                    rounded-xl
                    w-56
                    z-50
                    p-2
                    border border-blue-100
                  "
                >

                  <div className="text-blue-500 font-semibold px-3 py-2 border-b">
                    {item.name}
                  </div>

                  {item.sub.map((sub) => {

                    const SubIcon = sub.icon;

                    return (

                      <div
                        key={sub.name}
                        onClick={() => navigate(sub.path)}
                        className="
                          flex items-center gap-3
                          px-3 py-2 rounded
                          hover:bg-blue-50
                          cursor-pointer
                          text-sm text-gray-700
                        "
                      >

                        {/* SUB ICON */}
                        {SubIcon && <SubIcon size={16} />}

                        <span>{sub.name}</span>

                      </div>

                    );
                  })}

                </div>

              )}

            </div>
          );
        })}

      </nav>

    </aside>
  );
}
