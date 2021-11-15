import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const ManageProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://nameless-beyond-24342.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  const deleteBtn = (id) => {
    const confirm = window.confirm("Remove this Product?");
    if (confirm) {
      fetch(`https://nameless-beyond-24342.herokuapp.com/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Successfully removed item");
            const newProducts = allProducts.filter((order) => order._id !== id);
            setAllProducts(newProducts);
          }
        });
    }
  };
  return (
    <Row className="p-2">
      <h4>Manage Products</h4>
      {allProducts.map((product) => (
        <Col sm={6} md={4} key={product?._id} className="review  p-3">
          <Card className="text-center">
            <Card.Header className="bg-danger p-1"></Card.Header>
            <Card.Body>
              <Card.Title>
                <h6>{product?.model}</h6>
                <img className="img-fluid" src={product?.img} alt="" />
              </Card.Title>
              <button
                className="ms-2 btn btn-warning"
                onClick={() => deleteBtn(product?._id)}
              >
                Remove
              </button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ManageProduct;
