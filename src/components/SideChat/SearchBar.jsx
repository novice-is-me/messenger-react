import React from 'react'
import { useState } from 'react'

const SearchBar = ({data}) => {

    const [searchData, setSearchData] = useState('')

    const handleSearch = (e) =>{
        e.preventDefault();
        console.log("Search Data: "+searchData);
        setSearchData('');
      }

  return (
    <div>
       <form action="" onSubmit={handleSearch}>
              <div className='input-group'>
                <input type="text" 
                  value={searchData}
                  onChange={(e) => setSearchData(e.target.value)}
                  placeholder='Search Messenger'
                  className='form-control' />
              </div>
            </form>
            {data.chatGroups.filter((item)=>{
              if(searchData == ''){
                return item;
              } else if (item.groupName.toLowerCase().includes(searchData.toLowerCase())){
                return item;
              }}).map((item, index)=>{
              return <div key={index} className='d-flex'>
                {/* <img src={item.profile} alt="" className=''/>
                <p>{item.groupName}</p> */}
              </div>
            })}
    </div>
  )
}

export default SearchBar
