import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import AddItem from './pages/FormSample/AddItem';
import AdminLayout from './pages/Layouts/AdminLayout';
import AddProduct from './pages/Product/AddProduct';
import ManageProducts from './pages/Product/ManageProducts';
import EditProduct from './pages/Product/EditProduct';
import ViewProduct from './pages/Product/ViewProduct';
import ProductCatalog from './pages/Store/ProductCatalog';
import Product from './pages/Store/Product';
import Cart from './pages/Store/Cart';
import ManageOrders from './pages/Product/ManageOrders';
import Success from './pages/Store/Success';
import Wishlist from './pages/Store/Wishlist';

//payroll management

import AddPayroll from './pages/Payroll/AddPayroll';
import ManagePayroll from './pages/Payroll/ManagePayroll';
import EditPayroll from './pages/Payroll/EditPayroll';
import ViewPayroll from './pages/Payroll/ViewPayroll';


//staff management

import AddStaff from './pages/Staff/AddStaff'
import ManageStaff from './pages/Staff/ManageStaff';
import EditStaff from './pages/Staff/EditStaff';
import ViewStaff from './pages/Staff/ViewStaff';

//leave management
import AddLeave from './pages/Leave/AddLeave';
import ManageLeave from './pages/Leave/ManageLeave'
import EditLeave from './pages/Leave/EditLeave'
import ViewLeave from './pages/Leave/ViewLeave';



function App() {
  return (
    <Router>
      <Toaster />
      
      <Routes>
        <Route path='/' element={<ProductCatalog />} />
        <Route exact path='/component-2' element={<AddItem />} />
        <Route exact path='/component-3' element={<AddProduct />} />


        <Route path='/products/manageProducts' element={< ManageProducts />} />
        <Route path='/products/addProduct' element={<AddProduct />} />
        <Route path='/products/editProuduct/:id' element={<EditProduct />} />
        <Route path='/products/viewProuduct/:id' element={<ViewProduct />} />
        <Route path='/orders'  />
        <Route path='/insights'  />
        
        {/*staff*/ }
        <Route path='/admin/staff/AddStaff' element={< AddStaff />} />
        <Route path='/admin/staff/ManageStaff' element={<ManageStaff />} />
        <Route path='/admin/staff/EditSatff/:id' element={<EditStaff />} />
        <Route path='/admin/staff/ViewStaff/:id' element={<ViewStaff />} />

        <Route path='/admin/payroll/AddPayroll' element={< AddPayroll />} />
        <Route path='/admin/payroll/ManagePayroll' element={< ManagePayroll />} />
        <Route path='/admin/payroll/EditPayroll/:id' element={<EditPayroll />} />
        <Route path='/admin/payroll/ViewPayroll/:id' element={<ViewPayroll/>} />
        
        <Route path='/admin/leave/AddLeave' element={< AddLeave />} />
        <Route path='/admin/leave/ManageLeave' element={< ManageLeave />} />
        <Route path='/admin/leave/EditLeave/:id' element={<EditLeave />} />
        <Route path='/admin/leave/ViewLeave/:id' element={<ViewLeave/>} />
        
      

        <Route path='/admin/products/manageProducts' element={< ManageProducts />} />
        <Route path='/admin/products/addProduct' element={<AddProduct />} />
        <Route path='/admin/products/editProuduct/:id' element={<EditProduct />} />
        <Route path='/admin/products/viewProuduct/:id' element={<ViewProduct />} />
        <Route path='/admin/orders' element={<ManageOrders />} />
        <Route path='/admin/insights'  />

        <Route path='/store' element={<ProductCatalog />} />
        <Route path='/store/:id' element={<Product />} />
        <Route path='/success' element={<Success />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />

      </Routes>
    </Router>
  )
}

export default App;
