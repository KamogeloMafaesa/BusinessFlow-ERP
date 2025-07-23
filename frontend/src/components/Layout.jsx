import React from "react";
import { Link, Outlet} from "react-router-dom";

function Layout(){
    return(
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-blue-800 text-white p-4 space-y-4">
                <h1 className="text-2xl font-bold mb-6">Business Flow</h1>
                <nav className="space-y-2">
                    <Link to="/" className="block hover:bg-blue-700 p-2 rounded">Dashboard</Link>
                    <Link to="/customers" className="block hover:bg-blue-700 p-2 rounded">Customers</Link>
                    <Link to="/invoices" className="block hover:bg-blue-700 p-2 rounded">Invoices</Link>
                </nav>
            </aside>

            {/*Main Content*/}
            <main className="flex-1 bg-gray-100 p-6">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;