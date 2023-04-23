import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import AddItem from './pages/FormSample/AddItem';
import AdminLayout from './pages/Layouts/AdminLayout';
import AddProduct from './pages/Product/AddProduct';
import Product from './components/store/Product';
import AddPet from './pages/Pet/AddPet'
import ViewPet from './pages/Pet/ViewPet'
import ManagePet from './pages/Pet/ManagePet'
import EditPet from './pages/Pet/EditPet'
import AddTreatments from './pages/Pet/AddTreatments';
import ManageTreatment from './pages/Pet/ManageTreatment';
import EditTreatment from './pages/Pet/EditTreatment';
import ViewTreatment from './pages/Pet/ViewTreatment'


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

        <Route path='/admin/treatments/AddTreatments' element={<AddTreatments/>} />
        <Route path='/admin/treatments/ManageTreatments' element={<ManageTreatment/>} />
        <Route path='/admin/treatments/ViewTreatment/:id' element={<ViewTreatment/>} />
        <Route path='/admin/treatments/EditTreatment/:id' element={<EditTreatment/>} />
      </Routes>
    </Router>
  )
}

export default App;
