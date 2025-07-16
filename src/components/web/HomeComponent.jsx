import React from 'react'
import { BiRightArrowAlt } from "react-icons/bi";
import Image from "../../assets/menara-marrakech.jpg"
import Image_1 from "../../assets/3992-min-1200x800.jpg"
import data from "../../data/the_best_of_morocco_tours_data.json"


const HomeComponent = () => {

  const city = [
    {
      id: 1,
      name: "Marrakech",
      image: "src/assets/Untitled-500-x-400-px-e1726435859857.png"
    },
    {
      id: 2,
      name: "Rabat",
      image: "src/assets/rabat-transformed.jpeg"
    },
    {
      id: 3,
      name: "Casablanca",
      image: "src/assets/istockphoto-583987000-612x612-1-e1726552093611.jpg"
    },
    {
      id: 4,
      name: "Fes",
      image: "src/assets/University_karaouiyine_of_fes-e1726552144225.jpg"
    },
    {
      id: 5,
      name: "Merzouga Désert",
      image: "src/assets/Merzouga-Desert.jpg"
    }
  ]

  return (
    <div className=''>
      <div className='home h-screen'>
        <div className=' flex justify-center '>
          <h1 className=' text-[#ffffff] font-bold text-[64px] text-center py-20'>Morocco Luxury & Private <br /> Tours</h1>
        </div>
        <div className=' flex gap-10 justify-center'>
          <div className=' '>
            <button className=' flex justify-center duration-300 w-40 py-4 text-[18px] font-medium rounded items-center gap-2 text-white bg-[#a6843d] hover:bg-[#1e3a5f] transition'>view Tours <BiRightArrowAlt /> </button>
          </div>
          <div className=' '>
            <button className=' flex justify-center duration-300 w-40 py-4 text-[18px] font-medium rounded items-center gap-2 text-gray-700 bg-[#ffffff] border-2 border-[#a6843d] hover:bg-transparent hover:border-[#ffffff] hover:text-[#ffffff] transition'>about us <BiRightArrowAlt /> </button>
          </div>
        </div>
      </div>


      <div className=' px-[40px] flex py-10 gap-5'>
        <div className=' w-[50%]'>
          <div className=' py-4'>
            <p className='text-[18px] text-gray-700 leading-8 '>Since 1966 we at The Best Of Morocco are proud to be Morocco’s premier in-country luxury tour operator who work hard to give you a rewarding, authentic, and unique cultural experience. Throughout your private tours in Morocco you’ll be in great hands; our expert drivers and guides work with you to keep each day flexible, take you off-the-beaten path to see the best places, enjoy the history and culture, lounge in luxury trendy riads, meet the friendliest people and above all have the best Moroccan experience you will treasure forever. <br />

              Whether you’re planning a short journey in Morocco or a multi-centre holiday taking in the varied landscape and cities of Morocco, we can help you arrange exciting personal itinerary packages through the real Morocco customized to your needs & budget</p>
          </div>
          <div>
            <button className='text-[18px] duration-300 flex items-center bg-[#a6843d] px-10 py-5 rounded text-[#ffffff] hover:bg-[#1e3a5f]'>
              Read What Our Clients Say About Us
              <BiRightArrowAlt size={24} />
            </button>
          </div>
        </div>
        <div className=' w-[50%]'>
          <img className=' rounded-[10px]' src={Image} alt="image" />
        </div>
      </div>


      <div className=' bg-[#f6f6f6] px-[40px] h-full pb-20'>
        <div>
          <div>
            <p className='font-bold text-[64px] text-center py-6'>The Best Of Morocco Tours</p>
          </div>
          <div>
            <p className=' text-center'>Get inspired by exploring our trusted trips packages below or <span className=' text-[#a6843d] hover:text-black'>contact us</span> to custom design a personal tour for you. We know the <br /> country and we understand what it takes to put an unforgettable journey to Morocco.</p>
          </div>
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
                  <div>
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
          <div className=" flex justify-center">
            <button className="text-[18px] font-medium flex items-center bg-[#a6843d] text-white px-6 py-4 rounded duration-300 hover:bg-[#1e3a5f]">
              View All Tours
              <BiRightArrowAlt size={24} />
            </button>
          </div>
        </div>
      </div>


      <div className=' h-screen hassle-freet-tours flex justify-end items-center  '>
        <div className=' relative gap-3 mx-10 bg-orange-950/60 max-w-xl rounded-[10px] flex flex-col justify-between py-10 px-10  '>
          <div>
            <p className=' text-center text-white text-[24px] font-bold'>Hassle-free Tours</p>
          </div>
          <div>
            <p className=' text-center text-white text-[32px] font-bold'>Custom Design Your <br /> Private Moroccan Tour</p>
          </div>
          <div>
            <p className=' text-center text-white text-[16px] font-medium'>Our experts of Americans & Moroccans based in Marrakech will help you plan your journey, we know the country and we understand what it takes to create a great tour together… </p>
          </div>
          <div className=" flex justify-center">
            <button className="text-[18px] font-medium flex items-center bg-[#a6843d] text-white px-6 py-4 rounded duration-300 hover:bg-[#1e3a5f]">
              Customize Your Tour
              <BiRightArrowAlt size={24} />
            </button>
          </div>
        </div>
      </div>




      <div className=' px-[40px] grid grid-cols-2 gap-10 py-10'>
        <div className=' pb-6'>
          <img className=' h-full rounded-[10px]' src={Image_1} alt="image" />
        </div>
        <div className='border-b border-dashed pt-6'>
          <div className=' '>
            <button className=' px-10 py-3 bg-gray-200 rounded font-medium' >About Morocco</button>
          </div>
          <div>
            <p className=' text-[32px] font-bold'>Morocco’s premier in-country tour operator</p>
          </div>
          <div className=' py-4 space-y-10'>
            <p className='text-[18px] text-gray-700 leading-8 font-medium '>Since 1966 we at The Best Of Morocco are proud to be Morocco’s premier in-country luxury tour operator who work hard to give you a rewarding, authentic, and unique cultural experience. Throughout your private tours in Morocco you’ll be in great hands; our expert drivers and guides work with you to keep each day flexible, take you off-the-beaten path to see the best places, enjoy the history and culture, lounge in luxury trendy riads, meet the friendliest people and above all have the best Moroccan experience you will treasure forever.</p>
            <p className='text-[18px] text-gray-700 leading-8 font-medium'>Whether you’re planning a short journey in Morocco or a multi-centre holiday taking in the varied landscape and cities of Morocco, we can help you arrange exciting personal itinerary packages through the real Morocco customized to your needs & budget</p>
          </div>
        </div>
      </div>


      <div className="px-[41px] flex flex-col gap-10 pb-30">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <button className="bg-gray-200 py-3 px-10 rounded text-[20px] font-medium">
            Tours & Holidays Specialists
          </button>
          <p className="text-[64px] font-bold capitalize">Popular Destinations</p>
        </div>

        {/* City Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
          {city?.map((item, index) => (
            <div className="relative group  bottom-0 duration-1000 hover:bottom-4" key={index}>
              <img
                className="w-full h-full object-cover rounded-[10px]"
                src={item.image}
                alt={item.name}
              />
              <div className="absolute inset-0 bg-black/40 duration-1000 hover:bg-black/80 rounded-[10px] flex items-center justify-center">
                <p className="text-white text-[20px] font-bold">{item.name}</p>
              </div>
            </div>

            // <div className="relative group w-full h-[300px] overflow-hidden rounded-[10px]" key={index}>
            //   <img
            //     className="object-cover w-full h-full"
            //     src={item.image}
            //     alt={item.name}
            //   />
            //   <div className="absolute bottom-0 left-0 right-0 bg-black/50 py-4 text-center transition-all duration-1000 group-hover:bottom-4">
            //     <p className="text-white text-[20px] font-bold">{item.name}</p>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeComponent