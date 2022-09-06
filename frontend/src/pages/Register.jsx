import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

import { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { auth } from "../firebase.js";
import Loading from "../components/Shared/Loading.jsx";
const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, GitUser, GitLoading, GitError] =
    useSignInWithGithub(auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (user || googleUser || GitUser) {
      toast("Register Successfull");
      navigate("/home");
    }
  }, [GitUser, googleUser, navigate, user]);
  useEffect(() => {
    if (error || updateError || googleError || GitError) {
      toast("Sign Up failed");
      navigate("/register");
    }
  }, [GitError, error, googleError, navigate, updateError]);
  if (loading || updating || googleLoading || GitLoading) {
    return <Loading />;
  }

  const onSubmit = async (data) => {
    const displayName = data.name;
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName });
  };

  return (
    <div className="login-container">
      <button className="common-btn go-home">
        <Link to={"/"}>Go Home</Link>
      </button>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <h2 className="form-title">Sign In With</h2>
        <div className="form-social-flex">
          <div onClick={() => signInWithGithub()} className="social-github">
            <AiFillGithub className=" text-white text-2xl" />{" "}
            <span className="github-title">Github</span>
          </div>
          <div onClick={() => signInWithGoogle()} className="social-google">
            <FcGoogle className="text-2xl" />{" "}
            <span className="google-title">Google</span>
          </div>
        </div>
        <div className="my-1 lg:my-2">
          <label className="form-label" htmlFor="">
            User Name
          </label>
          <input
            className="form-input"
            type="text"
            {...register("name", { required: true })}
          />
          {errors.name && <p className="text-red-500">User name is required</p>}
        </div>
        <div className="my-1 lg:my-2">
          <label className="form-label" htmlFor="">
            Email
          </label>
          <input
            className="form-input"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
        </div>
        <div className="my-1 lg:my-2">
          <label className="form-label" htmlFor="">
            Passowrd
          </label>
          <input
            className="form-input"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
        </div>
        <div className="my-1 lg:my-2">
          <label className="form-label" htmlFor="">
            Confirm Passowrd
          </label>
          <input
            className="form-input"
            type="password"
            {...register("confirmPassword", {
              required: true,
              validate: (val) => {
                if (watch("password") !== val) {
                  return "Authentication Failed";
                }
              },
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>
        <div className="mt-2">
          <input
            disabled={!watch("password") || !watch("name") || !watch("email")}
            className="form-submit"
            type="submit"
            value={"Register"}
          />
        </div>
        <p className="text-lg mt-2">
          Don't Have an Account.{" "}
          <Link to={"/login"}>
            <span className="text-primary">Login Now</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
