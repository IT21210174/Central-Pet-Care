import React , {useEffect, useState} from 'react'
import AdminLayout from '../../Layouts/AdminLayout'
import swal from 'sweetalert2';
import api from '../../../services/api';
import './update-inventory.scss'
import Swal from 'sweetalert2';

import { useLocation, useNavigate } from 'react-router-dom';

function UpdateItem() {

	const navigate = useNavigate()

    const location = useLocation()
    const {id} = location.state
    
    useEffect(()=>{
        api.get(`/mongo/${id}`).then((response)=>{
            setUpdateFormData(response.data)
            console.log(response.data);
        })
    },[])

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


    const updateFormHandler = (event) => {

		event.preventDefault()

        api.put(`/${id}` , updateFormData).then((response)=>{
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

		navigate("/inventory/manage-inventory")
    }

	const updateItemInputHandler = (event) => {
		setUpdateFormData({ ...updateFormData, [event.target.name]: event.target.value });
	};

  return (
        <AdminLayout>
			<div className="add-item-container-main">
				{/* this is the form container */}
				<form className="add-item-form-container" onSubmit={updateFormHandler}>
					<span className="tagline-add-item">
						Update Item Details
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
										value="undefined"
									></option>
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
									product description
								</span>
								<textarea
									className="input-textarea"
									value={updateFormData.productDescription}
									id=""
									cols="30"
									rows="10"
									name="productDescription"
									onChange={updateItemInputHandler}
								></textarea>
							</section>
							<section className="input-container">
								<span className="input-title">
									product image
								</span>
								<input
									type="file"
									name="productImage"
									value={updateFormData.productImage}
									id=""
									className="input-field"
									onChange={updateItemInputHandler}
								/>
							</section>
							<div className="btn-container-add-item">
								<button type="submit" className="submit-btn">
									Update
								</button>
								<button type="reset" className="reset-btn">
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