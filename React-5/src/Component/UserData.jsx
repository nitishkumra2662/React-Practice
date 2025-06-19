import React, { useState, useEffect } from 'react'

const UserData = ({ setUsersData, usersData }) => {
    // const [usersData,setUsersData]=useState([]);
    useEffect(() => {
        getUserData();

    }, [])

    async function getUserData() {
        const url = "https://dummyjson.com/users";
        let response = await fetch(url);
        response = await response.json()

        setUsersData(response.users)

        console.log(usersData);
    }

    async function deleteUserData(id) {
        const url = `https://dummyjson.com/users/${id}`;
        let response = await fetch(url, {
            method: 'DELETE'

        });
        response = await response.json()
        setUsersData((prevs) =>
            prevs.filter(user => user.id !== id)

        );


        async function updateUserData(id) {
            const url = `https://dummyjson.com/users/${Id}`;

            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName ,
                }),
            });

            const data = await response.json();
            console.log("Updated User data: ", data);
            setUsersData((prevs) => prevs.map(user=>user.id===id ?{
                ...user,firstName:data.firstName
            }:user))}



        // getUserData();


    }


    return (
        <>
            <div>
                <h1>Show user data</h1>
                {
                    usersData && usersData.map((user) => (
                        <ul key={user.id}>
                            <li>
                                {user.firstName}
                            </li>
                            <li>{user.lastName}</li>
                            <li>{user.age}</li>
                            <button onClick={() => deleteUserData(user.id)}>Delete</button>
                            <button onClick={() => updateUserData(user.id)} >Edit</button>



                            


                        </ul>
                    ))
                }
            </div>

        </>
    )


}

export default UserData