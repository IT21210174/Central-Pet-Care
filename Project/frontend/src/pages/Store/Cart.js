
import{ MdOutlineArrowBackIos } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from '../../components/store/Footer'
import Navbar from '../../components/store/Navbar'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { publicRequest } from '../../requestMethods';

const KEY = process.env.REACT_APP_STRIPE

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 500;
  text-align: center;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;


const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const QtyButton = styled.button`
  padding: 8px;
  border: none;
  border-radius: 50%;
  background-color: #4f318b;
  color: white;
  cursor: pointer;
`;

const ProductAmount = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #5F27CD;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  padding: 8px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #5F27CD;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  
  const { cart } = useContext(CartContext);

  console.log(cart.items)
  console.log(cart.quantity)
  console.log(cart.total)

  const handleCheckout = async () => {
    console.log(cart.products)
    try{
      const res = await publicRequest.post("/checkout/create-checkout-session", {
        cartItems: cart.items,
        amount: cart.total
      })
      window.location.href = res.data.url;
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>MY CART</Title>
        <Top>
          <Link to="/" style={{textDecoration: "none", color: "black"}}>
          <TopButton>
              <MdOutlineArrowBackIos size="1.5rem" />
              CONTINUE SHOPPING
          </TopButton>
          </Link>
        </Top>
        <Bottom>
          <Info>
          {cart.items.map(item => (
            <Product>
              <ProductDetail>
                <Image src={item.product.image} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {item.product.productName}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {item.product.productId}
                  </ProductId>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                <QtyButton><AiOutlineMinus size="1.5rem" /></QtyButton>
                  <ProductAmount>{item.cartQuantity}</ProductAmount>
                <QtyButton><AiOutlinePlus size="1.5rem" /></QtyButton>
                </ProductAmountContainer>
                <ProductPrice>Rs {item.product.price * item.product.quantity}</ProductPrice>
              </PriceDetail>
            </Product>
            ))}
            <Hr />

          </Info>


          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Rs {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>Rs 400.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>- Rs 0.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>Rs 2600.00</SummaryItemPrice>
            </SummaryItem>         
            <Button onClick={handleCheckout}>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;