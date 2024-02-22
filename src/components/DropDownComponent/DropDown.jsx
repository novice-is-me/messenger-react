import React from 'react'
import './dropDown.css'
import { useState } from 'react'
import { IoIosArrowForward,IoIosArrowDown  } from "react-icons/io";

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
            {!isClick ? <IoIosArrowForward size={20}/> : <IoIosArrowDown size={20}/>}
            
        </div>
        {isClick && (
            <ul className='dropDown-options ps-0'>
                {options.map((item, index) => (
                <div className='' key={index}>
                    {item.options.map((item, index) => (
                        <div className='d-flex map-options' key={index}>  
                            <img src={item.icon} alt={''}/>
                            <a>{item.name}</a> 
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
