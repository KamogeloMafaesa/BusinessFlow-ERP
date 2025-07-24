import React from 'react';
import { Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
 import Invoices from './pages/Invoices';

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



export default App
