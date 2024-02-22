import React from 'react'
import './chatbox.css'

const ChatBoxComponent = ({convo, image, firstName}) => {
  return (
    <div className='chatBoxComponent'>
      <p>{firstName}</p>
      <div className='d-flex align-items-center'>
        <img src={image} alt="" className='img-fluid'/>
        <div className='chatBoxComponent-message w-50'>
          <h4>{convo}</h4>
        </div>
      </div>
    </div>
  )
}

export default ChatBoxComponent
