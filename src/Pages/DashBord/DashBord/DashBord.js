import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FcAdvertising } from "react-icons/fc";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import AddProduct from "../AddProduct/AddProduct";
import AdminRoute from "../AdminRoute/AdminRoute";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageProduct from "../ManageProduct/ManageProduct";
import ManegeOrder from "../ManegeOrder/ManegeOrder";
import MyOrder from "../MyOrder/MyOrder";
import Pay from "../Pay/Pay";
import Review from "../Review/Review";
import "./DashBord.css";
const DashBord = () => {
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();
  return (
    <>
      <div className="dashbord-bg">
        <Container className="dashbord ">
          <Row className="py-5">
            <Col className=" bg-light p-3 d-block rounded" sm={12} md={3}>
              <h5 className="text-start">CATEGORIES</h5>
              <hr />
              <NavLink
                style={{ textDecoration: "none" }}
                className="py-2 nav-color"
                to={`${url}`}
              >
                My Order
              </NavLink>
              <NavLink
                style={{ textDecoration: "none" }}
                className="py-2 nav-color d-block"
                to={`${url}/pay`}
              >
                Pay Bill
              </NavLink>
              <NavLink
                style={{ textDecoration: "none" }}
                className="py-2 nav-color d-block"
                to={`${url}/review`}
              >
                Review
              </NavLink>
              {/* admin user */}
              {admin && (
                <NavLink
                  style={{ textDecoration: "none" }}
                  className="py-2 nav-color d-block"
                  to={`${url}/manageAllOrder`}
                >
                  Manage Order
                </NavLink>
              )}
              {admin && (
                <NavLink
                  style={{ textDecoration: "none" }}
                  className="py-2 nav-color d-block"
                  to={`${url}/addProduct`}
                >
                  Add Product
                </NavLink>
              )}
              {admin && (
                <NavLink
                  style={{ textDecoration: "none" }}
                  className="py-2 nav-color d-block"
                  to={`${url}/makeAdmin`}
                >
                  Make Admin
                </NavLink>
              )}
              {admin && (
                <NavLink
                  style={{ textDecoration: "none" }}
                  className="py-2 nav-color d-block"
                  to={`${url}/manageProduct`}
                >
                  Manage Products
                </NavLink>
              )}
            </Col>
            <Col className="border bg-img" sm={12} md={9}>
              <div className=" p-2">
                <h3 className="text-dark">
                  Welcome to Our DashBord <FcAdvertising />
                </h3>
                <hr />
              </div>
              <div>
                <Switch>
                  <Route exact path={path}>
                    <MyOrder />
                  </Route>

                  <AdminRoute exact path={`${path}/makeAdmin`}>
                    <MakeAdmin />
                  </AdminRoute>

                  <Route exact path={`${path}/pay`}>
                    <Pay />
                  </Route>

                  <AdminRoute exact path={`${path}/manageAllOrder`}>
                    <ManegeOrder />
                  </AdminRoute>

                  <Route exact path={`${path}/review`}>
                    <Review />
                  </Route>

                  <AdminRoute exact path={`${path}/manageProduct`}>
                    <ManageProduct />
                  </AdminRoute>

                  <AdminRoute exact path={`${path}/addProduct`}>
                    <AddProduct />
                  </AdminRoute>
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DashBord;
