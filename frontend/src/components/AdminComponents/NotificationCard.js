import React, { useState } from 'react';

const NotificationCard = ({ id,message, type,isRead,timestamp }) => {
  return (
    <div className={`w-88 mx-auto my-2 p-4 rounded-lg ${type === 'info' ? 'bg-blue-500' : 'bg-red-500'} text-white shadow-lg`}>
      <p>{message}</p>
    </div>
  );
};

export default NotificationCard;



//   const [filter, setFilter] = useState('all');
//   const [search, setSearch] = useState('');

//   const filteredNotifications = notifications.filter(notification => {
//     return (
//       (filter === 'all' || notification.type === filter) &&
//       notification.message.toLowerCase().includes(search.toLowerCase())
//     );
//   });

//   const handleClearAll = () => {
//     setNotifications([]);
//   };

//   const handleMarkAsRead = (id) => {
//     setNotifications(notifications.map(notification =>
//       notification.id === id ? { ...notification, isRead: true } : notification
//     ));
//   };

//   const handleBulkMarkAsRead = () => {
//     setNotifications(notifications.map(notification => ({ ...notification, isRead: true })));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-gray-800">Admin Notifications</h1>
//         <div className="flex space-x-4">
//           <button onClick={handleClearAll} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
//             Clear All
//           </button>
//           <button onClick={handleBulkMarkAsRead} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
//             Mark All as Read
//           </button>
//         </div>
//       </div>

//       {/* Search and Filters */}
//       <div className="flex justify-between items-center mb-6">
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-1/3 p-2 border border-gray-300 rounded-md"
//           placeholder="Search notifications..."
//         />
//         <select
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//           className="p-2 border border-gray-300 rounded-md"
//         >
//           <option value="all">All Notifications</option>
//           <option value="alert">Alerts</option>
//           <option value="info">Info</option>
//           <option value="warning">Warnings</option>
//         </select>
//       </div>

//       {/* Notification List */}
//       <div className="space-y-4">
//         {filteredNotifications.length === 0 ? (
//           <div className="text-center text-gray-500">No notifications found.</div>
//         ) : (
//           filteredNotifications.map(notification => (
//             <div
//               key={notification.id}
//               className={`p-4 border rounded-lg ${notification.isRead ? 'bg-gray-100' : 'bg-blue-50'} flex justify-between items-center`}
//             >
//               <div className="flex-1">
//                 <p className={`${notification.isRead ? 'text-gray-500' : 'text-gray-800'} font-medium`}>
//                   {notification.message}
//                 </p>
//                 <p className="text-sm text-gray-400">{notification.timestamp}</p>
//               </div>
//               <div className="flex space-x-4">
//                 {!notification.isRead && (
//                   <button
//                     onClick={() => handleMarkAsRead(notification.id)}
//                     className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600"
//                   >
//                     Mark as Read
//                   </button>
//                 )}
//                 <button
//                   onClick={() => alert('View More Details')}
//                   className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
//                 >
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

    
//     </div>
//   );
// }

