import React from 'react'
import { useState } from 'react'
import './side.css'

const SearchBar = ({data, focus, setFocus}) => {

    const [searchData, setSearchData] = useState('')

    const handleSearch = (e) =>{
        e.preventDefault();
        console.log("Search Data: "+searchData);
        setSearchData('');
      }

      const onFocus = () =>{
        setFocus(!focus);
      }

      const onBlur = () =>{
        setFocus(!focus)
      }

  return (
    <div>
       <form action="" onSubmit={handleSearch}>
              <div className='input-group'>
                <input type="text" 
                  value={searchData}
                  onChange={(e) => setSearchData(e.target.value)}
                  placeholder='Search Messenger'
                  className='form-control'
                  onFocus={onFocus}
                  onBlur={onBlur}/>
              </div>
            </form>
            <span></span>
            {data.chatGroups.filter((item)=>{
              if(searchData == ''){
                return item;
              } else if (item.groupName.toLowerCase().includes(searchData.toLowerCase())){
                return item;
              }}).map((item, index)=>{
              return (focus && (
                <div className='searchInfo-container'>
                  <div key={index} className='d-flex searchInfo'>
                    <img src={item.profile} alt="" className=''/>
                    <p>{item.groupName}</p>
                  </div>
                </div>
              ))
              
            })}
    </div>
  )
}

export default SearchBar
