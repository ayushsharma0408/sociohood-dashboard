import { useState } from "react";
import { Plus, RotateCcw } from "lucide-react";

export default function GateSettings() {

  const [activeTab, setActiveTab] = useState("guards");

  return (
    <div className="space-y-6">


      {/* ================= TABS ================= */}
      <div className="bg-blue-500 rounded-xl p-1 flex overflow-x-auto whitespace-nowrap">

        <button
          onClick={() => setActiveTab("guards")}
          className={`min-w-[120px] px-4 py-2 rounded-lg font-medium transition
          ${
            activeTab === "guards"
              ? "bg-white text-[#2f3699]"
              : "text-white"
          }`}
        >
          All Guards
        </button>

        <button
          onClick={() => setActiveTab("visitor")}
          className={`min-w-[120px] px-4 py-2 rounded-lg font-medium transition
          ${
            activeTab === "visitor"
              ? "bg-white text-[#2f3699]"
              : "text-white"
          }`}
        >
          Visitor Type
        </button>

        <button
          onClick={() => setActiveTab("staff")}
          className={`min-w-[120px] px-4 py-2 rounded-lg font-medium transition
          ${
            activeTab === "staff"
              ? "bg-white text-[#2f3699]"
              : "text-white"
          }`}
        >
          Staff Type
        </button>

      </div>


      {/* ================= ALL GUARDS ================= */}
      {activeTab === "guards" && (

        <div className="space-y-4">


          {/* HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

            <div className="flex items-center gap-2 text-gray-600 font-medium">

              <span>All Guards</span>

              <RotateCcw
                size={16}
                className="cursor-pointer hover:rotate-180 transition"
              />

            </div>


            <button className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 text-sm rounded shadow hover:bg-blue-700 transition">

              <Plus size={16} />
              Add

            </button>

          </div>


          {/* TABLE */}
          <div className="bg-white rounded-xl shadow border overflow-hidden">

            <div className="overflow-x-auto">

              {/* HEADER */}
              <div className="grid grid-cols-8 min-w-[900px] bg-blue-500 text-white text-sm font-medium px-4 py-3">

                <div>Sr No.</div>
                <div>Created Date</div>
                <div>Name</div>
                <div>Email</div>
                <div>Contact</div>
                <div>Gate No.</div>
                <div>Guard Type</div>
                <div>Action</div>

              </div>


              {/* ROW */}
              <div className="grid grid-cols-8 min-w-[900px] px-4 py-4 text-sm border-t items-center">

                <div>1.</div>
                <div>28/12/2023</div>
                <div>Sociohood Official</div>
                <div>-</div>
                <div>9155518797</div>
                <div>1</div>
                <div>S2</div>

                <div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-xs font-medium">
                    Approved
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      )}


      {/* ================= VISITOR TYPE ================= */}
      {activeTab === "visitor" && (

        <div className="space-y-4">


          {/* HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

            <div className="flex items-center gap-2 text-gray-600 font-medium">

              <span>Visitor Type</span>

              <RotateCcw
                size={16}
                className="cursor-pointer hover:rotate-180 transition"
              />

            </div>


            <button className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 text-sm rounded shadow hover:bg-blue-700 transition">

              <Plus size={16} />
              Add

            </button>

          </div>


          {/* TABLE */}
          <div className="bg-white rounded-xl shadow border overflow-hidden">

            <div className="overflow-x-auto">

              {/* HEADER */}
              <div className="grid grid-cols-2 min-w-[300px] bg-blue-500 text-white text-sm font-medium px-4 py-3">

                <div>Sr No.</div>
                <div>Name</div>

              </div>


              {/* ROW */}
              <div className="grid grid-cols-2 min-w-[300px] px-4 py-4 text-sm border-t">

                <div>1.</div>
                <div>Guest</div>

              </div>

            </div>

          </div>

        </div>
      )}


      {/* ================= STAFF TYPE ================= */}
      {activeTab === "staff" && (

        <div className="space-y-4">


          {/* HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

            <div className="flex items-center gap-2 text-gray-600 font-medium">

              <span>Staff Type</span>

              <RotateCcw
                size={16}
                className="cursor-pointer hover:rotate-180 transition"
              />

            </div>


            <button className="flex items-center gap-2 bg-blue-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 text-sm rounded shadow hover:bg-blue-700 transition">

              <Plus size={16} />
              Add

            </button>

          </div>


          {/* TABLE */}
          <div className="bg-white rounded-xl shadow border overflow-hidden">

            <div className="overflow-x-auto">

              {/* HEADER */}
              <div className="grid grid-cols-2 min-w-[300px] bg-blue-500 text-white text-sm font-medium px-4 py-3">

                <div>Sr No.</div>
                <div>Name</div>

              </div>


              {/* ROW */}
              <div className="grid grid-cols-2 min-w-[300px] px-4 py-4 text-sm border-t">

                <div>1.</div>
                <div>Maid</div>

              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
