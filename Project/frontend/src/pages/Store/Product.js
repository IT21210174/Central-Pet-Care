import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import styled from "styled-components";
import Footer from '../../components/store/Footer'
import Navbar from '../../components/store/Navbar'
import StoreSearch from '../../components/store/StoreSearch'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { publicRequest } from '../../requestMethods';
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  align-items: center;
`;

const InfoContainer = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 0px 50px;
`;

const Title = styled.h1`
  display: flex;
  font-weight: 700;
  margin-bottom: 30px;
`;


const Sku = styled.span`
  display: flex;
  margin-bottom: 20px;
`

const Availability = styled.span`
  display: flex;
  color: green;
  margin-bottom: 20px;
`

const Price = styled.span`
  display: flex;
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 30px;
`;

const AddContainer = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
`;

const AmountContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
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

const QtyButton = styled.button`
  padding: 8px;
  border: none;
  border-radius: 50%;
  background-color: #4f318b;
  color: white;
  cursor: pointer;
`;

const Button = styled.button`
  flex: 1;
  margin-left: 5px;
  padding: 15px;
  border: 2px solid #5F27CD;
  background-color: white;
  cursor: pointer;
  font-weight: 600;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const ServiceContainer = styled.div`
  margin-top: 10%;
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Service = styled.div`
  flex: 1;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ServiceImage = styled.img`
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
`;

const ServiceName = styled.span`
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
`;

const DescContainer  = styled.div`
  margin-top: 20px;
`;

const DescTop = styled.span`
  display: flex;
  flex: 1;
  margin: 20px 0px;
  justify-content: center;
  border-bottom: 1px solid lightgray;
`;

const DescButton = styled.button`
  border: none;
  font-size: 24px;
  border-bottom: 2px solid black;
  cursor: pointer;
  background-color: white;
`;

const Desc = styled.p`
  margin: 20px 0px;
  white-space: pre-wrap;
`;

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const getProduct = async () => {
    publicRequest.get("/products/" + id)
    .then(res => {
        setProduct(res.data)
    })
    .catch(err => {
        console.log(err)
    })
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      quantity < product.quantity && setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    addToCart(product, quantity);
  }

  return (
    <Container>
      <Navbar />
      <StoreSearch />
      <Wrapper>
        <Top>
        <ImgContainer>
          <Image src={product.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.productName}</Title>
          <Sku>SKU: {product.SKU}</Sku>
          <Availability>{product.inStock === true ? "In Stock" : "Out of Stock"}</Availability>
          <Price>Rs. {product.price}</Price>
          <AddContainer>
            <AmountContainer>
              <QtyButton onClick={() => handleQuantity("dec")}><AiOutlineMinus size="1.5rem" /></QtyButton>
              <Amount>{quantity}</Amount>
              <QtyButton onClick={() => handleQuantity("inc")}><AiOutlinePlus size="1.5rem" /></QtyButton>
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
          <ServiceContainer>
            <Service>
              <ServiceImage src="https://cdn-icons-png.flaticon.com/512/10108/10108187.png" />
              <ServiceName>Genuine Product</ServiceName>
            </Service>
            <Service>
              <ServiceImage src="https://cdn-icons-png.flaticon.com/512/1792/1792671.png" />
              <ServiceName>Fast Delivery</ServiceName>
            </Service>
            <Service>
              <ServiceImage src="https://cdn-icons-png.flaticon.com/512/2717/2717928.png" />
              <ServiceName>Cash on Delivery</ServiceName>
            </Service>
          </ServiceContainer>
        </InfoContainer>
        </Top>
        <DescContainer>
          <DescTop>
            <DescButton>Description</DescButton>
          </DescTop>
          <Desc>
            {product.description}
          </Desc>
        </DescContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;