import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";
import Logo from './images/logo.jpg'
import { signOut, onAuthStateChanged } from "firebase/auth";
import {getAuth} from 'firebase/auth';
import React, { useState } from "react";

function Navbar() {
	const navRef = useRef();

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
    
const logout = async () =>{
    await signOut(auth);
    setLoginState(false);
    window.location="/Login";

}

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<div className="logo">
				<img src={Logo} alt="" width="70" height="70" />
			</div>
			<nav ref={navRef}>
				
				<a href="/#" onClick={logout} >Sign Out</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;