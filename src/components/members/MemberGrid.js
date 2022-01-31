import React from 'react'
import MemberItem from './MemberItem.js'
import Spinner from '../ui/Spinner'

const MemberGrid = ({ profile, isLoading }) => {
    return isLoading ? (<Spinner />) : (<section className='cards'>
        
        {profile.items.map((item) => (

        <MemberItem 
        key={item.value.id} item={item}></MemberItem>
        
        ))}
    </section>)
 
}

export default MemberGrid
