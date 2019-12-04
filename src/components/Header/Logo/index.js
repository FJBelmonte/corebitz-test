import "./styles.css";

import React from "react";
import logo from "../../../assets/svg/logo.svg";

const Logo = () => {
  return (
    <div className='logo'>
      <img src={logo} alt='CAKE TEST BACK' />
      <div className='title'>
        <h1>CAKE</h1>
        <h2>TESTE BACK</h2>
      </div>
    </div>
  );
};

export default Logo;
