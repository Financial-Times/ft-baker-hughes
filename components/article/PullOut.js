import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div`
	max-width: 883px;
	padding: 0 10px;
	margin: 0 auto;

	@media ${device.tablet} {
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	line-height: 1.2;
	gap: 20px;
	justify-content: center;
	align-items: flex-start;

	@media ${device.tablet} {
	}
`;

const Item = styled.div`
	display: flex;
	flex-direction: column;
	background: rgb(251, 231, 77);
	background: linear-gradient(
		305deg,
		rgba(251, 231, 77, 1) 0%,
		rgba(54, 127, 50, 1) 49%,
		rgba(54, 127, 50, 1) 100%
	);
	padding: 20px 10px;
	max-width: 100%;
	flex-basis: 100%;
	position: relative;
	&:after {
		content: '';
		position: absolute;
		display: block;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.2);
	}

	@media ${device.tablet} {
		max-width: 40%;
		flex-basis: 40%;
	}
`;

const Title = styled.div`
	color: white;
	font-family: henderson-sans-basic, sans-serif;
	font-weight: 600;
	text-transform: uppercase;
	margin-bottom: 15px;
	line-height: 1.2;
	font-size: 20px;
	text-align: center;

	span {
		position: relative;
		display: inline-block;
		&:after {
			content: '';
			display: block;
			position: absolute;
			bottom: -5px;
			height: 2px;
			width: 100%;
			background-color: white;
		}
	}

	@media ${device.tablet} {
	}
`;

const Content = styled.div`
	font-family: henderson-sans-basic, sans-serif;
	color: white;
	line-height: 1.3;
	text-align: center;
	@media ${device.tablet} {
		min-height: 100px;
	}
`;

const ContentWrapper = styled.div`
	position: relative;
	z-index: 2;
	@media ${device.tablet} {
	}
`;

const PullOut = ({ data }) => {
	return (
		<Container>
			<Wrapper>
				{data.map((item, i) => {
					return (
						<Item key={i}>
							<ContentWrapper>
								<Title>
									<span>{item.no}%</span>
								</Title>

								<Content>{item.string}</Content>
							</ContentWrapper>
						</Item>
					);
				})}
			</Wrapper>
		</Container>
	);
};

export default PullOut;
