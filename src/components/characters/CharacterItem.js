import React, { useState, useEffect } from 'react'
import axios from 'axios';

const CharacterItem = ({ item }) => {

    const [contacts, setContacts] = useState('');
    const [memberId, setMemberId] = useState('');

    const d = new Date(item.value.latestHouseMembership.membershipStartDate);
    let str = d.toUTCString();
    let year = str.slice(5,16);
    

    useEffect(() => {
        const fetchItem = async () => {
          const info = await axios(`https://members-api.parliament.uk/api/Members/${item.value.id}/Contact`)
         
          setContacts(info.data);
          
        }
        
        fetchItem();
      }, [])
      console.log(contacts);
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
            {/*<li>
              <strong>Email:</strong> {contacts.value.email}
            </li>
                "Ms Diane Abbott is the Labour MP for <a href='/constituency/3506/overview'>Hackney North and Stoke Newington</a>, and has been an MP continuously since 11 June 1987."

            <li>
              <strong>Website:</strong> {item.quote}
            </li>
            <li>
              <strong>Twitter:</strong> {item.quote}
            </li>*/}
          </ul>
        </div>
      </div>
    </div>
    )
    
}
    
export default CharacterItem