import React from "react";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import ActionBar from "../../components/actionbar/ActionBar";
import "./adminLayout.scss";

const AdminLayout = ({ children }) => {

	return (
		<div className="layoutWrapper">
			<Sidebar/>
			<div className="rightContainer">
				<ActionBar />
				<div className="content">
					{children}
				</div>
			</div>
		</div>
	);
};

export default AdminLayout;
