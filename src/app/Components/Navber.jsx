import Link from "next/link";
import React from "react";

function Navber() {
  return (
    <div className="md:w-6xl px-3 mx-auto bg-transparent py-5">
      <nav className="flex bg-transparent items-center justify-between ">
        <div>
          <h1 className="text-lg font-bold ">Dev Event</h1>
        </div>

        <div className="flex items-center justify-center gap-3 ">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/CreateEvent">Create Event</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navber;
