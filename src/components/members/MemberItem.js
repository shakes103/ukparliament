import React, { useState, useEffect } from 'react'

const MemberItem = ({ item }) => {


    const d = new Date(item.value.latestHouseMembership.membershipStartDate);
    let str = d.toUTCString();
    let year = str.slice(5,16);

    if (item.value.latestParty.name) {
    return (
      
        <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.value.thumbnailUrl} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.value.nameDisplayAs}</h1>
          <ul>
            <li>
              <strong>Constituency:</strong> {item.value.latestHouseMembership.membershipFrom}
            </li>
            <li>
              <strong>Party:</strong> {item.value.latestParty.name}
            </li>
            <li>
              <strong>Member since:</strong> {year}
            </li>
          </ul>
        </div>
      </div>
    </div>
      
      )
    } else {
      return
    }
    
}
    
export default MemberItem
/*{if (result && result.profiles) {
  like = result.profiles.like;
  comments = result.profiles.comments;
}}*/