import React, { useContext , useEffect, useState } from "react";
import { AppContext } from "../../../contexts/AppContext";
import swal from "sweetalert2";
import AdminLayout from "../../Layouts/AdminLayout";
import api from "../../../services/api";
import uploadImage from '../../../uploadImage'
import "./addItem.scss";

const AddItem = () => {

	const [file , setFile] = useState('')
	const [formData, setFormData] = useState({
		sku: "",
		itemName: "",
		category: "",
		price: "",
		rackNo: "",
		quantity: "",
		manufacturer: "",
		reorderLevel:"",
		measurementUnit:"",
		productImage: "",
	});

	const addItemFormHandler = async(event) => {
		event.preventDefault();
		console.log(formData);

		if (formData.sku !== "" && formData.category !== "") {

			const imageURL = await uploadImage(file);
			setFormData({...formData, productImage: imageURL})

				const dataToSend = {
					...formData , productImage: imageURL
				}

				api.post("/", dataToSend)
				.then((response) => {
					console.log(response);
					swal.fire({
						icon: "success",
						iconColor: "#7D5FFF",
						title: "Operation Success",
						text: "Item added to the inventory!",
					});
					console.log(response);
				})
				.catch((error) => {
					console.log(error);
					swal.fire({
						icon: "error",
						iconColor: "#e74c3c",
						title: "Operation Not Success",
						text: error,
					});
				});
			
			console.log(formData);
			setFormData({
				sku: "",
				itemName: "",
				category: "",
				price: "",
				rackNo: "",
				quantity: "",
				manufacturer: "",
				reorderLevel:"",
				measurementUnit:"",
				productImage: "",
			});
		} else {
			swal.fire({
				icon: "error",
				iconColor: "#e74c3c",
				title: "Operation Not Success",
				text: "fill the relevant fields first",
			});
		}
	};

	const addItemInputHandler = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	return (
		<AdminLayout>
			<div className="add-item-container-main">
				{/* this is the form container */}
				<form
					className="add-item-form-container"
					onSubmit={addItemFormHandler}
				>
					<span className="tagline-add-item">
						Fill the form for add item
					</span>
					{/* input field container */}
					<div className="column-container">
						{/* column one */}
						<div className="add-item-column">
							<section className="input-container">
								<span className="input-title">item name</span>
								<input
									className="input-field"
									value={formData.itemName}
									name="itemName"
									onChange={addItemInputHandler}
								/>
							</section>
							<section className="input-container">
								<span className="input-title">
									store keeping unit (SKU)
								</span>
								<input
									className="input-field"
									value={formData.sku}
									name="sku"
									onChange={addItemInputHandler}
								/>
							</section>
							<section className="input-container">
								<span className="input-title">category</span>
								<select
									className="input-field"
									name="category"
									value={formData.category}
									onChange={addItemInputHandler}
								>
									<option
										className="select-option"
										value=""
									>Select Category ---</option>
									<option
										className="select-option"
										value="clinical-item"
									>
										Clinical Item
									</option>
									<option
										className="select-option"
										value="store-item"
									>
										Pet Store Item
									</option>
								</select>
							</section>
							<section className="input-container">
								<span className="input-title">unit price</span>
								<input
									className="input-field"
									value={formData.price}
									name="price"
									onChange={addItemInputHandler}
								/>
							</section>
							<section className="input-container">
								<span className="input-title">rack number</span>
								<input
									className="input-field"
									value={formData.rackNo}
									name="rackNo"
									onChange={addItemInputHandler}
								/>
							</section>
						</div>
						{/* column two */}
						<div className="add-item-column">
							<section className="input-container">
								<span className="input-title">quantity</span>
								<input
									className="input-field"
									value={formData.quantity}
									name="quantity"
									onChange={addItemInputHandler}
								/>
							</section>
							<section className="input-container">
								<span className="input-title">
									manufacturer
								</span>
								<input
									className="input-field"
									value={formData.manufacturer}
									name="manufacturer"
									onChange={addItemInputHandler}
								/>
							</section>
							<section className="input-container">
								<span className="input-title">
									reorder level
								</span>
								<input
									className="input-field"
									value={formData.reorderLevel}
									name="reorderLevel"
									onChange={addItemInputHandler}
								/>
							</section>
							<section className="input-container">
								<span className="input-title">
									measurement unit
								</span>
								<input
									className="input-field"
									value={formData.measurementUnit}
									name="measurementUnit"
									onChange={addItemInputHandler}
								/>
							</section>
							
							<section className="input-container">
								<span className="input-title">
									product image
								</span>
								<input
									type="file"
									name="productImage"
									id="file-input"
									accept='.png, .jpeg, .jpg, .webp'
									className="input-field"
									onChange={(e) => setFile(e.target.files[0])}
								/>
							</section>
							<div className="btn-container-add-item">
								<button type="submit" className="submit-btn">
									Submit
								</button>
								<button type="reset" className="reset-btn">
									Reset
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</AdminLayout>
	);
};

export default AddItem;
