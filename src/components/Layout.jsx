// import { useState, useEffect } from "react";
// import { Outlet } from "react-router-dom";

// import Sidebar from "./Sidebar";
// import Topbar from "./Topbar";

// export default function Layout() {

//   // Control sidebar here
//   const [sidebarOpen, setSidebarOpen] = useState(
//     window.innerWidth >= 768
//   );

//   // Auto resize
//   useEffect(() => {

//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setSidebarOpen(true);
//       } else {
//         setSidebarOpen(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     return () =>
//       window.removeEventListener("resize", handleResize);

//   }, []);

//   return (
//     <div className="flex h-screen overflow-hidden">

//       {/* SIDEBAR */}
//       <Sidebar
//         open={sidebarOpen}
//         setOpen={setSidebarOpen}
//       />

//       {/* MAIN AREA */}
//       <div className="flex-1 flex flex-col">

//         {/* TOPBAR */}
//         <Topbar onMenuClick={() => setSidebarOpen(true)} />

//         {/* CONTENT */}
//         <main className="flex-1 overflow-y-auto bg-gray-50 p-2 sm:p-4">
//           <Outlet />
//         </main>

//       </div>

//     </div>
//   );
// }
