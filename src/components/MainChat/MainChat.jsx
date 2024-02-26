import React, { useState } from 'react'
import './mainchat.css'
import { IoIosAddCircleOutline } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import MessageOne from '../MessageComponents/MessageOne';
import MessageTwo from '../MessageComponents/MessageTwo';
import MessageThree from '../MessageComponents/MessageThree';
import SideOptions from '../SideOptions/SideOptions';

const MainChat = ({clickedMessage}) => {

  const [isShow, setIsShow] = useState(false) //to track the state of the side options

  const handleClick = () =>{ //function to handle the click of the side options
    setIsShow(!isShow);
    console.log(isShow)
  }
  
  return (
    <div className='row mainChat'>
      <div className='mainChat-container d-flex'>
          <div className='mainChat-div'>
            <div className='row mainChat1'>
              <div className='d-flex mainChat-header justify-content-between'>
                <div className='mainChat-img d-flex align-items-center'>
                  <img src={clickedMessage.profile} alt="" className='img-fluid'/>
                  <h2>{clickedMessage.groupName}</h2>
                </div>
                <div className='mainChat-options d-flex justify-content-between align-items-center'>
                  <span><IoIosAddCircleOutline size={25}/></span>
                  <span onClick={handleClick}><HiOutlineDotsHorizontal size={25}/></span>
                </div>
              </div>
            </div>
            <div className='row mainChat-message'>
              <div>
                {clickedMessage.groupName === 'SMJ Law Firm' ? (
                  <MessageOne convo={clickedMessage}/>
                ) : clickedMessage.groupName === 'Buddies 4Life' ? (
                  <MessageTwo convo={clickedMessage}/>
                ) : clickedMessage.groupName === 'Jennie Kim' ? (
                  <MessageThree  convo={clickedMessage}/>
                ) : null}
              </div>
            </div>
          </div>
        {isShow && (
        <div className='sideChat w-50'>
            <SideOptions clickedMessage={clickedMessage}/>
        </div> )}
      </div>
    </div>
  )
}

export default MainChat
