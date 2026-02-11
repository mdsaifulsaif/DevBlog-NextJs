// import React from "react";
// import Hero from "./Components/Hero";
// import axios from "axios";
// import { baseurl } from "./Config/BaseUrl";
// import Blog from "./Components/Blog";
// import Event from "./api/models/Event.model";

// async function getPost() {
//   const res = await fetch(`./api/posts`, {
//     cache: "no-store",
//   });

//   return res.json();
// }

// async function page() {
//   const Events = await getPost();
//   // const res = await axios.get(`${baseurl}/api/posts`);

//   // const Events = res.data.Events;
//   // console.log(Events);
//   return (
//     <div className="">
//       <Hero />
//       <div className="grid grid-cols-1 md:grid-cols-4">
//         {Events.map((Event) => (
//           <Blog key={Event._id} Event={Event} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default page;

import Hero from "./Components/Hero";
import Blog from "./Components/Blog";
import Event from "./api/models/Event.model";
import { connectDB } from "./lib/db";
import { baseurl } from "./Config/BaseUrl";

async function getPost() {
  const res = await fetch(`${baseurl}/api/posts`, {
    next: { revalidate: 300 },
  });
  const data = await res.json();
  return data.Events;
}
export default async function Page() {
  const Events = await getPost();

  return (
    <div>
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-4">
        {Events.map((event) => (
          <Blog key={event._id} Event={event} />
        ))}
      </div>
    </div>
  );
}
