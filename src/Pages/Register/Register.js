import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Register.css";

const Register = () => {
  const [error, setError] = useState("");
  const history = useHistory();
  const location = useLocation();
  const redirect_url = location.state?.from || "/home";
  const { register, handleSubmit } = useForm();
  const { handleUserRegister, setUser, updateProfile, auth, isLoading } =
    useAuth();
  const onSubmit = (data) => {
    handleUserRegister(data.email, data.password)
      .then((res) => {
        const newUser = res.user;
        const newUserName = { ...newUser };
        newUserName.displayName = data.name;
        savedUser(data.name, data.email, "admin");
        setUser(newUserName);
        updateProfile(auth.currentUser, {
          displayName: data.name,
        }).then(() => {
          history.push(redirect_url);
        });
      })
      .catch((error) => {
        setError(error.message);
        alert(error.message);
      });
  };

  const savedUser = (name, email, role) => {
    const user = { name, email, role: role };
    fetch("https://nameless-beyond-24342.herokuapp.com/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    }).then();
  };
  return (
    <>
      <div className="login-banner">
        <h1 className="text-white py-5">Register</h1>
      </div>
      <div className="my-5">
        <Container className="login p-5">
          <Row>
            <Col sm={12} md={6}>
              <img
                className="img-fluid rounded"
                src="https://i.ibb.co/nD9GXc3/register.gif"
                alt=""
              />
            </Col>
            {isLoading && (
              <Spinner style={{ margin: "200px auto" }} animation="grow" />
            )}
            {!isLoading && (
              <Col className="text-start" sm={12} md={6}>
                <h1>Resigter:</h1>
                <p>
                  Allready register
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    Login an Account?
                  </Link>
                </p>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Name"
                    className="mb-3"
                  >
                    <Form.Control
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      {...register("name")}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      {...register("email")}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    className="mb-3"
                    controlId="floatingPassword"
                    label="Password"
                  >
                    <Form.Control
                      name="password"
                      type="password"
                      placeholder="Password"
                      {...register("password")}
                    />
                  </FloatingLabel>
                  {error && <p className="text-danger m-0 mt-1">{error}</p>}
                  <Button
                    type="submit"
                    className="w-100 py-3 mt-2"
                    variant="danger"
                  >
                    REGISTER
                  </Button>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Register;
