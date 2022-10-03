import React from 'react';
import Navbar from "./components/navigation/Navbar";
import './App.css'
import HomePage from './components/pages/HomePage';
import Sidebar from './components/navigation/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
		<BrowserRouter>
		<Navbar/>
		<Sidebar/>
		<Routes>
          <Route path="/" element={<Inventory/>} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/order" element={<OrderHistory />} />
         
        </Routes>
		
		</BrowserRouter>
		</>
	);
}

export default App;