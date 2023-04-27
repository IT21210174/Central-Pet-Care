import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import AddItem from './pages/FormSample/AddItem';
import AdminLayout from './pages/Layouts/AdminLayout';
import AddProduct from './pages/Product/AddProduct';
import AddPet from './pages/Pet/AddPet'
import ViewPet from './pages/Pet/ViewPet'
import ManagePet from './pages/Pet/ManagePet'
import EditPet from './pages/Pet/EditPet'
import AddTreatments from './pages/Pet/AddTreatments';
import ManageTreatment from './pages/Pet/ManageTreatment';
import EditTreatment from './pages/Pet/EditTreatment';
import ViewTreatment from './pages/Pet/ViewTreatment'
import ManageProducts from './pages/Product/ManageProducts';
import EditProduct from './pages/Product/EditProduct';
import ProductCatalog from './pages/Store/ProductCatalog';
import Product from './pages/Store/Product';
import Cart from './pages/Store/Cart';
import ManageOrders from './pages/Product/ManageOrders';
import Success from './pages/Store/Success';
import Wishlist from './pages/Store/Wishlist';


function App() {
  return (
    <Router>
      <Toaster />
      
      <Routes>
        <Route path='/' element={<AdminLayout/>} />
        <Route exact path='/component-2' element={<AddItem />} />
        <Route exact path='/component-3' element={<AddProduct />} />


        <Route path='/addProduct' element={<AddProduct/>} />
        <Route path='/orders' element={<Product/>} />
        <Route path='/insights' element={<AddProduct />} />

        <Route path='/admin/pets/petRegister' element={<AddPet/>} />
        <Route path='/admin/pets/managePet' element={<ManagePet/>} />
        <Route path='/admin/pets/ViewPet/:id' element={<ViewPet/>} />
        <Route path='/admin/pets/EditPet/:id' element={<EditPet/>} />
        <Route path='/admin/products/manageProducts' element={< ManageProducts />} />
        <Route path='/admin/products/addProduct' element={<AddProduct />} />
        <Route path='/admin/products/editProuduct/:id' element={<EditProduct />} />
        <Route path='/admin/orders' element={<ManageOrders />} />
        <Route path='/admin/insights'  />

        <Route path='/store' element={<ProductCatalog />} />
        <Route path='/store/:id' element={<Product />} />
        <Route path='/success' element={<Success />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />

        <Route path='/admin/treatments/AddTreatments' element={<AddTreatments/>} />
        <Route path='/admin/treatments/ManageTreatments' element={<ManageTreatment/>} />
        <Route path='/admin/treatments/ViewTreatment/:id' element={<ViewTreatment/>} />
        <Route path='/admin/treatments/EditTreatment/:id' element={<EditTreatment/>} />
        <Route path='/admin/pets/petRegister' element={<AddPet/>} />
        <Route path='/admin/pets/managePet' element={<ManagePet/>} />
        <Route path='/admin/pets/ViewPet/:id' element={<ViewPet/>} />
        <Route path='/admin/pets/EditPet/:id' element={<EditPet/>} />
      </Routes>
    </Router>
  )
}

export default App;
