import React, { useContext } from 'react';
import PixabayContext from '../context/PixabayContext';

const Navbar = () => {
  const { fetchByCat, setQuery } = useContext(PixabayContext);

  return (
    <>
      <div className='container text-center my-3'>
        <div className="btn-group d-flex flex-wrap justify-content-center" role="group" aria-label="Category buttons">
          <button type="button" onClick={() => fetchByCat("nature")} className="btn btn-outline-light mx-1">Nature</button>
          <button type="button" onClick={() => fetchByCat("science")} className="btn btn-outline-light mx-1">Science</button>
          <button type="button" onClick={() => fetchByCat("computer")} className="btn btn-outline-light mx-1">Computer</button>
          <button type="button" onClick={() => fetchByCat("buildings")} className="btn btn-outline-light mx-1">Buildings</button>
          <button type="button" onClick={() => fetchByCat("sports")} className="btn btn-outline-light mx-1">Sports</button>
          <button type="button" onClick={() => fetchByCat("transportation")} className="btn btn-outline-light mx-1">Transportation</button>
          <button type="button" onClick={() => fetchByCat("travel")} className="btn btn-outline-light mx-1">Travel</button>
          <button type="button" onClick={() => fetchByCat("food")} className="btn btn-outline-light mx-1">Food</button>
        </div>
      </div>

      <div className="container my-3">
        <input 
          type="text" 
          onChange={(e) => setQuery(e.target.value)} 
          className="form-control"  
          placeholder="Search Images..." 
          style={{ width: "100%" }} // Make input take full width
        />
      </div>
    </>
  );
}

export default Navbar;
