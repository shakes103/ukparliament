import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/ui/Header';
import MemberGrid from './components/members/MemberGrid';
import Search from './components/ui/Search';
import Footer from './components/ui/Footer';


const App = () => {
  
  const [profile, setProfile] = useState([]);
  const [nextUrl, setNextUrl] = useState ('');
  const [prevUrl, setPrevUrl] = useState ('');
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const initialUrl = `https://members-api.parliament.uk/api/Members/Search?House=1&IsEligible=true&IsCurrentMember=true&NameStartsWith=${query}`;
  
  try {
  useEffect(() => {
    
    const fetchItem = async () => {
      const result = await axios(initialUrl) 
      setProfile(result.data);
      let nextHref = result.data.links[1].href;
      let suffix_1 = '&' + nextHref.slice(16);
      let prevHref = result.data.links[2].href;
      let suffix_2 = '&' + prevHref.slice(16);
      //console.log(suffix)
      setNextUrl(initialUrl + suffix_1) /* Take the /Member from the link*/ 
      setPrevUrl(initialUrl + suffix_2)
      setIsLoading(false)
    }
    fetchItem();
  }, [query])}
  
  catch(e) {
    // here you will have access to error.response
    console.log('error')
}

const next = async () => {
  if (!nextUrl) return;
  setIsLoading(true);
  let response = await axios(nextUrl);
  setProfile(response.data);
  let nextHref = response.data.links[1].href;
  let suffix_1 = '&' + nextHref.slice(16);
  let prevHref = response.data.links[2].href;
  let suffix_2 = '&' + prevHref.slice(16);
  
  setNextUrl(initialUrl + suffix_1) /* Take the /Member from the link*/ 
  setPrevUrl(initialUrl + suffix_2)
  setIsLoading(false)
  setTimeout(scrollToTop, 1000);
}

const prev = async () => {
  if (!prevUrl) return;
  setIsLoading(true);
  let response = await axios(prevUrl);
  setProfile(response.data);
  let nextHref = response.data.links[1].href;
  let suffix_1 = '&' + nextHref.slice(16);
  let prevHref = response.data.links[2].href;
  let suffix_2 = '&' + prevHref.slice(16);
  
  setNextUrl(initialUrl + suffix_1) /* Take the /Member from the link*/ 
  setPrevUrl(initialUrl + suffix_2)
  setIsLoading(false)
  setTimeout(scrollToTop, 500);
} 

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <MemberGrid isLoading={isLoading} profile={profile} />
      <div className="btn">
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
      </div>
      <Footer />
    </div>
  );
}

// Function scrolls to top after rendering the grid
const scrollToTop = () => {
  
  return window.scrollTo({top: 0, behavior: 'smooth'})
}
  





export default App;
