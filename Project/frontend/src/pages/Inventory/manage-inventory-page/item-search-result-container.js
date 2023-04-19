import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import api from "../../../services/api";
import "sweetalert2/src/sweetalert2.scss";
export default function ItemSearchResultsContainer(props) {
	const { inventory } = props;

	const deleteItem = (deletingID) => {
		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
				confirmButton: "btn-success",
				cancelButton: "btn-danger",
			},
			buttonsStyling: false,
		});

		swalWithBootstrapButtons
			.fire({
				title: "Are you sure?",
				text: "You won't be able to revert this!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonText: "Yes, delete it!",
				cancelButtonText: "No, cancel!",
				reverseButtons: true,
			})
			.then((result) => {
				if (result.isConfirmed) {
					swalWithBootstrapButtons.fire(
						"Deleted!",
						"Your file has been deleted.",
						"success"
					);

					api.delete(`/${deletingID}`)
						.then((response) => {
							console.log(response);
						})
						.catch((error) => {
							console.log(error);
						});
				} else if (
					/* Read more about handling dismissals below */
					result.dismiss === Swal.DismissReason.cancel
				) {
					swalWithBootstrapButtons.fire(
						"Cancelled",
						"Your imaginary file is safe :)",
						"error"
					);
				}
			});
	};

	return (
		<div>
			{inventory.reverse().map((singleItem) => {
				const { _id, itemName, sku, category, manufacturer, quantity } =
					singleItem;

				if (inventory.length > 0) {
					return (
						<div className="running-short-item" key={_id}>
							<span className="item-field-manage-inventory">
								{itemName}
							</span>
							<span className="item-field-manage-inventory">
								{sku}
							</span>
							<span className="item-field-manage-inventory">
								{category}
							</span>
							<span className="item-field-manage-inventory">
								{manufacturer}
							</span>
							<span className="item-field-manage-inventory">
								{quantity}
							</span>
							<span className="item-field-manage-inventory">
								<button className="action-btns-manage-inventory">
									<BiEdit />
								</button>
								<button
									className="action-btns-manage-inventory"
									onClick={() => deleteItem(_id)}
								>
									<AiFillDelete />
								</button>
							</span>
						</div>
					);
				}
			})}
		</div>
	);
}
