 import React from 'react'
 import{useNavigate} from 'react-router-dom'
 import styled from "styled-components"
 
 const PageNotFound = () => {
    const Btn = styled.button`
  color: yellow;
  border: 1px solid green;
  border-radius: 5px;
  padding: 10px;
  background-color: black;
  cursor: pointer;
  margin-top: 20px;
`


    const navigate=useNavigate();

    function handelBack() {
        navigate( '/' )
    }



   return (
     <div style={{ textAlign: 'center' }}>
        <Btn onClick={handelBack}>  Go Back To Home </Btn>
      <h1 style={{ color: 'red' }} >404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
    </div>
   )
 }
 
 export default PageNotFound