import React, { useState } from 'react'
import './chat.css'
import { GoDotFill } from "react-icons/go";

const ChatComponents = ({dataProfile, onMessageClick}) => {

    const messageDot = (message, maxLength) =>{
        if (message.length >= maxLength){
            return message.substring(0, maxLength) + '...';
        } else{
            return message;
        }
    }

  return (
    <div className='chatComponent pt-3'>
        
        {dataProfile.chatGroups.map((item, index)=>{
            return <div key={index} className='chatComponent-container d-grid border border-1 p-2'>
                <a href="" onClick={(e)=> {e.preventDefault();onMessageClick(item)}}>
                    <div className='row'>
                        <div className='pe-0 col-3 chat-image-container'>
                            <img src={item.persons[0].img} alt="" className='img-fluid img-chat' />
                        </div>
                        <div className='col col-7 p-0 chat-info-container'>
                            <h5>{item.groupName}</h5>
                            <p>{messageDot(item.persons[0].message,30)}</p>
                        </div>
                        <div className='col col-2 p-0 d-flex align-items-center'>
                            <p style={{fontWeight:'bold'}}>1m</p>
                            <GoDotFill color='blue'/>
                        </div>
                    </div>
                </a>
            </div>
        })}
    </div>
  )
}

export default ChatComponents
