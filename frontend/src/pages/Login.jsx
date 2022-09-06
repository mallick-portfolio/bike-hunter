import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../components/Shared/Loading.jsx";
import { auth } from "../firebase.js";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  const { register, handleSubmit } = useForm();
  useEffect(() => {
    if (user || googleUser || githubUser) {
      toast("Login Successfull");
      navigate("/home");
    }
  }, [githubUser, googleUser, navigate, user]);
  useEffect(() => {
    if (error || googleError || githubError) {
      toast.warning("Authentication Failed");
      return navigate("/login");
    }
  }, [error, githubError, googleError, navigate]);

  if (loading || googleLoading || githubLoading) {
    return <Loading />;
  }
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
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
            Email
          </label>
          <input className="form-input" type="email" {...register("email")} />
        </div>
        <div className="my-1 lg:my-2">
          <label className="form-label" htmlFor="">
            Passowrd
          </label>
          <input
            className="form-input"
            type="password"
            {...register("password")}
          />
        </div>
        <div className="mt-2">
          <input className="form-submit" type="submit" value={"Login"} />
        </div>
        <p className="text-lg mt-2">
          Don't Have an Account.{" "}
          <Link to={"/register"}>
            <span className="text-primary">Register Now</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
