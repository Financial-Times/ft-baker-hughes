import styled from 'styled-components';
import { device } from '~/config/utils';

const ContentWrapper = styled.div`
	max-width: 883px;
	padding: 0 10px;
	margin: 0 auto;
`;

const ContentText = styled.div`
	&.dropCap:first-letter {
		font-family: poppins, sans-serif;
		font-weight: 600;
		float: left;
		color: #02bc94;
		font-size: 100px;
		line-height: 0.5;
		padding: 15px 10px 20px 20px;
		background-color: transparent;
		margin-bottom: -10px;
		margin-left: -20px;
		@media ${device.tablet} {
			font-size: 80px;
			margin-bottom: -15px;
		}
	}

	ol {
		padding: 0;

		li::marker {
			color: transparent;
		}
	}
`;

const Content = ({ data, id }) => {
	return (
		<ContentWrapper data-pos={id}>
			<ContentText
				className={data.hasDropCap ? 'dropCap' : ' '}
				dangerouslySetInnerHTML={{ __html: data.content }}
			/>
		</ContentWrapper>
	);
};

export default Content;
