import React from 'react'
import './contact.css'
import '../../index.css'
import contactImage from'../image/contact.jpg'
import {faPhone} from'@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const contact = () => {
  return (
   <section className='c-wrapper paddings'>
    <div className="c-container innerWidth paddings flexCenter">
      {/* posisi kiri */}
      <div className="c-left flexColStart">
        <span  className='orangeText'>Our Contact</span>
        <span className='primaryText'>Easy to Contact Us</span>
        <span className='secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, iure.<br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, illo!</span>
      
        <div className="flexColStart contactModes">
        <div className="baris">
          {/* baris pertama*/}
          
          <div className="flexColStart c-left row">
              <div className="flexColCenter mode">
                <div className="flexStart detail">
                  <div className="flexCenter icon">
                  <FontAwesomeIcon icon={faPhone} style={{color:"blue", width:"30px", height:"30px"}} />
                  </div>
                  <div className="flexColStart">
                    <span className='primaryText'>Call</span>
                    <span className='primaryText'>021 2234 3356</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  Call Now
                </div>
              </div>
          </div>
          {/* baris kedua */}
          <div className="flexColStart c-left row">
              <div className="flexColCenter mode">
                <div className="flexStart detail">
                  <div className="flexCenter icon">
                  <FontAwesomeIcon icon={faPhone} style={{color:"blue", width:"30px", height:"30px"}} />
                  </div>
                  <div className="flexColStart">
                    <span className='primaryText'>Call</span>
                    <span className='primaryText'>021 2234 3356</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  Call Now
                </div>
              </div>
          </div>
          </div>
          <div className="baris">
        {/* baris ketiga */}
        <div className="flexColStart c-left row">
              <div className="flexColCenter mode">
                <div className="flexStart detail">
                  <div className="flexCenter icon">
                  <FontAwesomeIcon icon={faPhone} style={{color:"blue", width:"30px", height:"30px"}} />
                  </div>
                  <div className="flexColStart">
                    <span className='primaryText'>Call</span>
                    <span className='primaryText'>021 2234 3356</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  Call Now
                </div>
              </div>
          </div>
           {/* baris keEmpat */}
           <div className="flexColStart c-left row">
              <div className="flexColCenter mode">
                <div className="flexStart detail">
                  <div className="flexCenter icon">
                  <FontAwesomeIcon icon={faPhone} style={{color:"blue", width:"30px", height:"30px"}} />
                  </div>
                  <div className="flexColStart">
                    <span className='primaryText'>Call</span>
                    <span className='primaryText'>021 2234 3356</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  Call Now
                </div>
              </div>
          </div>
          </div>
          </div>
      </div>
      {/* posisi kanan */}
      <div className="c-right">
        <div className="image-container">
        <img src={contactImage} alt="imageContact" />
        </div>
      </div>
    </div>
   </section>
  )
}


export default contact
