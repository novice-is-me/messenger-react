import React, { useState } from 'react'
import './side.css'
import { FaRegPenToSquare } from "react-icons/fa6";
import MainChat from '../MainChat/MainChat';
import ChatComponent from '../ChatComponents/ChatComponents';
import {dataProfile} from '../../DataFiles/chat'
import SearchBar from './SearchBar';
import {
    person1,
    person2,
    person3,
    person11,
    person12,
    person13,
    person14,
    person22,
    person23,
    person31,
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7,
    icon8,
    icon9,
    icon10,
    me
} from '../../DataFiles/image.js'

const SideChatTrue = () => {

  const [clickedMessage, setClickedMessage] = useState('') // to track the clicked message/data
  const [focus, setFocus] = useState(false) //to know state of the search
  const [data, setData] = useState({
    chatGroups: [
        {
          id: 1,
          groupName: "SMJ Law Firm",
          profile: person1,
          persons: [
            {
              id: 1,
              name: "Madel",
              img: person11, 
              message: "I update the calendar and re-reschedule your new hearing Atty. Mansalas."
            },
            {
              id: 2,
              name: "Atty. Raphael",
              img: person12,
              message: "Noted. Thank you."
            },
            {
              id: 3,
              name: "Atty.Marvin",
              img: person13,
              message: "I can't attach any files on my schedule calendar. Anyone in the support can help me for this?",
              message2: "Thank you."
            },
            {
              id: 4,
              name: "Christine Joy",
              img: person14,
              message: "Me too. I can't update the following details in y schedule."
            }
          ],
        response: [
          "Noted Atty. We Will fix it as soon as possible",
          "We understand the inconvenience caused and we are very sorry!"
        ]
        },
        {
          id: 2,
          groupName: "Buddies 4Life",
          profile: person3,
          persons: [
            {
              id: 4,
              name: "Luffy",
              img: person2,
              message: "Hey everyone what's going on!",
              message2: "NAKAMA DONT FORGOT THE MEAT"
            },
            {
              id: 5,
              name: "Zoro",
              img: person22,
              message: "Doing great here just watching some anime",
              message2: "Then I'm going to!"
            },
            {
              id: 6,
              name: "Nami",
              img: person23,
              message: "I'll come over at your place captain!! What food do you want?" 
            }
          ],
          response:[
            "Let's watch haikyu movie in Japan! It will be so much fun!!",
            "Let me come too Hinata"
          ]
        },
        {
          id: 3,
          groupName: "Jennie Kim",
          profile: person31,
          persons: [
            {
              id: 7,
              name: "Jennie Kim",
              img: person31,
              message: "Yow! How's your week going?",
              message2: "I feel you! Work has been crazy. Too much photoshoot and mv shooting.",
              message3: "Yeah how about going to Mt Pinatubo this saturday? Then let's grab some lunch along the way",
              message4: "No worries then we will just have a brunch"
            },
            {
              id: 8,
              name: "Hinata S.",
              img: me
            }
          ],
          response:[
            "Hi Jennie! It's been so busy, but I'm hanging there hahahah",
            "Yeah literally. Have any plans this saturday?",
            "I can't go to hiking due to my physical state but I can join you in brunch",
            "Yeah yeah"
          ]
        }
      ]
  })
  

  const onItemClick = (item) =>{
    setClickedMessage(item)
    console.log("Item:"+ clickedMessage);
  }

  return (
    <div className='sideChat h-100'>
      <div className='row sideChat-row'>
        <div className='sideChat-column col'>
          <div className='sideChat-container1 mb-2'>
            <h1>Chats</h1> 
            <a href="" onClick={(e) => e.preventDefault()}>{<FaRegPenToSquare size={25} color='black'/>}</a> 
          </div>
          <div className='sideChat-container2'>
           <SearchBar data={data} focus={focus} setFocus={setFocus}/>
          </div>
          {!focus && ( <div className='sideChat-container3'>
            <ChatComponent dataProfile={data} onMessageClick={onItemClick}/>
          </div>)}
        </div>
        <div className='mainChat-column col'>
          {clickedMessage && ( 
            <MainChat clickedMessage={clickedMessage}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default SideChatTrue
