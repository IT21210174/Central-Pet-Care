import React , {useEffect, useState} from 'react'
import AdminLayout from '../../Layouts/AdminLayout'
import {userRequest} from '../../../requestMethods'
import './update-inventory.scss'
import Swal from 'sweetalert2';

import { useLocation, useNavigate } from 'react-router-dom';

function UpdateItem() {

	const navigate = useNavigate()

    const location = useLocation()
    const {id} = location.state
    
    useEffect(()=>{

		const fetchData = async() => {
			await userRequest.get(`inventory/mongo/${id}`).then((response)=>{
				setUpdateFormData(response.data)
				console.log(response.data);
			})
		}

		fetchData()
    },[])

	const [file , setFile] = useState('')
    const [updateFormData, setUpdateFormData] = useState({
        _id:"",
		sku: "",
		itemName: "",
		category: "",
		price: "",
		rackNo: "",
		quantity: "",
		manufacturer: "",
		productDescription: "",
		productImage: "",
	});


    const updateFormHandler = async(event) => {

		event.preventDefault()

       await userRequest.put(`inventory/${id}` , updateFormData).then((response)=>{
            if(response){
                Swal.fire(
                    {
                        icon: "success",
				        iconColor: "#7d5fff",
				        title: "Inventory Updated",
				        text: "Changes are made to the item!",
                    }
                )
            }
        })

        .catch((error)=>{
                Swal.fire(
                    {
                        icon: "error",
				        iconColor: "#e74c3c",
				        title: "Operation Unsuccessful",
				        text: "Please check again!",
                    }
                )
                console.log(error);
        })

		navigate("/admin/inventory/manage-inventory")
    }

	const updateItemInputHandler = (event) => {
		setUpdateFormData({ ...updateFormData, [event.target.name]: event.target.value });
	};

	const backBtn = () => {
		navigate("/admin/inventory/manage-inventory")
	}

  return (
        <AdminLayout>
			<div className="add-item-container-main">
				{/* this is the form container */}
				<form
					className="add-item-form-container"
					onSubmit={updateFormHandler}
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
									value={updateFormData.itemName}
									name="itemName"
									onChange={updateItemInputHandler}
								/>
							</section>
							<section className="input-container">
								<span className="input-title">
									store keeping unit (SKU)
								</span>
								<input
									className="input-field"
									value={updateFormData.sku}
									name="sku"
									onChange={updateItemInputHandler}
								/>
							</section>
							<section className="input-container">
								<span className="input-title">category</span>
								<select
									className="input-field"
									name="category"
									value={updateFormData.category}
									onChange={updateItemInputHandler}
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
									value={updateFormData.price}
									name="price"
									onChange={updateItemInputHandler}
								/>
							</section>
							<section className="input-container">
								<span className="input-title">rack number</span>
								<input
									className="input-field"
									value={updateFormData.rackNo}
									name="rackNo"
									onChange={updateItemInputHandler}
								/>
							</section>
						</div>
						{/* column two */}
						<div className="add-item-column">
							<section className="input-container">
								<span className="input-title">quantity</span>
								<input
									className="input-field"
									value={updateFormData.quantity}
									name="quantity"
									onChange={updateItemInputHandler}
								/>
							</section>
							<section className="input-container">
								<span className="input-title">
									manufacturer
								</span>
								<input
									className="input-field"
									value={updateFormData.manufacturer}
									name="manufacturer"
									onChange={updateItemInputHandler}
								/>
							</section>
							<section className="input-container">
								<span className="input-title">
									reorder level
								</span>
								<input
									className="input-field"
									value={updateFormData.reorderLevel}
									name="reorderLevel"
									onChange={updateItemInputHandler}
								/>
							</section>
							<section className="input-container">
								<span className="input-title">
									measurement unit
								</span>
								<input
									className="input-field"
									value={updateFormData.measurementUnit}
									name="measurementUnit"
									onChange={updateItemInputHandler}
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
									Update
								</button>
								<button className="reset-btn" onClick={()=>{backBtn()}}>
									Back
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</AdminLayout>
  )
}

export default UpdateItem