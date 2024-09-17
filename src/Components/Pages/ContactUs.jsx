import React from 'react'
import ContactUsLeftPart from './ContactUsLeftPart'
import ContactUsRight from '../../ContactUsRight'

const ContactUs = () => {
  return (
    <div>
        <div className='grid grid-cols-12 gap-10 container mx-auto max-w-[1200px] font-rajdhani '>
            <div className='col-span-7'>
            <ContactUsLeftPart></ContactUsLeftPart>
            </div>
            <div className='col-span-5'>
            <ContactUsRight></ContactUsRight>
            </div>
      
        </div>
        
    </div>
  )
}

export default ContactUs