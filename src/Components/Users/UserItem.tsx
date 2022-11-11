import React from 'react';
import {User} from "../../types";

interface Props {
	user: User
}

const UserItem:React.FC<Props> = ({user}) => {
	const active = () => user.active? 'in active' : 'out active'
	 ;

	return (
		<div className='border border-2 border-dark mb-5'>
			<div className="card mb-2">
				<div className="row no-gutters">
					<div className="col-sm-8">
						<div className="card-body">
							<h5 className="card-title"><b>User name:</b> {user.name}</h5>
							<p className="card-text"><b>E-Mail:</b> {user.mail}</p>
							<p className="card-text"><b>Role:</b> {user.role}</p>
							<p className="card-text"><b>Active:</b> {active()}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserItem;