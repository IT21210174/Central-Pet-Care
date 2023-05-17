import React, { useState , useEffect} from "react";
import swal from "sweetalert2";
import AdminLayout from "../../Layouts/AdminLayout";
import {userRequest} from '../../../requestMethods'
import "./supplier-register.scss";

function SupplierRegistration() {
	
	const [formData, setFormData] = useState({
		companyName: "",
		businessType: "",
		agentName: "",
		agentID: "",
		supplierCategory: "",
		supplyingItem: "",
		email: "",
		phone: "",
		companyAddress: "",
	});

	const addSupplierFormHandler = async(event) => {
		event.preventDefault();
		console.log(formData);

		if (formData.agentID !== "" && formData.businessType !== "" && formData.supplierCategory !== "" && formData.phone !== "" && formData.email)  {
			await userRequest.post("suppliers/", formData)
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
				});

			setFormData({
				companyName: "",
				businessType: "",
				agentName: "",
				agentID: "",
				supplierCategory: "",
				supplyingItem: "",
				email: "",
				phone: "",
				companyAddress: "",
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

	const addSupplierInputHandler = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	return (
		<AdminLayout>
			<div className="add-supplier-container-main">
				{/* this is the form container */}
				<form
					className="add-supplier-form-container"
					onSubmit={addSupplierFormHandler}
				>
					<span className="tagline-add-supplier">
						Fill the form for supplier registration
					</span>
					{/* input field container */}
					<div className="column-container">
						{/* column one */}
						<div className="add-supplier-column">
							<section className="input-container">
								<span className="input-title">
									Company Name
								</span>
								<input
									className="input-field"
									value={formData.companyName}
									name="companyName"
									onChange={addSupplierInputHandler}
								/>
							</section>
							<section className="input-container">
								<span className="input-title">Agent Name</span>
								<input
									className="input-field"
									value={formData.agentName}
									name="agentName"
									onChange={addSupplierInputHandler}
								/>
							</section>
							<section className="input-container">
								<span className="input-title">Agent ID</span>
								<input
									className="input-field"
									value={formData.agentID}
									name="agentID"
									onChange={addSupplierInputHandler}
								/>
							</section>
							<section className="input-container">
								<span className="input-title">
									Business Type
								</span>
								<select
									className="input-field"
									name="businessType"
									value={formData.businessType}
									onChange={addSupplierInputHandler}
								>
									<option
										className="select-option"
										value="undefined"
									>select business type--</option>
									<option
										className="select-option"
										value="manufacturer"
									>
										Manufacturer
									</option>
									<option
										className="select-option"
										value="distributor"
									>
										Distributor
									</option>
									<option
										className="select-option"
										value="whole-sale-dealer"
									>
										Wholesale Dealer
									</option>
								</select>
							</section>
							<section className="input-container">
								<span className="input-title">supplier category</span>
								<select
									className="input-field"
									value={formData.supplierCategory}
									name="supplierCategory"
									onChange={addSupplierInputHandler}
								>
									<option
										className="select-option"
										value=""
									>
										select supplier category--
									</option>
									<option
										className="select-option"
										value="clinical-item"
									>
										Clinical-Item
									</option>
									<option
										className="select-option"
										value="pet-item"
									>
										Pet-Item
									</option>
								</select>
							</section>
						</div>
						{/* column two */}
						<div className="add-supplier-column">
							<section className="input-container">
								<span className="input-title">
									Supplying Item
								</span>
								<input
									className="input-field"
									value={formData.supplyingItem}
									name="supplyingItem"
									onChange={addSupplierInputHandler}
								/>
							</section>
							<section className="input-container">
								<span className="input-title">Email</span>
								<input
									type="email"
									className="input-field"
									value={formData.email}
									name="email"
									onChange={addSupplierInputHandler}
								/>
							</section>
							<section className="input-container">
								<span className="input-title">Phone</span>
								<input
									type="text"
									name="phone"
									value={formData.phone}
									className="input-field"
									onChange={addSupplierInputHandler}
								/>
							</section>
							<section className="input-container">
								<span className="input-title">
									Company Address
								</span>
								<input
									type="text"
									name="companyAddress"
									value={formData.companyAddress}
									className="input-field"
									onChange={addSupplierInputHandler}
								/>
							</section>
							<div className="btn-container-add-item">
								<button type="submit" className="submit-btn">
									Register
								</button>
								<button type="reset" className="reset-btn">
									Clear
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</AdminLayout>
	);
}

export default SupplierRegistration;
