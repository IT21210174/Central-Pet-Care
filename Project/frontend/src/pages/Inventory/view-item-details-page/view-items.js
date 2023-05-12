import AdminLayout from "../../Layouts/AdminLayout";
import React, { useEffect, useState } from "react";
import "./view-items.scss";
import api from "../../../services/api";
import { useLocation  , useNavigate} from "react-router-dom";

function ViewInventoryItem() {
	const location = useLocation();
	const { id } = location.state;

	const [viewItem, setViewItem] = useState({});

	const navigate = useNavigate()

	useEffect(() => {
		const fetchData = async () => {
			await api.get(`mongo/${id}`).then(
				(response) => {
					setViewItem(response.data);
				},
				[setViewItem]
			);
		};

		fetchData();
	});

	console.log(viewItem);
	return (
		<AdminLayout>
			<div className="view-inventory-item-container">
				<div className="container">
					<div className="pic-box-inventory-item"></div>
					<button className="view-item-back-btn" onClick={()=>{navigate("/admin/inventory/manage-inventory")}}>Back</button>
				</div>
				<div className="container">
					<div className="field-names">
						<span className="data-fields-inventory">Item Name</span>
						<span className="data-fields-inventory">
							Manufacturer
						</span>
						<span className="data-fields-inventory">SKU ID</span>
						<span className="data-fields-inventory">Quantity</span>
						<span className="data-fields-inventory">
							Unit Price
						</span>
						<span className="data-fields-inventory">Category</span>
						<span className="data-fields-inventory">Rack No</span>
						<span className="data-fields-inventory">
							Created At
						</span>
						<span className="data-fields-inventory">
							Updated At
						</span>
						<span className="data-fields-inventory">
							Description
						</span>
					</div>
					<div className="field-values">
						<span className="data-fields-inventory-values">
							{viewItem.itemName}
						</span>
						<span className="data-fields-inventory-values">
							{viewItem.manufacturer}
						</span>
						<span className="data-fields-inventory-values">
							{viewItem.sku}
						</span>
						<span className="data-fields-inventory-values">
							{viewItem.quantity}
						</span>
						<span className="data-fields-inventory-values">
							Rs. {viewItem.price}
						</span>
						<span className="data-fields-inventory-values">
							{viewItem.category}
						</span>
						<span className="data-fields-inventory-values">
							{viewItem.rackNo}
						</span>
						<span className="data-fields-inventory-values">
							{viewItem.createdAt}
						</span>
						<span className="data-fields-inventory-values">
							{viewItem.updatedAt}
						</span>
						<span className="data-fields-inventory-values">
							{viewItem.productDescription}
						</span>
					</div>
				</div>
			</div>
		</AdminLayout>
	);
}

export default ViewInventoryItem;
