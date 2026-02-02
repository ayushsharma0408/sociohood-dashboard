import { RefreshCw, Search } from "lucide-react";

export default function ResiderManagement() {
  return (
    <div className="space-y-6 px-2 sm:px-4 md:px-0">

      {/* ====== Header ====== */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">

        <h2 className="text-base sm:text-lg font-semibold text-gray-700 truncate">
          Gate Management &gt; <span className="text-black">Resider</span>
        </h2>

        <div className="flex items-center gap-2">

          <button className="px-3 py-1 border rounded-lg text-xs sm:text-sm bg-white shadow">
            All Resident <span className="text-green-600">0 ✓</span>
          </button>

          <button className="px-3 py-1 border rounded-lg text-xs sm:text-sm bg-white shadow">
            IN 0
          </button>

          <button className="px-3 py-1 border rounded-lg text-sm sm:text-sm bg-white shadow text-red-600">
            OUT 0
          </button>

        </div>
      </div>


      {/* ====== Filters ====== */}
      <div className="bg-white rounded-xl shadow p-3 sm:p-4 flex flex- col sm:flex-row flex-wrap gap-3 item-start sm:items-end">

        <div className="w-full sm:auto">
          <label className="text-sm text-gray-500">
            Start Date
          </label>

          <input
            type="date"
            className="block border rounded-lg px-3 py-1.5 mt-1 text-sm w-full"
          />
        </div>

        <div className="w-full sm:w-auto">
          <label className="text-sm text-gray-500">
            End Date
          </label>

          <input
            type="date"
            className="block border rounded-lg px-3 py-1.5 mt-1 text-sm w-full"
          />
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm flex-1 sm:flex-none">
          FIND
        </button>

        <button className="bg-gray-100 px-4 py-2 rounded-lg text-sm flex items-center gap-2 flex-1 sm:flex-none">
          <RefreshCw size={16} />
          RESET
        </button>
        </div>


        {/* Search */}
        <div className="sm:ml-auto w-full sm:w-60 relative">

          <input
            placeholder="search..."
            className="border rounded-full pl-4 pr-10 py-2 text-sm w-full"
          />

          <Search
            size={16}
            className="absolute right-3 top-2.5 text-gray-400"
          />

        </div>

      </div>


      {/* ====== Table ====== */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="overflow-x-auto">


        {/* Table Header */}
        <div className="bg-blue-500 text-white text-sm px-4 py-3 grid grid-cols-10 min-w-[1000px] gap-2 font-medium">

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
        </div>


        {/* Empty State */}
        <div className="text-center p-6 sm:py-10 text-gray-500 text-sm">

          No Residents

        </div>

      </div>

    </div>
  );
}
