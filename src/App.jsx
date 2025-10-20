import {useState, useEffect } from 'react';
import Users from './components/Users';
import Form from './components/Form';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      	getUsers();
    },[]);

    const getUsers = async () => {
      	const response = await fetch("http://localhost:3000/users");
		const responseData = await response.json();
		setUsers(responseData.data)
    }

	const createUser = async (data) => {
		const response = await fetch("http://localhost:3000/users", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		if(response.ok){
			getUsers();
		}
	}

    return (
		<>
			<Form createUser={createUser} />
			<Users users={users} />
		</>
    )
}

export default App
