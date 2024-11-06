import React, { useContext } from 'react'
import {AuthContext} from '../../context/AuthContext'
const Profile = () => {
 

  const {user, userRole} =useContext(AuthContext)

  return (
    <div className="w-full  rounded-lg  bg-white shadow-md">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">Administrator Profile</h1>

      {/* Profile Overview */}
      <div className="flex justify-center items-center space-x-6 mb-8 ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLKWFVF4OsA5epz1HGktvCM4z8bfwhHl0i6g&s"
          alt="Admin Avatar"
          className="w-24 h-24 rounded-full object-cover ml-16"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-700">{user.name}</h2>
          <p className="text-gray-500">{userRole}</p>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>

      {/* Account Management */}
      <div className="mb-8 px-8 mx-auto">
        <h3 className="text-xl font-bold text-gray-700 mb-4">Account Management</h3>
        <button className="bg-blue-500 text-white text-xl px-4 py-2 rounded hover:bg-blue-600 w-full mb-3">
          Update Profile
        </button>
        <button className="bg-blue-500 text-white text-xl px-4 py-2 rounded hover:bg-blue-600 w-full mb-3">
          Change Password
        </button>
      </div>

      {/* Administrative Shortcuts */}
      {/* <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Quick Access</h3>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Product Management
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Order Management
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Supplier Management
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Analytics & Reports
          </button>
        </div>
      </div> */}

      {/* Support and Logout */}
      {/* <div>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 w-full mb-3">
          Help & Documentation
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full">
          Logout
        </button>
      </div> */}
    </div>
  );
}

export default Profile
