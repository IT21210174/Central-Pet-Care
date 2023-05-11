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
import ViewOrder from './pages/Product/ViewOrder';

// delivery components
import AddDriver from "./pages/Delivery/RegisterDriver/RegisterDriver";
import ManageDriver from "./pages/Delivery/ManageDriver/ManageDriver";
import ViewDeliveryOrder from "./pages/Delivery/ViewOrder/ViewOrder";
import UpdateDriver from "./pages/Delivery/updateDriver/update-driver";
import UpdateOrder from "./pages/Delivery/UpdatePendingOrder/UpdateOrder";
import ProcessingOrder from "./pages/Delivery/ProcessingOrder/ProcessingOrder";
import CompletedOrder from "./pages/Delivery/CompletedOrder/CompletedOrder";


function App() {
  return (
    <Router>
      <Toaster />
      
      <Routes>
        <Route path='/' element={<ProductCatalog />} />
        <Route exact path='/component-2' element={<AddItem />} />
        <Route exact path='/component-3' element={<AddProduct />} />


        <Route path='/admin/products/manageProducts' element={< ManageProducts />} />
        <Route path='/admin/products/addProduct' element={<AddProduct />} />
        <Route path='/admin/products/editProuduct/:id' element={<EditProduct />} />
        <Route path='/admin/products/viewProuduct/:id' element={<ViewProduct />} />
        <Route path='/admin/products/manageOrders' element={<ManageOrders />} />
        <Route path='/admin/products/viewOrder/:id' element={<ViewOrder />} />
        <Route path='/admin/products/insights' />


        <Route path='/store' element={<ProductCatalog />} />
        <Route path='/store/:id' element={<Product />} />
        <Route path='/success' element={<Success />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />

        <Route path="/delivery/add-driver" element={<AddDriver />} />
				<Route path="/delivery/manage-driver" element={<ManageDriver />} />
				<Route path="/delivery/view-order" element={<ViewDeliveryOrder />} />
				<Route path="/delivery/update-driver" element={<UpdateDriver/>}/> 
				<Route path="/delivery/update-order" element={<UpdateOrder/>}/> 
				<Route path="/delivery/processing-order" element={<ProcessingOrder/>}/>
				<Route path="/delivery/completed-order" element={<CompletedOrder/>}/>

      </Routes>
    </Router>
  )
}

export default App;
