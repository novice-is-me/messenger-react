import React from 'react'
import './SideOptions.css'
import { IoNotificationsOffOutline , IoSearchOutline } from "react-icons/io5";
import DropDown from '../DropDownComponent/DropDown';
import { dataOptions } from '../../DataFiles/chat';
import MembersDropDown from '../DropDownComponent/MembersDropDown';

const SideOptions = ({clickedMessage}) => {

  return (
    <div className='sideOptions'>
      <div className='sideOptions-container'>
        <div className='sideOptions-top d-flex flex-column align-items-center'> 
          <img src={clickedMessage.profile} alt="" className='img-fluid'/>
          <h2>{clickedMessage.groupName}</h2>
        </div>
        <div className='sideOptions-middle d-flex align-items-center justify-content-center my-3'>
          <a href="" style={{marginRight:"1rem"}}>{<IoNotificationsOffOutline size={25}/>}</a>
          <a href="">{<IoSearchOutline size={25}/>}</a>
        </div>
        <div className='sideOptions-bottom'> 
          <DropDown options={dataOptions['Option1']}/>  
          <MembersDropDown options={clickedMessage.persons}/>
          <DropDown options={dataOptions['Option2']}/>
          <DropDown options={dataOptions['Option3']}/>
        </div>
      </div>
    </div>
  )
}

export default SideOptions
