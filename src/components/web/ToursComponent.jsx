import React from 'react'
import { BiRightArrowAlt } from "react-icons/bi";

const ToursComponent = () => {
  const data = [
    {
      id: 1,
      image: "src/assets/tours/marrakech-Jamaa-fnaa-600x400 (1).jpg",
      title:"14-day Tour in Morocco",
      description:"14 day / 13 nights – If you desire to see complete Morocco and have 2 weeks time, then this tour is for you. You will see the same sites as the Classic Morocco Tour, but also add a ...",
      price:"2.850,00"
    },
    {
      id: 2,
      image: "src/assets/tours/Ben-Heddo-L-600x400 (1).jpg",
      title:"11 Days Tour in Morocco",
      description:"This 11 day Morocco itinerary highlights the best of the country including Fez, the Sahara Desert, Marrakesh, and Essaouira. With your private driver, you will see the real Morocco ...100"
    },
    {
      id: 3,
      image: "src/assets/tours/Marakech-jardin-majorelle-600x398 (1).jpg",
      title:"10 Days Tour in Morocco",
      description:"For those wishing to explore the Imperial Cities of Morocco while still visiting the desert, have a look at this tour. You will experience the Cities, the Sahara desert, and more ...",
      price:"2.350,00"
    },
    {
      id: 4,
      image: "src/assets/tours/jewish-heritage-morocco-600x450.jpeg",
      title:"Jewish Heritage Tour",
      description:"14 day / 13 nights – If you desire to see complete Morocco and have 2 weeks time, then this tour is for you. You will see the same sites as the Classic Morocco Tour, but also add ...",
      price:"2.345,00"
    },
    {
      id: 5,
      image: "src/assets/tours/Meknas-city-600x401.jpg",
      title:"Imperial Cities of Morocco 8 Days",
      description:"8 days/7 nights, Experience Morocco’s Ancient Royal Cities in style. Venture deep into the Medina’s of Fez, Marrakesh, Rabat, and Meknes. Enjoy fine riads, shopping in the souks ...",
      price:"1.650,00"
    },
    {
      id: 6,
      image: "src/assets/tours/merzouga-desert-travel-600x402.jpg",
      title:"Morocco Desert Tours",
      description:"Enjoy the desert in all its splendor, Depart from Marrakesh and head through Morocco’s southern regions and desert before ending in Fez or returning to Marrakech.",
      price:"650,00"
    },
    {
      id: 7,
      image: "src/assets/tours/Chefchaoun-medina-600x450.jpg",
      title:"Morocco Tours From Spain",
      description:"Discover the magic of Morocco on a tour to Tangier from Spain. Explore the embodiment of Morocco’s history, the UNESCO world heritage city of Fes, Rabat, Volubilis, and Chefchaouen!",
      price:"650,00"
    },
    {
      id: 8,
      image: "src/assets/tours/59627-1-600x400.jpg",
      title:"15 Day Morocco Tour for Seniors",
      description:"Begin your Private Morocco Tour with a warm welcome at Casablanca Airport. Your English-speaking driver will greet you and transfer you in comfort to your luxury hotel. If time ...",
      price:"2.550,00"
    },
  ]
  return (
    <div>
      <div className='tours '>
        <p className=' text-center font-bold text-[68px] py-40'>Explore The Best Morocco Trips</p>
      </div>

      <div className=' bg-[#f6f6f6] px-[40px] h-full pb-20'>
        <div>
          <div className="grid grid-cols-3 gap-10 pt-20">
            {data?.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div>
                  <img
                    className="rounded-[10px] w-full"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="flex-1 mx-6 bg-white p-10 rounded-[10px] relative -top-10 flex flex-col justify-between">
                   <div className='  border-b  border-dashed py-4'>
                    <p className=' font-bold text-[20px]'>{item.title}</p>
                  </div>
                  <div className=' py-4'>
                    <p>{item.description}</p>
                  </div>
                  <div className="mt-6">
                    <p>Price Per Person:</p>
                    <p>${item.price}</p>
                    <div className="pt-6">
                      <button className="text-[18px] font-medium duration-300 flex items-center bg-transparent border-1 border-[#a6843d] text-black px-6 py-4 rounded hover:text-white hover:bg-[#a6843d]">
                        Tour Details
                        <BiRightArrowAlt size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default ToursComponent