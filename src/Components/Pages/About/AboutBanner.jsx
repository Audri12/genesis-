import React, { useEffect, useState } from 'react'

const AboutBanner = () => {
    const [cards,setCards]=useState([]);
    

    useEffect(()=>{
        fetch('AboutBanner.json')
        .then(res=>res.json())
        .then(data =>{
            setCards(data);
        })
    },[])

  return (
    <div className='font-rajdhani px-[5%]'>
        <p className='font-semibold text-lg text-[#FF7907] underline pb-3.5'>Welcome to Loxicat Industry</p>
        <h1 className='font-bold text-5xl text-[#0C2239] pb-6'>Most Leading Industrial Service Provider.</h1>
        <p className='text-[#5C5E64] text-base font-roboto pb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eaque, maxime aliquam cum odio aut ex, et blanditiis corporis rerum unde vitae nihil. Eius porro sunt temporibus soluta libero voluptatum.
</p>
        
        <div>
        {cards.map((card) => (
          <div key={card.id} >
           <li className='flex items-start pb-3'>
            {/* to change the logo, just need to change the span part  */}
           <span className="mr-2 pt-1 ">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="20" viewBox="0 0 48 48">
<path fill="#f1705a" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#ffffff" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"></path>
</svg>                </span>
         <p className='text-base text-[#5C5E64] font-roboto'>{card.title}</p>  
           </li>
          </div>
        ))}
      </div>
      <button className='bg-[#FF7905] text-lg font-roboto text-white px-16	py-5 my-6 hover:bg-[#DC6600] rounded-md'>About Us</button>
    </div>
  )
}

export default AboutBanner