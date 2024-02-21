import React from 'react'
import './chatbox.css'

const ChatBoxComponent = ({convo, image}) => {
  return (
    <div className='chatBoxComponent d-flex align-items-center'>
      <img src={image} alt="" className='img-fluid'/>
      <h4 style={{borderColor: 'yellow', marginLeft: ".7rem"}}>{convo}</h4>
    </div>
  )
}

export default ChatBoxComponent
