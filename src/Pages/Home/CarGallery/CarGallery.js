import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineMinus } from "react-icons/ai";
import "./CarGallery.css";
const CarGallery = () => {
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
          Car Gellery
          <span>
            <AiOutlineMinus
              className="me-2"
              style={{ fontSize: "40px", color: "#EA001E" }}
            />
          </span>
        </h2>
      </div>
      <div className="gellery my-5">
        <Container fluid>
          <Row>
            <Col sm={12} md={6}>
              <img
                className="img-fluid"
                src="https://i.ibb.co/jM1FpSb/img-1.jpg"
                alt=""
              />
            </Col>
            <Col sm={12} md={6}>
              <img
                className="img-fluid"
                src="https://i.ibb.co/R7PHKML/img-02.jpg"
                alt=""
              />
            </Col>
            <Col sm={12} md={6}>
              <img
                className="img-fluid"
                src="https://i.ibb.co/ZR9KTSG/img-03.jpg"
                alt=""
              />
            </Col>
            <Col sm={12} md={6}>
              <img
                className="img-fluid"
                src="https://i.ibb.co/bBpSRQQ/img-5.jpg"
                alt=""
              />
            </Col>
          </Row>
        </Container>
        <Container className="my-5 pb-4">
          <Row>
            <Col className="text-white" sm={12} md={4}>
              <h1 className="m-0 fs-1">500+</h1>
              <p>
                <AiOutlineMinus
                  style={{ fontSize: "40px", color: "#EA001E" }}
                />
                <br />
                Worldwide Rent Stations
              </p>
            </Col>
            <Col className="text-white" sm={12} md={4}>
              <h1 className="m-0 fs-1">3500+</h1>
              <p>
                <AiOutlineMinus
                  style={{ fontSize: "40px", color: "#EA001E" }}
                />
                <br />
                Cars of various categories
              </p>
            </Col>
            <Col className="text-white" sm={12} md={4}>
              <h1 className="m-0 fs-1">180+</h1>
              <p>
                <AiOutlineMinus
                  style={{ fontSize: "40px", color: "#EA001E" }}
                />
                <br />
                Business Partners
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CarGallery;
