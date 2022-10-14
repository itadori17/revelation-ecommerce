import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import Inventory from './pages/Inventory';
import Pending from './pages/Pending';
import OrderHistory from './pages/OrderHistory';
import Footer from './component/Footer';



const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Inventory/>} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/order" element={<OrderHistory />} />
        </Routes>
        <Sidebar/>
        
    </BrowserRouter>
    {/* <Footer/> */}
    
  );
};

export default App;