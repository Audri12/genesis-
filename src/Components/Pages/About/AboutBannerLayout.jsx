import React from 'react'
import AboutBanner from './AboutBanner'

const AboutBannerLayout = () => {
  return (
    <div>
        <div className='container mx-auto p-5 px-[5%] pt-28'>
        <div className='grid grid-cols-1  lg:grid-cols-2'>
        
        <div className='px-[5%] '>
            <img src="https://webextheme.com/html/loxicat/images/about/about.png" />
           </div>

           <AboutBanner></AboutBanner>
           
        </div>
    </div>
    </div>
  )
}

export default AboutBannerLayout