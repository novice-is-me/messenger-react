import React from 'react'
import ChatBoxComponent from '../../ChatBox/ChatBoxComponent'

const MessageOne = ({convo}) => {
  return (
    <div className='messageOne-container'>
      <ChatBoxComponent convo={convo.persons[0].message} image={convo.persons[0].img}/>
      <ChatBoxComponent convo={convo.persons[1].message}/>
    </div>
  )
}

export default MessageOne
