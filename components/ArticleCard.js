import Image from 'next/image';

import styled from 'styled-components';
import { device } from '~/config/utils';
import CtaButton from './CtaButton';

import Audio from '~/assets/icons/audio.svg';
import Time from '~/assets/icons/time.svg';
import ArticleIcon from '~/assets/icons/article.svg';

const Container = styled.div`
	margin-bottom: 15%;

	&:hover {
		.articleImage {
			transform: scale(1.2);
		}

		.articleButton {
			background-color: #018065;
			color: white;

			svg {
				transform: rotate(45deg);
				transition: all 0.3s ease-in;
			}
		}
	}

	@media ${device.tablet} {
		margin-bottom: 10%;
	}
`;

const ImageContainer = styled.div`
	position: relative;
	padding-bottom: 10%;

	img {
		object-fit: cover;
		object-position: center center;
		transition: all 0.3s ease-in;
	}

	@media ${device.tablet} {
		padding-bottom: 40%;
	}
`;

const Content = styled.div`
	max-width: 100%;
	flex-basis: 100%;
	background-color: #f8f8f8;
	@media ${device.tablet} {
		position: absolute;
		max-width: 560px;
		bottom: -72px;
		[data-position='left'] & {
			right: 72px;
		}

		[data-position='right'] & {
			left: 72px;
		}
	}
`;

const ContentWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	padding: 20px;
	flex-direction: column-reverse;

	@media ${device.tablet} {
		flex-direction: row;
		justify-content: flex-start;
	}
`;

const Article = styled.div`
	max-width: 100%;
	flex-basis: 100%;
	@media ${device.tablet} {
		max-width: 78%;
		flex-basis: 78%;
	}
`;

const Icon = styled.div`
	max-width: 100%;
	flex-basis: 100%;
	display: grid;
	place-items: end;
	@media ${device.tablet} {
		max-width: 22%;
		flex-basis: 22%;
		margin-left: -20px;
		place-items: center;
	}
`;

const TimeContainer = styled.div`
	font-family: poppins, sans-serif;
	text-align: right;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	vertical-align: middle;
	margin-bottom: 20px;
	font-size: 12px;
	font-weight: 400;

	span {
		line-height: 1;
	}

	svg {
		margin-right: 5px;
	}
	@media ${device.tablet} {
	}
`;

const ArticleContent = styled.div`
	margin-bottom: 26px;
	font-family: poppins, sans-serif;
	@media ${device.tablet} {
	}
`;

const ArticleTitle = styled.div`
	line-height: 1.2;
	font-weight: 600;
	margin-bottom: 20px;
	font-size: 24px;

	@media ${device.tablet} {
	}
`;

const ArticleDesc = styled.div`
	font-size: 16px;
	font-family: poppins, sans-serif;
	line-height: 1.2;
	@media ${device.tablet} {
	}
`;

const ArticleCard = ({ data, position }) => {
	return (
		<Container data-position={position}>
			<ImageContainer>
				<Image
					className="articleImage"
					src={data.metaData.articleImage}
					alt={data.metaData.title}
					layout="fill"
				/>
			</ImageContainer>

			<Content>
				<ContentWrapper>
					<Icon>
						<ArticleIcon />
					</Icon>
					<Article>
						<TimeContainer>
							<Time /> <span>{data.metaData.time} minutes</span>
						</TimeContainer>
						<ArticleContent>
							<ArticleTitle>{data.metaData.title}</ArticleTitle>
							<ArticleDesc>{data.metaData.hubDesc}</ArticleDesc>
						</ArticleContent>
					</Article>
				</ContentWrapper>

				<CtaButton
					text={
						data.metaData.contentType === 'audio' ? 'Listen Now' : 'Read Now'
					}
					external={false}
					link={data.id}
				/>
			</Content>
		</Container>
	);
};

export default ArticleCard;
