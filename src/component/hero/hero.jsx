import React from 'react'
import heroImage from"../image/hero-image.png"
import"./hero.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const hero = () => {
  return (
   <section className="hero-wrapper">
    <div className="paddings innerWidth flexCenter hero-container">
    {/* sisi kiri */}
    <div className="hero-left flexColStart ">
      <div className="hero-title">
        <div className='circel-orenge'/>
        <h1>Discover <br/>
          Most Swite tables <br/>
          property
        </h1>
      </div>
      <div className=" flexColStart hero-desk">
        <span className='secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque,</span>
        <span className='secondaryText'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, vero.</span>
      </div>
      <div className="serch-bar">
      <FontAwesomeIcon icon={faLocationDot}  color='blue' size='lg'/>
      <input type="text" placeholder='silahkan di isi ...' />
      <button className="button">Search</button>
      </div>
    </div>
    {/* sisi kanan */}
    <div className="hero-right flexCenter">
        <div className="image-container">
          <img src={heroImage} alt="hero-image"  />
        </div>

    </div>

    </div>
   </section>
  )
}

export default hero
