import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div`
	position: relative;

	@media ${device.tablet} {
	}
`;

const TitleContainer = styled.div`
	position: relative;
	z-index: 2;
	min-height: calc(85vh - 115px);

	@media ${device.tablet} {
		min-height: calc(70vh - 115px);
		font-size: 85px;
	}
`;

const TitleWrapper = styled.div`
	max-width: 1508px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 30px;

	@media ${device.tablet} {
		margin-top: 5%;
	}
`;

const Title = styled.h1`
	transform: translateY(50px);
	opacity: 0;
`;

const Description = styled.div`
	font-family: 'Work Sans', sans-serif;
	line-height: 1.5;
	max-width: 1000px;
	position: relative;
	padding-left: 40px;
	font-size: 20px;
	font-weight: 200;
	margin-bottom: 50px;
	opacity: 0;
	transform: translateX(50px);

	@media ${device.tablet} {
		font-size: 28px;
	}
`;

const Line = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 10px;
	height: 0;
	background-color: #c75523;

	@media ${device.tablet} {
		width: 16px;
	}
`;

const ExploreBtn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #c75523;
	text-transform: uppercase;

	@media ${device.tablet} {
	}
`;

const BtnText = styled.div`
	font-family: 'Playfair Display', serif;
	font-weight: 700;

	@media ${device.tablet} {
		font-size: 23px;
	}
`;

const BtnContainer = styled.div`
	svg {
		max-height: 90px;
	}

	@media ${device.tablet} {
	}
`;

const HeroBanner = ({ title }) => {
	const heroRef = useRef('');

	useEffect(() => {
		const title = heroRef.current.querySelector('.title');
		const desc = heroRef.current.querySelector('.desc');
		const line = heroRef.current.querySelector('.line');

		const tl = gsap.timeline({ delay: 1 });

		tl.to(title, { y: 0, autoAlpha: 1 })
			.to(desc, { x: 0, autoAlpha: 1 })
			.to(line, { height: '100%' }, '-=0.1');
	}, []);

	return (
		<Container className="heroBannerContainer" ref={heroRef}>
			<TitleContainer>
				<TitleWrapper>
					<Title className="title">Waves of change</Title>
					<Description className="desc">
						<Line className="line" />
						With high-speeds and powerful connectivity, 5G mmWave is unleashing
						new possibilities for mobile communications. From Finland to
						Vietnam, discover how this wireless technology is already
						transforming societies around the world.
					</Description>
				</TitleWrapper>
				<ExploreBtn>
					<BtnText>Explore</BtnText>
					<BtnContainer>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="64.494"
							height="112.308"
							viewBox="0 0 64.494 112.308"
						>
							<g
								id="Group_6"
								data-name="Group 6"
								transform="translate(1410.325 -774.161) rotate(90)"
							>
								<g
									id="Group_1"
									data-name="Group 1"
									transform="translate(774.17 1345.852)"
								>
									<line
										id="Line_9"
										data-name="Line 9"
										x2="111.705"
										y2="0.515"
										transform="translate(0 31.699)"
										fill="none"
										stroke="#c75523"
										strokeWidth="4"
									/>
									<path
										id="Path_6"
										data-name="Path 6"
										d="M11721.417,10714.9s-12.184-3.938-16.032-7.076-5.064-4.237-7.833-8.933a29.366,29.366,0,0,1-3.323-10.617l-.055-5.373"
										transform="translate(-11611.065 -10682.904)"
										fill="none"
										stroke="#c75523"
										strokeWidth="4"
									/>
									<path
										id="Path_7"
										data-name="Path 7"
										d="M0,31.713.058,26.39A28.125,28.125,0,0,1,3.514,15.865c2.875-4.653,4.137-5.744,8.14-8.851,2.15-1.67,6.8-3.57,10.763-5.014,2.1-.764,4.038-1.405,5.13-1.757l.584-.186L28.317,0"
										transform="translate(82.838 32.708) rotate(-1)"
										fill="none"
										stroke="#c75523"
										strokeWidth="4"
									/>
								</g>
							</g>
						</svg>
					</BtnContainer>
				</ExploreBtn>
			</TitleContainer>
		</Container>
	);
};

export default HeroBanner;
