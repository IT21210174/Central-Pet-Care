import React, { useState, useEffect } from "react";
import { ImSearch } from "react-icons/im";
import AdminLayout from "../../Layouts/AdminLayout";
import ResultContainer from "./orders-search-result-container";
import NoItemsDisplayer from "./orders-empty-result-displayer";
import "./CompletedOrder.scss";
import orderApi from '../../../services/order-api'

function ViewCompletedOrderComponent() {
	const [orders, setOrders] = useState([]);
	const [searchPrompt, setSearchPrompt] = useState("");

	useEffect(() => {
		orderApi.get("/").then((response) => {
			setOrders(response.data);
			console.log(orders);
		});
	}, []);


	// const processingOrders = orders.filter((order)=>{
	// return order.deliveryStatus === "Processing"
	// })

	const searchFieldHandler = (e) => {
		setSearchPrompt(e.target.value);
	};

	const searchFunction = () => {
		orderApi.get(`/${searchPrompt}`)
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
				setOrders([])
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
							Order ID
						</span>
						<span className="item-field-head-view-order">
							Customer Name
						</span>
						<span className="item-field-head-view-order">
							Customer Phone
						</span>
						<span className="item-field-head-view-order">
							Delivery Location
						</span>
						<span className="item-field-head-view-order">
							Delivery Status
						</span>
						<span className="item-field-head-view-order"></span>
					</div>
					{/* scrollable section */}

					<div className="search-results-container">
						{/* display the results */}
						{orders.length === 0 ? (
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

export default ViewCompletedOrderComponent;
