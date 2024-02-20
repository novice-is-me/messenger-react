import React from 'react'
import './navbar.css'
import { FaMessage, FaLocationDot } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";

const SideNavbar = () => {
  return (
    <div className='sideBar'>
      <div>
        <a href="">{<FaMessage/>}</a>
        <a href="">{<MdPeopleAlt/>}</a>
        <a href="">{<FaLocationDot/>}</a> 
      </div>
    </div>
  )
}

export default SideNavbar
