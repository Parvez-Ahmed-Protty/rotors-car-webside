import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";

const MyOrder = () => {
  const { user } = useAuth();

  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch(`https://nameless-beyond-24342.herokuapp.com/order/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [user?.email]);

  const deleteBtn = (id) => {
    const confirm = window.confirm(
      "Are you sure to cancel this order? Think again..."
    );
    if (confirm) {
      fetch(`https://nameless-beyond-24342.herokuapp.com/order/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Successfully removed item");
            const newOrders = allOrders.filter((order) => order._id !== id);
            setAllOrders(newOrders);
          }
        });
    }
  };

  return (
    <>
      <Row className="p-2">
        <h4>Manage Products</h4>
        {allOrders.map((order) => (
          <Col sm={6} md={4} key={order?._id} className="review  p-3">
            <Card className="text-center">
              <Card.Header className="bg-danger p-1"></Card.Header>
              <Card.Body>
                <Card.Title>
                  <h6>{order?.model}</h6>
                  <img className="img-fluid" src={order?.img} alt="" />
                </Card.Title>
                <button
                  className="ms-2 btn btn-warning"
                  onClick={() => deleteBtn(order?._id)}
                >
                  Remove
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MyOrder;
