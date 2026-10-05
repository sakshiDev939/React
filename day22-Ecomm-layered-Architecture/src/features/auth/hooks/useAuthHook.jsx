
import {useNavigate} from"react-router";
import {useForm} from "react-hook-form";
import { loginUserApi } from "../api/authApi";
import {useDispatch} from "react-redux";
import { toast } from "react-toastify";
import { addUser } from "../state/authSlice";
import { loginUserAction } from "../state/authAction";

export const useAuth = () => {
    let navigate = useNavigate();
   let dispatch = useDispatch();
    
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
   console.log("register", data)
  };
  const loginForm = async (data) => {
    try {
        // api call 
        dispatch(loginUserAction(data))
   
    } catch (error) {
        console.log("form api error", error);
    }
  };

    return {
        navigate,
        register,
        handleSubmit,
        errors,
        registerForm,
        loginForm,
    }
}