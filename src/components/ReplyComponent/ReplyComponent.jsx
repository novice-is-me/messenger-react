import React from 'react'
import './reply.css'

const ReplyComponent = ({convo}) => {
    return (
        <div className='replyComponent d-flex justify-content-end pe-3'>
            <div className='replyComponent-message'>
              <h4>{convo}</h4>
            </div>
        </div>
      )
}

export default ReplyComponent
