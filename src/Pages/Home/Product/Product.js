import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const { model, img, type, gearbox, engine, price } = product;
  return (
    <Col className="mb-4" sm={12} md={4}>
      <Card className="text-center border-0 card">
        <Card.Header>
          <h6>{model}</h6>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <img className="img-fluid rounded" src={img} alt="" />
          </Card.Title>
          <Card.Text>
            <ul class="list-group ">
              <li class="list-group-item">{type}</li>
              <li class="list-group-item">{gearbox}</li>
              <li class="list-group-item">{engine}</li>
              <li class="list-group-item">${price}</li>
            </ul>
          </Card.Text>
        </Card.Body>
        <Card className="border-0">
          <Link to={`/purchase/${product._id}`}>
            <Button className="w-100" variant="danger">
              Purchase
            </Button>
          </Link>
        </Card>
      </Card>
    </Col>
  );
};

export default Product;
