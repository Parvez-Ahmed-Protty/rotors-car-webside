import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FcApproval } from "react-icons/fc";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("https://nameless-beyond-24342.herokuapp.com/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert(`Added your Product ${(<FcApproval />)}`);
        }
      });
  };
  return (
    <>
      <div>
        <h4>Add Product</h4>
        <div className="p-3">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Control
              className="mb-1"
              type="text"
              placeholder="Car Model"
              {...register("model")}
            />
            <Form.Control
              className="mb-1"
              type="text"
              placeholder="Image Url"
              {...register("img")}
            />
            <Form.Control
              className="mb-1"
              type="text"
              placeholder="Type"
              {...register("type")}
            />
            <Form.Control
              className="mb-1"
              type="text"
              placeholder="Engine"
              {...register("engine")}
            />
            <Form.Control
              className="mb-1"
              type="text"
              placeholder="Gearbox"
              {...register("gearbox")}
            />
            <Form.Control
              className="mb-1"
              type="text"
              placeholder="Rating"
              {...register("rating")}
            />
            <Form.Control
              className="mb-1"
              type="text"
              placeholder="Price"
              {...register("price")}
            />
            <Button className="w-100 mt-2" type="submit">
              Add Product
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
