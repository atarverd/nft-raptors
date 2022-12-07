import {
	Box,
	Text,
	Menu,
	Flex,
	Image,
	Badge,
	Button,
	MenuList,
	MenuItem,
	Collapse,
	MenuButton,
} from '@chakra-ui/react';
import NotFound from '../notFound';
import UserTabs from './userTabs';
import { useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useParams, useNavigate } from 'react-router';
import useDocRequest from '../../hooks/useDocRequest';
import { TUserData } from '../../types/user.types';


const UserHeader = () => {

	const [show, setShow] = useState(false);

	const [userData, setUserData] = useState<TUserData>();

	const { id } = useParams();
	const navigate = useNavigate();
	const handleToggle = () => setShow(!show);

	const notFound = useDocRequest('users', id as string, setUserData);

	const navigateSettings = () => {
		navigate('/settings');
	};

	const navigateCreateCollection = () => {
		navigate('/create-collection');
	};

	if (notFound) return <NotFound />;

	return (
		<Box>

			<Box h='300px' bgImage={`url(${userData?.userBackground})`} bgPosition='center'
				bgRepeat='no-repeat' objectFit='fill' pt='150px' backgroundSize='cover'>
				<Box
					ml='40px'
					border='4px'
					borderColor='#EDF2F7'
					borderRadius='10px'
					width='max-content'
				>
					<Image
						src={userData?.userLogo}
						w='200px'
						h='200px'
						borderRadius='5px'
						zIndex='1'
					/>
				</Box>
			</Box>

			<Box ml='40px' my='20px' mt='50px'>
				<Flex justifyContent='space-between' alignItems='center'>
					<Text fontSize='4xl' mt='30px'>
						{userData?.username}
					</Text>

					<Box mt='35px' mr='40px'>
						<Menu>
							<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
								Actions
							</MenuButton>
							<MenuList>
								<MenuItem onClick={navigateSettings}>Settings</MenuItem>
								<MenuItem onClick={navigateCreateCollection}>Create a Collection</MenuItem>
							</MenuList>
						</Menu>
					</Box>

				</Flex>

				<Box mt='20px'>
					<Badge
						fontSize='1xl'
						variant='solid'
						colorScheme={userData?.balance ? 'green' : 'red'}>
						Balance: {userData?.balance}
					</Badge>
				</Box>

				<Box maxW='30%' mt='10px'>
					<Collapse startingHeight={20} in={show}>
						{userData?.bio}
					</Collapse>
					<Button size='xs' onClick={handleToggle} mt='1rem'>
						Show {show ? 'Less' : 'More'}
					</Button>
				</Box>
			</Box>
			<UserTabs />

		</Box>

	);
};

export default UserHeader;
