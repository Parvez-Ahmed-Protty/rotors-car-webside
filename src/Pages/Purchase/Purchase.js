/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import "./Purchase.css";

const Purchase = () => {
  const [singleItem, setSingleItem] = useState({});
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    if (!data.model) {
      data.model = singleItem?.model;
    }
    data.status = "pending";
    data.img = singleItem?.img;
    data.price = singleItem?.price;
    fetch("https://nameless-beyond-24342.herokuapp.com/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Success fully added your order");
        }
      });
  };

  useEffect(() => {
    fetch(`https://nameless-beyond-24342.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleItem(data));
  }, []);

  return (
    <>
      <div className="purchase-bg ">
        <Container className="py-5">
          <Row>
            <Col sm={12} md={5}>
              <Card className="mt-3">
                <img
                  className="img-fluid rounded"
                  src={singleItem?.img}
                  alt=""
                />
              </Card>
            </Col>
            <Col sm={12} md={5}>
              <h2 className="text-white">{singleItem?.model}</h2>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Control
                  className="mb-3"
                  type="text"
                  placeholder="name@example.com"
                  defaultValue={user?.displayName}
                  {...register("name", { required: true })}
                />
                <Form.Control
                  className="mb-3"
                  type="email"
                  placeholder="name@example.com"
                  defaultValue={user?.email}
                  {...register("email", { required: true })}
                />
                <Form.Control
                  disabled
                  className="mb-3"
                  type="text"
                  placeholder="name@example.com"
                  defaultValue={singleItem?.model}
                  {...register("model")}
                />
                <Form.Control
                  className="mb-3"
                  type="number"
                  placeholder="Quantity"
                  {...register("quantity", { required: true })}
                />

                <Button
                  type="submit"
                  className="w-100 py-3 mt-3"
                  variant="danger"
                >
                  ORDER NOW
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Purchase;
