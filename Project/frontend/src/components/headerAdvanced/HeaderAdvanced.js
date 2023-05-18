import React, { useState } from "react";
import "./HeaderAdvanced.scss";
import logo from '../../assets/imgs/hero-sec-image/logo.png'
import noData from '../../assets/imgs/error-displayers/no-data.png'
import {SlArrowDown} from 'react-icons/sl'
import { useSearchParams } from "react-router-dom";

const HeaderAdvanced = () => {

    const [visibility , setVisibility] = useState(false)

	return (
		<div className="nav-container-header-adv">
			{/* this is for the company logo */}
			<div className="partition-nav-1">
				<span className="brand-text-header-adv">Central Pet Care </span>
			</div>
			{/* this is for the link section */}
			<div className="partition-nav-2-header-adv">
				<span className="nav-links-header-advanced">Home</span>
				<span className="nav-links-header-advanced">About</span>
				<span className="nav-links-header-advanced">Services</span>
				<span className="nav-links-header-advanced">Contact</span>
				{/* <div className="nav-login-btn-header-advanced">Signup</div>
				<div className="nav-login-btn-header-advanced">Signin</div> */}
			</div>
            <div className="partiton-nav-3">
                <img src={noData} alt="" className="profile-cpt-image" />
                <button className="drop-btn-header-adv" onClick={()=>{setVisibility(!visibility)}}>
                    <SlArrowDown className="arrow-header-adv"/>
                </button>
                <div className={visibility ? `btn-section-header-adv` : `btn-section-header-adv hide`}>
                    <button className="scroller-btns">Profile</button>
                    <button className="scroller-btns">Logout</button>
                </div>
            </div>
		</div>
	);
};

export default HeaderAdvanced;
