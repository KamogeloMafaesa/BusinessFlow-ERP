import React from 'react';
import { Routes, Route, Link} from "react-router-dom";


function App() {

  return (
    <div className="min-h-screen bg-gray-100 p-4">
    <h1 className="text-2xl-font-bold">Business Flow ERP</h1>
    <nav className="mt-2 space-x-4">
      <Link to= "/" className="text-blue-500 hover:underline">Dashboard</Link>
      <Link to= "/customers" className="text-blue-500 hover:underline">Customers</Link>
      <Link to= "/invoices" className="text-blue-500 hover:underline">Invoices</Link>
    </nav>

    <Routes>
      <Route path="/" element = {<Dashboard />}/>
      <Route path="/customers" element = {<Customers />}/>
      <Route path="/Invoices" element = {<Invoices/>}/>
    </Routes>
  </div>
  );
}

const Dashboard = () => <p className="mt-2-text-gray-600">Welcome to the ERP dashboard</p>;
const Customers = () => <p className="mt-2-text-gray-600">Manage your customers here</p>;
const Invoices = () => <p className="mt-2-text-gray-600">View and manage invoices here</p>;

export default App
