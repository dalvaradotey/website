import React from "react";
import Image from "../image";

const PostCard = () => (
  <div className="bg-white w-100 br3 pv4 shadow-4">
    <h2 className="f3 b ph4 pb4 dark-blue">React + Redux</h2>
    <Image filename="react-mas-redux.jpg" />
    <p className="pa4 lh-copy dark-blue">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat. 
    </p>
    <a href="" className="ph4 blue b f4 no-underline">Leer más</a>
  </div>
);

export default PostCard;