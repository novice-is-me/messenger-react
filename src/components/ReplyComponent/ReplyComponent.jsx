import React, { useState, useCallback} from 'react'
import './reply.css'
import { MdDeleteOutline } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";

const ReplyComponent = ({convo}) => {

  const [isHide, setHide] = useState(true);

  const handleDelete = () =>{
    setHide(!isHide); 
  }

    return (
        <div className='replyComponent d-flex justify-content-end pe-3'>
            <div className='replyComponent-message'>
              <div className='Options-message'>
                <MdDeleteOutline style={{marginRight: ".5rem"}} 
                onClick={handleDelete}
                className='deleteButton'
                data-bs-toggle="modal" data-bs-target=".deleteModal"
                />   
                <BsEmojiSmile className='emojiButton' />
              </div>
              {isHide &&( 
              <h4>{convo}</h4>)}
            </div>
        </div>
      )
}

export default ReplyComponent
