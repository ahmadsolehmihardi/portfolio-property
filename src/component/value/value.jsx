import React from 'react'
import'./value.css'
import valuee from'../image/value.png'
import '../../index.css'

const value = () => {
  return (
    <section className='v-wrapper'>
        <div className="v-container innerWidth paddings flexCenter">
          {/* posisi di kiri */}
          <div className="v-left">
            <div className="image-container">
              <img src={valuee} alt="gambar-value" />
            </div>
          </div>
          {/* posisi di kanan */}
          <div className="v-right flexColStart">
            <span className='orangeText'>Our Value</span>
            <span className='primaryText'>Value will give to you</span>
            <span className='secondaryText'>Lorem ipsum dolor sit amet  <br/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, perferendis tempora? Repudiandae modi recusandae voluptate earum, necessitatibus dolor sapiente veritatis eveniet voluptatem, nesciunt corrupti, laboriosam temporibus maiores et ab. Culpa eligendi impedit quia saepe error pariatur non animi mollitia. Alias doloribus tenetur ullam quibusdam eligendi accusamus ratione debitis consectetur voluptate.</span>
          </div>
        </div>
    </section>
  )
}

export default value
