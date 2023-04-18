import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddProduct from './pages/Product/AddProduct';

function App() {
  return (
    <Router>

      <Toaster />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addProduct' element={<AddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
