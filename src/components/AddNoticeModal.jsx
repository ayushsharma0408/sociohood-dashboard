// export default function AddNoticeModal({ open, onClose }) {
//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

//       {/* Modal Box */}
//       <div className="bg-white w-[900px] max-w-full rounded-xl shadow-xl p-6 relative">

//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
//         >
//           ✕
//         </button>

//         <h2 className="text-xl font-semibold mb-6">Add Notice</h2>

//         {/* Form */}
//         <div className="grid grid-cols-2 gap-6">

//           {/* Left Side */}
//           <div className="space-y-4">

//             {/* Title */}
//             <div>
//               <label className="text-sm font-medium">
//                 Notice Title <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter notice title"
//                 className="w-full mt-1 border rounded px-3 py-2 outline-blue-500"
//               />
//             </div>

//             {/* Viewer Type */}
//             <div>
//               <label className="text-sm font-medium">
//                 Select Viewer Type <span className="text-red-500">*</span>
//               </label>
//               <select className="w-full mt-1 border rounded px-3 py-2">
//                 <option>Society wise</option>
//                 <option>Block wise</option>
//                 <option>Flat wise</option>
//               </select>
//             </div>

//             {/* Description */}
//             <div>
//               <label className="text-sm font-medium">Description</label>
//               <textarea
//                 rows="5"
//                 placeholder="Type your text"
//                 className="w-full mt-1 border rounded px-3 py-2 outline-blue-500"
//               />
//             </div>

//           </div>

//           {/* Right Side */}
//           <div className="space-y-4">

//             {/* Notice Type */}
//             <div>
//               <label className="text-sm font-medium">
//                 Notice Type <span className="text-red-500">*</span>
//               </label>
//               <select className="w-full mt-1 border rounded px-3 py-2">
//                 <option>Select type</option>
//                 <option>Important</option>
//                 <option>General</option>
//               </select>
//             </div>

//             {/* Upload Images */}
//             <div>
//               <label className="text-sm font-medium">
//                 Upload Images (Max 3, 1MB each)
//               </label>

//               <div className="mt-2 border-2 border-dashed rounded-lg p-6 text-center text-gray-500 cursor-pointer hover:border-blue-500">
//                 Upload Images
//                 <p className="text-xs mt-1">
//                   PNG, JPG, WEBP (Max 1MB) - 0/3
//                 </p>
//               </div>
//             </div>

//             {/* Attachments */}
//             <div>
//               <label className="text-sm font-medium">
//                 Attachments (Max 3 files, ≤100KB)
//               </label>

//               <input
//                 type="file"
//                 multiple
//                 className="w-full mt-1 border rounded px-2 py-1"
//               />
//             </div>

//             {/* Status */}
//             <div className="flex items-center gap-6 mt-2">

//               <label className="flex items-center gap-2">
//                 <input type="radio" name="status" />
//                 Published
//               </label>

//               <label className="flex items-center gap-2">
//                 <input type="radio" name="status" defaultChecked />
//                 Save as Draft
//               </label>

//             </div>

//           </div>

//         </div>

//         {/* Footer Button */}
//         <div className="mt-6 text-right">

//           <button
//             className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//           >
//             Add Notice
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// }
