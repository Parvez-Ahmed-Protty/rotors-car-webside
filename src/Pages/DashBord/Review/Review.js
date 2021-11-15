import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
const Review = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    if (data.count > 5) {
      alert("Please give a number under equal 5");
      return;
    }
    data.img = user?.photoURL || "https://i.ibb.co/fnXhY0P/user.png";
    fetch("https://nameless-beyond-24342.herokuapp.com/review", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Added your review");
        }
      });
  };
  return (
    <>
      <div>
        <h4 className="text-dark">Review</h4>
        <div className="p-3">
          <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <Form.Control
              className="mb-1"
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            <Form.Control
              className="mb-1"
              type="number"
              placeholder="Rating"
              {...register("count")}
            />
            <Button className="w-100 mt-2" variant="primary" type="submit">
              Review
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};
//  mx-auto w-50"
export default Review;
