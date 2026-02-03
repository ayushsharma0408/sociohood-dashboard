import { RefreshCw, Search } from "lucide-react";

export default function ResiderManagement() {
  return (
    <div className="space-y-6 px-2 sm:px-4 md:px-0">

      {/* ====== Header ====== */}
      <div className="bg-white rounded-xl shadow p-5">

        <h2 className="text-lg font-semibold text-black-700 mb-4">
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
      <div className="flex flex-col lg:flex-row lg:items-end gap-4">

        <div className="text-sm text-black-600 ">
          <span className="text-sm font-medium whitespace-nowrap">
            Start Date
          </span>

          <input
            type="date"
            className="block border rounded px-3 py-2 mt-1  sm:w-auto"
          />
        </div>

        <div className="text-sm text-black-600">
          <span className="text-sm font-medium whitespace-nowrap">
            End Date
          </span>

          <input
            type="date"
            className="block border rounded px-3 py-2 mt-1  sm:w-auto"
          />
        </div>

        <div className="bg-white rounded-xl shadow p-5">
        <button className="bg-blue-500 text-white px-6 py-2 text-sm  sm:w-auto rounded shadow hover:bg-blue-700">
          FIND
        </button>

        <button className="bg-gray-500 text-white px-6 py-2 text-sm  sm:w-auto rounded shadow hover:bg-gray-600">
        
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
