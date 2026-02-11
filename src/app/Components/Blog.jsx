import Link from "next/link";
import React from "react";

function Blog({ Event }) {
  return (
    <div className="border border-amber-300">
      <h1 className="text-xl">{Event.title}</h1>
      <p>{Event.description}</p>
      <p>{Event.category}</p>
      <p>{Event.createdAt}</p>
      <Link href={`/${Event._id}`}>See Details</Link>
    </div>
  );
}

export default Blog;
