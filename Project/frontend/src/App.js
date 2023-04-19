import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import AddItem from './pages/FormSample/AddItem';
import AdminLayout from './pages/Layouts/AdminLayout';
import AddProduct from './pages/Product/AddProduct';
import ManageProducts from './pages/Product/ManageProducts';
import UserList from './pages/Product/userList/UserList';
import Users from './pages/Product/Users/Users';


function App() {
  return (
    <Router>
      <Toaster />
      
      <Routes>
        <Route path='/' element={<AdminLayout />} />
        <Route exact path='/component-2' element={<AddItem />} />
        <Route exact path='/component-3' element={<AddProduct />} />


        <Route path='/manageProducts' element={< ManageProducts />} />
        <Route path='/addProduct' element={<AddProduct />} />
        <Route path='/orders' element={<UserList />} />
        <Route path='/insights' element={<Users />} />

        

      </Routes>
    </Router>
  )
}

export default App;
