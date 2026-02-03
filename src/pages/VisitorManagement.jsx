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
    <div className="space-y-6 px-2 sm:px-4 md:px-0">

      {/* ================= HEADER ================= */}
      <div className="bg-white rounded-xl shadow p-5">

        <h1 className="ext-lg font-semibold text-black-700 mb-4">
          Gate Management &gt; Visitor
        </h1>

        <div className="flex flex-wrap gap-2">

          <button className="px-3 py-1.5 rounded border border-blue-500 text-blue-600 bg-white text-xs sm:text-sm">
            All Visitor 3
          </button>

          <button className="px-3 py-1.5 rounded border border-green-500 text-green-600 bg-white text-xs sm:text-sm">
            IN 0
          </button>

          <button className="px-3 py-1.5 rounded border border-red-500 text-red-600 bg-white text-xs sm:text-sm">
            OUT 0
          </button>

        </div>
      </div>


      {/* ================= FILTER ================= */}
      <div className="flex flex-col lg:flex-row lg:items-end gap-4">

        {/* Start Date */}
        <div className="text-sm text-black-600 bold">
          <span className="text-sm font-medium whitespace-nowrap">
            Start Date
          </span>

          <input
            type="date"
            className="block border rounded px-3 py-2 mt-1  sm:w-auto"
          />
        </div>


        {/* End Date */}
        <div className="text-sm text-black600">
          <span className="text-sm font-medium whitespace-nowrap">
            End Date
          </span>

          <input
            type="date"
            className="block border rounded px-3 py-2 mt-1  sm:w-auto"
          />
        </div>


        {/* Buttons */}
        <div className="bg-white rounded-xl shadow p-5 ">

          <button className="bg-blue-500 text-white px-6 py-2 text-sm  sm:w-auto rounded shadow hover:bg-blue-700">
            FIND
          </button>

          <button className="bg-gray-500 text-white px-6 py-2 text-sm  sm:w-auto rounded shadow hover:bg-gray-600">
            
            RESET
          </button>

        </div>


        {/* Search */}
        <div className="relative w-full sm:w-60 sm:ml-auto">

          <Search
            size={16}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            type="text"
            placeholder="search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border pl-9 pr-3 py-2 rounded text-sm w-full"
          />
        </div>

      </div>


      {/* ================= TABLE ================= */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">

        <div className="min-w-[900px]">

          <table className="w-full text-sm">

            {/* Sticky Header */}
            <thead className="bg-blue-500 text-white sticky top-0 z-10">

              <tr>
                <th className="p-2 sm:p-3 text-left">Sr. No</th>
                <th className="p-2 sm:p-3">Name</th>
                <th className="p-2 sm:p-3">Phone</th>
                <th className="p-2 sm:p-3">Type</th>
                <th className="p-2 sm:p-3 hidden md:table-cell">Creation Time</th>
                <th className="p-2 sm:p-3 hidden sm:table-cell">Flat</th>
                <th className="p-2 sm:p-3">IN / OUT</th>
                <th className="p-2 sm:p-3 hidden sm:table-cell">Temp</th>
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

                    <td className="p-2 sm:p-3">{i + 1}</td>

                    <td className="p-2 sm:p-3">{v.name}</td>

                    <td className="p-2 sm:p-3">{v.phone}</td>

                    <td className="p-2 sm:p-3">{v.type}</td>

                    <td className="p-2 sm:p-3 hidden md:table-cell">
                      {v.created}
                    </td>

                    <td className="p-2 sm:p-3 hidden sm:table-cell font-medium">
                      {v.flat}
                    </td>

                    <td className="p-2 sm:p-3">
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

                    <td className="p-2 sm:p-3 hidden sm:table-cell">
                      {v.temp}
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
