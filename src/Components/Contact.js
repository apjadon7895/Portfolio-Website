import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit =async (data) => {
    const userInfo={
      name:data.name,
      email:data.email,
      message:data.message
    }
    try{
      await axios.post("https://getform.io/f/bpjmrjdb", userInfo);
      toast.success("Your message has been sent");
    }catch(error){
      console.log(error);
      toast.error("Something went wrong")
    }
    
  };

  return (
    <div className="Contact container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Me</h1>
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Full Name
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            id="name"
            placeholder="Enter Your Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.name && <span className="text-red-500 text-xs">This field is required</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email Address
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            id="email"
            placeholder="Enter Your Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.email && <span className="text-red-500 text-xs">This field is required</span>}
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            {...register("message", { required: true })}
            id="message"
            placeholder="Enter Your Message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
          {errors.message && <span className="text-red-500 text-xs">This field is required</span>}
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
