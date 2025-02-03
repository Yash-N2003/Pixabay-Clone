import React from 'react'
import PixabayContext from './PixabayContext'
import { useEffect,useState } from 'react'
 
const PixabayState = (props) => {
    const api_key= "48600268-944df62cd8d09735d9b6dc457";
    const [imageData, setImageData] = useState([]);
    const [query, setQuery] = useState("India");
    
    useEffect(() => {
       const fetchData = async()=>{
        const api = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=20`)
        const data = await api.json();
        setImageData(data.hits);
       }
       fetchData();
    
        
    }, [query]);
    const fetchByCat = async(cat)=>{
      const api = await fetch(`https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=20`)
      const data = await api.json();
      setImageData(data.hits);
    }
  
    return (
    <PixabayContext.Provider value={{imageData,
      fetchByCat,
      setQuery
    }}>
      {props.children}
    </PixabayContext.Provider>
  )
}

export default PixabayState
