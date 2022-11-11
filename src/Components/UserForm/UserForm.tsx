import React, {useState} from 'react';
import {User, UserMutation} from "../../types";

interface Props {

	onSubmit: (user: User) => void;

}

const UserForm: React.FC<Props> = ({onSubmit}) => {
	const [user, setUser] = useState<UserMutation>({
		name: '',
		mail: '',
		active: false,
		role: ''
	});

	const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const {name, value} = e.target
		setUser(prev => ({...prev, [name]: value}));
	};

	const onFormSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit({
			id: Math.random().toString(),
			...user,
		})
	}

	const [checked, setChecked] = useState( true)

	return (
		<form onSubmit={onFormSubmit}>
			<h4>Register new User</h4>
			<div className='form-group'>
				<label htmlFor='name' className='form-label fw-bold mt-2'>User name</label>
				<input
					id='name'
					name='name'
					type='text'
					className='form-control' onChange={changeUser}/>
			</div>
			<div className='form-group'>
				<label htmlFor='mail' className='form-label fw-bold mt-2'>E-mail</label>
				<input
					id='mail'
					name='mail'
					type='email'
					className='form-control' onChange={changeUser}/>
			</div>
			<div className='form-group'>
				<label htmlFor='active' className='form-label fw-bold mt-2'>Active</label>
				<input
					id='active'
					name='active'
					type='checkbox'
					className='ms-4' onChange={() => {
					setChecked((prev) => !prev)
					setUser(prev => ({...prev, active: checked}))
				}}/>
			</div>
			<div className='form-group'>
				<label htmlFor='role' className='form-label fw-bold mt-2'>Role</label>
				<select name='role' className='form-control' id='role' onChange={changeUser}>
					<option value='User'>User</option>
					<option value='Editor'>Editor</option>
					<option value='Admin'>Admin</option>
				</select>
			</div>
			<button type='submit' className='btn btn-dark mt-3'>Enter</button>
		</form>
	);
};

export default UserForm;