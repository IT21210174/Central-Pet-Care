import { AiOutlineSearch } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { GrCart } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Container = styled.div`
  height: 10vh;
  background-color: #f8f8f8;
  display: flex;
  padding-left: 20%;
  align-items: center;
  justify-content: center;
`;

const InputContainer = styled.div`
  width: 70%;
  height: 40px;
  margin-left: 25px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  flex: 20;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 2;
  border: none;
  background-color: #5F27CD;
  color: white;
  cursor: pointer;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 30px;
    position: relative;
`;

const MenuItemBadge = styled.div`
  width: auto;
  min-width: 20px;
  height: 20px;
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #5F27CD;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

const StoreSearch = () => {

  const { cart } = useContext(CartContext)

  return (
    <Container>
      <InputContainer>
        <Input placeholder="Search..." />
        <Button>
          <AiOutlineSearch size="1.5rem" />
        </Button>
      </InputContainer>
      <Right>
        <MenuItem>
            <FaRegHeart size="1.5rem" />
            <MenuItemBadge>2</MenuItemBadge>
        </MenuItem>
        <MenuItem>
            <Link to='../cart' style={{textDecoration: 'none', color: 'black'}}>
              <GrCart size="1.5rem" />
              <MenuItemBadge>{cart.quantity}</MenuItemBadge>
            </Link>
        </MenuItem>
        </Right>
    </Container>
  );
};

export default StoreSearch;