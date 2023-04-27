import "./App.css";
import AdminLayout from "./pages/Layouts/AdminLayout";
import AddItem from "./pages/Inventory/AddItem";
// delivery components
import AddDriver from "./pages/Delivery/RegisterDriver/RegisterDriver";
import ManageDriver from "./pages/Delivery/ManageDriver/ManageDriver";
import ViewOrder from "./pages/Delivery/ViewOrder/ViewOrder";
import UpdateDriver from "./pages/Delivery/updateDriver/update-driver";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<AdminLayout />} />
				<Route path="/component-2" element={<AddItem />} />
				<Route path="/delivery/add-driver" element={<AddDriver />} />
				<Route path="/delivery/manage-driver" element={<ManageDriver />} />
				<Route path="/delivery/view-order" element={<ViewOrder />} />
				<Route path="/delivery/update-driver" element={<UpdateDriver/>}/> 
			</Routes>
		</Router>
	);
}

export default App;
