import React, { useState } from "react";
import "./HeaderAdvanced.scss";
import logo from '../../assets/imgs/hero-sec-image/logo.png'
import noData from '../../assets/imgs/error-displayers/no-data.png'
import {SlArrowDown} from 'react-icons/sl'
import { useSearchParams } from "react-router-dom";

const HeaderTransparent = () => {

    const [visibility , setVisibility] = useState(false)

	return (
		<div className="nav-container-header-adv-without-color">
			{/* this is for the company logo */}
			<div className="partition-nav-1">
                <img src={logo} alt="" className="company-logo" />
				<span className="brand-text-header-adv">Central Pet Care </span>
			</div>
			{/* this is for the link section */}
			<div className="partition-nav-2-header-adv">
				<span className="nav-links">Home</span>
				<span className="nav-links">About</span>
				<span className="nav-links">Services</span>
				<span className="nav-links">Contact</span>
				<div className="nav-login-btn">Signup</div>
				<div className="nav-login-btn">Signin</div>
			</div>
		</div>
	);
};

export default HeaderTransparent;
