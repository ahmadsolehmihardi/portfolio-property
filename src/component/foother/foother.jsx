import React from 'react'
import './foother.css'
import logo2 from'../image/logo2.png';

const foother = () => {
  return (
    <section className='f-wrapper'>
      <div className="f-container innerWidth paddings flexCenter">
        {/* posisi kiri */}
        <div className="f-left flexColStart">
          <img src={logo2} alt="logo2" style={{width:"100px"}} />
          <div className='secondaryText'>
            <span >Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, illo.
            </span>
          </div>
        </div>
        {/* posisi kanan */}
        <div className="flexColStart f-right">
          <span className='primaryText'>Information</span>
          <span className='secondaryText'>123,456 Jakarta Pusat, Indonesia</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>Contact Us</span>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default foother
