import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdmin = (e) => {
    const user = { email };
    fetch("https://nameless-beyond-24342.herokuapp.com/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("made admin");
        }
      });
    e.preventDefault();
  };
  return (
    <Container>
      <h4 className="text-dark">Create New admin</h4>
      <div>
        <div className="mt-4">
          <Form.Control
            className="mb-1"
            onBlur={handleOnBlur}
            type="text"
            placeholder="admin"
          />
          <Button
            className="w-100 mt-2"
            variant="primary"
            onClick={handleAdmin}
          >
            Make admin
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default MakeAdmin;
