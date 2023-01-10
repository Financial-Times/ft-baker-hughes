import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	@media ${device.tablet} {
		padding: 40px 0;
	}
`;

const Wrapper = styled.div`
	@media ${device.tablet} {
	}
`;

const Title = styled.div`
	font-family: poppins, sans-serif;
	font-weight: 600;
	color: #028374;
	line-height: 1.2;
	max-width: 883px;
	padding: 0 10px;
	margin: 0 auto;
	font-size: 20px;
	margin-bottom: 20px;

	@media ${device.tablet} {
		font-size: 30px;
	}
`;

const Subtitle = styled.div`
	max-width: 883px;
	padding: 0 10px;
	margin: 0 auto;
	font-weight: 400;
	color: grey;
	line-height: 1.2;
	font-size: 18px;
	margin-bottom: 30px;
	@media ${device.tablet} {
		font-size: 24px;
	}
`;

const ChartContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-template-rows: repeat(3, 350px);
	gap: 20px;
	padding: 0 20px;
	max-width: 1000px;
	margin: 0 auto;

	@media ${device.tablet} {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 300px);
	}

	@media ${device.laptop} {
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(1, 300px);
	}
`;

const Chart = styled.div`
	border-radius: 100%;
	position: relative;
	@media ${device.tablet} {
		max-width: 300px;
	}
`;

const Content = styled.div`
	position: absolute;
	text-align: center;
	top: 50%;
	right: 50%;
	transform: translate(50%, -50%);
	@media ${device.tablet} {
	}
`;

const Percentage = styled.div`
	font-weight: 600;
	text-align: center;

	display: inline-block;

	span {
		font-size: 25px;
		background-color: white;
		line-height: 1;
		padding: 20px 10px;
		display: inline-grid;
		place-items: center;
		border-radius: 100%;
		min-width: 74px;
	}

	@media ${device.tablet} {
	}
`;

const Text = styled.div`
	color: white;
	line-height: 1.2;
	text-align: center;
	padding: 10px;
	font-size: 21px;
	@media ${device.tablet} {
		min-height: 140px;
		font-size: 18px;
	}
`;

const ChartOne = () => {
	const data = [
		{
			no: 41,
			text: 'Global economic uncertainty / inflation',
			color: '#05322b',
		},
		{
			no: 41,
			text: 'Technology risk (e.g. suitability unclear, technology still at pilot stage',
			color: '#028374',
		},
		{
			no: 40,
			text: 'Availability of incentives/financing to justify investing',
			color: '#07bc94',
		},
	];

	return (
		<Container>
			<Wrapper>
				<Title>
					Economic uncertainty, technology risk and financing are the top three
					barriers to investing in energy transition technology
				</Title>
				<Subtitle>
					What are the three greatest barriers or challenges to your
					organisation investing in energy transition technologies?
				</Subtitle>
				<ChartContainer>
					{data.map((item, i) => {
						return (
							<Chart key={i} style={{ backgroundColor: `${item.color}` }}>
								<Content>
									<Percentage>
										<span> {item.no}%</span>
									</Percentage>
									<Text>{item.text}</Text>
								</Content>
							</Chart>
						);
					})}
				</ChartContainer>
			</Wrapper>
		</Container>
	);
};

export default ChartOne;
