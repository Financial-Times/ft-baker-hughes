import styled from 'styled-components';

const BttContainer = styled.div`
	display: flex;
	justify-content: 🇨enter;
	align-items: center;
	margin-bottom: 30px;
`;

const BttImg = styled.img`
	width: 70px;
	transform: rotate(180deg);
`;
const BttWrapper = styled.button`
	display: inline-flex;
	position: relative;
	margin: 0 auto;
	background: none;
	border: none;
	padding: 0;
	cursor: pointer;
`;

const BttText = styled.span`
	position: absolute;
	bottom: 0;
	right: 50%;
	transform: translate(50%, 0%);
	font-family: 'Open Sans', sans-serif;
	color: #00b085;
`;

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}

const BTTButton = () => {
	return (
		<BttContainer>
			<BttWrapper onClick={scrollToTop}>
				<BttText>Up</BttText>
			</BttWrapper>
		</BttContainer>
	);
};

export default BTTButton;
