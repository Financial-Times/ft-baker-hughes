import { useEffect, useContext } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Metadata from '~/components/Metadata';
import { ARTICLE_URL } from '~/config/utils';
import { device } from '~/config/utils';
import FtAnalytics from '~/config/FtAnalytics';
import FtEvents from '~/config/FtEvents';

import { AppContext } from './_app';
import Hero from '~/components/Hero';
import ArticleCard from '~/components/ArticleCard';
import Banner from '~/components/article/Banner';

const ArticleContainer = styled.div`
	padding: 0 10px;
	@media ${device.tablet} {
	}
`;
const Wrapper = styled.div`
	position: relative;
	overflow: hidden;
	@media ${device.tablet} {
	}

	main {
		max-width: 1654px;
		margin: 0 auto;
		position: relative;
		overflow: hidden;
	}
`;
const Pixel = styled.img`
	position: absolute;
	@media ${device.tablet} {
	}
`;

const Title = styled.div`
	max-width: 1654px;
	margin: 0 auto;
	padding: 0 10px;
	text-transform: uppercase;
	font-family: poppins, sans-serif;
	font-weight: 600;
	line-height: 1.2;
	font-size: 32px;
	text-align: center;
	padding: 48px 0;
	position: relative;

	span {
		padding-left: 70px;
	}

	&:before {
		content: '';
		position: absolute;
		top: 50%;
		left: 10px;
		width: 60px;
		background-color: #02bc94;
		height: 5px;
		transform: translateY(-50%);
	}

	@media ${device.tablet} {
		padding: 70px 30px;
		font-size: 48px;
		text-align: left;

		/* margin-bottom: 104px; */
	}
`;

const ButtonContainer = styled.div`
	text-align: center;
	margin: 50px 0;

	@media ${device.tablet} {
		margin: 50px 0;
	}
`;

const Button = styled.button`
	border: 3px solid #367f32;
	padding: 15px 30px;
	background-color: white;
	text-transform: uppercase;
	font-family: poppins, sans-serif;
	cursor: pointer;
	transition: all 0.3s ease-in;
	a {
		text-decoration: none;
		color: #367f32;
		font-weight: 700;
		font-size: 20px;
		transition: all 0.3s ease-in;
	}

	&:hover {
		background-color: #367f32;
		a {
			color: white;
		}
	}

	@media ${device.tablet} {
	}
`;

const metaData = {
	title:
		'The energy trilemma is changing how energy and industry pursue net zero',
	hubDesc:
		'The energy trilemma — maintaining energy security, sustainability and affordability — will be a challenge for companies and governments in 2023. Which energy sources and technologies will get them to net zero?',
	desc: 'The energy trilemma — maintaining energy security, sustainability and affordability — will be a challenge for companies and governments in 2023. Which energy sources and technologies will get them to net zero?',
	time: 5,
	contentType: 'article',
	publicationDate: '2023-01-25',
	campaignName: '',
	advertiserName: 'Baker Hughes',
	primaryIndustryAdvertiser: 'Oil_and_Gas',
	contentAuthor: 'Longitude',
	brandedContent: true,
	contentStyle: 'Research',
	primaryTopic: 'Environment',
	secondaryTopic: 'Carbon_capture_and_storage',
	adbookId: 342022,
	hasVideo: false,
	videoStyle: null,
	pageDesignType: 'bespoke',
	articleImage: 'https://ft.com/partnercontent/baker-hughes/bh-hero.jpg',
	articleUrl: 'https://baker-hughes.ft.com/',
};

export default function Home({ data }) {
	const { cookieConsent } = useContext(AppContext);

	useEffect(() => {
		FtEvents();
		FtAnalytics();
	}, []);

	useEffect(() => {
		if (cookieConsent) {
			window.permutive.addon('web', {
				page: {
					type: 'Partner Content Hub',
				},
			});
		}
	}, [cookieConsent]);

	return (
		<>
			<Head>
				<title>
					The energy trilemma is changing how energy and industry pursue net
					zero - Financial Times - Partner Content by Baker Hughes
				</title>
				<Metadata title={true} data={metaData} />
			</Head>
			<Wrapper>
				<Hero data={metaData} />
				<main className="main" id="content">
					<Title>
						<span>Explore our content</span>
					</Title>
					<ArticleContainer>
						{data.map((item, i) => {
							return (
								<ArticleCard
									key={i}
									position={i % 2 ? 'left' : 'right'}
									data={item}
								/>
							);
						})}
					</ArticleContainer>
				</main>

				<Pixel
					key={data.id}
					src="https://collector.brandmetrics.com/Info?pixel=f6ab2817a83e4babbe66d594003ebc04"
				/>
				<Banner />
			</Wrapper>
		</>
	);
}
export async function getStaticProps(context) {
	const res = await fetch(ARTICLE_URL);

	const data = await res.json();
	return {
		props: { data },
	};
}
