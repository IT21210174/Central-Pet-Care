import styled from "styled-components";
import Product from "./Product";
import { useEffect, useState } from "react";
import { publicRequest } from '../../requestMethods'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`;

const Products = () => {
  const [products, setProducts] = useState([]);

  console.log(products)

  const getProducts = () => {
      publicRequest.get("/products")
      .then(res => {
          setProducts(res.data)
      })
      .catch(err => {
          console.log(err)
      })
    }

  useEffect(() => {
    getProducts()
  }, []);

  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Products;