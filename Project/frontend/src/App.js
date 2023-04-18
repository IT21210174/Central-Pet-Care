import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddItem from './pages/Inventory/AddItem';
import AdminLayout from './pages/Layouts/AdminLayout';
import AddProduct from './pages/Product/AddProduct';
import Products from './pages/Product/Products';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AdminLayout />} />
        <Route exact path='/component-2' element={<AddItem />} />
        <Route exact path='/component-3' element={<AddProduct />} />


        <Route path='/products' element={<AddProduct />} />
        <Route path='/orders' element={<Products />} />
        <Route path='/insights' element={<AddProduct />} />


      </Routes>
    </Router>
  )
}

export default App;
