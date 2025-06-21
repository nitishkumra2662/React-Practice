 import React from 'react'
 import{useNavigate} from 'react-router-dom'
 
 const PageNotFound = () => {
    const navigate=useNavigate();

    function handelBack() {
        navigate( '/' )
    }



   return (
     <div style={{ textAlign: 'center' }}>
        <button onClick={handelBack}>  Go Back To Home </button>
      <h1 style={{ color: 'red' }} >404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
    </div>
   )
 }
 
 export default PageNotFound