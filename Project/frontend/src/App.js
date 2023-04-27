import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import AddItem from './pages/FormSample/AddItem';
import AdminLayout from './pages/Layouts/AdminLayout';
import AddProduct from './pages/Product/AddProduct';
import ManageProducts from './pages/Product/ManageProducts';
import EditProduct from './pages/Product/EditProduct';
import ViewProduct from './pages/Product/ViewProduct';
import Product from './pages/Store/Product'
import ManageOrders from './pages/Product/ManageOrders';
import Success from './pages/Store/Success';
import Wishlist from './pages/Store/Wishlist';

//service management
import AddRecord from './pages/Services/AddRecord';
import AddService from './pages/Services/AddService';
import EditRecord from './pages/Services/EditRecord';
import ViewRecord from './pages/Services/ViewRecord';
import ManageService from './pages/Services/ManageService';
import ManageRecord from './pages/Services/ManageRecord';
import EditService from './pages/Services/EditService';
import ViewService from './pages/Services/ViewService';

function App() {
  return (
    <Router>
      <Toaster />
      
      <Routes>
        <Route path='/' element={<AdminLayout />} />
        <Route exact path='/component-2' element={<AddItem />} />
        <Route exact path='/component-3' element={<AddProduct />} />


        <Route path='/admin/products/manageProducts' element={< ManageProducts />} />
        <Route path='/admin/products/addProduct' element={<AddProduct />} />
        <Route path='/admin/products/editProuduct/:id' element={<EditProduct />} />
        <Route path='/admin/products/viewProuduct/:id' element={<ViewProduct />} />
        <Route path='/admin/orders'  />
        <Route path='/admin/insights'  />

        <Route path='/products' element={<ProductCatalog />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />

        <Route path='/admin/service/AddService' element={< AddService />} />
        <Route path='/admin/service/ManageServices' element={< ManageService />} />
        <Route path='/admin/service/EditService/:id' element={<EditService />} />
        <Route path='/admin/service/ViewService/:id' element={<ViewService />} />



        <Route path='/admin/service/AddRecord' element={< AddRecord />} />
        <Route path='/admin/service/ManageRecords' element={< ManageRecord />} />
        <Route path='/admin/service/EditRecord/:id' element={<EditRecord />} />
        <Route path='/admin/service/ViewRecord/:id' element={<ViewRecord />} />

        

      </Routes>
    </Router>
  )
}

export default App;
