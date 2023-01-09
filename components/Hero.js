import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { device } from '~/config/utils';
import ScrollPrompt from '~/assets/scrollPrompt.svg';

const Container = styled.div`
	position: relative;
	min-height: 90vh;
	display: grid;
	place-items: center;

	&:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.1);
		z-index: 1;
	}

	img {
		transform: scale(1.2);
		object-fit: cover;
		object-position: bottom;
	}

	@media ${device.tablet} {
	}
`;

const Wrapper = styled.div`
	max-width: 1400px;
	margin: 0 auto;

	@media ${device.tablet} {
	}
`;

const Content = styled.div`
	font-family: poppins, sans-serif;
	max-width: 1128px;
	padding: 0 10px;
	text-align: center;
	color: white;
	position: relative;
	z-index: 2;
	@media ${device.tablet} {
	}
`;

const ArrowContainer = styled.div`
	height: 70px;
	width: 70px;
	background-color: #02bc94;
	border-radius: 100%;
	position: relative;
	margin: 0 auto;
	display: grid;
	place-items: center;

	svg {
		transform: rotate(90deg);
	}
	@media ${device.tablet} {
	}
`;

const Title = styled.h1`
	line-height: 1.2;
	@media ${device.tablet} {
		font-size: 64px;
	}
`;

const Subtitle = styled.div`
	line-height: 1.3;
	font-weight: 500;
	max-width: 928px;
	margin: 0 auto 40px auto;

	@media ${device.tablet} {
		font-size: 24px;
	}
`;

const Hero = ({ data }) => {
	const heroRef = useRef('');

	useEffect(() => {
		const image = heroRef.current.querySelector('.image');
		const title = heroRef.current.querySelector('.title');
		const subtitle = heroRef.current.querySelector('.subtitle');

		const tl = gsap.timeline({ delay: 0 });

		tl.to(image, 1.3, { scaleX: 1, scaleY: 1 })
			.to(title, 1, { ease: 'power1.inOut', y: 0, autoAlpha: 1 })
			.to(subtitle, 1, { ease: 'power3.inOut', y: 0, autoAlpha: 1 });
	}, []);

	return (
		<Container ref={heroRef}>
			<Image
				src={data.articleImage}
				alt={data.title}
				layout="fill"
				className="image"
			/>

			<Wrapper>
				<Content>
					<Title className="title">{data.title}</Title>
					<Subtitle className="subtitle">{data.desc}</Subtitle>
					<ArrowContainer>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="28.68"
							viewBox="0 0 16 28.68"
						>
							<path
								id="Path_541"
								data-name="Path 541"
								d="M2.326,0,0,2.323,12.04,14.332.017,26.357,2.342,28.68,15.52,15.5a1.646,1.646,0,0,0,0-2.323Z"
								fill="#fff"
							/>
						</svg>
					</ArrowContainer>
				</Content>
			</Wrapper>
		</Container>
	);
};

export default Hero;
