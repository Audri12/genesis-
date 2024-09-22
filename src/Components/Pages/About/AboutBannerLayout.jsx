import React from 'react'
import AboutBanner from './AboutBanner'

const AboutBannerLayout = () => {
  return (
    <div>
        <div className='container mx-auto p-5 px-[5%]'>
        <div className='grid grid-cols-2 gap-4 '>
        
        <div>
            <img src="https://webextheme.com/html/loxicat/images/about/about.png" />
           </div>

           <AboutBanner></AboutBanner>
           
        </div>
    </div>
    </div>
  )
}

export default AboutBannerLayout