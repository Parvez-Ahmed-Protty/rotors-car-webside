import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { AiOutlineMinus } from "react-icons/ai";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://nameless-beyond-24342.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="py-5">
      <div>
        <h2>
          <span>
            <AiOutlineMinus
              className="me-2"
              style={{ fontSize: "40px", color: "#EA001E" }}
            />
          </span>
          Review
          <span>
            <AiOutlineMinus
              className="me-2"
              style={{ fontSize: "40px", color: "#EA001E" }}
            />
          </span>
        </h2>
      </div>
      <Container>
        {reviews.length ? (
          <Row xs={1} md={5} className="g-4">
            {reviews.map((review) => (
              <Col className="review  p-3">
                <Card style={{ height: "200px" }} className="text-center ">
                  <Card.Header className="bg-danger p-1"></Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <h6>{review?.name}</h6>
                      <img
                        className="img-fluid w-50"
                        src={review?.img}
                        alt=""
                      />
                    </Card.Title>
                    <Rating
                      name="half-rating-read"
                      defaultValue={parseFloat(review?.count) || 5}
                      precision={0.5}
                      readOnly
                    />
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <h3>loading...</h3>
        )}
      </Container>
    </div>
  );
};

export default Reviews;
