import React, { useEffect, useState } from 'react'

const NewsCardDraft = () => {
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
        <div className="grid gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-3 sm:mx-auto justify-center  drop-shadow-md">
          {cards.map((card) => (
            <div key={card.id} className="relative group">
              {/* Group class at the card level */}
              <div className="relative w-full overflow-hidden rounded shadow-lg">
                {/* Image */}
                <img
                  src={card.image}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  alt={card.name}
                />

                {/* Date with hover translate effect */}
                <div className="absolute top-4  bg-[#ff7906] h-8 w-24 p-2 rounded-br-full rounded-tr-[3994px] text-white text-xs font-semibold transform transition-transform duration-500 group-hover:translate-y-2 z-20 group-hover:rounded-br-[3994px] group-hover:rounded-tr-full group-hover:px-3">
                {card.date_of_publication}
                </div>

                {/* Overlay Image Zoom (this block will zoom along with the card image) */}
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-125">
                  <img
                    src={card.image}
                    className="object-cover w-full h-full"
                    alt={card.name}
                  />
                </div>
              </div>

              <div className="p-4">
                <p className="transition-colors duration-500 hover:text-[#f1705a] font-semibold text-2xl py-4">
                  {card.title}
                </p>
                <p>{card.description}</p>

                <div className="flex space-x-4">
                  <button className="text-[#f1705a] transition-colors duration-500 hover:text-[#18b7c7] py-2 rounded">
                    {card.author}
                  </button>
                  <button className="text-[#f1705a] transition-colors duration-500 hover:text-[#18b7c7] py-2 pl-2 rounded">
                    {card.date_of_publication}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  
    </div>
  )
}

export default NewsCardDraft