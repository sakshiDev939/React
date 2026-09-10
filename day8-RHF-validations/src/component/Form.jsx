import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ setUsers, setToggle }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "Pandu",
      email: "pandu@gmail.com",
    },
  });

  const formSubmit = (data) => {
    console.log(data);
    setUsers((prev) => [...prev, data]);
    reset();
    setToggle((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-xl font-bold">Create user</h1>

      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-90 flex flex-col bg-gray-700 gap-3 p-4 rounded border-2 border-white "
      >
        <input
          {...register("name", {
            required: "Name is required",
            pattern: {
              value: /^\S.*$/,
              message: "Blank spaces are not allowed",
            },
          })}
          className="p-2 rounded outline-0 border border-white"
          type="text"
          placeholder="Name"
        />

        {errors.name && (
          <p className="text-red-500">{errors.name.message}</p>
        )}

        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email",
            },
          })}
          className="p-2 rounded outline-0 border border-white"
          type="email"
          placeholder="Email"
        />

        {errors.email && (
          <p className="text-red-500">{errors.email.message}</p>
        )}

        <input
          {...register("mobile", {
            required: "Mobile is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Enter a valid 10-digit mobile number",
            },
          })}
          className="p-2 rounded outline-0 border border-white"
          type="text"
          placeholder="Mobile"
        />

        {errors.mobile && (
          <p className="text-red-500">{errors.mobile.message}</p>
        )}

        <input
          {...register("image", {
            required: "Image is required",
          })}
          className="p-2 rounded outline-0 border border-white"
          type="url"
          placeholder="Image"
        />

        {errors.image && (
          <p className="text-red-500">{errors.image.message}</p>
        )}

        <button
          type="submit"
          className="text-white bg-blue-700 p-2 rounded-xl cursor-pointer"
        >
          Add user
        </button>
      </form>
    </div>
  );
};

export default Form;