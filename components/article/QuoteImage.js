import styled from 'styled-components';
import { device } from '~/config/utils';
import QuoteMark from '~/assets/quote.svg';

const Container = styled.div`
	max-width: 1067px;
	margin: 0 auto;
	text-align: center;
	margin-bottom: 60px;

	@media ${device.tablet} {
		margin-bottom: 100px;
	}
`;

const Wrapper = styled.div`
	@media ${device.tablet} {
	}

	svg {
		max-height: 140px;
		transform: scale(0.7);
	}
`;

const QuoteContent = styled.div`
	font-family: 'Work Sans', sans-serif;
	font-style: italic;
	line-height: 1.4;
	color: #c75523;
	position: relative;
	padding: 0 15px;
	padding-bottom: 30px;
	margin-bottom: 30px;

	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		display: block;
		right: 50%;
		width: 100px;
		height: 3px;
		background-color: #c75523;
		transform: translate(50%, 50%);
	}
	@media ${device.tablet} {
		font-size: 30px;
		padding-bottom: 40px;
		margin-bottom: 40px;
	}
`;

const AuthorContainer = styled.div`
	display: inline-block;
	text-align: center;
	@media ${device.tablet} {
		text-align: left;
	}
`;

const AuthorName = styled.div`
	font-family: 'Playfair Display', serif;
	font-weight: 600;
	font-size: 17px;
	line-height: 1;
	margin-bottom: 10px;
	@media ${device.tablet} {
		font-size: 25px;
	}
`;

const AuthorPosition = styled.div`
	font-family: 'Work Sans', sans-serif;
	color: #2b2b2b;
	line-height: 1;
	@media ${device.tablet} {
		font-size: 20px;
	}
`;

const AuthorWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column-reverse;

	@media ${device.tablet} {
		flex-direction: row-reverse;
	}
`;

const AuthorImageContainer = styled.div`
	position: relative;
	margin-bottom: 10px;
	@media ${device.tablet} {
		margin-bottom: 0;
	}
	svg {
		position: absolute;
		top: 50%;
		right: 60%;
		transform: translate(50%, -50%) scale(1.6);
		z-index: -1;
	}
`;

const AuthorImage = styled.img`
	max-height: 150px;
	border-radius: 100%;
	@media ${device.tablet} {
	}
`;

const QuoteImage = ({ data }) => {
	return (
		<Container>
			<Wrapper>
				<QuoteMark />
				<QuoteContent>{data.quote}</QuoteContent>
				{data.author && (
					<AuthorWrapper>
						<AuthorContainer>
							<AuthorName>{data.author.name}</AuthorName>
							<AuthorPosition>
								{data.author.position}, {data.author.company}
							</AuthorPosition>
						</AuthorContainer>
						<AuthorImageContainer>
							<AuthorImage src={data.author.image} />
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 500 500"
								width="100%"
								id="blobSvgAuthor"
								style={{ opacity: 1 }}
								filter="blur(0px)"
							>
								<path id="blob" fill="url(#gradient)" style={{ opacity: 1 }}>
									<animate
										attributeName="d"
										dur="16800ms"
										repeatCount="indefinite"
										values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"
									></animate>
								</path>
								<defs>
									<linearGradient
										id="gradient"
										x1="0%"
										y1="0%"
										x2="0%"
										y2="100%"
									>
										<stop
											offset="0%"
											style={{ stopColor: 'rgb(255, 245, 217)' }}
										></stop>
										<stop
											offset="100%"
											style={{ stopColor: 'rgb(255, 245, 217)' }}
										></stop>
									</linearGradient>
								</defs>
							</svg>
						</AuthorImageContainer>
					</AuthorWrapper>
				)}
			</Wrapper>
		</Container>
	);
};

export default QuoteImage;
