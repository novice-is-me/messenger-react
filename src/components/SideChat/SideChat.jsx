import React, { useState } from 'react'
import './side.css'
import { FaRegPenToSquare } from "react-icons/fa6";
import MainChat from '../MainChat/MainChat';
import SideOptions from '../SideOptions/SideOptions';
import ChatComponent from '../ChatComponents/ChatComponents';
import {dataProfile} from '../../DataFiles/chat'

const SideChat = () => {

  const [clickedMessage, setClickedMessage] = useState('')

  const onItemClick = (item) =>{
    setClickedMessage(item)
    console.log("Item:"+item);
  }

  return (
    <div className='sideChat h-100 border border-black'>
      <div className='row sideChat-row'>
        <div className='sideChat-column col'>
          <div className='sideChat-container1 d-flex justify-content-between mb-2'>
            <h1>Chats</h1> 
            <a href="">{<FaRegPenToSquare size={25} color='black'/>}</a> 
          </div>
          <div className='sideChat-container2'>
            <div className='input-group'>
              <input type="search" 
                placeholder='Search Messenger'
                className='form-control' />
            </div>
          </div>
          <div className='sideChat-container3'>
            <ChatComponent dataProfile={dataProfile} onMessageClick={onItemClick}/>
          </div>
        </div>
        <div className='mainChat-column col'>
          {clickedMessage && ( 
            <MainChat clickedMessage={clickedMessage}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default SideChat
