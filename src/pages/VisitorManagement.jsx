import { useState } from "react";
import { Search, RotateCcw } from "lucide-react";

export default function VisitorManagement() {
  const [search, setSearch] = useState("");

  const visitors = [
    {
      id: 1,
      name: "Ayush",
      phone: "9494949449",
      type: "Guest",
      created: "29/12/2023 - 1:38 PM",
      flat: "10121",
      status: "Allowed",
      temp: "98°F",
    },
    {
      id: 2,
      name: "Vaibhav",
      phone: "8464466464",
      type: "Guest",
      created: "29/12/2023 - 1:37 PM",
      flat: "10121",
      status: "Allowed",
      temp: "98°F",
    },
    {
      id: 3,
      name: "Sharma",
      phone: "9464646464",
      type: "Guest",
      created: "29/12/2023 - 1:33 PM",
      flat: "P2312",
      status: "Not Allowed",
      temp: "98°F",
    },
  ];

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">

      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between">

        <h1 className="text-xl font-semibold text-gray-800">
          Gate Management &gt; Visitor
        </h1>

        <div className="flex gap-3">

          <button className="px-4 py-1 rounded border border-blue-500 text-blue-600 bg-white">
            All Visitor 3
          </button>

          <button className="px-4 py-1 rounded border border-green-500 text-green-600 bg-white">
            IN 0
          </button>

          <button className="px-4 py-1 rounded border border-red-500 text-red-600 bg-white">
            OUT 0
          </button>

        </div>
      </div>


      {/* ================= FILTER ================= */}
      <div className="bg-white p-4 rounded-lg shadow flex flex-wrap items-center gap-4">

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Start Date</span>
          <input
            type="date"
            className="border px-3 py-1 rounded text-sm"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">End Date</span>
          <input
            type="date"
            className="border px-3 py-1 rounded text-sm"
          />
        </div>

        <button className="bg-blue-600 text-white px-4 py-1 rounded text-sm">
          FIND
        </button>

        <button className="bg-gray-200 px-4 py-1 rounded text-sm flex items-center gap-1">
          <RotateCcw size={14} />
          RESET
        </button>

        {/* Search */}
        <div className="ml-auto relative">

          <Search
            size={16}
            className="absolute left-3 top-2.5 text-gray-400"
          />

          <input
            type="text"
            placeholder="search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border pl-9 pr-3 py-1 rounded text-sm"
          />
        </div>

      </div>


      {/* ================= TABLE ================= */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="bg-blue-500 text-white">

            <tr>
              <th className="p-3 text-left">Sr. No</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Type</th>
              <th>Creation Time</th>
              <th>Flat</th>
              <th>IN / OUT</th>
              <th>Temp</th>
            </tr>

          </thead>

          <tbody>

            {visitors
              .filter((v) =>
                v.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((v, i) => (

                <tr
                  key={v.id}
                  className="border-b hover:bg-blue-50"
                >

                  <td className="p-3">{i + 1}</td>

                  <td>{v.name}</td>

                  <td>{v.phone}</td>

                  <td>{v.type}</td>

                  <td>{v.created}</td>

                  <td className="font-medium">{v.flat}</td>

                  <td>
                    {v.status === "Allowed" ? (
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                        ALLOWED
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">
                        NOT ALLOWED
                      </span>
                    )}
                  </td>

                  <td>{v.temp}</td>

                </tr>

              ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}
