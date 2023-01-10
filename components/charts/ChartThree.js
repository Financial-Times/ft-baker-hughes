import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div`
	max-width: 860px;
	margin: 0 auto 50px auto;
	padding: 40px 0;
	@media ${device.tablet} {
	}
`;

const Wrapper = styled.div`
	@media ${device.tablet} {
	}
`;

const ChartContainer = styled.div`
	position: relative;
	@media ${device.tablet} {
	}
`;

const ChartWrapper = styled.div`
	overflow: hidden;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	position: relative;
	width: 100%;
	min-height: 200px;
	margin-bottom: 15px;
	@media ${device.tablet} {
	}
`;

const CircleOne = styled.div`
	background-color: #05322b;
	min-height: 200px;
	width: 57%;
	border-radius: 100%;
	position: absolute;
	bottom: -100px;
	left: 0;
	@media ${device.tablet} {
		min-height: 400px;
		bottom: -200px;
	}
`;

const CircleTwo = styled.div`
	background-color: #028374;
	width: 30%;
	border-radius: 100%;
	min-height: 100px;
	width: 27%;
	border-radius: 100%;
	position: absolute;
	bottom: -50px;
	right: 18%;
	@media ${device.tablet} {
		min-height: 200px;
		bottom: -100px;
	}
`;

const CircleThree = styled.div`
	background-color: #d0d0d0;
	min-height: 75px;
	width: 23%;
	border-radius: 100%;
	position: absolute;
	bottom: -37.5px;
	right: 0;
	@media ${device.tablet} {
		min-height: 150px;
		bottom: -75px;
	}
`;

const Content = styled.div`
	.percentage {
		font-weight: 600;
		font-size: 20px;
		@media ${device.tablet} {
			font-size: 25px;
		}
	}

	.choice {
		font-size: 14px;
		font-weight: 500;
		@media ${device.tablet} {
			font-size: 18px;
		}
	}

	@media ${device.tablet} {
	}
`;

const TextOne = styled.div`
	position: absolute;
	left: calc(57% / 2);
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	transform: translateX(-50%);

	.percentage {
		color: #05322b;
	}

	@media ${device.tablet} {
	}
`;

const TextTwo = styled.div`
	position: absolute;
	left: calc(61%);
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;

	.percentage {
		color: #028374;
	}

	@media ${device.tablet} {
		left: calc(64%);
	}
`;

const TextThree = styled.div`
	position: absolute;
	left: calc(83%);
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;

	.percentage {
		color: #d0d0d0;
	}
	@media ${device.tablet} {
		left: calc(86%);
	}
`;

const ChartThree = () => {
	return (
		<Container>
			<Wrapper>
				<ChartContainer>
					<ChartWrapper>
						<CircleOne />
						<CircleTwo />
						<CircleThree />
					</ChartWrapper>
					<Content>
						<TextOne>
							<span className="percentage">57%</span>
							<span className="choice">Agree</span>
						</TextOne>
						<TextTwo>
							<span className="percentage">30%</span>
							<span className="choice">Disagree</span>
						</TextTwo>
						<TextThree>
							<span className="percentage">13%</span>
							<span className="choice">Neutral</span>
						</TextThree>
					</Content>
				</ChartContainer>
			</Wrapper>
		</Container>
	);
};

export default ChartThree;
