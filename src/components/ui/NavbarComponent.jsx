import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiRightArrowAlt } from "react-icons/bi";
import { FaInstagram, FaFacebookF, FaPinterestP, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";


const NavbarComponent = () => {
  const links = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Tours",
      path: "/tours"
    },
    {
      name: "About Us",
      path: "/about-us"
    },
    {
      name: "Morocco",
      path: "/morocco"
    },
    {
      name: "Testimonials",
      path: "/testimonials"
    },
    {
      name: "Prices",
      path: "/prices"
    },
  ]
  return (
    <div>
      <div className=' w-full flex justify-between px-[41px] py-2 border-b border-dashed  '>
        <div className=' flex gap-3'>
          <div className=' flex items-center gap-3 duration-1000 hover:bg-gray-100 p-3 rounded'>
            <div>
              <FaPhoneAlt color='#364153' size={24} />
            </div>
            <div>
              <p className='text-[18px] font-medium text-gray-700'>+212 617 393 665</p>
            </div>
          </div>
          <div className=' flex items-center gap-3 duration-1000 hover:bg-gray-100 p-3 rounded'>
            <div>
              <HiOutlineMailOpen color='#364153' size={24}  />
            </div>
            <div>
              <p className='text-[18px] font-medium text-gray-700'>contact@morocco-travel.com</p>
            </div>
          </div>
        </div>
        <div className=' flex gap-4 py-3'>
          <div className=' p-1 bg-gray-100 rounded duration-1000 hover:bg-[#a6843d]/10'>
            <FaFacebookF className=' duration-1000 hover:text-[#a6843d]' size={24} />
          </div>
          <div className=' p-1 bg-gray-100 rounded duration-1000 hover:bg-[#a6843d]/10'>
            <FaInstagram className=' duration-1000 hover:text-[#a6843d]' size={24} />
          </div>
          <div className=' p-1 bg-gray-100 rounded duration-1000 hover:bg-[#a6843d]/10'>
            <FaPinterestP className=' duration-1000 hover:text-[#a6843d]' size={24} />
          </div>
          <div className=' p-1 bg-gray-100 rounded duration-1000 hover:bg-[#a6843d]/10'>
            <MdOutlineEmail className=' duration-1000 hover:text-[#a6843d]' size={24} />
          </div>
        </div>
      </div>
      <div className=' grid grid-cols-8 px-[41px] py-4 items-center'>
        <div>
          <NavLink to={'/'} >LOGO</NavLink>
        </div>
        <div className=' col-span-5 flex justify-between'>
          {
            links?.map((item, index) => (
              <NavLink className={({ isActive }) => (isActive ? " text-[#a6843d] font-medium text-[18px] border-b-1 py-3" : "font-medium text-[18px] text-gray-700  hover:text-[#a6843d] duration-100 hover:border-b-1 py-3")} key={index} to={item.path}>{item.name}</NavLink>
            ))
          }
        </div>
        <div className=' flex justify-end col-span-2 '>
          <button className=' flex justify-center w-40 py-4 text-[18px] font-medium rounded items-center gap-2 text-white bg-[#a6843d] hover:bg-[#1e3a5f] transition'>Contact us <BiRightArrowAlt /> </button>
        </div>
      </div>
    </div>
  )
}

export default NavbarComponent