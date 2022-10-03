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
			<HomePage/>
		
		</BrowserRouter>
		</>
	);
}

export default App;