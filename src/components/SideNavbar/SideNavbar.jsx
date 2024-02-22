import React from 'react'
import './navbar.css'
import { FaMessage, FaLocationDot, FaFacebookMessenger } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { Link } from 'react-router-dom';
import {profile} from '../../DataFiles/image'

const SideNavbar = () => {
  return (
    <div className='sideBar border border-1 p-2 d-flex flex-column justify-content-between'>
      <div className='d-flex flex-column align-items-center'>
        <a href="">{<FaFacebookMessenger size={30} color='blue'/>}</a>
        <Link to="/message" href="">{<FaMessage size={20} color='gray'/>}</Link>
        <Link to="/organizations" href="">{<MdPeopleAlt size={20} color='gray'/>}</Link>
        <Link to="/location" href="">{<FaLocationDot size={20} color='gray'/>}</Link> 
      </div>
      <div className='sideBar-profile'>
          <img src={profile} alt="" className='img-fluid'/>
      </div> 
    </div>
  )
}

export default SideNavbar
