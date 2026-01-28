import {
  Headphones,
  PlusCircle,
  Users,
  User,
} from "lucide-react";


export default function QuickActions() {

  const actions = [
    { name: "Help Desk", icon: Headphones },
    { name: "Raise Complaint", icon: PlusCircle },
    { name: "Society Manage", icon: Users },
    { name: "My Profile", icon: User },
  ];


  return (
    <div className="space-y-4 mt-10">

      <h3 className="text-gray-600 font-semibold text-lg">
        Quick Actions
      </h3>


      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

        {actions.map((a) => {

          const Icon = a.icon;

          return (

            <div
              key={a.name}
              className="bg-white p-6 rounded shadow text-center hover:shadow-lg cursor-pointer"
            >

              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-3">

                <Icon className="text-blue-600" />

              </div>

              <p className="font-medium">{a.name}</p>

            </div>

          );
        })}

      </div>

    </div>
  );
}
