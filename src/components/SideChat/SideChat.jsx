import React, { useState } from 'react'
import './side.css'
import { FaRegPenToSquare } from "react-icons/fa6";
import MainChat from '../MainChat/MainChat';
import ChatComponent from '../ChatComponents/ChatComponents';
import {dataProfile} from '../../DataFiles/chat'
import SearchBar from './SearchBar';

const SideChat = () => {

  const [clickedMessage, setClickedMessage] = useState('')
  const [focus, setFocus] = useState(false)

  const onItemClick = (item) =>{
    setClickedMessage(item)
    console.log("Item:"+clickedMessage);
  }

  return (
    <div className='sideChat h-100'>
      <div className='row sideChat-row'>
        <div className='sideChat-column col'>
          <div className='sideChat-container1 mb-2'>
            <h1>Chats</h1> 
            <a href="">{<FaRegPenToSquare size={25} color='black'/>}</a> 
          </div>
          <div className='sideChat-container2'>
           <SearchBar data={dataProfile} focus={focus} setFocus={setFocus}/>
          </div>
          {!focus && ( <div className='sideChat-container3'>
            <ChatComponent dataProfile={dataProfile} onMessageClick={onItemClick}/>
          </div>)}
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
