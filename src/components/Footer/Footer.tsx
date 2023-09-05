import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div data-testid='footer-component' className='footer'>
      <button>Randomize</button>
      <button>Clear Board</button>
      <button>{"Start"}</button>
      <button>Increase Speed</button>
      <button>Decrease Speed</button>
    </div>
  );
};

export default Footer;
