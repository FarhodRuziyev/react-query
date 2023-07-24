import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RecCantext } from "../../components/stete";
import { instance } from '../../components/axios';
import { toast } from 'react-toastify';
import "./style.scss";

export default function Register() {
  const navv = useNavigate();
  const { rec, setRec } = useContext(RecCantext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const mutation = useMutation((data)=> instance.post("/api/register", data));  

  const auth = (value) => {
    mutation.mutate(value, {onSuccess: (success) => 
    toast.success("Success Register"),
    onError: (Error) =>toast.error("Error Register")})
  }
  console.log(rec);
  return (  
     <div className='register'>
        <form className='format' onSubmit={handleSubmit(auth)}>
         eve.holt@reqres.in
        <input className='inp' type="email" placeholder="email" 
        {...register("email", {required: true})} />
         pistol
        <input className='inp' type="password" placeholder="password" 
        {...register("password", {required: true})} />
        <input className='btn' type="submit" />
        </form>
     </div>
  );
}