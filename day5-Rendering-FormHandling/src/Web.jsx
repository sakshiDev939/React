import React, { useState } from "react";

const Web = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className=" flex flex-col gap-5 w-60">
      <input
        name="name"
        onChange={handleChange}
        className="border-2"
        type="text"
        placeholder="Name"
      />
      <input
        name="email"
        onChange={handleChange}
        className="border-2"
        type="text"
        placeholder="Email"
      />
      <input
        name="password"
        onChange={handleChange}
        className="border-2"
        type="text"
        placeholder="Password"
      />

      <h1>This is name - {formData.name}</h1>
      <h1>This is email - {formData.email}</h1>
      <h1>This is Password - {formData.password}</h1>
    </div>
  );
};

export default Web;