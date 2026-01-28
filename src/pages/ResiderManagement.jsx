import { RefreshCw, Search } from "lucide-react";

export default function ResiderManagement() {
  return (
    <div className="space-y-6">

      {/* ====== Header ====== */}
      <div className="flex justify-between items-center">

        <h2 className="text-lg font-semibold text-gray-700">
          Gate Management &gt; <span className="text-black">Resider</span>
        </h2>

        <div className="flex items-center gap-3">

          <button className="px-4 py-1.5 border rounded-lg text-sm bg-white shadow">
            All Resident <span className="text-green-600">0 ✓</span>
          </button>

          <button className="px-4 py-1.5 border rounded-lg text-sm bg-white shadow">
            IN 0
          </button>

          <button className="px-4 py-1.5 border rounded-lg text-sm bg-white shadow text-red-600">
            OUT 0
          </button>

        </div>
      </div>


      {/* ====== Filters ====== */}
      <div className="bg-white rounded-xl shadow p-4 flex flex-wrap gap-4 items-end">

        <div>
          <label className="text-sm text-gray-500">
            Start Date
          </label>

          <input
            type="date"
            className="block border rounded-lg px-3 py-1.5 mt-1 text-sm"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">
            End Date
          </label>

          <input
            type="date"
            className="block border rounded-lg px-3 py-1.5 mt-1 text-sm"
          />
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
          FIND
        </button>

        <button className="bg-gray-100 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
          <RefreshCw size={16} />
          RESET
        </button>


        {/* Search */}
        <div className="ml-auto relative">

          <input
            placeholder="search..."
            className="border rounded-full pl-4 pr-10 py-2 text-sm"
          />

          <Search
            size={16}
            className="absolute right-3 top-2.5 text-gray-400"
          />

        </div>

      </div>


      {/* ====== Table ====== */}
      <div className="bg-white rounded-xl shadow overflow-hidden">


        {/* Table Header */}
        <div className="bg-blue-500 text-white text-sm px-4 py-3 grid grid-cols-10 gap-2 font-medium">

          <div>Sr. No</div>
          <div>Resident Name</div>
          <div>Contact No</div>
          <div>IN / OUT By</div>
          <div>Entry Time</div>
          <div>Exit Time</div>
          <div>Address</div>
          <div>IN / OUT</div>
          <div>Temp</div>
          <div>Mask</div>

        </div>


        {/* Empty State */}
        <div className="text-center py-10 text-gray-500 text-sm">

          No Residents

        </div>

      </div>

    </div>
  );
}
