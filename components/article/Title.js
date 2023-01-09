import styled from 'styled-components';
import { device } from '~/config/utils';
import TimeEl from '~/assets/time.svg';

const Container = styled.div`
	padding-top: 44px;
	font-family: poppins, sans-serif;

	margin-bottom: 50px;
	padding-left: 10px;
	padding-right: 10px;

	@media ${device.tablet} {
		padding-top: 0;
	}
`;

const Wrapper = styled.div`
	max-width: 863px;
	margin: 0 auto;
	line-height: 1.2;
	padding: 0 10px;
	text-align: center;
	@media ${device.tablet} {
		padding: 0;
	}
`;

const TitleEl = styled.div`
	font-weight: 600;
	font-size: 28px;
	margin-bottom: 10px;
	@media ${device.tablet} {
		font-size: 48px;
	}
`;

const SubTitle = styled.div`
	font-size: 16px;
	line-height: 1.4;
	color: #949494;
	@media ${device.tablet} {
		font-size: 22px;
	}
`;

const Title = ({ data }) => {
	return (
		<Container>
			<Wrapper>
				<TitleEl>{data.title}</TitleEl>
				<SubTitle>{data.desc}</SubTitle>
			</Wrapper>
		</Container>
	);
};

export default Title;
