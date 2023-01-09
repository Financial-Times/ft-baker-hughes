import styled from 'styled-components';
import { device } from '~/config/utils';
import Li from '~/assets/fugFooter/li.svg';
import Fb from '~/assets/fugFooter/fb.svg';
import Tw from '~/assets/fugFooter/tw.svg';
import Yt from '~/assets/fugFooter/yt.svg';

const Container = styled.div`
	padding: 64px 10px;
	background-color: #05322b;
	@media ${device.laptop} {
		padding: 86px 10px;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1460px;
	margin: 0 auto;
	justify-content: center;
	align-items: center;

	@media ${device.laptop} {
	}
`;

const Icons = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 10px;
	max-width: 300px;
	@media ${device.laptop} {
		grid-gap: 20px;
	}
`;

const Icon = styled.a``;

const Content = styled.div`
	font-family: poppins, sans-serif;
	text-align: center;
	@media ${device.tablet} {
	}
`;

const Title = styled.div`
	font-size: 56px;
	font-weight: 600;
	line-height: 1.2;
	margin-bottom: 20px;
	color: white;

	@media ${device.tablet} {
	}
`;

const Subtitle = styled.div`
	font-size: 20px;
	font-weight: 400;
	line-height: 1.2;
	margin-bottom: 50px;
	color: white;

	@media ${device.tablet} {
	}
`;

const data = [
	{
		link: 'https://www.linkedin.com/company/bakerhughes/',
		comp: <Li />,
	},
	{
		link: 'https://twitter.com/bakerhughesco',
		comp: <Tw />,
	},
	{
		link: 'https://www.youtube.com/channel/UCxhgTNB0eD0xUeeJnP9Ow4g',
		comp: <Yt />,
	},
	{
		link: 'https://www.pinterest.com/bakerhughes/',
		comp: <Fb />,
	},
];

const ClientFooter = () => {
	return (
		<Container>
			<Wrapper>
				<Content>
					<Title>Follow Us</Title>
					<Subtitle>
						Stay up-to-date with the latest perspectives from Baker Hughes
					</Subtitle>
				</Content>
				<Icons>
					{data.map((item, i) => {
						return (
							<Icon key={i} href={item.link} target="_blank">
								{item.comp}
							</Icon>
						);
					})}
				</Icons>
			</Wrapper>
		</Container>
	);
};

export default ClientFooter;
