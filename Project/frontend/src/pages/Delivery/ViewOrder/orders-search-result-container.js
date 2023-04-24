import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import api from "../../../services/api";
import "sweetalert2/src/sweetalert2.scss";
export default function OrderSearchResultsContainer(props) {
	const { order } = props;

	const deleteOrder = (deletingID) => {
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

					const newSet = order.filter((object) => {
						const { _id } = object;

						return _id !== deletingID;
					});

					// console.log(newSet);
					// setFunc(newSet);
				} else if (
					/* Read more about handling dismissals below */
					result.dismiss === Swal.DismissReason.cancel
				) {
					swalWithBootstrapButtons.fire(
						"Cancelled",
						"Your file is safe",
						"error"
					);
				}
			});
	};

	return (
		<div>
			{order.reverse().map((singleItem) => {
				const {
					_id,
					driverName,
					nicNumber,
					phoneNum,
					vehicleRegNo,
					vehicleType,
					driverStatus,
				} = singleItem;

				if (driver.length > 0) {
					return (
						<div className="driver-info" key={_id}>
							<span className="item-field-manage-driver">
								{driverName}
							</span>
							<span className="item-field-manage-driver">
								{nicNumber}
							</span>
							<span className="item-field-manage-driver">
								{phoneNum}
							</span>
							<span className="item-field-manage-driver">
								{vehicleRegNo}
							</span>
							<span className="item-field-manage-driver">
								{vehicleType}
							</span>
							<span className="item-field-manage-driver">
								{driverStatus}
							</span>
							<span className="item-field-manage-driver">
								<button className="action-btns-manage-driver">
									<AiOutlineEye />
								</button>
								<button className="action-btns-manage-driver">
									<BiEdit />
								</button>
								<button
									className="action-btns-manage-driver"
									onClick={() => deleteOrder(nicNumber)}
								>
									<AiOutlineDelete />
								</button>
							</span>
						</div>
					);
				}
			})}
		</div>
	);
}
