import React, { useState, useEffect } from "react";
import { ImSearch } from "react-icons/im";
import AdminLayout from "../../Layouts/AdminLayout";
import ResultContainer from "./drivers-search-result-container";
import NoItemsDisplayer from "./drivers-empty-result-diplayer";
import "./ManageDriver.scss";
import api from "../../../services/api";

function ManageDriverComponent() {
	const [drivers, setDrivers] = useState([]);

	const [searchPrompt, setSearchPrompt] = useState("");

	useEffect(() => {
		api.get("/").then((response) => {
			setDrivers(response.data);
		});
	}, []);

	const searchFieldHandler = (e) => {
		setSearchPrompt(e.target.value);
	};

	const searchFunction = () => {
		api.get(`/${searchPrompt}`)
			.then((response) => {
				if (response.status === 200) {
					console.log(response);
					setDrivers(response.data);
				} else {
					console.log("no such item");
					setDrivers([]);
				}
			})
			.catch((error) => {
				console.log("no such item");
				console.log(error);
			});
	};

	const searchFormHandler = (e) => {
		e.preventDefault();
		console.log(searchPrompt);
		searchFunction();
		setSearchPrompt("");
	};

	return (
		<AdminLayout>
			<div className="actionbar-container-manage-driver">
				{/* main headline */}
				{/*Search bar*/}
				<div className="search-bar-container">
					<input
						type="text"
						className="search-field"
						placeholder="Search by Driver NIC"
						value={searchPrompt}
						onChange={searchFieldHandler}
					/>
					<form onSubmit={searchFormHandler}>
						<button type="submit" className="search-btn">
							<ImSearch />
						</button>
					</form>
				</div>

				{/* data fetching section including buttons*/}

				<div className="search-results-section">
					{/* table headings */}
					<div className="driver-info-item-head">
						<span className="item-field-head-manage-driver">
							Driver Name
						</span>
						<span className="item-field-head-manage-driver">
							NIC No
						</span>
						<span className="item-field-head-manage-driver">
							Phone No
						</span>
						<span className="item-field-head-manage-driver">
							Vehicle No
						</span>
						<span className="item-field-head-manage-driver">
							Vehicle Type
						</span>
						<span className="item-field-head-manage-driver">
							Status
						</span>
						<span className="item-field-head-manage-driver"></span>
					</div>
					{/* scrollable section */}

					<div className="search-results-container">
						{/* display the results */}
						{drivers.length === 0 ? (
							<NoItemsDisplayer />
						) : (
							<ResultContainer driver={drivers} />
						)}
					</div>
				</div>
			</div>
		</AdminLayout>
	);
}

export default ManageDriverComponent;
