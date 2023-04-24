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


function App() {
  return (
    <Router>
      <Toaster />
      
      <Routes>
        <Route path='/store' element={<ProductCatalog />} />
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
        

      </Routes>
    </Router>
  )
}

export default App;
