import './App.css';
import AdminLayout from './pages/Layouts/AdminLayout';
import AddItemPage from './pages/Inventory/add-item-page/AddItem';
import OverviewPage from './pages/Inventory/overview-page/overview';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AdminLayout />} />
        {/* inventory routes */}
        <Route path='/inventory/overview' element={<OverviewPage />} />
        <Route path='/inventory/add-item' element={<AddItemPage />} />
      </Routes>
    </Router>
  )
}

export default App;
