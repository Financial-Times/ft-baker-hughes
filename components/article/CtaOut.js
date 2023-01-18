import Image from 'next/image';
import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div`
	background-color: rgb(5, 50, 43);
	border-style: solid;
	border-color: rgb(0, 0, 0);
	border-width: 0px;
	margin-bottom: 40px;
	padding: 20px 10px;
	@media ${device.tablet} {
	}
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: stretch;
	flex-direction: column;
	max-width: 883px;
	padding: 0 10px;
	margin: 50px auto;
	@media ${device.tablet} {
		flex-direction: row-reverse;
	}
`;

const Content = styled.div`
	max-width: 100%;
	flex-basis: 100%;
	padding: 40px 30px;
	background-color: white;

	@media ${device.tablet} {
		max-width: 50%;
		flex-basis: 50%;
	}
`;

const ImageContainer = styled.div`
	position: relative;
	padding-bottom: 60%;
	max-width: 100%;
	flex-basis: 100%;

	@media ${device.tablet} {
		max-width: 50%;
		flex-basis: 50%;
		padding-bottom: initial;
	}

	img {
		object-fit: cover;
		object-position: center center;
	}
`;

const Title = styled.div`
	overflow-wrap: break-word;
	hyphens: manual;
	white-space: pre-wrap;
	padding: 0px;
	cursor: text;
	position: relative;
	font-size: 20px;
	font-weight: 700;
	font-style: normal;
	line-height: 1.4em;
	letter-spacing: 0em;
	color: rgb(1, 48, 37);
	margin: 0px 0px 0.571429em;
	@media ${device.tablet} {
	}
`;

const Subtitle = styled.div`
	overflow-wrap: break-word;
	hyphens: manual;
	white-space: pre-wrap;
	padding: 0px;
	cursor: text;
	position: relative;
	margin: 0px 0px 1.5em;
	font-size: 16px;
	font-weight: 400;
	font-style: normal;
	line-height: 1.5em;
	letter-spacing: 0em;
	color: rgb(117, 117, 117);
	@media ${device.tablet} {
	}
`;

const Button = styled.button`
	white-space: pre-wrap;
	transition: all 0.3s ease 0s;
	position: relative;
	font-size: 14px;
	font-style: normal;
	line-height: 1em;
	letter-spacing: 0.05em;
	color: rgb(255, 255, 255);
	border-style: solid;
	border-color: rgb(167, 174, 187);
	border-width: 0px;
	background-color: rgb(2, 188, 148);
	box-shadow: rgb(0 0 0 / 30%) 0px 0px 0px;
	border-radius: 50px;
	margin-bottom: 0.55em;
	padding: 12px 20px;
	visibility: visible;
	display: inline-block;

	a {
		text-decoration: none;
		color: white;
	}

	@media ${device.tablet} {
	}
`;

const CtaOut = () => {
	return (
		<Container>
			<Wrapper>
				<Content>
					<Title>Energy Transition Pulse 2023</Title>
					<Subtitle>
						Read our report to find out how executives plan to balance energy
						security, sustainability and affordability.
					</Subtitle>
					<Button>
						<a
							href="https://energytransitionpulse.bakerhughes.com/report-download.html?sp=true"
							rel="noreferrer"
							target={'_blank'}
							className=""
						>
							DOWNLOAD REPORT &gt;
						</a>{' '}
					</Button>
				</Content>
				<ImageContainer>
					<Image
						src={'https://ft.com/partnercontent/baker-hughes/ctaImage.png'}
						alt="ctaImage"
						layout="fill"
					/>
				</ImageContainer>
			</Wrapper>
		</Container>
	);
};

export default CtaOut;
