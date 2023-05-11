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

// inventory components
import AddItemPage from "./pages/Inventory/add-item-page/AddItem";
import OverviewPage from "./pages/Inventory/overview-page/overview";
import SupplierRegForm from "./pages/Inventory/register-supplier-page/supplier-register";
import ManageInventoryPage from "./pages/Inventory/manage-inventory-page/manage-inventory";
import GenerateReports from "./pages/Inventory/generate-reports/generate-reports";
import UpdateItem from "./pages/Inventory/update-inventory-page/update-inventory";
import TestComp from "./pages/Inventory/release-items-page/test-comp";
import ViewInventoryItem from "./pages/Inventory/view-item-details-page/view-items";
import ManageSupplierWindow from "./pages/Inventory/manage-supplier/manage-supplier";
import ViewSupplierDetails from './pages/Inventory/view-supplier/view-supplier'
import ReleaseItems from "./pages/Inventory/release-items-page/test-comp";
import UpdateSupplierDetails from './pages/Inventory/update-supplier-page/update-supplier'
import OrdersReport from "./pages/Inventory/generate-reports/OrdersReport";
import ReportView from './pages/Doc'


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

        <Route path="/admin/delivery/add-driver" element={<AddDriver />} />
		<Route path="/admin/delivery/manage-driver" element={<ManageDriver />} />
		<Route path="/admin/delivery/view-order" element={<ViewDeliveryOrder />} />
		<Route path="/admin/delivery/update-driver" element={<UpdateDriver/>}/> 
		<Route path="/admin/delivery/update-order" element={<UpdateOrder/>}/> 
		<Route path="/admin/delivery/processing-order" element={<ProcessingOrder/>}/>
		<Route path="/admin/delivery/completed-order" element={<CompletedOrder/>}/>

		{/* inventory routes */}
		<Route path="/inventory/overview" element={<OverviewPage />} />
		<Route path="/inventory/add-item" element={<AddItemPage />} />
		<Route path="/inventory/manage-inventory" element={<ManageInventoryPage />}/>
		<Route path="/inventory/supplier-registration" element={<SupplierRegForm />}/>
		{/* <Route path="/inventory/generate-reports" element={<OrdersReport />}/> */}
		<Route path="/inventory/test-comp" element={<TestComp />} />
		<Route path="/inventory/update-item" element={<UpdateItem />} />
		<Route path="/inventory/view-item" element={<ViewInventoryItem />}/>
		<Route path="/inventory/manage-suppliers" element={<ManageSupplierWindow />}/>
		<Route path="/inventory/report" element={<ReportView />}/>
		<Route path="/inventory/release-items" element={<ReleaseItems/>} />
		<Route path="/supplier/view-supplier-details" element={<ViewSupplierDetails/>} />
		<Route path="/supplier/update-supplier-details" element={<UpdateSupplierDetails/>} />

      </Routes>
    </Router>
  )
}

export default App;
