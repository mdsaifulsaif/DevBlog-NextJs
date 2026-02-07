"use client";
import React, { useState } from "react";
import page from "./../page";
import axios from "axios";
import { baseurl } from "../Config/BaseUrl";

function Page() {
  const [errorMsg, setErrormsg] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${baseurl}/api/posts`, formData);
      console.log("SUCCESS:", res.data);
    } catch (error) {
      console.log("ERROR FROM API:", error.response?.data);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-2xl px-5 py-8 relative z-10"
      >
        <h1 className="text-2xl text-center mb-5">Create Event</h1>

        <div className="grid gap-5 grid-cols-1">
          <input
            onChange={handleInputChange}
            value={formData.title}
            name="title"
            className="py-2 px-4 border border-gray-600 rounded-3xl text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-amber-400"
            type="text"
            placeholder="Title"
          />
          <textarea
            onChange={handleInputChange}
            value={formData.description}
            name="description"
            className="border border-gray-600 rounded-lg p-3 resize-none bg-transparent focus:outline-none focus:ring-2 focus:ring-amber-400 text-white"
            placeholder="Content"
            rows={5}
          />
          <input
            onChange={handleInputChange}
            value={formData.image}
            name="image"
            className="py-2 px-4 border border-gray-600 rounded-3xl text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-amber-400"
            type="text"
            placeholder="Image"
          />
          <input
            onChange={handleInputChange}
            value={formData.category}
            name="category"
            className="py-2 px-4 border border-gray-600 rounded-3xl text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-amber-400"
            type="text"
            placeholder="Category"
          />
        </div>

        <button className="border border-amber-300 px-3 py-2 w-full mt-5 rounded-3xl hover:bg-amber-400 hover:text-gray-900 transition">
          Submit
        </button>
        <div className="text-center">
          <p className="text-red-600 my-3">{errorMsg && errorMsg}</p>
        </div>
      </form>

      {/* Centered blurred background shape */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px]  md:w-[500px] md:h-[600px] rotate-90 bg-amber-300 rounded-tl-[200px] rounded-tr-[400px] blur-2xl opacity-10 -z-10"></div>
    </div>
  );
}

export default Page;
