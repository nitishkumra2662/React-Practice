import React, { useState } from 'react';

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [users, setUsers] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newUser = {
            firstName,
            lastName,
            age,
        };

        const response = await fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: 
            { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser),
        });

        const data = await response.json();
        console.log(data);

        setUsers((prev) => [...prev, data]);

        
        setFirstName('');
        setLastName('');
        setAge('');
    };

    return (
        
        <div style={{ padding: '20px' }}>
            <h2>React Form with DummyJSON API</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}

                />
                <br /><br />
                <input
                    type="text"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}

                />
                <br /><br />
                <input
                    type="number"
                    placeholder="Enter Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}

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

export default Form;
