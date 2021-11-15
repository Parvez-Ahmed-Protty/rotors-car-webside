import React from "react";
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
import "./Login.css";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const { handleUserLogin, setError, error } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_url = location.state?.from || "/home";

  const onSubmit = (data) => {
    handleUserLogin(data.email, data.password)
      .then((result) => {
        history.push(redirect_url);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        alert(errorMessage);
      });
  };

  const { handleGoogle, isLoading } = useAuth();

  const handleGoogleLog = () => {
    handleGoogle().then((result) => {
      history.push(redirect_url);
    });
  };

  return (
    <>
      <div className="login-banner">
        <h1 className="text-white py-5">Login</h1>
      </div>
      <div className="my-5">
        <Container className="login p-5">
          <Row>
            <Col sm={12} md={6}>
              <img
                className="rounded img-fluid"
                src="https://i.ibb.co/1XJxKNC/login2.gif"
                alt=""
              />
            </Col>
            {isLoading && (
              <Spinner style={{ margin: "200px auto" }} animation="grow" />
            )}
            {!isLoading && (
              <Col className="text-start" sm={12} md={6}>
                <h1>LogIn:</h1>
                <p>
                  Savings of up to 15% with our car rental solutions, global
                  coverage and a dedicated customer team
                </p>
                <p>
                  Log In or
                  <Link to="/regi" style={{ textDecoration: "none" }}>
                    Create an Account?
                  </Link>
                </p>
                <Form onSubmit={handleSubmit(onSubmit)}>
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
                  <FloatingLabel controlId="floatingPassword" label="Password">
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
                    className="w-100 py-3 mt-3"
                    variant="danger"
                  >
                    LOGIN
                  </Button>
                  <Button
                    className="w-100 py-3 mt-3"
                    variant="danger"
                    onClick={handleGoogleLog}
                  >
                    Google log in
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

export default Login;
