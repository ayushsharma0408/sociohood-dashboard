import { useState } from "react";
import { Search } from "lucide-react";

export default function StaffManagement() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Dummy Data 
  const staffData = [
    {
      id: 1,
      name: "Pawan",
      phone: "8789588397",
      type: "Maid",
      createdBy: "Sociohood Official",
      createdTime: "30/12/2023 - 6:50 PM",
      entryTime: "30/12/2023 - 6:57 PM",
      exitTime: "30/12/2023 - 6:57 PM",
      flat: "10121",
      status: "OUT",
    },
  ];

  return (
    <div className="space-y-6 px-2 sm:px-4 md:px-0">

      {/* ================= HEADER ================= */}
      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Gate Management &gt; Staff
        </h2>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-4">

          {/* Start Date */}
          <div>
            <label className="text-sm text-gray-600">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="block border rounded px-3 py-2 mt-1 w-full sm:w-auto"
            />
          </div>

          {/* End Date */}
          <div>
            <label className="text-sm text-gray-600">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="block border rounded px-3 py-2 mt-1"
            />
          </div>

          {/* Buttons */}
          <button className="bg-blue-500 text-white px-4 py-2 text-sm w-full sm:w-auto rounded shadow hover:bg-blue-700">
            FIND
          </button>

          <button className="bg-gray-500 text-white px-4 py-2 text-sm w-full sm:w-auto rounded shadow hover:bg-gray-600">
            RESET
          </button>

          {/* Status Cards */}
          <div className="lg:ml-auto flex flex-wrap gap-3 justify-start sm:justify-end">

            <StatusCard label="All Staff" count={1} color="blue" />

            <StatusCard label="IN" count={0} color="green" />

            <StatusCard label="OUT" count={1} color="red" />

          </div>
        </div>
      </div>


      {/* ================= TABLE ================= */}
      <div className="bg-white rounded-xl shadow">

        {/* Search */}
        <div className="p-4 flex justify-center sm:justify-end">

          <div className="relative">

            <input
              type="text"
              placeholder="Search..."
              className="border rounded-full px-4 py-2 pl-10 w-full sm:w-64"
            />

            <Search
              size={18}
              className="absolute left-3 top-2.5 text-gray-400"
            />

          </div>

        </div>


        {/* Table */}
        <div className="overflow-x-auto">

          <table className="hidden md:table w-full border-collapse min-w-[1100px]">

            <thead className="bg-blue-500 text-white text-sm">

              <tr>

                <th className="px-4 py-3">Sr. No</th>
                <th>Staff Name</th>
                <th>Contact No</th>
                <th>Type</th>
                <th>Created By</th>
                <th>Creation Time</th>
                <th>Entry Time</th>
                <th>Exit Time</th>
                <th>Flat</th>
                <th>IN / OUT</th>

              </tr>

            </thead>


            <tbody>

              {staffData.map((staff, index) => (

                <tr
                  key={staff.id}
                  className="border-b hover:bg-gray-50 text-sm text-center"
                >

                  <td className="py-3">{index + 1}</td>

                  <td className="flex items-center gap-2 justify-center py-3">

                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-gray-700">
                      {staff.name[0]}
                    </div>

                    {staff.name}

                  </td>

                  <td>{staff.phone}</td>

                  <td>{staff.type}</td>

                  <td>
                    {staff.createdBy}
                    <span className="ml-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded">
                      Guard
                    </span>
                  </td>

                  <td>{staff.createdTime}</td>

                  <td>{staff.entryTime}</td>

                  <td>{staff.exitTime}</td>

                  <td>
                    <span className="text-green-600 font-semibold">
                      ✔ {staff.flat}
                    </span>
                  </td>

                  <td>

                    {staff.status === "OUT" ? (

                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded text-xs font-medium">
                        OUT
                      </span>

                    ) : (

                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded text-xs font-medium">
                        IN
                      </span>

                    )}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}


/* ================= STATUS CARD ================= */

function StatusCard({ label, count, color }) {

  const colors = {
    blue: "border-blue-500 text-blue-600",
    green: "border-green-500 text-green-600",
    red: "border-red-500 text-red-600",
  };

  return (
    <div
      className={`border-2 ${colors[color]} rounded-lg px-4 py-2 text-center min-w-[80px] sm:min-w-[100px] bg-white shadow`}
    >
      <p className="text-xs">{label}</p>
      <p className="font-bold">{count}</p>
    </div>
  );
}
