import React, { useState, useEffect } from "react";
import { ImSearch } from "react-icons/im";
import AdminLayout from "../../Layouts/AdminLayout";
// import ResultContainer from "./itemSearchResultsContainer";
// import NoItemsDisplayer from "./NoItemsDisplayer";
import "./ManageDriver.scss";
import api from "../../../services/api";

function ManageInventoryComponent() {
	const [inventory, setInventory] = useState([]);

	const [searchPrompt, setSearchPrompt] = useState("");

	const searchFieldHandler = (e) => {
		setSearchPrompt(e.target.value);
	};

	const searchFunction = () => {
		api.get(`/${searchPrompt}`)
			.then((response) => {
				if (response.status === 200) {
					console.log(response);
					setInventory(response.data);
				} else {
					console.log("no such item");
					setInventory([]);
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
			<div className="actionbar-container-manage-inventory">
				{/* main headline */}
				{/*Search bar*/}
				<div className="search-bar-container">
					<input
						type="text"
						className="search-field"
						placeholder="Search by store keeping unit.."
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
					<div className="inventory-info-item-head">
						<span className="item-field-head-manage-inventory">
							Driver Name
						</span>
						<span className="item-field-head-manage-inventory">
							License No
						</span>
						<span className="item-field-head-manage-inventory">
							Vehicle No
						</span>
						<span className="item-field-head-manage-inventory">
							Phone No
						</span>
                        <span className="item-field-head-manage-inventory">
							Vehicle Type
						</span>
                        <span className="item-field-head-manage-inventory">
							Status
						</span>
					</div>
					{/* scrollable section */}
				</div>
			</div>
		</AdminLayout>
	);
}

export default ManageInventoryComponent;
