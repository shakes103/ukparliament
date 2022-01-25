import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';



const App = () => {
  
  const [profile, setProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(`https://members-api.parliament.uk/api/Members/Search?House=1&IsEligible=true&IsCurrentMember=true&skip=0`) 
      console.log(result.data);
      setProfile(result.data)
      
      setIsLoading(false)
    }
    
    fetchItem();
  }, [])
  return (
    <div className="container">
      <Header />
      <CharacterGrid isLoading={isLoading} profile={profile} />
    </div>
  );
}


export default App;
