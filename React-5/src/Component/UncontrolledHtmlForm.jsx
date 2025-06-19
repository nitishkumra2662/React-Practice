import React, { useState ,useRef} from 'react';

const UncontrolledForm = () => {
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData=new FormData (e.target);

        // const newUser = {
        //    firstName: firstNameRef.current.value,
        //     lastName:lastNameRef.current.value,
        //     age:ageRef.current.value,
        // };

        const response = await fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: 
            { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log(data);

        setUsers((prev) => [...prev, data]);

        
        
    };

    return (
        
        <div style={{ padding: '20px' }}>
            <h2>React Form with DummyJSON API</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"name="firstName"
                    placeholder="Enter First Name"
                />
                <br /><br />
                <input
                    type="text"name="lastName"
                    placeholder="Enter Last Name"
                    
                />
                <br /><br />
                <input
                    type="number"name="age"
                    placeholder="Enter Age"
                   
                />
                <br /><br />
                <button type="submit">Submit</button>
            </form>

            <h3>Submitted Users:</h3>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.firstName} {user.lastName}  Age: {user.age}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UncontrolledForm;
