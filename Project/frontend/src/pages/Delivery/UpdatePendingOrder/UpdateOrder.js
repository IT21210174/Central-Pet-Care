import React , {useEffect, useState} from 'react'
import AdminLayout from '../../Layouts/AdminLayout'
import swal from 'sweetalert2';
import api from '../../../services/api';
import './UpdateOrder.scss'
import Swal from 'sweetalert2';

import { useLocation, useNavigate } from 'react-router-dom';

function UpdateOrder() {

    const navigate = useNavigate()

    const location = useLocation()
    const {id} = location.state
    console.log(id);


    useEffect(()=>{
        api.get(`/mongo/${id}`).then((response)=>{
            setOrderDetails(response.data)
            console.log(orderDetails);
        })
    },[])

    const [orderDetails, setOrderDetails] = useState({
		orderId: "",
		shipping:{
			name: "", 
			address:{
				line1:"", 
				line2:"", 
				city:"" ,
				country:""},
			phone:""},
		deliveryStatus:"",
		shippingAmount:"",
		total:"",
		deliveryStatus:"",
		//driver should be added as well			
	});

	const addDriverFormHandler = (event) => {
		event.preventDefault();
		if (driverDetails.driverName !== "") {
			console.log(driverDetails);
			api.put(`/mongo/${id}`, driverDetails).then((response) => {
				console.log(response.data);
				console.log("success bro");
			});
			swal.fire({
				icon: "success",
				title: "Operation Successful",
				text: "Driver added to the database",
			});

            navigateBackBtn()
		} else {
			console.log(driverDetails);
			api.post("/", driverDetails).then((response) => {
				console.log(response.data);
				console.log("success bro");
			});
			swal.fire({
				icon: "error",
				title: "Operation Unsuccessful",
				text: "Please fill relevant fields",
			});
		}
	};

	const navigateBackBtn = () => {
        navigate(`/delivery/manage-driver`);
    }

	const addDriverFormInputHandler = (event) => {
		setDriverDetails({
			...driverDetails,
			[event.target.name]: event.target.value,
		});
	};

    return (
		<AdminLayout>
			<div className="add-driver-container">
				<form
					className="form-container"
					onSubmit={addDriverFormHandler}
				>
					{/* column lane one */}
					<div className="add-driver-column">
						<section className="input-container">
							<span className="input-title">driver name</span>
							<input
								className="input-field"
								value={driverDetails.driverName}
								onChange={addDriverFormInputHandler}
								name="driverName"
							/>
						</section>
						<section className="input-container">
							<span className="input-title">NIC number</span>
							<input
								className="input-field"
								value={driverDetails.nicNumber}
								onChange={addDriverFormInputHandler}
								name="nicNumber"
							/>
						</section>
						<section className="input-container">
							<span className="input-title">
								permanent address
							</span>
							<textarea
								className="input-textarea"
								id=""
								cols="30"
								rows="10"
								value={driverDetails.permAddress}
								onChange={addDriverFormInputHandler}
								name="permAddress"
							></textarea>
						</section>
						<section className="input-container">
							<span className="input-title">
								telephone number
							</span>
							<input
								className="input-field"
								value={driverDetails.phoneNum}
								onChange={addDriverFormInputHandler}
								name="phoneNum"
							/>
						</section>
					</div>
					{/* column lane two */}
					<div className="add-driver-column">
						<section className="input-container">
							<span className="input-title">
								driver's liscene number
							</span>
							<input
								className="input-field"
								value={driverDetails.driversLicenceNo}
								onChange={addDriverFormInputHandler}
								name="driversLicenceNo"
							/>
						</section>
						<section className="input-container">
							<span className="input-title">
								vehicle registration number
							</span>
							<input
								className="input-field"
								value={driverDetails.vehicleRegNo}
								onChange={addDriverFormInputHandler}
								name="vehicleRegNo"
							/>
						</section>
						<section className="input-container">
							<span className="input-title">vehicle type</span>
							<select
								className="input-field"
								value={driverDetails.vehicleType}
								onChange={addDriverFormInputHandler}
								name="vehicleType"
							>
								{" "}
								<option className="select-option" value="">
									Select Type
								</option>
								<option className="select-option" value="bike">
									Motorcycle
								</option>
								<option className="select-option" value="car">
									Car
								</option>
								<option className="select-option" value="lorry">
									Lorry
								</option>
								<option className="select-option" value="van">
									Van
								</option>
							</select>
						</section>
                        <section className="input-container">
							<span className="input-title">Select Status</span>
							<select
								className="input-field"
								value={driverDetails.driverStatus}
								onChange={addDriverFormInputHandler}
								name="driverStatus"
							>
								{" "}
								<option className="select-option" value="Available">
									Available
								</option>
								<option className="select-option" value="Unavailable">
									Unavailable
								</option>
							</select>
						</section>
						<div className="btn-container-add-driver">
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

export default UpdateDriver