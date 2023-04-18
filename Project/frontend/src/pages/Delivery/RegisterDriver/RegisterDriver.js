import React from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import "./RegisterDriver.scss";
function RegisterDriver() {
	return (
		<AdminLayout>
			<div className="add-driver-container">
				<form className="form-container">
					{/* column lane one */}
					<div className="add-driver-column">
						<section className="input-container">
							<span className="input-title">driver name</span>
							<input className="input-field" />
						</section>
						<section className="input-container">
							<span className="input-title">NIC number</span>
							<input className="input-field" />
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
							></textarea>
						</section>
						<section className="input-container">
							<span className="input-title">
								telephone number
							</span>
							<input className="input-field" />
						</section>
					</div>
					{/* column lane two */}
					<div className="add-driver-column">
						<section className="input-container">
							<span className="input-title">
								driver's liscene number
							</span>
							<input className="input-field" />
						</section>
						<section className="input-container">
							<span className="input-title">
								vehicle registration number
							</span>
							<input className="input-field" />
						</section>
						<section className="input-container">
							<span className="input-title">vehicle type</span>
							<select className="input-field">
								<option
									className="select-option"
									value="bike"
									selected
								>
									Motorbike
								</option>
								<option className="select-option" value="car">
									Car
								</option>
							</select>
						</section>
						<div className="btn-container-add-item">
							<button type="reset" className="reset-btn">
								Clear
							</button>
							<button type="submit" className="submit-btn">
								Add
							</button>
						</div>
					</div>
				</form>
			</div>
		</AdminLayout>
	);
}

export default RegisterDriver;
