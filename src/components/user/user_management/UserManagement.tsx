import { useEffect, useState } from "react";
import { fetchUsers } from "../../../lib/user/UserService";
import { User } from "../types";

const UserManagement = () => {
	const [users, setUsers] = useState<User[]>([]);

	useEffect( () => {
		fetchUsers().then(users => {
			console.log({ users });
			setUsers(users || []);
		}).catch(err => console.log({err}));
	}, []);

	return (
		<>
			<div>User Management</div>
			{users.map(user => (
				<div>
					<span>Name: {user.name} | ID: {user.id}</span>
				</div>
			))}
		</>
	);
};

export default UserManagement;

