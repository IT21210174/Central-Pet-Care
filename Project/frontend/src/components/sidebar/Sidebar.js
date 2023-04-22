import React, { useEffect, useState } from "react";
import SideBarItems from "./SideBarItems";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";

import { IoIosArrowForward } from "react-icons/io";

function SideBar() {
	const [selected, setSelected] = useState(null);
	const [selectedMain, setMain] = useState(0);

	useEffect(() => {
		eventTransformer(selectedMain);
	}, []);

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
				{SideBarItems.map((item, index) => {
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
												console.log(index);
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

export default SideBar;
