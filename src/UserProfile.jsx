import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function UserProfile(props) {
	return (
		<>
			<div className='p-4'>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant='top' src={props.imgUrl} />
					<Card.Body className='bg-tertiary'>
						<Card.Title className='playFair'>{props.name}</Card.Title>
						<Card.Text className='roboto'>{props.email}</Card.Text>
						{/* <Button variant="primary">Go somewhere</Button> */}
					</Card.Body>
				</Card>
			</div>
		</>
	);
}

export default UserProfile;
