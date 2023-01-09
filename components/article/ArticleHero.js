import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { device } from '~/config/utils';
import Image from 'next/image';

const Container = styled.div`
	margin-bottom: 30px;

	@media ${device.tablet} {
	}
`;

const Wrapper = styled.div`
	position: relative;
	padding-bottom: 84%;
	img {
		transform: scale(1.2);
		object-fit: cover;
		object-position: 50% 40%;
	}
	@media ${device.tablet} {
		padding-bottom: 30%;
	}
`;

const ArticleHero = ({ data }) => {

	const heroRef = useRef('');

	useEffect (() => {

		const image = heroRef.current.querySelector('.image');

		const tl = gsap.timeline({ delay: 0 });

		tl.to(image, 1.3, { scaleX: 1, scaleY: 1 })

	}, []);

	return (
		<Container ref={heroRef}>
			<Wrapper>
				<Image src={data} alt={'Hero Image'} layout="fill" className="image" />
			</Wrapper>
		</Container>
	);
};

export default ArticleHero;
