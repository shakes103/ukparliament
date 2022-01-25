import React from 'react'

const [contact, setContact] = useState([]);

const Contact = ({ item }) => {
    useEffect(() => {
        const fetchItem = async () => {
  
          const info = await axios(`https://members-api.parliament.uk/api/Members/${item.value.id}/Contact`) 
          setContact(info.data);
          
          //setContact(info.data)
          
        }
        
        fetchItem();
      }, [])
}

export default Contact
