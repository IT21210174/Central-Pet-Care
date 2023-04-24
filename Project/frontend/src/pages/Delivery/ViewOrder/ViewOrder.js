import React, { useState, useEffect } from "react";
import { ImSearch } from "react-icons/im";
import AdminLayout from "../../Layouts/AdminLayout";
// import ResultContainer from "./drivers-search-result-container";
// import NoItemsDisplayer from "./drivers-empty-result-diplayer";
import "./ViewOrder.scss";
import api from "../../../services/api";

function ViewOrderComponent() {
	const [orders, setOrders] = useState([]);

	const [searchPrompt, setSearchPrompt] = useState("");

	useEffect(() => {
		api.get("/").then((response) => {
			setOrders(response.data);
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
					setOrders(response.data);
				} else {
					console.log("no such item");
					setOrders([]);
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
			<div className="actionbar-container-view-order">
				{/* main headline */}
				{/*Search bar*/}
				<div className="search-bar-container">
					<input
						type="text"
						className="search-field"
						placeholder="Search order by order ID"
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
					<div className="order-info-item-head">
						<span className="item-field-head-view-order">
							Driver Name
						</span>
						<span className="item-field-head-view-order">
							NIC No
						</span>
						<span className="item-field-head-view-order">
							Phone No
						</span>
						<span className="item-field-head-view-order">
							Vehicle No
						</span>
						<span className="item-field-head-view-order">
							Vehicle Type
						</span>
						<span className="item-field-head-view-order">
							Status
						</span>
						<span className="item-field-head-view-order"></span>
					</div>
					{/* scrollable section */}

					<div className="search-results-container">
						{/* display the results */}
						{drivers.length === 0 ? (
							<NoItemsDisplayer />
						) : (
							<ResultContainer order={orders} />
						)}
					</div>
				</div>
			</div>
		</AdminLayout>
	);
}

export default ViewOrderComponent;
