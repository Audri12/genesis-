import React from 'react'
import TestimonialSlider from './AbouOurTestimonials'

const TestimonialWithBg = () => {
  return (
    <div>
         <div 
        className="justify-center bg-[#0c2239] "
        style={{ backgroundImage: "url('https://webextheme.com/html/loxicat/images/bg/dot-map-testimonial.png')" }}>
           <TestimonialSlider></TestimonialSlider>
        </div>
    </div>
  )
}

export default TestimonialWithBg