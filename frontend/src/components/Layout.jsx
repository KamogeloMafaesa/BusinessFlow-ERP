import React from "react";
import {NavLink} from "react-router-dom"
import { Link, Outlet} from "react-router-dom";

function Layout(){
    return(
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-blue-800 text-white p-4 space-y-4">
                <h1 className="text-2xl font-bold mb-6">Business Flow</h1>
                <nav className="space-y-2">
                    <NavLink to="/" className={({ isActive }) =>
                    `block px-4 py-2 hover:bg-blue-700 p-2 rounded text-white ${
                    isActive ? "bg-blue-100 font-semibold text-blue-800 hover:bg-blue-100":
                     "text-white"}`
                     }
                     >
                    Dashboard</NavLink>
                    
                    <NavLink
                     to="/customers"
                    className={({ isActive }) =>
                     `block px-4 py-2 rounded hover:bg-blue-700 text-white ${
                     isActive ? "bg-blue-100 font-semibold text-blue-800 hover:bg-blue-100" : 
                     "text-white"
                    }`
                }
            >
            Customers
                </NavLink>


                    <NavLink to="/invoices" 
                    className={({ isActive }) =>
                    `block px-4 py-2 hover:bg-blue-700 rounded text-white ${
                        isActive ? "bg-blue-100 font-semibold text-blue-800 hover:bg-blue-100" :
                        "text-white"
                    }`
                    }
                    >
                    Invoices</NavLink>
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