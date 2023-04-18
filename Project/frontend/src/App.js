import './App.css';
import AdminLayout from './pages/Layouts/AdminLayout';
import AddItemPage from './pages/Inventory/add-item-page/AddItem';
import OverviewPage from './pages/Inventory/overview-page/overview';
import ManageInventoryPage from './pages/Inventory/manage-inventory-page/manage-inventory';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AdminLayout />} />
        {/* inventory routes */}
        <Route path='/inventory/overview' element={<OverviewPage />} />
        <Route path='/inventory/add-item' element={<AddItemPage />} />
        <Route path='/inventory/manage-inventory' element={<ManageInventoryPage />} />
      </Routes>
    </Router>
  )
}

export default App;
