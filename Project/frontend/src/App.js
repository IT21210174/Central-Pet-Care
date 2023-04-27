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


        <Route path='/products/manageProducts' element={< ManageProducts />} />
        <Route path='/products/addProduct' element={<AddProduct />} />
        <Route path='/products/editProuduct/:id' element={<EditProduct />} />
        <Route path='/products/viewProuduct/:id' element={<ViewProduct />} />
        <Route path='/orders'  />
        <Route path='/insights'  />

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
