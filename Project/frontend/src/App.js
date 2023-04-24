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

//vet management
import Addvet from './pages/Vet/AddVet';
import EditVet from './pages/Vet/EditVet';
import ManageVets from './pages/Vet/ManageVets';
import ViewVet from './pages/Vet/ViewVet';

//prescriptions
import AddPrescription from './pages/Prescription/AddPrescription';
import ManagePrescription from './pages/Prescription/ManagePrescription';
import EditPrescription from './pages/Prescription/EditPrescription';
import ViewPrescription from './pages/Prescription/ViewPrescription';

//medicine
import Medicine from './pages/Medicine/Medicine';

import VetCard from './pages/Vet/VetCard';

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
        
         <Route path='/admin/vets/addVet' element={<Addvet />} />
         <Route path='/admin/vets/manageVet' element={<ManageVets />} />
         <Route path='/admin/vets/editVet/:id' element={<EditVet />} />
         <Route path='/admin/vets/viewVet/:id' element={<ViewVet />} />

         <Route path='/admin/prescriptions/addPrescription' element={<AddPrescription />} />
         <Route path='/admin/prescriptions/managePrescription' element={<ManagePrescription />} />
         <Route path='/admin/prescriptions/editPrescription/:id' element={<EditPrescription />} />
         <Route path='/admin/prescriptions/viewPrescription/:id' element={<ViewPrescription />} />

         <Route path='/admin/medicines/manageMedicines' element={<Medicine />} />

       </Routes>
     </Router>
  )
}

export default App;