import React, { useState } from 'react'

const UserAdd = ({setUsersData}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const addUser = async () => {
        console.log(firstName, lastName, age);
        const url = "https://dummyjson.com/users/add";
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'  
            },
            body: JSON.stringify({ firstName, lastName, age })
        });
        let data = await response.json();
        setUsersData((prevs)=>[
            ...prevs , data

        ]

        );

    }
    return (
        <div>
            <h1> Add New User</h1>
            <input type="text" onChange={(event) => setFirstName(event.target.value)} placeholder="write a first name" />
            <br />
            <input type="text" onChange={(event) => setLastName(event.target.value)} placeholder="write a last name" />
            <br />
            <input type="text" onChange={(event) => setAge(event.target.value)} placeholder="write a age" />
            <br />

            <button onClick={addUser}>Add User</button>


        </div>
    )
}

export default UserAdd