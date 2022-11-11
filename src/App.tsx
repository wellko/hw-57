import React, {useState} from 'react';
import UserForm from "./Components/UserForm/UserForm";
import Users from "./Components/Users/Users";
import {User} from "./types";

function App() {
	const[users, setUsers] = useState<User[]>([])

	const addUser = (user:User) => {
		setUsers(prev => [...prev, user])
	}


	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='col-6 p-5 border border-dark border-2'><UserForm onSubmit={addUser}/></div>
				<div className='col-6'><Users users={users}/></div>
			</div>
		</div>
	);
}

export default App;
