import MiniDashboardChart from "./MiniDashboardChart";

export default function MiniDashboard() {
  const stats = {
    assigned: 864,
    closed: 2106,
    cancel: 184,
    unassigned: 0,
    resolved: 0,
    reopened: 0,
  };

  const cards = [
    { title: "Assigned", value: stats.assigned, color: "border-blue-500" },
    { title: "Closed", value: stats.closed, color: "border-red-500" },
    { title: "Cancel", value: stats.cancel, color: "border-pink-500" },
    { title: "Unassigned", value: stats.unassigned, color: "border-gray-400" },
    { title: "Resolved", value: stats.resolved, color: "border-green-500" },
    { title: "Reopened", value: stats.reopened, color: "border-indigo-500" },
  ];

  return (
    <div className="w-full space-y-6">

      {/* Title */}
      <h2 className="text-lg font-semibold">
        Mini Dashboard For January
      </h2>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">

        {cards.map((item, i) => (
          <div
            key={i}
            className={`bg-white rounded-lg shadow p-4 border-l-4 ${item.color}`}
          >
            <p className="text-gray-500 text-sm">{item.title}</p>
            <h3 className="text-2xl font-bold mt-1">{item.value}</h3>
          </div>
        ))}

      </div>

      {/* Chart */}
      <MiniDashboardChart stats={stats} />

    </div>
  );
}
