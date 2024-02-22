import React, { useState } from 'react'
import './mainchat.css'
import { IoIosAddCircleOutline } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import ChatBoxComponent from '../ChatBox/ChatBoxComponent';
import MessageOne from '../MessageComponents/MessageOne';
import FormComponent from '../FormComponent/FormComponent';
import MessageTwo from '../MessageComponents/MessageTwo';
import MessageThree from '../MessageComponents/MessageThree';
import NewForm from '../FormComponent/NewForm';

const MainChat = ({clickedMessage}) => {
  const [newReply, setNewReply] = useState([])
  
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
              <MessageOne convo={clickedMessage} newReply={newReply}/>
            ) : clickedMessage.groupName === 'Buddies 4Life' ? (
              <MessageTwo convo={clickedMessage} newReply={newReply}/>
            ) : clickedMessage.groupName === 'Jennie Kim' ? (
              <MessageThree  convo={clickedMessage}/>
            ) : null}
          </div>
        </div>
        {/* <div className='row mainChat-send pt-1'>
          <FormComponent convo={clickedMessage} newReply={newReply} setNewReply={setNewReply}/> */}
          {/* {`New reply sa labas: ${newReply}`} */}
           
        {/* </div> */}
      </div>
    </div>
  )
}

export default MainChat
