import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './Component/Todos'
import UserData from './Component/UserData'
import UserAdd from './Component/UserAdd'
import Form from './Component/Form'
import UncontrolledForm from './Component/UncontrolledForm'
import HookForm from './Component/HookForm'
import HomePage from './Component/HomePage'

function App() {

  const [usersData, setUsersData] = useState([]);
  // const [count, setCount] = useState([0])

  // let name = "nitish Kumra";
  // const [value,setValue]=useState({})

  // const HandleClick = () => {
  //   let item = [...count]
  //   let lastItem = count[count.length - 1]
  //   //item.push(lastItem+1)
  //   setCount((prew)=>[...prew,lastItem+1])
  // };
  // return (
  //   <>
  //     <div>
  //       hii kya haal hai ji
  //     </div>
  //     <h1>{name} </h1>
  //     {
  //       count.map((num,index)=>
  //   <p key={index}>
  //     {num}
  //   </p>

  // )
  // }

  // <button onClick={HandleClick}>
  //   Add Me
  // </button>
  //   </>
  // )
  return (
    <BrowserRouter>

      <>
        <div>


          
          <Routes> <Route path='/hook-form' element={<HookForm />} />
            <Route path='/uncontrolled' element={<UncontrolledForm />} />
            <Route path='/form' element={< Form />} />
            <Route path="/" element={<HomePage />}/>
          </Routes>

          {/* <UserData  setUsersData={setUsersData} usersData={usersData}/>
        <UserAdd setUsersData={setUsersData}/> */}
        </div>
        {/* <Todos /> */}
      </>
    </BrowserRouter>
  )
}

export default App
