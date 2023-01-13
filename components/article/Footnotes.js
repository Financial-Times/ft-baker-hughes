import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div`
	@media ${device.tablet} {
	}
`;

const Wrapper = styled.div`
	max-width: 883px;
	padding: 0 10px;
	margin: 0 auto;
	@media ${device.tablet} {
	}
`;

const Content = styled.div`
	line-height: 1.1;
	p {
		font-size: 11px;
		a {
			color: #018065;
		}
	}
	@media ${device.tablet} {
	}
`;

const Footnotes = ({ data }) => {
	return (
		<Container>
			<Wrapper>
				<Content
					className={data.hasDropCap ? 'dropCap' : ' '}
					dangerouslySetInnerHTML={{ __html: data.content }}
				/>
			</Wrapper>
		</Container>
	);
};

export default Footnotes;
