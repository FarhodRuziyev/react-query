import { instance } from "../../components/axios";
import React from "react";
import { useMutation, useQuery } from "react-query";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { TokenCantext } from "../../components/stete";
import { toast } from "react-toastify";
import "./style.scss";

export default function Login() {
  const { token, setToken } = useContext(TokenCantext);
  console.log(token);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutation = useMutation(newTodo => {
    return instance.post('/api/login', newTodo )}, {
      onSuccess : (data) => {
        // console.log(data);
        toast.success("Login Success")
        setToken(data);
      }
    })
    
  const onSubmit = (data) =>{
    mutation.mutate({
      email: data.email,
      password: data.password
  })
  }

  return (
    <div className="login">
      <form className="forma" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="#">
          <h3>eve.holt@reqres.in</h3>
          <input className="inputt" type="email"  placeholder="email"
          {...register("email", { required: true })}/>
        </label>
        <br />
        {" "}
        <br />
        <label htmlFor="#">
          <h3>cityslicka</h3>
          <input className="inputt"
          type="password"
          placeholder="password"
          {...register("password", { required: true })}
        />
        </label>{" "}
        <br />
       {" "}
        <br />
        <input className="btn" type="submit" />
      </form>
    </div>
  );
}
