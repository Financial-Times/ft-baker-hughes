import styled from 'styled-components';
import { device } from '~/config/utils';
import ButtonArrow from '~/assets/buttonArrow.svg';
import Link from 'next/link';

const Container = styled.div`
	display: inline-block;
	margin-bottom: -20px;
	@media ${device.tablet} {
		margin-bottom: 0;
	}
`;

const Cta = styled.div`
	background-color: #02bc94;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	text-decoration: none;
	text-transform: uppercase;
	color: white;
	padding: 22px 26px 22px 22px;
	font-family: poppins, sans-serif;
	letter-spacing: 1px;
	font-weight: 400;
	transition: background-color 0.5s cubic-bezier(0.2, 0.8, 0.2, 0.8),
		color 0.5s cubic-bezier(0.2, 0.8, 0.2, 0.8);

	span {
		margin-right: 10px;
		font-size: 16px;
		line-height: 1.2;
		text-align: left;
	}
	@media ${device.tablet} {
	}

	&:hover {
		background-color: #018065;
		transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 0.8);
	}
`;

const ArrowContainer = styled.div`
	display: grid;
	padding: 10px;
	padding-right: 15px;
	position: relative;
	overflow: hidden;
	padding-left: 22px;

	svg {
		position: relative;
		z-index: 2;
		transition: all 0.3s ease-in;
	}
	@media ${device.tablet} {
	}
`;

const CtaButton = ({ text, link, external }) => {
	return (
		<Container>
			<Link
				href={external ? `${link}` : `/article/${link}`}
				target={'_blank'}
				passHref
			>
				<Cta className="articleButton">
					<span>{text}</span>
					<ArrowContainer>
						<ButtonArrow />
					</ArrowContainer>
				</Cta>
			</Link>
		</Container>
	);
};

export default CtaButton;
