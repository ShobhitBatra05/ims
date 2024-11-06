import React, { useEffect, useState } from 'react';
import Card from '../../components/AdminComponents/Card';
import { getDashboardData } from '../../services/dashboardService';
import ProductStockChart from '../../components/AdminComponents/ProductStockChart';


const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalProducts: 0,
    lowStockProducts: 0,
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await getDashboardData(); // Fetch data from API
        setDashboardData(response); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };
    fetchDashboardData();
    }, []);


  return (
<div className="flex flex-col gap-12 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* <Card title="Total Suppliers" value={dashboardData.totalSuppliers} /> */}
        <Card title="Low Stock Products" value={dashboardData.lowStockProducts} />
        <Card title="Total Products" value={dashboardData.totalProducts} />
        {/* <KPICard title="Top Suppliers" value={dashboardData.topSuppliers.join(', ')} /> */}
      </div>

      {/* <div className="max-w-[70rem]">
          <h1 className='lg:text-3xl font-extrabold text-center mb-4 uppercase'>Top 3 Suppliers</h1>
          <TopSuppliers />
      </div> */}

      <div className="max-w-[70rem]">
          <h1 className='lg:text-3xl font-extrabold text-center mb-4'>Product Stock Levels</h1>
          <ProductStockChart />
      </div>
     
    </div>
  )
}

export default Dashboard












