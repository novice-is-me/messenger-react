import React from 'react'
import './dropDown.css'
import { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";

const DropDown = ({options}) => {

    const [isClick, setIsClick] = useState(false)

    const handleClick = () =>{
        setIsClick(!isClick);
    }
  return (
    <div className='dropDown'>
      <div className='dropDown-container'>
        <div className='dropDown-title d-flex justify-content-between p-1' onClick={handleClick}>
            {options.map((item, index)=>{
                return <h2 key={index}>{item.name}</h2>
            })}
            <IoIosArrowForward size={20}/>
        </div>
        {isClick && (
            <ul className='dropDown-options border border-danger ps-3'>
                {options.map((item, index) => (
                <div className='' key={index}>
                    {/* Access the options1 array from each object in the options prop */}
                    {item.options.map((item, index) => (
                        <div className='d-flex map-options'>  
                            <img src={item.icon} alt={''}/>
                            <li key={index}>{item.name}</li>
                        </div>
                    ))}
                </div>
                ))}
            </ul>
        )}
      </div>
    </div>
  )
}

export default DropDown
