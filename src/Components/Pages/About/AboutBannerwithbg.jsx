import React from 'react'
import AboutBannerLayout from './AboutBannerLayout'
import AboutBannerCard from './AboutBannerCard'

const AboutBannerwithbg = () => {
  return (
    <div>
        <div 
        className=" bg-center"
        style={{ backgroundImage: "url('https://webextheme.com/html/loxicat/images/bg/ac2.png')" }}>
            <AboutBannerLayout></AboutBannerLayout>
            <AboutBannerCard></AboutBannerCard>
        </div>
    </div>
  )
}

export default AboutBannerwithbg