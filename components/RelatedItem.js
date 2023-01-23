import Image from 'next/image';
import styled from 'styled-components';
import { device } from '~/config/utils';
import CtaButton from './CtaButton';

const Container = styled.div`
	padding: 0 10px;
	&:hover {
		.articleImage {
			transform: scale(1.2);
		}
		.articleButton {
			background-color: rgba(5, 50, 43, 0.996);
			color: white;
		}
	}
	@media ${device.tablet} {
	}
`;

const Wrapper = styled.div`
	@media ${device.tablet} {
	}
`;

const ImageContainer = styled.div`
	position: relative;
	padding-bottom: 52%;

	img {
		object-fit: cover;
		object-position: center center;
		transition: all 0.3s ease-in;
	}
	@media ${device.tablet} {
	}
`;

const Content = styled.div`
	font-family: poppins, sans-serif;
	background-color: #f8f8f8;
	padding: 25px 40px;
	@media ${device.tablet} {
		padding: 40px;
	}
`;

const DetailContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	font-size: 10px;
	font-weight: 600;
	margin-bottom: 20px;
	@media ${device.tablet} {
	}
`;

const Topic = styled.div`
	background-color: #cdf9d3;
	border-radius: 15px;
	padding: 10px;
	color: #333333;
	margin-right: 20px;
	@media ${device.tablet} {
	}
`;

const ReadTime = styled.div`
	color: #197a56;
	@media ${device.tablet} {
	}
`;

const Title = styled.div`
	line-height: 1.3;
	font-weight: 700;
	min-height: 55px;
	display: grid;
	place-items: baseline;
	font-size: 24px;
	margin-bottom: 10px;

	@media ${device.tablet} {
	}
`;

const Subtitle = styled.div`
	line-height: 1.2;
	min-height: 90px;
	margin-bottom: 30px;

	@media ${device.tablet} {
		font-size: 16px;
	}
`;

const RelatedItem = ({ data }) => {
	return (
		<Container>
			<Wrapper>
				<ImageContainer>
					<Image
						className="articleImage"
						src={data.metaData.articleImage}
						alt={data.metaData.title}
						layout="fill"
					/>
				</ImageContainer>
				<Content>
					{/* <DetailContainer>
						<Topic>{data.metaData.contentTopic}</Topic>
						<ReadTime>{data.metaData.time} min read</ReadTime>
					</DetailContainer> */}
					<Title>{data.metaData.title}</Title>
					<Subtitle>{data.metaData.hubDesc}</Subtitle>
					<CtaButton text={data.metaData.hasVideo ? 'Watch now' : 'Read now'} external={false} link={data.id} />
				</Content>
			</Wrapper>
		</Container>
	);
};

export default RelatedItem;
