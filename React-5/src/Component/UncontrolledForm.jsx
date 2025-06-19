import React, { useState ,useRef} from 'react';

const UncontrolledForm = () => {
    const firstNameRef=useRef(null);
    const lastNameRef=useRef(null);
    const ageRef=useRef(null);
    const [users, setUsers] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newUser = {
           firstName: firstNameRef.current.value,
            lastName:lastNameRef.current.value,
            age:ageRef.current.value,
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

        firstNameRef.current.value=null;
        lastNameRef.current.value=null;
        ageRef.current.value=null;
        
    };

    return (
        
        <div style={{ padding: '20px' }}>
            <h2>React Form with DummyJSON API</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"ref={firstNameRef}
                    placeholder="Enter First Name"
                />
                <br /><br />
                <input
                    type="text"ref={lastNameRef}
                    placeholder="Enter Last Name"
                    
                />
                <br /><br />
                <input
                    type="number"ref={ageRef}
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
