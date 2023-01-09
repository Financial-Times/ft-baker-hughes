import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

import { device } from '~/config/utils';

gsap.registerEffect(ScrollTrigger);

const Container = styled.div`
	overflow: hidden;
	padding: 5% 0;
	display: block;
`;

const Grid = styled.div`
	overflow-x: hidden;
	overflow-y: hidden;
	white-space: nowrap;
	display: inline-flex;
	&.gridTwo {
		direction: rtl;
	}
`;

const GridItem = styled.div`
	height: 60vh;
	width: 100vw;
	position: relative;
	margin-right: 11px;

	@media ${device.tablet} {
		width: 70vw;
	}
`;

const GridImage = styled.img`
	position: absolute;
	object-fit: cover;
	object-position: center center;
	top: 0;
	width: 100%;
	height: 100%;
`;

const ImageSwipe = ({ data }) => {
	const containerRef = useRef();
	useEffect(() => {
		if (containerRef.current) {
			const grid = containerRef.current.querySelector('.grid');

			// gridTwo.style.transform = `translate(${-grid.scrollWidth}px, 0px)`;

			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					invalidateOnRefresh: true,
					start: 'center center', // when the top of the trigger hits the top of the viewport
					end: '100%',
					pin: true,
					markers: false,
					scrub: 1,
				},
			});

			tl.to(
				grid,
				{
					x: -(grid.scrollWidth - document.documentElement.clientWidth) + 'px',
				},
				'label'
			);
		}
	}, []);

	return (
		<div>
			<Container ref={containerRef}>
				<Grid className="grid">
					{data.map((el, i) => {
						return (
							<GridItem key={i}>
								<GridImage src={el} alt="gridImage" layout="fill" />
							</GridItem>
						);
					})}
				</Grid>
			</Container>
		</div>
	);
};

export default ImageSwipe;
