import React, { useEffect, useState } from 'react'

const NewsCard = () => {
    const [cards,setCards]=useState([]);
    

    useEffect(()=>{
        fetch('NewsCard.json')
        .then(res=>res.json())
        .then(data =>{
            setCards(data);
        })
    },[])
  return (
    <div>
       <div>
        
       <div className=''>
       <div className='grid gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-3 sm:mx-auto justify-center px-96 drop-shadow-md '>
          {
            cards.map((card)=>(
              <div>
                <div key={card.id}>
                  {/* <img src={card.image} className='w-full h-full'/> */}

                  <div className="relative ">
     
      <img src={card.image} className='w-full h-full'/>
      <div className="absolute inset-0 bg-[#5d2e6d] flex items-center justify-self-start max-w-32 h-8 p-2 ">
        <div className="text-white text-xs">{card.date_of_publication}</div>
      </div>
    </div>





                  <div className='p-4'>
                  <p className='text-[#5d2e6d] transition-colors duration-500 hover:text-[#f1705a] font-semibold text-2xl py-4 '>{card.title}</p>
                  <p className='text-[#15135D]'>{card.description}</p>


                  <div className="flex space-x-4 ">
          <button className="text-[#f1705a] transition-colors duration-500 hover:text-[#18b7c7] py-2 rounded">
          {card.author}
          </button>
          <button className="text-[#f1705a] transition-colors duration-500 hover:text-[#18b7c7] py-2 pl-2 rounded">
          {card.date_of_publication}
          </button>
        </div>

                  </div>
                  
                </div>
              </div>
            ))
          }
          
        </div>


{/* button  start */}
        <div className=' justify-center text-center pb-16'>
      <a><button className="btn font-normal r tracking-wide text-base p-3 px-8 text-white bg-[#5d2e6d] hover:bg-[#389ab3]
              ">Read All</button></a>
      </div>
{/* button  end */}

      
       </div>




         

           
         
    </div> 

    </div>
  )
}

export default NewsCard