import "./App.css";

import HomePage from "./pages/Home/Home-page";

import AdminLayout from "./pages/Layouts/AdminLayout";
import AddItemPage from "./pages/Inventory/add-item-page/AddItem";
import OverviewPage from "./pages/Inventory/overview-page/overview";
import SupplierRegForm from "./pages/Inventory/register-supplier-page/supplier-register";
import ManageInventoryPage from "./pages/Inventory/manage-inventory-page/manage-inventory";
import GenerateReports from "./pages/Inventory/generate-reports/generate-reports";
import UpdateItem from "./pages/Inventory/update-inventory-page/update-inventory";
import TestComp from "./pages/Inventory/release-items-page/test-comp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/home" element={<HomePage />} />
				<Route path="/" element={<AdminLayout />} />
				{/* inventory routes */}
				<Route path="/inventory/overview" element={<OverviewPage />} />
				<Route path="/inventory/add-item" element={<AddItemPage />} />
				<Route path="/inventory/manage-inventory" element={<ManageInventoryPage/>}/>
				<Route path="/inventory/supplier-registration" element={<SupplierRegForm />}/>
				<Route path="/inventory/generate-reports" element={<GenerateReports />}/>
				<Route path="/inventory/test-comp" element={<TestComp />}/>
				<Route path="/inventory/update-item" element={<UpdateItem />}/>
			</Routes>
		</Router>
	);
}

export default App;
