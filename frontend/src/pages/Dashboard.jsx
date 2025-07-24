import React from 'react';


const Dashboard = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h2>
            <p className="text-gray-600 mb-6">Welcome to your ERP System.</p>

            {/*Dashboard Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-lg font-semibold text-blue-800">Total Customers</h3>
                    <p className="text-2xl font-bold text-gray-700">--</p>
                </div>

                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-lg font-semibold text-blue-800">Invoices Isued</h3>
                    <p className="text-2xl font-bold text-gray-700">--</p>
                </div>

                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-lg font-semibold text-blue-800">Revenue</h3>
                    <p className="text-2xl font-bold text-gray-700">R --</p>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;