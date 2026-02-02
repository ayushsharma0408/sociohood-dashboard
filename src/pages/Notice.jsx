import { useState } from "react";

import {
    Calendar,
    Eye,
    Users,
    Plus,
    Upload,
    X,
} from "lucide-react";

export default function Notice() {

    /* ================= STATE ================= */

    const [activeTab, setActiveTab] = useState("all");
    const [openModal, setOpenModal] = useState(false);

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");


    /* ================= TABS ================= */

    const tabs = [
        { id: "all", name: "All Notices", count: 39 },
        { id: "published", name: "Published", count: 31 },
        { id: "draft", name: "Draft", count: 2 },
        { id: "delete", name: "Delete", count: 6 },
    ];


    /* ================= DUMMY DATA ================= */

    const notices = [
        {
            id: 1,
            title: "Complete raw water shutdown on 29th January,2026",
            author: "Lincon Deb",
            date: "28/01/2026 - 06:54 PM",
            status: "Draft",
            views: 335,
            total: 5717,
        },
        {
            id: 2,
            title: "Complete raw water shutdown on 29th January,2026",
            author: "Lincon Deb",
            date: "28/01/2026 - 06:53 PM",
            status: "Published",
            views: 121,
            total: 5717,
        },
        {
            id: 3,
            title: "Temporary Disruption in Water Supply M-Type Building",
            author: "Nitesh Kumar",
            date: "21/01/2026 - 10:03 PM",
            status: "Published",
            views: 3,
            total: 41,
        },
        {
            id: 4,
            title: "POWER SHUTDOWN",
            author: "Sudipto Sinha",
            date: "20/01/2026 - 06:20 PM",
            status: "Published",
            views: 518,
            total: 5718,
        },
    ];


    return (

        <div className="p-6 bg-gray-100 min-h-screen">


            {/* ================= HEADER ================= */}

            <div className="mb-6 flex flex-col lg:flex-row lg:justify-between lg:items-center  gap-3">


                {/* LEFT */}
                <h2 className="text-xl font-semibold text-gray-700">

                    Communication &gt;
                    <span className="text-blue-600 ml-2">
                        Notice
                    </span>

                </h2>


                {/* RIGHT FILTER */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-2 w-full lg:w-auto">


                    {/* Notice Type */}
                    <select className="border rounded px-3 py-1.5 text-sm bg-white">

                        <option>All Notice Types</option>
                        <option>Important</option>
                        <option>Normal</option>

                    </select>


                    {/* Start Date */}
                    <div className="flex items-center border rounded px-2 py-1 bg-white">

                        <Calendar size={16} className="text-gray-500" />

                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="outline-none px-2 text-sm"
                        />

                    </div>


                    {/* End Date */}
                    <div className="flex items-center border rounded px-2 py-1 bg-white">

                        <Calendar size={16} className="text-gray-500" />

                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="outline-none px-2 text-sm"
                        />

                    </div>


                    {/* Search */}
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm w-full">
                        Search
                    </button>


                </div>


            </div>



            {/* ================= FILTER BAR ================= */}

            <div className="flex justify-between items-center mb-6 gap-3 flex-wrap">



            </div>



            {/* ================= TABS + ADD NOTICE ================= */}

            <div className="flex justify-between items-center mb-5 flex-wrap gap-3">


                {/* LEFT: TABS */}
                <div className="flex gap-3 overflow-x-auto pb-2">


                    {tabs.map((tab) => (

                        <div
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
          px-5 py-3 rounded-lg border cursor-pointer transition min-w-[140px] shrink-0
          ${activeTab === tab.id
                                    ? "border-blue-600 bg-blue-50"
                                    : "bg-white hover:border-blue-400"
                                }
        `}
                        >

                            <h3 className="font-semibold text-gray-700">
                                {tab.name}
                            </h3>

                            <p className="text-blue-600 font-bold">
                                {tab.count}
                            </p>

                        </div>

                    ))}

                </div>


                {/* RIGHT: ADD BUTTON */}
                <button
                    onClick={() => setOpenModal(true)}
                    className="
      bg-blue-600
      hover:bg-blue-700
      text-white
      px-5
      py-2.5
      rounded
      text-sm
      flex
      items-center
      gap-2
      w-full
      lg:w-auto
      shrink-0
    "
                >
                    <Plus size={16} />
                    Add Notice
                </button>


            </div>





            {/* ================= NOTICE CARDS ================= */}

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-col-3 gap-4">


                {notices.map((item) => (

                    <div
                        key={item.id}
                        className="bg-white rounded-xl shadow p-4"
                    >


                        {/* IMAGE */}
                        <div className="bg-gray-200 h-36 rounded mb-4 flex items-center justify-center text-gray-400">
                            Image
                        </div>


                        {/* TITLE */}
                        <h3 className="font-semibold text-gray-800 mb-2">
                            {item.title}
                        </h3>


                        {/* AUTHOR */}
                        <div className="text-sm text-gray-500 mb-2">
                            {item.author} • {item.date}
                        </div>


                        {/* BADGES */}
                        <div className="flex gap-2 mb-3 flex-wrap">


                            <span className="bg-gray-200 px-2 py-1 rounded text-xs">
                                Important
                            </span>


                            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                                Society wise
                            </span>


                            <span
                                className={`px-2 py-1 rounded text-xs ${item.status === "Published"
                                    ? "bg-green-100 text-green-600"
                                    : "bg-yellow-100 text-yellow-600"
                                    }`}
                            >
                                {item.status}
                            </span>

                        </div>



                        {/* FOOTER */}
                        <div className="flex justify-between items-center pt-3 border-t">


                            <div className="flex gap-4 text-sm text-gray-600">


                                <div className="flex items-center gap-1">
                                    <Eye size={14} />
                                    {item.views}
                                </div>


                                <div className="flex items-center gap-1">
                                    <Users size={14} />
                                    {item.total}
                                </div>


                            </div>


                            <button className="text-blue-600 text-sm font-medium">
                                View Details →
                            </button>


                        </div>


                    </div>

                ))}

            </div>



            {/* ================= PAGINATION ================= */}

            <div className="flex justify-center mt-8 gap-2 flex-wrap">


                <button className="px-3 py-1 border rounded">{"<<"}</button>
                <button className="px-3 py-1 border rounded">{"<"}</button>

                <button className="px-3 py-1 bg-blue-600 text-white rounded">
                    1
                </button>

                <button className="px-3 py-1 border rounded">2</button>

                <button className="px-3 py-1 border rounded">{">"}</button>
                <button className="px-3 py-1 border rounded">{">>"}</button>

            </div>



            {/* ================= MODAL ================= */}

            {openModal && (

                <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-start">


                    <div className="
            bg-white
            w-full
            h-[55vh]
            rounded-xl
            shadow-2xl
            relative
            overflow-y-auto
            mt-10
            mb-10
          ">


                        {/* CLOSE */}
                        <button
                            onClick={() => setOpenModal(false)}
                            className="absolute top-4 right-6 text-gray-400 hover:text-black"
                        >
                            <X />
                        </button>



                        <div className="p-4 sm:p-8 space-y-6">


                            <h2 className="text-2xl font-semibold">
                                Add Notice
                            </h2>


                            {/* FORM GRID */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                                {/* LEFT */}
                                <div className="space-y-6">


                                    <div>
                                        <label className="text-sm font-medium">
                                            Notice Title *
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Enter notice title"
                                            className="w-full mt-2 border rounded-lg px-4 py-2.5"
                                        />
                                    </div>


                                    <div>
                                        <label className="text-sm font-medium">
                                            Select Viewer Type *
                                        </label>

                                        <select className="w-full mt-2 border rounded-lg px-4 py-2.5">

                                            <option>Society wise</option>
                                            <option>Individual Address Wise</option>
                                            <option>Group wise</option>

                                        </select>
                                    </div>


                                    <div>
                                        <label className="text-sm font-medium">
                                            Description
                                        </label>

                                        <textarea
                                            rows="6"
                                            placeholder="Type your text"
                                            className="w-full mt-2 border rounded-lg px-4 py-3"
                                        />
                                    </div>


                                </div>



                                {/* RIGHT */}
                                <div className="space-y-6">


                                    <div>
                                        <label className="text-sm font-medium">
                                            Notice Type *
                                        </label>

                                        <select className="w-full mt-2 border rounded-lg px-4 py-2.5">

                                            <option>Select type</option>
                                            <option>Important</option>

                                        </select>
                                    </div>



                                    <div>
                                        <label className="text-sm font-medium">
                                            Upload Images
                                        </label>


                                        <div className="mt-3 border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">

                                            <Upload
                                                size={28}
                                                className="mx-auto mb-2 text-gray-400"
                                            />

                                            <p className="font-medium">
                                                Upload images
                                            </p>

                                            <p className="text-xs text-gray-500">
                                                PNG, JPG, WEBP • Max 3
                                            </p>

                                        </div>

                                    </div>



                                    <div>
                                        <label className="text-sm font-medium">
                                            Attachments
                                        </label>

                                        <input
                                            type="file"
                                            multiple
                                            className="w-full mt-2 border rounded-lg px-3 py-2"
                                        />
                                    </div>



                                    <div className="flex gap-8">


                                        <label className="flex items-center gap-2 text-sm">
                                            <input type="radio" name="status" />
                                            Published
                                        </label>


                                        <label className="flex items-center gap-2 text-sm">
                                            <input
                                                type="radio"
                                                name="status"
                                                defaultChecked
                                            />
                                            Save as Draft
                                        </label>


                                    </div>


                                </div>

                            </div>



                            <div className="flex justify-end">

                                <button className="bg-blue-600 text-white px-10 py-2.5 rounded-lg">

                                    Add Notice

                                </button>

                            </div>


                        </div>

                    </div>

                </div>

            )}

        </div>

    );

}
