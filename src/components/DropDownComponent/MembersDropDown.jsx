import React from 'react'
import { IoIosArrowForward ,IoIosArrowDown} from "react-icons/io";
import { useState } from 'react';
import './dropDown.css'

const MembersDropDown = ({options}) => {
    
    const [isClick, setIsClick] = useState(false)

    const handleClick = () =>{
        setIsClick(!isClick);
    }
  return (
    <div className='members-container'>
        <div className='d-flex justify-content-between p-1 align-items-center' 
         onClick={handleClick}>
            <h2>Chat members</h2>
            {!isClick ? <IoIosArrowForward size={20}/> : <IoIosArrowDown size={20}/>}
        </div>
            {isClick && (
                <ul className='mt-0'>
                    {options.map((item, index) => (
                        <div className='user-container d-flex'>
                            <img src={item.img} alt="" className='img-fluid' />
                            <li key={index}>{item.name}</li>
                        </div>
                    ))}
                </ul>
            )}
        </div>
  )
}

export default MembersDropDown
