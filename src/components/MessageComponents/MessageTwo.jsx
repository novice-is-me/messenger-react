import React, { useState } from 'react'
import ChatBoxComponent from '../ChatBox/ChatBoxComponent'
import ReplyComponent from '../ReplyComponent/ReplyComponent'
import NewForm from '../FormComponent/NewForm'
import './messageOne.css'

const MessageTwo = ({convo}) => {
  const [addReply, setAddReply] = useState([])

  return (
    <div className='messageTwo-container d-flex flex-column'>
      <div className='messageTwo-scroll'>
        <ChatBoxComponent convo={convo.persons[0].message} 
          image={convo.persons[0].img}
          firstName={convo.persons[0].name}/>
        <ReplyComponent convo={convo.response[0]}/>
        <ChatBoxComponent convo={convo.persons[2].message}
          image={convo.persons[2].img}
          firstName={convo.persons[2].name}/>
        <ChatBoxComponent convo={convo.persons[1].message2}
          image={convo.persons[1].img}
          firstName={convo.persons[1].name}/>
        <ReplyComponent convo={convo.response[1]}/>
        <ChatBoxComponent convo={convo.persons[0].message2}
          image={convo.persons[0].img}
          firstName={convo.persons[0].name}/>

        {addReply.map((reply, index)=>{
            return <div key={index}>
              {reply.length !==0 ? (
          <div>
            {console.log(reply)}
            <ReplyComponent convo={reply} />
          </div>
          ) : null}
            </div>
          })}
        </div>
      <div className='sticky-send'>
        <NewForm convo={convo} addReply={addReply} setAddReply={setAddReply}/>
      </div>
    </div>
  )
}

export default MessageTwo

