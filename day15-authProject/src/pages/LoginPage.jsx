

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../Context/AuthContext";
import { toast } from "react-toastify";

const LoginPage = () => {

const {registeredUsers,loggedInUser,setLoggedInUser}= useContext(Auth);

  const navigate = useNavigate();

  
let {register,handleSubmit,reset,formState:{errors}} = useForm();

  let formSubmit = (data) => {
    
    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });
    if (!user) {
        toast.error("user not found or invalid credentials");
        reset()
        return;
    }
       setLoggedInUser(user);
       localStorage.setItem("loggedInUser",JSON.stringify(user))
     toast.success("user loggedIn")
    reset()

      navigate("/main")

  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back 👋
          </h1>

          <p className="text-gray-500 mt-2">
            Login to your account
          </p>
        </div>

        {/* Login Form */}
      <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">


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
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}

          <button
            type="button"
            onClick={() => navigate("/register")}
            className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
          >
            Register
          </button>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
