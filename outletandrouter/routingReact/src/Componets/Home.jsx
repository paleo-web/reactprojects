import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    // const [name, setName] = useState("Sarfaraz")
  return (
    <div>
        
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam,
        fuga quas doloribus fugiat quos tempora consequatur! Totam, voluptatem
        quisquam. Vero itaque, voluptates dolorem quae possimus magni reiciendis
        doloribus ipsam voluptate.
      </p>
      <Link to={`/contact`}>Info </Link>

      
    </div>
  );
}

export default Home;
