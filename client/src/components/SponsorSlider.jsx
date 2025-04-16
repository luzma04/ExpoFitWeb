import React from 'react'
import '../styles/SponsorSlider.css'
import Logo from '../assets/images/logo-temporal.png'

function SponsorSlider() {
  const slides = Array(7).fill(Logo);
  return (
    <div className="slider">
      <div className="slider-track">
        {[...slides, ...slides].map((src, index) => (
            <div className="slide" key={index}>
              <img src={src} alt={`logo-${index}`} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default SponsorSlider
