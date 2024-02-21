import React from 'react'
import './reply.css'

const ReplyComponent = ({convo}) => {
    return (
        <div className='replyComponent d-flex'>
            <div className='replyComponent-message border border-2 '>
              <h4>{convo}</h4>
            </div>
        </div>
      )
}

export default ReplyComponent
