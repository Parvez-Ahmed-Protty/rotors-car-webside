import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-contaoner d-flex align-items-center">
      <Container>
        <Row className="text-white">
          <Col className="text-start" sm={12} md={5}>
            <h1 className="title">FIND THAT CARS</h1>
            <p className="my-3">
              Pellentesque nec lectus nisl. Cras magna velit, tue maximus et dui
              a, convallis cursus turpis. Arcu cursus euismod quis viverra nibh
              cras. Arcu cursus euismod quis viverra nibh cras
            </p>
            <Button className="btn btn-danger">BOOK A CAR</Button>
          </Col>
          <Col sm={12} md={7}>
            <img
              className="img-fluid"
              src="https://i.ibb.co/xm4mr9J/car.png"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
