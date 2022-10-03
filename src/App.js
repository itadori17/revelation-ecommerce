import React from 'react';
<<<<<<< HEAD
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import Inventory from './pages/Inventory';
import Pending from './pages/Pending';
import OrderHistory from './pages/OrderHistory';


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
      </Sidebar>
    </BrowserRouter>
  );
};
=======
import Navbar from "./components/navigation/Navbar";
import './App.css'
import Add from './components/Add/Add';


function App() {
	return (
		<>
			<Navbar/>
			<Add/>
			
		</>
	);
}
>>>>>>> b289b65a70d5ca779b56e3fa3e2c7ccfbc934bcb

export default App;