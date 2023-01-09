import { useEffect, useRef } from 'react';

import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { device } from '~/config/utils';

import HomeIcon from '~/assets/shareSide/home.svg';

import Fb from '~/assets/shareSide/fb.svg';
import Li from '~/assets/shareSide/li.svg';
import Tw from '~/assets/shareSide/tw.svg';
import Mail from '~/assets/shareSide/mail.svg';
import DownArrow from '~/assets/downArrow.svg';

import Link from 'next/link';

const Container = styled.div`
	text-align: center;
	margin: 50px 0;
	@media ${device.tablet} {
	}

	@media (min-width: 1070px) {
	}
`;

const Wrapper = styled.div`
	justify-content: center;
	align-items: center;
	padding: 25px 0;
	@media ${device.tablet} {
	}

	@media (min-width: 1070px) {
	}
`;

const SocialContainer = styled.div`
	display: inline-flex;

	@media ${device.tablet} {
	}

	@media (min-width: 1070px) {
		position: sticky;
		top: 5%;
		right: 100%;
		display: inline-flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 10px 15px;
	}
`;

const Home = styled.div`
	position: relative;
	margin-right: 25px;

	&:after {
		content: '';
		display: block;
		position: absolute;
		right: -15px;
		width: 2px;
		height: 60%;
		background-color: #21bf61;
		top: 50%;
		transform: translateY(-50%);
	}

	@media (min-width: 1070px) {
		margin-right: 0;
		margin-bottom: 20px;

		&:after {
			content: '';
			display: block;
			position: absolute;
			bottom: -10px;
			width: 100%;
			height: 2px;
			right: initial;
			top: initial;
			background-color: #21bf61;
			transform: translateY(-50%);
		}
	}

	@media ${device.tablet} {
	}

	&:hover {
		path {
			fill: #21bf61;
			stroke: #21bf61;
		}
		g {
			stroke: #21bf61;
		}

		#twitter-icon {
			path {
				fill: none !important;
			}
		}
	}
`;

const Icons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	@media ${device.tablet} {
	}
	@media (min-width: 1070px) {
		flex-direction: column;
	}
`;

const Icon = styled.a`
	margin-right: 10px;

	@media ${device.tablet} {
	}

	@media (min-width: 1070px) {
		margin-right: 0;
	}

	&:hover {
		path {
			fill: #21bf61;
			stroke: #21bf61;
		}
		g {
			stroke: #21bf61;
		}
	}
`;

const ButtonContainer = styled.div`
	height: 72px;
	width: 72px;
	border-radius: 100%;
	box-shadow: 1px 0px 11px 0px rgb(0 0 0 / 70%);
	display: grid;
	place-items: center;
	cursor: pointer;
	margin: 50px auto;
	svg {
		transform: rotate(-90deg);
	}
	@media (min-width: 1070px) {
		position: fixed;
		background: white;
		right: 20px;
		bottom: 20px;
		margin: 0;
	}

	@media ${device.tablet} {
	}
`;

const data = [
	{
		link: '',
		comp: <Fb />,
	},
	{
		link: '',
		comp: <Li />,
	},
	{
		link: '',
		comp: <Tw />,
	},
	{
		link: '',
		comp: <Mail />,
	},
];

const SocialScroll = () => {
	const socialRef = useRef();
	const scrollRef = useRef();

	useEffect(() => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: document.querySelector('main'),
				pin: false,
				start: () => '20% 40%',
				end: () => 'bottom',
				markers: false,
				scrub: 2,
			},
		});

		tl.to(scrollRef.current, { backgroundColor: '#FBE74D' }, 's');
	}, []);
	return (
		<Container>
			<Wrapper>
				<ButtonContainer
					ref={scrollRef}
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				>
					<DownArrow />
				</ButtonContainer>
			</Wrapper>
		</Container>
	);
};

export default SocialScroll;
