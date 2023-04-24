import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ProductsContext } from "../../contexts/ProductsContext";
import { AiOutlineSearch } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { GrCart } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { publicRequest } from '../../requestMethods';
import { useNavigate, useParams } from 'react-router-dom';
import './storesearch.css';

const StoreSearch = () => {

  const { cart } = useContext(CartContext)
  const { setProducts } = useContext(ProductsContext);

  const [search, setSearch] = useState('')
  const navigate = useNavigate()
    
  const handleSearch = (e) => {
    e.preventDefault()
    navigate('/store?search=' + search)
  }

  return (
    <div className="StoreSearchContainer">
      <form className="InputContainer" onSubmit={handleSearch}>
        <input className="Input" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button className="Button">
          <AiOutlineSearch size="1.5rem" />
        </button>
      </form>
      <div className="Right">
        <div className="MenuItem">
            <FaRegHeart size="1.5rem" />
            <div className="MenuItemBadge">2</div>
        </div>
        <div className="MenuItem">
            <Link to='../cart' style={{textDecoration: 'none', color: 'black'}}>
              <GrCart size="1.5rem" />
              <div className="MenuItemBadge">{cart.quantity}</div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default StoreSearch;
