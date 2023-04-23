import React, { useState } from "react";
import SidebarItems from "./SidebarItems";
import { Link, NavLink } from "react-router-dom";
import "./sidebar.scss";

import { IoIosArrowForward } from "react-icons/io";

function Sidebar() {
	const [selected, setSelected] = useState(0);
	const [selectedMain, setMain] = useState(0);

	const eventTransformer = (num) => {
		setMain(num);
		setSelected(0);
	};

	return (
		<div className="sidebar-container">
			{/* brandname modifications central petcare */}
			<div className="brandName">
				<span className="brandFront">Central</span>PetCare
			</div>
			{/* side menu items container */}
			<div className="side-bar-item-container">
				{SidebarItems.map((item, index) => {
					const { id, icon, text, nestedFunctions } = item;

					return (
						<div key={index}>
							<div className="mainFunctionAssets" key={id}>
								<span className="mainFunction">
									<span className="functionPrompt">
										<span className="mainFuncIcon">
											{icon}
										</span>
										<span
											className="mainFuncItemName"
											onClick={() => {
												eventTransformer(index);
											}}
										>
											{text}
										</span>
										<span
											className={`scrollFuncIcon ${
												index === selectedMain &&
												"scroll-function-show"
											}`}
										>
											<IoIosArrowForward />
										</span>
									</span>

									<div
										className={`nested-function-container${
											index === selectedMain
												? "cont-show"
												: ""
										}`}
									>
										{nestedFunctions.map(
											(nestedFunction, index) => {
												const {
													link,
													nestedItemicon,
													nestedItemtext,
												} = nestedFunction;

												return (
													<NavLink
														to={link}
														className={({
															isActive,
														}) =>
															isActive
																? "active-nested-item"
																: "side-bar-nested-item"
														}
													>
														<span className="icon">
															{nestedItemicon}
														</span>
														<span className="item-name">
															{nestedItemtext}
														</span>
													</NavLink>
												);
											}
										)}
									</div>
								</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Sidebar;