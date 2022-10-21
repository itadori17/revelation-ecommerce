import React, { useState } from "react";
import './App.css';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import Inventory from './pages/Inventory';
import Pending from './pages/Pending';
import OrderHistory from './pages/OrderHistory';
import Signup from "./components/Signup/Signup";
import SignIn from "./components/Signin/Signin";





const App = () => {
  const [loginState, setLoginState] = useState(null);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setLoginState(true)
      // ...
    } 
    else{
        setLoginState(false)
    }
  });
  return (
    // <BrowserRouter>
    // <Navbar/>
    //   <Sidebar>
    //     <Routes>
    //       <Route path="/" element={<Inventory/>} />
    //       <Route path="/pending" element={<Pending />} />
    //       <Route path="/order" element={<OrderHistory />} />
         
    //     </Routes>
    //   </Sidebar>
      
    // </BrowserRouter>
    
    <Router>
    {
    loginState ?
    //Online Handler
    <>
    <Navbar/>
    <Sidebar>
        <Routes>
          <Route path="/" element={<Inventory/>} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/order" element={<OrderHistory />} />
        </Routes>
    </Sidebar>
    </>
    :
    //Offline Handler
    <Routes>
            <Route exact path="*" element={<SignIn/>}/>
            <Route exact path="/Signup" element={<Signup/>}/>
            <Route exact path="/Login" element={<SignIn/>}/>
        </Routes>
    }
</Router>
  );
};

export default App;