import React from "react";

function HeroButton() {
  return (
    <div className="px-3">
      <button className="text-sm px-3 md:w-[400px] text-center  backdrop-blur-[70px] border border-y-amber-300 py-2 rounded-4xl w-full  mt-3">
        <span>Explore All Posts</span>
      </button>
    </div>
  );
}

export default HeroButton;
