import React from 'react';
import UserItem from "./UserItem";
import {User} from "../../types";

interface Props {
	users: User[]
}

const Users:React.FC<Props> = ({users}) => {
	return (
		<>
			<h2>Users:</h2>
			{users.map((user, index) => (
				<UserItem key={index} user={user}/>
			))}
		</>
	);
};

export default Users;