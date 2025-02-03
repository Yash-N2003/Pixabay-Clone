import React, { useContext } from 'react'
import PixabayContext from '../context/PixabayContext'
const Navbar = () => {

  const {fetchByCat, setQuery} = useContext(PixabayContext);

  return (
    <>
     <div className='container text-center my-3'>
    <button type="button" onClick={()=>fetchByCat("nature")} className="btn btn-outline-light mx-3">Nature</button>
<button type="button" onClick={()=>fetchByCat("science")} className="btn btn-outline-light mx-3">Science</button>
<button type="button" onClick={()=>fetchByCat("computer")} className="btn btn-outline-light mx-3">Computer</button>
<button type="button" onClick={()=>fetchByCat("buildings")} className="btn btn-outline-light mx-3">Buildings</button>
<button type="button" onClick={()=>fetchByCat("sports")} className="btn btn-outline-light mx-3">Sports</button>
<button type="button" onClick={()=>fetchByCat("transportation")} className="btn btn-outline-light mx-3">Transportation</button>
<button type="button" onClick={()=>fetchByCat("travel")} className="btn btn-outline-light mx-3">Travel</button>
<button type="button" onClick={()=>fetchByCat("food")} className="btn btn-outline-light mx-3">Food</button>
    </div>
    <div className="container" style={{width:"800px"}} my="3px" >
    <input type = "text" onChange={(e)=>setQuery(e.target.value)} className="form-control"  placeholder="Search Images..." />
    </div>
    </>
    
   
  )
}

export default Navbar
