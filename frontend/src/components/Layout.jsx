import React from "react";
import {NavLink} from "react-router-dom"
import { Link, Outlet} from "react-router-dom";
import {Users, Home, FileText} from "lucide-react";

function Layout(){
    return(
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-blue-800 text-white p-4 space-y-4">
                <h1 className="text-2xl font-bold mb-6">Business Flow</h1>
                <nav className="space-y-2">

                    <NavLink to="/" className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded transition-colors duration-200 ${
                    isActive ? "bg-blue-100 font-semibold text-blue-800":
                     "text-white hover:bg-blue-700"}`
                     }
                     >
                    <Home className="w-4-h-4"/>
                    Dashboard</NavLink>
                    
                    <NavLink
                     to="/customers"
                    className={({ isActive }) =>
                     `flex items-center gap-2 px-4 py-2 rounded transition-colors duration-200 ${
                     isActive ? "bg-blue-100 font-semibold text-blue-800 " : 
                     "text-white hover:bg-blue-700"
                    }`
                }
            >
            <Users className="w-4-h-4"/>
            Customers
                </NavLink>


                    <NavLink to="/invoices" 
                    className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2  rounded transition-colors duration-200 ${
                        isActive ? "bg-blue-100 font-semibold text-blue-800" :
                        "text-white hover:bg-blue-700"
                    }`
                    }
                    >
                    <FileText className="w-4-h-4"/>
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