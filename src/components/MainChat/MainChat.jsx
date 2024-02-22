import React, { useState } from 'react'
import './mainchat.css'
import { IoIosAddCircleOutline } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import MessageOne from '../MessageComponents/MessageOne';
import MessageTwo from '../MessageComponents/MessageTwo';
import MessageThree from '../MessageComponents/MessageThree';

const MainChat = ({clickedMessage}) => {
  
  return (
    <div className='mainChat'>
      <div className='col mainChat-container d-flex flex-column'>
        <div className='row mainChat1'>
          <div className='d-flex border border-bottom mainChat-header '>
            <div className='mainChat-img d-flex align-items-center'>
              <img src={clickedMessage.profile} alt="" className='img-fluid'/>
              <h2>{clickedMessage.groupName}</h2>
            </div>
            <div className='mainChat-options d-flex justify-content-between align-items-center'>
              <span><IoIosAddCircleOutline size={25}/></span>
              <span><HiOutlineDotsHorizontal size={25}/></span>
            </div>
          </div>
        </div>
        <div className='row mainChat-message'>
          <div>
            {clickedMessage.groupName === 'SMJ Law Firm' ? (
              <MessageOne convo={clickedMessage}/>
            ) : clickedMessage.groupName === 'Buddies 4Life' ? (
              <MessageTwo convo={clickedMessage}/>
            ) : clickedMessage.groupName === 'Jennie Kim' ? (
              <MessageThree  convo={clickedMessage}/>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainChat
