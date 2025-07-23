import React from 'react';
import { Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="customers" element={<Customers />} />
      <Route path="Invoices" element={<Invoices/>} />
      </Route>
    </Routes>

  );
}

const Dashboard = () => <p className="mt-2-text-gray-600">Welcome to the ERP dashboard</p>;
const Customers = () => <p className="mt-2-text-gray-600">Manage your customers here</p>;
const Invoices = () => <p className="mt-2-text-gray-600">View and manage invoices here</p>;

export default App
