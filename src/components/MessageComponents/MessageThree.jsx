import React, { useState } from 'react'
import ChatBoxComponent from '../ChatBox/ChatBoxComponent'
import ReplyComponent from '../ReplyComponent/ReplyComponent'
import NewForm from '../FormComponent/NewForm'
import './messageOne.css'
import { MdDeleteOutline } from "react-icons/md";

const MessageThree = ({convo}) => {
  const [addReply, setAddReply] = useState([])

  const handleDelete = (index) =>{
    setAddReply(addReply.filter((item, i) => i !== index));
  }

  return (
    <div className='messageThree-container d-flex flex-column'>
      <div className='messageThree-scroll'>
        <ChatBoxComponent convo={convo.persons[0].message} 
          image={convo.persons[0].img}
          firstName={convo.persons[0].name}/>
        <ReplyComponent convo={convo.response[0]}/>
        <ChatBoxComponent convo={convo.persons[0].message2} 
          image={convo.persons[0].img}
          firstName={convo.persons[0].name}/>
          <ReplyComponent convo={convo.response[1]}/>
        <ChatBoxComponent convo={convo.persons[0].message3} 
          image={convo.persons[0].img}
          firstName={convo.persons[0].name}/>
          <ReplyComponent convo={convo.response[2]}/>
          <ChatBoxComponent convo={convo.persons[0].message4} 
          image={convo.persons[0].img}
          firstName={convo.persons[0].name}/>
          <ReplyComponent convo={convo.response[3]}/>
        
          {addReply.map((reply, index)=>{
            return <div key={index}>
              {reply.length !==0 ? (
          <div className='d-flex justify-content-end pe-3 align-items-center border border-2 body-reply'>    
            {console.log(reply)}
            {console.log(addReply)}
            <div className='delete-container'>
              <MdDeleteOutline onClick={()=>handleDelete(index)} className='delete-icon'/>
            </div>
            <div className='reply-component-container border border-2'>
              <ReplyComponent convo={reply}/>
            </div> 
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

export default MessageThree

