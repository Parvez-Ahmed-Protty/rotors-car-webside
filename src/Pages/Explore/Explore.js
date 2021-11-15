import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
const Explore = () => {
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    fetch("https://nameless-beyond-24342.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setAllItems(data));
  }, []);
  return (
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
      <Container className="py-5">
        {allItems.length ? (
          <Row>
            {allItems.map((item) => (
              <Col className="mb-4" sm={12} md={4} key={item._id}>
                <Card className="text-center border-0 card">
                  <Card.Header>{item?.model}</Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <img
                        className="img-fluid rounded"
                        src={item?.img}
                        alt=""
                      />
                    </Card.Title>
                    <Card.Text>
                      <ul class="list-group ">
                        <li class="list-group-item">{item?.type}</li>
                        <li class="list-group-item">{item?.gearbox}</li>
                        <li class="list-group-item">{item?.engine}</li>
                        <li class="list-group-item">${item?.price}</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                  <Card className="border-0">
                    <Link to={`/purchase/${item._id}`}>
                      <Button className="w-100" variant="danger">
                        BUY NOW
                      </Button>
                    </Link>
                  </Card>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <h2>Loading...</h2>
        )}
      </Container>
    </div>
  );
};

export default Explore;
