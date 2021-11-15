import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiCaretRight } from "react-icons/bi";
import {
  MdAlarmOn,
  MdOutlineLocalLibrary,
  MdOutlineLocalOffer,
  MdOutlineLocalPhone,
  MdOutlineLocalPostOffice,
} from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="py-5">
        <Container>
          <Row>
            <Col className="text-start" sm={12} md={4}>
              <img src="https://i.ibb.co/jk7mqrK/logo.png" alt="" />
              <p className="my-3 w-75">
                Cras sit amet mi non orci pretium consectetur. Donec iaculis
                ante ac sollicitudin luctus. Phasellus ut lacus lacus. Phasellus
                sagittis ex id tortor tincidunt luctus. Donec consectetur
                consequat bibendum
              </p>
              <li style={{ listStyleType: "none" }}>
                <BiCaretRight className="fs-5 text-danger" /> Rental Information
              </li>
              <li style={{ listStyleType: "none" }}>
                <BiCaretRight className="fs-5 text-danger" /> F.A.Q.
              </li>
            </Col>
            <Col className="text-center " sm={12} md={4}>
              <h4>Contact Us:</h4>
              <li style={{ listStyleType: "none" }}>
                <MdOutlineLocalLibrary className="fs-5 text-danger" /> Main
                Office Address: Unit 9, Manor Industrial Estate, Lower Wash
                Lane, Warrington, WA4
              </li>
              <li style={{ listStyleType: "none" }}>
                <MdAlarmOn className="fs-5 text-danger" /> 8:00am-9:30pm
              </li>
              <li style={{ listStyleType: "none" }}>
                <MdOutlineLocalOffer className="fs-5 text-danger" /> Other
                Office Locations
              </li>
              <li style={{ listStyleType: "none" }}>
                <MdOutlineLocalPostOffice className="fs-5 text-danger" />{" "}
                parvezahmed@gmail.com
              </li>
              <li style={{ listStyleType: "none" }}>
                {" "}
                <MdOutlineLocalPhone className="fs-5 text-danger" /> +880 1680
                6361 89
              </li>
            </Col>
            <Col className="text-center" sm={12} md={4}>
              <h4>Information:</h4>
              <li style={{ listStyleType: "none" }}>
                Find a Car for Rent in the Nearest Location
              </li>
              <li style={{ listStyleType: "none" }}> Cars Catalog</li>
              <li style={{ listStyleType: "none" }}>F.A.Q.</li>
              <li style={{ listStyleType: "none" }}>About Us</li>
              <li style={{ listStyleType: "none" }}> Contact Us</li>
              <li style={{ listStyleType: "none" }}> Help Center</li>
              <li style={{ listStyleType: "none" }}> Privacy Police</li>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-3 text-white" style={{ backgroundColor: "#000C21" }}>
        <p>Copyright © 2021. Rotors by Parvez</p>
      </div>
    </>
  );
};

export default Footer;
