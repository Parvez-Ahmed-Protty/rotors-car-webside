import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { AiOutlineMinus } from "react-icons/ai";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://nameless-beyond-24342.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="my-5">
        <div>
          <h2>
            <span>
              <AiOutlineMinus
                className="me-2"
                style={{ fontSize: "40px", color: "#EA001E" }}
              />
            </span>
            Featured Vehicles
            <span>
              <AiOutlineMinus
                className="me-2"
                style={{ fontSize: "40px", color: "#EA001E" }}
              />
            </span>
          </h2>
        </div>
        <Container className="my-5">
          <Row>
            {products.slice(0, 6).map((product) => (
              <Product key={product?._id} product={product}></Product>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Products;
