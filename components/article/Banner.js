import Image from 'next/image';
import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div`
	&:hover {
		.desc {
			&:after {
				width: 100%;
				transition: width 1s cubic-bezier(0.075, 0.82, 0.165, 1);
			}
		}
	}

	@media ${device.tablet} {
	}
`;

const Wrapper = styled.div`
	position: relative;
	text-align: center;
	padding: 100px 10px;
	position: relative;
	transition: width 1s cubic-bezier(0.075, 0.82, 0.165, 1);
	line-height: 1.2;

	&:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
		z-index: 1;
	}

	@media ${device.tablet} {
	}

	img {
		object-fit: cover;
		object-position: center center;
	}
`;

const Title = styled.div`
	font-weight: 600;
	font-size: 35px;
	margin-bottom: 10px;
	@media ${device.tablet} {
	}
`;

const Desc = styled.div`
	font-weight: 400;
	font-size: 25px;
	position: relative;
	display: inline-block;
	max-width: 320px;

	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0%;
		height: 2px;
		background-color: #02bc94;
		z-index: 1;
	}

	@media ${device.tablet} {
		max-width: initial;
	}

	a {
		text-decoration: none;
		color: #02bc94;
	}
`;

const Content = styled.div`
	color: white;
	position: relative;
	z-index: 2;
	@media ${device.tablet} {
	}
`;

const Banner = () => {
	return (
		<Container>
			<Wrapper>
				<Image
					alt="bannerImage"
					layout="fill"
					src={'https://ft.com/partnercontent/baker-hughes/banner.jpg'}
				/>
				<Content>
					<Title>Baker Hughes Energy Transition Pulse 2023</Title>
					<Desc className="desc">
						<a
							href="https://energytransitionpulse.bakerhughes.com?sp=true"
							target={'_blank'}
							rel="noreferrer"
						>
							Discover the full report here{' '}
						</a>
					</Desc>
				</Content>
			</Wrapper>
		</Container>
	);
};

export default Banner;
