import React from 'react';

const UserForm = () => {
	return (
			<form>
				<h4>Register new User</h4>
				<div className='form-group d-flex flex-column'>
					<label htmlFor='name' className='form-label'>User name</label>
					<input
						id='name'
						name='name'
						type='text'
						className='form-control'/>
				</div>
				<div className='form-group d-flex flex-column'>
					<label htmlFor='mail' className='form-label'>E-mail</label>
					<input
						id='mail'
						name='mail'
						type='email'
						className='form-control'/>
				</div>
				<div className='form-group d-flex flex-column'>
					<label htmlFor='active' className='form-label'>Active</label>
					<input
						id='active'
						name='active'
						type='checkbox'
						className='form-control'/>
				</div>
				<div className='form-group d-flex flex-column'>
					<label htmlFor='role' className='form-label'>Role</label>
				<select name='role' className='form-control' id='role'>
					<option value='User'>User</option>
					<option value='Editor'>Editor</option>
					<option value='Admin'>Admin</option>
				</select>
				</div>
				<button type='submit' className='btn btn-dark'>Enter</button>
			</form>
	);
};

export default UserForm;