import React , {useEffect, useState} from 'react'
import AdminLayout from '../../Layouts/AdminLayout'
import swal from 'sweetalert2';
import { userRequest } from '../../../requestMethods';
import './UpdateOrder.scss'
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';


function UpdateOrder() {

    const navigate = useNavigate()

    const location = useLocation()
    const {id} = location.state
    console.log(id);


	const [orderDetails, setOrderDetails] = useState({
		_id: "",
		orderId: "",
		shipping:{
			name: "", 
			address:{
				line1:"", 
				line2:"", 
				city:"" },
			phone:""},
		deliveryStatus:"",
		shippingAmount:"",
		total:"",
		assignedDriver:""		
	});


    useEffect(()=>{
       const fetcher = async() => {
			await userRequest.get(`/deliver-orders/${id}`)
			.then((response)=>{
				console.log(response.data)
				setOrderDetails(response.data)
				console.log(orderDetails);
			})
			.catch((err) => {
				console.log(err)
			})
		}

		fetcher()
		
    },[setOrderDetails])

	
	const updateOrderFormHandler = (event) => {
		event.preventDefault();
		if (orderDetails.orderId !== "") {
			console.log(orderDetails._id);
			userRequest.put(`/deliver-orders/${orderDetails._id}`, orderDetails).then((response) => {
				console.log(response.data);
				console.log("success");
			});
			swal.fire({
				icon: "success",
				title: "Operation Successful",
				text: "Driver added to the database",
			});

            navigateBackBtn()
		} else {
			console.log(orderDetails);
			userRequest.put("//deliver-orders", orderDetails).then((response) => {
				console.log(response.data);
				console.log("success");
			});
			swal.fire({
				icon: "error",
				title: "Operation Unsuccessful",
				text: "Please fill relevant fields",
			});
		}
	};

	const navigateBackBtn = () => {
        navigate(`/admin/delivery/view-order`);
    }

	const updateOrderFormInputHandler = (event) => {
		setOrderDetails({
			...orderDetails,
			[event.target.name]: event.target.value,
		});
	};

    return (
		<AdminLayout>
			<div className="update-order-container">
				<form
					className="form-container"
					onSubmit={updateOrderFormHandler}
				>
					{/* column lane one */}
					<div className="update-order-column">
						<section className="input-container">
							<span className="input-title">Order ID</span>
							<input
								className="input-field"
								value={orderDetails.orderId}
								onChange={updateOrderFormInputHandler}
								name="orderId"
							/>
						</section>
						<section className="input-container">
							<span className="input-title">Customer Name</span>
							<input
								className="input-field"
								value={orderDetails.shipping.name}
								onChange={updateOrderFormInputHandler}
								name="shipping.name"
							/>
						</section>
						<section className="input-container">
							<span className="input-title">Address Line 1</span>
							<input
								className="input-field"
								value={orderDetails.shipping.address.line1}
								onChange={updateOrderFormInputHandler}
								name="shipping.address.line1"
							/>
						</section>
						<section className="input-container">
							<span className="input-title">Address Line 2</span>
							<input
								className="input-field"
								value={orderDetails.shipping.address.line2}
								onChange={updateOrderFormInputHandler}
								name="shipping.address.line2"
							/>
						</section>
						<section className="input-container">
							<span className="input-title">City</span>
							<input
								className="input-field"
								value={orderDetails.shipping.address.city}
								onChange={updateOrderFormInputHandler}
								name="shipping.address.city"
							/>
						</section>
					</div>
					{/* column lane two */}
					<div className="update-order-column">
						<section className="input-container">
							<span className="input-title">
								Telephone Number
							</span>
							<input
								className="input-field"
								value={orderDetails.shipping.phone}
								onChange={updateOrderFormInputHandler}
								name="shipping.phone"
							/>
						</section>
						<section className="input-container">
							<span className="input-title">
								Shipping Amount(Rs.)
							</span>
							<input
								className="input-field"
								value={orderDetails.shippingAmount}
								onChange={updateOrderFormInputHandler}
								name="shippingAmount"
							/>
						</section>
						<section className="input-container">
							<span className="input-title">
								Total Amount(Rs.)
							</span>
							<input
								className="input-field"
								value={orderDetails.total}
								onChange={updateOrderFormInputHandler}
								name="total"
							/>
						</section>
						<section className="input-container">
							<span className="input-title">Delivery Status</span>
							<select
								className="input-field"
								// value={orderDetails.deliveryStatus}
								onChange={updateOrderFormInputHandler}
								name="deliveryStatus"
								value={orderDetails.deliveryStatus}
							>
								<option className="select-option" value="">
									Select Type
								</option>
								<option className="select-option" value="Processing">
									Processing
								</option>
								<option className="select-option" value="Completed">
									Completed
								</option>
							</select>
						</section>
                        <section className="input-container">
							<span className="input-title">
								Enter Assigned Vehicle No
							</span>
							<input
								className="input-field"
								value={orderDetails.assignedDriver}
								onChange={updateOrderFormInputHandler}
								name="assignedDriver"
							/>
						</section>
						<div className="btn-container-update-order">
							<button
								onClick={() => {
									navigateBackBtn()
								}}
								className="reset-btn"
							>
								Back
							</button>
							<button type="submit" className="submit-btn">
								Update
							</button>
						</div>
					</div>
				</form>
			</div>
		</AdminLayout>
	);  
}

export default UpdateOrder