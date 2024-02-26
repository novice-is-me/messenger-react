import React, { useState } from 'react'
import './chat.css'
import { GoDotFill } from "react-icons/go";

const ChatComponents = ({dataProfile, onMessageClick}) => {

    const messageDot = (message, maxLength) =>{ //to limit the length of message
        if (message.length >= maxLength){
            return message.substring(0, maxLength) + '...';
        } else{
            return message;
        }
    }

  return (
    <div className='chatComponent pt-3'>
        {dataProfile.chatGroups.map((item, index)=>{
            const lastIndex = item.response[item.response.length - 1];
            return <div key={index} className='chatComponent-container'>
                <a href="" onClick={(e)=> {e.preventDefault();onMessageClick(item)}}>
                    <div className='row chatInfo-container'>
                        <div className='pe-0 chat-image-container'>
                            <img src={item.profile} alt="" className='img-fluid img-chat' />
                        </div>
                        <div className='col p-0 chat-info-container'>
                            <h5>{item.groupName}</h5>
                            {/* {lastIndex.length > 30 ? 
                            <p>{`You: ${messageDot(lastIndex,30)}`}</p> 
                            : <p>{`You: ${lastIndex}`}</p>} */}
                            
                            
                            <p>{`You: ${messageDot(lastIndex,20)}`}</p>
                            {/* {item.response.length > 1 && 
                            <p>{`You: ${messageDot(item.response[-1],35)}`}</p>} */}
                            {/* <p>{"Here"+ lastMessage}</p> */}
                            {/* {item.response.map((lastChat, index)=>{
                                return <p key={index}>{lastChat.length-1}</p>
                            })} */}
                        </div>
                        <div className='col p-0 d-flex align-items-center timeContainer'>
                            <p style={{fontWeight:'bold'}}>1m</p>
                            <GoDotFill color='blue' className='activeIcon'/>
                        </div>
                    </div>
                </a>
            </div>
        })}
    </div>
  )
}

export default ChatComponents
