import React from 'react'
import './navbar.css'
import { FaMessage, FaLocationDot, FaFacebookMessenger } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { Link } from 'react-router-dom';

const SideNavbar = () => {
  return (
    <div className='sideBar border border-1 p-3'>
      <div className='d-flex flex-column align-items-center'>
        <a href="">{<FaFacebookMessenger size={35}/>}</a>
        <Link to="/message" href="">{<FaMessage size={25} color='gray'/>}</Link>
        <Link to="/organizations" href="">{<MdPeopleAlt size={25} color='gray'/>}</Link>
        <Link to="/location" href="">{<FaLocationDot size={25} color='gray'/>}</Link> 
      </div>
    </div>
  )
}

export default SideNavbar
