import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import AddItem from './pages/FormSample/AddItem';
import AdminLayout from './pages/Layouts/AdminLayout';
import AddProduct from './pages/Product/AddProduct';
import ManageProducts from './pages/Product/ManageProducts';
import EditProduct from './pages/Product/EditProduct';
import ViewProduct from './pages/Product/ViewProduct';
import AddService from './pages/Services/addService';
import AddRecord from './pages/Services/addRecord';

function App() {
  return (
    <Router>
      <Toaster />
      
      <Routes>
        <Route path='/' element={<AdminLayout />} />
        <Route exact path='/component-2' element={<AddItem />} />
        <Route exact path='/component-3' element={<AddProduct />} />


        <Route path='/products/manageProducts' element={< ManageProducts />} />
        <Route path='/products/addProduct' element={<AddProduct />} />
        <Route path='/products/editProuduct/:id' element={<EditProduct />} />
        <Route path='/products/viewProuduct/:id' element={<ViewProduct />} />
        <Route path='/orders'  />
        <Route path='/insights'  />
        <Route path='/AddService' element={<AddService />} />
        <Route path='/AddRecord' element={<AddRecord />} />
        

      </Routes>
    </Router>
  )
}

export default App;
