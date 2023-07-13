import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import './styles/App.css';
import WebFont from 'webfontloader'

import UserProfile from './UserProfile.jsx';
function App() {
	//The array of users to render in the assignment
	const users = [
		{
			name: 'John Doe',
			email: 'john@example.com',
			imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
		},
		{
			name: 'Jane Smith',
			email: 'jane@example.com',
			imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=female',
		},
		{
			name: 'Michael Johnson',
			email: 'michael@example.com',
			imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
		},
		{
			name: 'Emily Brown',
			email: 'emily@example.com',
			imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=female',
		},
		{
			name: 'David Wilson',
			email: 'david@example.com',
			imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
		},
		{
			name: 'Sarah Davis',
			email: 'sarah@example.com',
			imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=female',
		},
		{
			name: 'Daniel Thompson',
			email: 'daniel@example.com',
			imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
		},
		{
			name: 'Olivia Martinez',
			email: 'olivia@example.com',
			imgUrl: 'https://xsgames.co/randomusers/avatar.php?g=female',
		},
	];
	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Roboto', 'Play Fair Display'],
			},
		});
	}, []);
	return (
		<div className='App'>
			<header>
				<h1 className='bg-dark'>User Profiles:</h1>
			</header>
			<div className='user-profile-wrapper'>
				{
					/* Render the array of users using the UserProfile in this div */
					users.map((users, index) => {
						return (
							<UserProfile
								key={index}
								name={users.name}
								email={users.email}
								imgUrl={users.imgUrl}
							/>
						);
					})
					// console.log(user.name)
				}
			</div>
		</div>
	);
}

export default App;
