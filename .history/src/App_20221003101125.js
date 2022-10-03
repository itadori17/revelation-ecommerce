import React from 'react';
import Navbar from "./components/navigation/Navbar";
import './App.css'
import HomePage from './components/pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<Navbar/>
			<HomePage/>
		</>
	);
}

export default App;