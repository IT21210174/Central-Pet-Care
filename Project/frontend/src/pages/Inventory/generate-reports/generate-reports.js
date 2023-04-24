import React from "react";
import AdminLayout from "../../Layouts/AdminLayout";
import api from "../../../services/api";

function GenerateReports() {
	const printData = () => {
		api.get("/report")
			.then((response) => {
				console.log(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<AdminLayout>
			<div>generate-reports</div>
			<button onClick={printData}>Generate Inventory Report</button>
		</AdminLayout>
	);
}

export default GenerateReports;
