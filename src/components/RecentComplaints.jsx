import { useEffect, useState } from "react";
import { Copy, Calendar } from "lucide-react";

export default function RecentComplaints() {

  const [complaints, setComplaints] = useState([]);


  const dummyComplaints = [
    {
      id: "26003142",
      title: "No Water in J24/1",
      status: "Assigned",

      property: "J24-01",
      floor: "",
      flat: "",

      category: "Water and Plumbing Work",
      subcategory: "Additional Water Request",
    },

    {
      id: "26003141",
      title: "Kitchen Hinges repair",
      status: "Assigned",

      property: "K4-46",
      floor: "",
      flat: "",

      category: "Woodwork",
      subcategory: "Hinges Of Doors - Repair",
    },

    {
      id: "26003140",
      title: "Wash basin chock",
      status: "Assigned",

      property: "K4-46",
      floor: "",
      flat: "",

      category: "Water and Plumbing Work",
      subcategory: "Improper Function Of Wash Basin",
    },

    {
      id: "26003139",
      title: "Stair light not working",
      status: "Assigned",

      property: "K16-12",
      floor: "1st Floor",
      flat: "",

      category: "Electrical",
      subcategory: "Stair Case Light-Lamp Fuse",
    },
  ];


  useEffect(() => {

    if (!localStorage.getItem("complaints")) {
      localStorage.setItem(
        "complaints",
        JSON.stringify(dummyComplaints)
      );
    }

    const data =
      JSON.parse(localStorage.getItem("complaints")) || [];

    setComplaints(data);

  }, []);


  return (
    <div className="space-y-5 max-h-[90vh] overflow-y-auto pr-2">

      {/* HEADER */}
      <h3 className="flex items-center gap-2 text-gray-500 font-semibold text-lg">

        <Calendar size={22} />

        Recent Complaints

      </h3>


      {/* LIST */}
      {complaints.map((c) => (

        <div
          key={c.id}
          className="bg-white rounded-2xl shadow p-6 grid grid-cols-2 gap-6 min-w-[480px]"
        >

          {/* LEFT */}
          <div className="space-y-3">

            <h4 className="text-lg font-semibold text-gray-800">
              {c.title}
            </h4>


            <div className="flex items-center gap-2 text-gray-500">

              <span>{c.id}</span>

              <Copy
                size={16}
                className="cursor-pointer hover:text-blue-600"
                onClick={() =>
                  navigator.clipboard.writeText(c.id)
                }
              />

            </div>


            <a
              href="#"
              className="text-blue-600 font-medium hover:underline"
            >
              View Details
            </a>

          </div>


          {/* RIGHT */}
          <div className="space-y-2 text-sm text-gray-600">

            <div className="flex justify-end mb-2">

              <span className="bg-blue-500 text-white px-4 py-1 rounded shadow text-xs">
                {c.status}
              </span>

            </div>


            <p>
              <b>Property:</b> {c.property}
            </p>

            <p>
              <b>Floor:</b> {c.floor || "-"} ,
              <b> Flat:</b> {c.flat || "-"}
            </p>

            <p>
              <b>Category:</b> {c.category}
            </p>

            <p>
              <b>Subcategory:</b> {c.subcategory}
            </p>

          </div>

        </div>

      ))}

    </div>
  );
}
