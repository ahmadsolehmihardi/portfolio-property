import React from 'react'
import "./companies.css"
import gambar1 from"../image/prologis.png";
import gambar2 from"../image/tower.png";
import gambar3 from"../image/equinix.png";
import gambar4 from "../image/realty.png";

const companies = () => {
  return (
    <section className='c-companies paddings'>
        <div className="flexCenter  innerWidth c-container ">
          <img src={gambar1} alt="" />
          <img src={gambar2} alt="" />
          <img src={gambar3} alt="" />
          <img src={gambar4} alt="" />
          
        </div>
    </section>
  )
}

export default companies
