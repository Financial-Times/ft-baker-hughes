import styled from 'styled-components';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { device } from '~/config/utils';
import RelatedItem from './RelatedItem';
import SwiperNext from '~/assets/swiperNext.svg';
import SwiperPrev from '~/assets/swiperPrev.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Container = styled.div`
	max-width: 1540px;
	margin: 0 auto;
	@media ${device.tablet} {
	}
`;

const Wrapper = styled.div`
	position: relative;
	@media ${device.tablet} {
	}
`;

const Title = styled.div`
	text-align: center;
	font-size: 700;
	font-family: poppins, sans-serif;
	text-transform: uppercase;
	line-height: 1.2;
	font-size: 32px;
	max-width: 60%;
	margin: 0 auto 36px auto;
	color: rgba(5, 50, 43, 0.996);

	@media ${device.tablet} {
		margin: 100px auto;
		font-size: 48px;
	}
`;

const RelatedSwiper = styled.div`
	@media ${device.tablet} {
		width: calc(100% - 200px);
		margin: 0 auto;
	}
`;

const SwiperPagination = styled.div`
	padding: 30px;

	.swiper-pagination-bullet {
		border-color: #21bf61;
		border: 1px solid;
	}
	.swiper-pagination-bullet-active {
		border: none;
		color: black;
		padding: 5px 30px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		margin: 4px 2px;
		cursor: pointer;
		border-radius: 16px;
		background-color: #02bc94;
	}

	.active {
	}
	@media ${device.tablet} {
		.swiper-wrapper {
			justify-content: center;
		}
	}
`;

const NavigationWrapper = styled.div`
	.swiper-button-next {
		top: 5%;
		width: initial;
		transform: rotate(180deg);
		&:after {
			content: '';
		}
	}

	.swiper-button-prev {
		top: 5%;

		width: initial;
		&:after {
			content: '';
		}
	}

	@media ${device.tablet} {
	}
`;

const Related = ({ data }) => {
	return (
		<Container>
			<Wrapper>
				<Title>More from this series</Title>
				<NavigationWrapper>
					<div className="swiper-button-next">
						<SwiperNext />
					</div>
					<div className="swiper-button-prev">
						<SwiperPrev />
					</div>
				</NavigationWrapper>
				<RelatedSwiper>
					<Swiper
						spaceBetween={10}
						pagination={{
							el: '.swiper-pagination',
							clickable: true,
						}}
						navigation={{
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						}}
						breakpoints={{
							960: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							767: {
								slidesPerView: 1,
								spaceBetween: 20,
							},

							320: {
								slidesPerView: 1,
								spaceBetween: 10,
							},
						}}
					>
						{data.map((slide, i) => (
							<SwiperSlide key={i}>
								<RelatedItem data={slide} />
							</SwiperSlide>
						))}
					</Swiper>
				</RelatedSwiper>
				<SwiperPagination>
					<div className="swiper-pagination"></div>
				</SwiperPagination>
			</Wrapper>
		</Container>
	);
};

export default Related;
