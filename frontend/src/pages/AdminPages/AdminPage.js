import React from 'react'
import Navbar from '../../components/AdminComponents/Navbar'
import Sidebar from '../../components/AdminComponents/Sidebar'

const AdminPage = ({children}) => {
  return (
    <div className='flex relative'>
        <div className="w-72 fixed top-0 left-0 h-full z-10">
          <Sidebar />
        </div>
        <div className='ml-72 w-full min-h-screen flex-2'>
          <div className="fixed md:static">
            <Navbar />
          </div>
          <main className="p-8">{children}</main>
        </div>
   </div>
)
};
export default AdminPage

  
