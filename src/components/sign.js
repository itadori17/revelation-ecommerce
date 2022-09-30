import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";
import Logo from '../images/logo.jpg'

function Navbar() {
	const navRef = useRef();

	const signOut = () => {}

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<div className="logo">
				<img src={Logo} alt="" width="70" height="70" />
			</div>
			<nav ref={navRef}>
				
				<a href="/#" onClick={signOut} >Sign Out</a>
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