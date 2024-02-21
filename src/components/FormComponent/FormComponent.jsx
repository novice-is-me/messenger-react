import React, { useState,useEffect, useRef } from 'react'
import { IoAddCircle, IoSend } from "react-icons/io5";
import { dataProfile } from '../../DataFiles/chat';

const FormComponent = ({convo, newReply, setNewReply}) => {

    const [reply, setReply] = useState('');
    const inputRef = useRef();

    const handleSubmit = (e) =>{
      e.preventDefault();
      if (reply === ''){
        inputRef.current.focus();
      }else{
        const dataProfileUpdate = dataProfile
        dataProfileUpdate.chatGroups.map((item)=>{
          if (item.groupName === convo.groupName){
            // const addedReply = convo.response.push(reply)
            // console.log(addedReply);
            console.log(newReply);
            console.log(convo.response.length);
            setNewReply([...newReply, reply])
          }
        })
        console.log(reply);
        setReply(reply);
        setReply('')
      }
    }

    useEffect(()=>{
        inputRef.current.focus();
    },[])
    
  return (
    <div>
      <form action="" className='form' onSubmit={handleSubmit}>
            <div className='mainChat-send-container d-flex align-items-center'>
              <IoAddCircle size={25} color='gray'/>
              <input type="send" 
                placeholder='Aa'
                ref={inputRef}
                value={reply}
                className='form-control'
                onChange={(e) => {e.preventDefault(); setReply(e.target.value)}}/>
                 
                <div className='send-button ms-2'>
                  <IoSend size={23} color='blue'/>
                </div>
            </div>
          </form>
    </div>
  )
}

export default FormComponent
