import React, { useEffect, useState } from 'react'
import ChatBoxComponent from '../ChatBox/ChatBoxComponent'
import ReplyComponent from '../ReplyComponent/ReplyComponent'

const MessageTwo = ({convo, newReply}) => {
  const [addReply, setAddReply] = useState([])

  useEffect(()=>{
    setAddReply(prevAddReply =>[...addReply, newReply])
  }, [newReply])

  return (
    <div className='messageTwo-container'>
      <ChatBoxComponent convo={convo.persons[0].message} 
        image={convo.persons[0].img}
        firstName={convo.persons[0].name}/>
      <ChatBoxComponent convo={convo.persons[1].message}
       image={convo.persons[1].img}
       firstName={convo.persons[1].name}/>
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


        {addReply.map((reply, index) => (
        <div key={index}>
          {/* <p>{"Here is " + reply}</p>
          <ReplyComponent convo={reply[reply.length -1]} /> */}
          {reply.length !==0 ? (
        <div>
          {console.log(reply)}
          <p>{"Here is " + reply}</p>
          <ReplyComponent  key={index} convo={reply[reply.length - 1]} />
        </div>
        ) : null}
        </div>
      ))}
    </div>
  )
}

export default MessageTwo

