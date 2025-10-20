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

	const createUser = async (data, e) => {
		const response = await fetch("http://localhost:3000/users", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		if(response.ok){
			getUsers();
			e.target.reset();
		}
	}

    return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div className="bg-gray-900 text-white p-5">
					<Form createUser={createUser} />
				</div>
				<div className="p-4">
					<Users users={users} />
				</div>
			</div>
		</>
    )
}

export default App
