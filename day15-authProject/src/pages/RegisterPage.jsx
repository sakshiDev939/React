
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import {useForm} from "react-hook-form";
import { Auth } from "../Context/AuthContext";


const RegisterPage = () => {

    const {registeredUsers,setRegisteredUsers,setLoggedInUser} = useContext(Auth);

      const navigate = useNavigate();


let {register,handleSubmit,reset,formState:{errors}} = useForm();

  let formSubmit = (data) => {
    let arr = [...registeredUsers,data];
    setRegisteredUsers (arr);
    alert("user registered successfully")
    setLoggedInUser(data);
     localStorage.setItem("loggedInUser",JSON.stringify(data))

    localStorage.setItem("registerUsers", JSON.stringify(arr))
      navigate("/main")
   
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Create Account 🚀
          </h1>

          <p className="text-gray-500 mt-2">
            Sign up to get started
          </p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Name
            </label>

            <input
            {...register("name",{
                required:"name is required",
            }) }
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            {errors.name && <p className="text-red-600">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>

            <input
            {...register("email",{
                required:"email is required",
            }) }
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
             {errors.email && <p className="text-red-600">{errors.email.message}</p>}

          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>

            <input
            {...register("password",{
                required:"password  is required",
                minLength:{
                    value:6,
                    message:"Minimum 6 character is required",
                }
            }) }
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
              {errors.password && <p className="text-red-600">{errors.password.message}</p>}

          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition cursor-pointer"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}

          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
          >
            Login
          </button>
        </div>

      </div>
    </div>
  );
};

export default RegisterPage;

