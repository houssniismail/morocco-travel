import React, { useState } from 'react'
import { BiRightArrowAlt } from "react-icons/bi";
import Image from "../../assets/menara-marrakech.jpg"
import Image_1 from "../../assets/3992-min-1200x800.jpg"
import image_2 from "../../assets/2151472962-min-1200x800.jpg"
import data from "../../data/the_best_of_morocco_tours_data.json"
import { BiCheck } from "react-icons/bi";
import EvaluationList from './EvaluationList';



const HomeComponent = () => {
  // const [isExpanded, setIsExpanded] = useState(false)
  // const amountOfWords = 36

  // let splittedText = null;
  // let itCanOverflow = null;





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

  const whyTravelWithUs = [
    {
      id: 1,
      name: "Expertise & Knowledge",
      icon: "src/assets/icons/fame-1.png",
      description: "As recommended in The Independent: With over 30 years of experience, Best of Morocco has knowledge of the country (Morocco) that is second to none."
    },
    {
      id: 1,
      name: "You are in safe hands",
      icon: "src/assets/icons/secure-shield-1.png",
      description: "Our experienced guides & drivers have dealt with every possible logistical situation imaginable, they ensure your trip in Morocco will be a once-in-a-lifetime experience."
    },
    {
      id: 1,
      name: "High Quality Service",
      icon: "src/assets/icons/quality.png",
      description: "We monitor guest satisfaction closely to help guide us meet excellent service. We continually seek improvements to surpass guest expectations."
    }
  ]


  const evaluation = [
    {
      id: 1,
      name: "Angelica T",
      image: "src/assets/default-avatar-2020-18.jpg",
      date: "2024-10-09",
      comment: "Amazing Morocco trip We had an absolute blast. Abdul was our driver, and he was simply fantastic. He was very patient and kind; my family sometimes wanted different food, and some have diet restrictions, and he went out of his way to drive them to places where they could find food that was suitable for them. We saw so many wonderful places, including the blue city - Chefchaouen, many beautiful ancient cities, breathing architecture, ancient Roman ruins of Volubilis and spent two nights in a luxury desert camp where we were treated like family. They served us wonderful homemade meals and the views of the desert were absolutely breathtaking including the sunset while traveling on camels. Youseff was absolutely wonderful, he was always available and quickly addressed any questions we had, and helped organize the trip according to our liking. The trip was private and customized to our needs. I was a bit nervous about a private trip but after seeing tour busses jam packed with people, I realized our private trip was really the way to go and the price was"
    },

  ]

  const tour_guides = [
    {
      id: 1,
      image: "src/assets/Morocco-Travel-Ideas-and-Suggested-Itineraries-min-600x400.jpg",
      category: "Tours & Trips",
      name: "Morocco Travel Ideas and Suggested Itineraries",

    },
    {
      id: 2,
      image: "src/assets/Oualidia-Holidays-with-The-Best-of-Morocco-600x400.jpg",
      category: "Holidays",
      name: "Oualidia Holidays with The Best of Morocco"
    },
    {
      id: 3,
      image: "src/assets/mamounia-1-800x347.jpg",
      category: "Hotels",
      name: "La Mamounia Luxury Hotel in Marrakech, Morocco",
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

        <div className="text-center space-y-4">
          <button className="bg-gray-200 py-3 px-10 rounded text-[20px] font-medium">
            Tours & Holidays Specialists
          </button>
          <p className="text-[64px] font-bold capitalize">Popular Destinations</p>
        </div>


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
          ))}
        </div>
      </div>



      {/* <div>
        <div>
          <div
            className="fusion-title title fusion-title-15 fusion-sep-none fusion-title-center fusion-title-highlight fusion-animate-once fusion-highlight-underline fusion-title-size-one"
            data-highlight="underline"
            data-animationoffset="top-into-view"
            style={{
              "--awb-text-color": "var(--awb-color1)",
              "--awb-highlight-color": "var(--awb-color4)",
              "--awb-highlight-top-margin": "-7px",
              "--awb-highlight-width": "5",
              "--awb-margin-top": "0px",
              "--awb-margin-bottom": "60px",
              "--awb-font-size": "120px",
            }}
          >
            <h1
              className="fusion-title-heading title-heading-center fusion-responsive-typography-calculated"
              style={{
                fontFamily: "var(--awb-custom_typography_1-font-family)",
                fontWeight: "var(--awb-custom_typography_1-font-weight)",
                fontStyle: "var(--awb-custom_typography_1-font-style)",
                margin: 0,
                fontSize: "1em",
                letterSpacing: "var(--awb-custom_typography_1-letter-spacing)",
                textTransform: "var(--awb-custom_typography_1-text-transform)",
                lineHeight: "var(--awb-custom_typography_1-line-height)",
              }}
            >
              <span className="fusion-highlighted-text-prefix" />
              <span className="fusion-highlighted-text-wrapper">
                <span className="fusion-highlighted-text">14-day Tour in Morocco</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                  className="awb-animate"
                >
                  <path d="M8.1,146.2c0,0,240.6-55.6,479-13.8" />
                </svg>
              </span>
              <span className="fusion-highlighted-text-postfix" />
            </h1>
          </div>
        </div>
      </div> */}

      <div className=' bg-tour-days py-20  '>
        <div className="text-center py-30 bg-black/80 h-full px-[41px] flex flex-col gap-24 ">
          <div>
            {/* Title with underline */}
            <div className="relative inline-block">
              <h1 className="kaushan-script-regular text-white text-[48px] md:text-[64px] font-[var(--awb-custom_typography_1-font-family)] leading-tight">
                14-Day Tour In Morocco
              </h1>
              {/* Yellow curved SVG underline */}
              <svg
                className="absolute bottom-0 left-0 w-full h-4 md:h-5"
                viewBox="0 0 500 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,15 C150,30 350,0 500,15"
                  stroke="#EAC85D"
                  strokeWidth="4"
                  fill="transparent"
                />
              </svg>
            </div>


            <p className="text-white text-lg mt-6 font-medium">
              All Nights In Riads/Hotels (On Bed &amp; Breakfasts Basis)
            </p>
          </div>

          <div className=' flex flex-col gap-24 '>
            <div className=' grid grid-cols-3 gap-16 '>
              <div>
                <div className=' flex gap-4 items-start'>
                  <div>
                    <BiCheck color=' white' size={34} />
                  </div>
                  <div>
                    <p className=' text-[20px] text-start font-bold text-white'>Full-time Air-conditioned Transportation</p>
                  </div>
                </div>

                <div className=' flex gap-4 items-start'>
                  <div>
                    <BiCheck color=' white' size={34} />
                  </div>
                  <div>
                    <p className=' text-[20px] text-start font-bold text-white'>Professional local Guides in major cities</p>
                  </div>
                </div>

                <div className=' flex gap-4 items-start'>
                  <div className=''>
                    <BiCheck color=' white' size={34} />
                  </div>
                  <div>
                    <p className=' text-[20px] text-start font-bold text-white'>Sandboarding, Camel trekking</p>
                  </div>
                </div>
              </div>
              <div className=' text-end'>
                <div>
                  <p className=' font-bold text-[64px] text-white'>14 Days</p>
                </div>
                <div>
                  <p className=' font-medium text-[20px] text-white'>Tour Length</p>
                </div>
              </div>
              <div className=' text-end'>
                <div>
                  <p className=' font-bold text-[64px] text-white'>$ 2.850,00</p>
                </div>
                <div>
                  <p className=' font-medium text-[20px] text-white'>Price Per Person</p>
                </div>
              </div>
            </div>
            <div className=" flex justify-center">
              <button className="text-[18px] font-medium flex items-center bg-[#a6843d] text-white px-6 py-4 rounded duration-300 hover:bg-[#1e3a5f]">
                get more info
                <BiRightArrowAlt size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className=' px-[40px] bg-gray-200'>
        <div className=' grid grid-cols-2 gap-10 '>
          <div  >
            <div className=' py-10'>
              <p className=' font-bold text-[38px]'>Why Travel With Us</p>
            </div>
            {
              whyTravelWithUs?.map((item, index) => (
                <div className=' flex flex-col gap-5 py-5' key={index}>
                  <div className=' w-[70px] h-[70px] '>
                    <img src={item.icon} alt={item.name} />
                  </div>
                  <div>
                    <p className=' text-gray-700 font-medium text-[20px]'>{item.name}</p>
                  </div>
                  <div>
                    <p className=' text-gray-700 font-light text-[20px]'>{item.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
          <div className=' py-10'>
            <img className=' rounded-[10px] h-full' src={image_2} alt="" />
          </div>
        </div>
      </div>


      <div className=' '>
        <div>
          <EvaluationList evaluation={evaluation} />
        </div>
      </div>


      <div className="px-[41px] flex flex-col gap-10  bg-gray-50">
        <div className="text-center space-y-4 my-5">
          <button className="bg-gray-200 py-3 px-10 rounded text-[20px] font-medium">
            Shared Experiences & Articles From Blog
          </button>
          <p className="text-[64px] font-bold capitalize">spotlight & tour guides</p>
        </div>

        <div className="grid grid-cols-3 gap-10 justify-center items-stretch">
          {
            tour_guides?.map((item, index) => (
              <div key={index} className="flex flex-col bg-white rounded-[10px] overflow-hidden min-h-[520px]">
                {/* Image */}
                <div className="h-[250px] w-full">
                  <img className="w-full h-full object-cover rounded-[10px]" src={item.image} alt="" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between flex-1 bg-gray-100 px-5 py-6">
                  <div>
                    <p className="text-[#a6843d] duration-1000 hover:text-[#1e3a5f]">{item.category}</p>
                  </div>

                  <div>
                    <p className="font-bold text-[#1e3a5f] text-[30px] duration-1000 hover:text-[#a6843d] ">
                      {item.name}
                    </p>
                  </div>

                  <div className="mt-6 p-[1px] bg-gradient-to-b from-white to-[#a6843d] rounded">
                    <button className="w-full bg-gray-50 text-[18px] font-medium flex items-center justify-center text-black py-4 rounded duration-300">
                      continue reading <BiRightArrowAlt size={24} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HomeComponent