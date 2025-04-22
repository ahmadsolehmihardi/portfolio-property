import React from 'react'
import logo from"../image/logo.png";
import "./header.css";

const header = () => {


  return (
    <section className='h-wrapper'>
      <div className="flexCenter paddings innerWidth h-container ">
        <img src={logo} width={100} alt='logo'/>
        <div className='flexCenter h-menu'>
          <a href="">Residencies</a>
          <a href="">our values</a>
          <a href="">Contact us</a>
          <a href="">Get Started</a>
          <button className='button'>
            <a href="">contact</a>
          </button>
          </div>
      </div>
    </section>
  )
}

export default header
