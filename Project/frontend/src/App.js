import './App.css';
import AdminLayout from './pages/Layouts/AdminLayout';
import AddItem from './pages/Inventory/AddItem';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AdminLayout />} />
        <Route path='/component-2' element={<AddItem />} />
      </Routes>
    </Router>
  )
}

export default App;
