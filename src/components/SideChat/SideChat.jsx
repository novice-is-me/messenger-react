import React from 'react'
import './side.css'
import { FaRegPenToSquare } from "react-icons/fa6";
import MainChat from '../MainChat/MainChat';
import SideOptions from '../SideOptions/SideOptions';
import ChatComponent from '../ChatComponents/ChatComponents';

const SideChat = () => {
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
            <ChatComponent/>
          </div>
        </div>
        <div className='mainChat-column col'>
          <MainChat/>
        </div>
        <div className='options-column col'>
          <SideOptions/>
        </div>
      </div>
    </div>
  )
}

export default SideChat
