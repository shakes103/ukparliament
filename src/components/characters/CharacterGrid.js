import React from 'react'
import CharacterItem from './CharacterItem.js'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ profile, isLoading }) => {
    return isLoading ? (<Spinner />) : (<section className='cards'>
        {profile.items.map((item, i) => (

        <CharacterItem key={i} item={item}></CharacterItem>
        
        ))}
    </section>)
 
}

export default CharacterGrid

