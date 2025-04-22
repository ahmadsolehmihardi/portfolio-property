import React from 'react';
import "../resident/resident.css";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import data from "../../utils/slider.json";
import "swiper/css";
import r1 from"../image/r1.png";
import r2 from"../image/r2.png";
import r3 from"../image/r3.png";

const resident = () => {
  return (
   <section className='r-wrapper'>
    <div className="r-container innerWidth paddings">
      <div className="r-head flexColStart">
        <span className='orangeText'>Best Choices</span>
        <span className='primaryText'>Popular Resident</span>
      </div>
      {/* <Swiper>
        {data.map((car,i)=>(
            <SwiperSlide key={i}>
              <div className="r-card">
                <img src={car.image} alt="home" />
              </div>
            </SwiperSlide>
        ))}
      </Swiper> */}
      <div className=''>
      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SlideButton/>
      <SwiperSlide className='card '><img src={r1} alt="" /></SwiperSlide>
      <SwiperSlide className='card'><img src={r2} alt="" /></SwiperSlide>
      <SwiperSlide className='card'><img src={r3} alt="" /></SwiperSlide>
      <SwiperSlide className='card'><img src={r1} alt="" /></SwiperSlide>
      <SwiperSlide className='card'><img src={r2} alt="" /></SwiperSlide>
      <SwiperSlide className='card'><img src={r3} alt="" /></SwiperSlide>
      
    </Swiper>
    </div>
    </div>
   </section>
  )
}

export default resident

const SlideButton = ()=>{
  const swiper = useSwiper();
  return(
    <div className='r-button '>
      <button onClick={()=>swiper.slidePrev()} className='button'>Prev</button>
      <button onClick={()=>swiper.slideNext()} className='button'>Next</button>
    </div>
  )
}
