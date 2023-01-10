import Link from 'next/link';
import styled from 'styled-components';
import { device } from '~/config/utils';
import HomeIcon from '~/assets/home.svg';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		transform: scale(0.8);
	}

	@media ${device.tablet} {
		margin-bottom: 50px;
	}
`;

const Wrapper = styled.div`
	cursor: pointer;
	transition: background-color 0.5s ease-in-out;

	@media ${device.tablet} {
	}

	&:hover {
		background-color: #0e4d36;
		transition: background-color 0.5s ease-in-out;
	}
`;

const ImageContainer = styled.div`
	display: grid;
	place-items: center;
	padding: 10px;
	color: #02bc94;
	font-size: 16px;
	text-decoration: underline;
	font-weight: 600;
	@media ${device.tablet} {
	}
`;

const Home = () => {
	return (
		<Container>
			<Link href="/">
				<Wrapper>
					<ImageContainer>Home</ImageContainer>
				</Wrapper>
			</Link>
		</Container>
	);
};

export default Home;
