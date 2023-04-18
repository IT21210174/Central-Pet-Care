import "./App.css";
import AdminLayout from "./pages/Layouts/AdminLayout";
import AddItem from "./pages/Inventory/AddItem";

// delivery components
import AddDriver from "./pages/Delivery/RegisterDriver/RegisterDriver";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<AdminLayout />} />
				<Route path="/component-2" element={<AddItem />} />
				<Route path="/delivery/add-driver" element={<AddDriver />} />
			</Routes>
		</Router>
	);
}

export default App;
