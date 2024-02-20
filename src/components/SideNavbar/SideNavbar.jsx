import React from 'react'
import './navbar.css'
import { FaMessage, FaLocationDot, FaFacebookMessenger } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";

const SideNavbar = () => {
  return (
    <div className='sideBar border border-1 p-3'>
      <div className='d-flex flex-column align-items-center'>
        <a href="">{<FaFacebookMessenger size={35}/>}</a>
        <a href="">{<FaMessage size={25} color='gray'/>}</a>
        <a href="">{<MdPeopleAlt size={25} color='gray'/>}</a>
        <a href="">{<FaLocationDot size={25} color='gray'/>}</a> 
      </div>
    </div>
  )
}

export default SideNavbar
