import styled from 'styled-components';
import { device } from '~/config/utils';
import QuoteMark from '~/assets/quote.svg';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
	margin-bottom: 30px;
	background-color: #f1eeea;
	margin: 140px auto 40px auto;

	@media ${device.laptop} {
		margin: 140px auto 40px auto;
	}
`;

const Wrapper = styled.div`
	max-width: 1067px;
	display: flex;
	flex-direction: column;
	position: relative;
	font-family: henderson-sans-basic, sans-serif;
	padding: 50px 10px;
	margin: 0 auto;
	@media ${device.tablet} {
	}

	svg {
		position: absolute;
		top: 0;
		right: 50%;
		max-height: 140px;
		transform: translate(50%, -60%);
	}
`;

const QuoteContent = styled.div`
	line-height: 1.2;
	font-weight: 600;
	position: relative;
	letter-spacing: -1px;
	margin-bottom: 30px;
	font-size: 42px;
	transform: translateY(50px);
	opacity: 0;
	.two {
		padding-left: 20px;
		color: #367f32;
	}

	@media ${device.tablet} {
		font-size: 52px;
	}
`;

const AuthorContainer = styled.div`
	position: relative;
	display: inline-block;
	line-height: 1;
	text-align: right;
	padding: 10px 0;

	span {
		display: inline-block;
		position: relative;
		padding-right: 10px;
		padding-bottom: 10px;

		&:before {
			content: '';
			display: block;
			position: absolute;
			background-color: #21bf61;
			top: 0;
			right: 0;
			width: 2px;
			height: 100%;
		}

		&:after {
			content: '';
			display: block;
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 2px;
			background-color: #21bf61;
		}
	}

	@media ${device.tablet} {
	}

	svg {
		position: absolute;
		top: 50%;
		right: 50%;
		transform: translate(50%, -50%);
		z-index: -1;
	}
`;

const AuthorName = styled.div`
	font-weight: 600;
	font-size: 25px;
	margin-bottom: 10px;
	line-height: 1.2;

	@media ${device.tablet} {
	}
`;

const AuthorPosition = styled.div`
	color: #2b2b2b;
	line-height: 1.2;
	@media ${device.tablet} {
		font-size: 20px;
	}
`;

const Quote = ({ data }) => {
	const containerRef = useRef('');

	useEffect(() => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: containerRef.current,
				pin: false,
				start: () => 'top 50%',
				end: () => '80% bottom',
				markers: false,
				scrub: 1,
			},
		});

		tl.to([...containerRef.current.querySelectorAll('.articleQuote')], {
			ease: 'power1.in',
			autoAlpha: 1,
			y: 0,
		});
	}, []);

	return (
		<Container ref={containerRef}>
			<Wrapper>
				<QuoteMark />
				<QuoteContent className="articleQuote">
					<span className="one">{data.quoteOne}</span>
					<span className="two">{data.quoteTwo}</span>
				</QuoteContent>
				<AuthorContainer>
					<span>
						<AuthorName>{data.author}</AuthorName>
						<AuthorPosition>{data.position}</AuthorPosition>
						<AuthorPosition>{data.job}</AuthorPosition>
					</span>
				</AuthorContainer>
			</Wrapper>
		</Container>
	);
};

export default Quote;
