import React from 'react'
import './mainchat.css'
import { IoIosAddCircleOutline } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import ChatBoxComponent from '../ChatBox/ChatBoxComponent';
import MessageOne from '../MessageComponents/MessageOne/MessageOne';

const MainChat = ({clickedMessage}) => {
  return (
    <div className='mainChat'>
      <div className='col mainChat-container d-flex flex-column'>
        <div className='row'>
          <div className='d-flex border border-bottom mainChat-header '>
            <div className='mainChat-img d-flex align-items-center'>
              <img src={clickedMessage.persons[0].img} alt="" className='img-fluid'/>
              <h2>{clickedMessage.groupName}</h2>
            </div>
            <div className='mainChat-options d-flex justify-content-between align-items-center'>
              <span style={{paddingRight: "1rem"}}><IoIosAddCircleOutline size={25}/></span>
              <span style={{paddingRight: "1rem"}}><HiOutlineDotsHorizontal size={25}/></span>
            </div>
          </div>
        </div>
        <div className='row mainChat-message pt-5'>
          <div>
          <div>
            {clickedMessage.groupName === 'SMJ Law Firm' ? (
              <MessageOne convo={clickedMessage}/>
            ) : clickedMessage.groupName === 'Mansala Law Firm' ? (
              <ChatBoxComponent  convo={clickedMessage}/>
            ) : clickedMessage.groupName === 'GPA Law Firm' ? (
              <ChatBoxComponent  convo={clickedMessage}/>
            ) : null}
          </div>
          </div>
        </div>
        <div className='row mainChat-send'>

        </div>
      </div>

      
     
    </div>
  )
}

export default MainChat
