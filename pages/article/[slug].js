import { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import FtAnalytics from '~/config/FtAnalytics';
import FtEvents from '~/config/FtEvents';
import { ARTICLE_URL, device } from '~/config/utils';
import { AppContext } from '../_app';

// Components
import ArticleHero from '~/components/article/ArticleHero';

import Content from '~/components/article/Content';
import Quote from '~/components/article/Quote';
import Metadata from '~/components/Metadata';

import Title from '~/components/article/Title';
import Related from '~/components/Related';
import SocialScroll from '~/components/article/SocialScroll';
import PullOut from '~/components/article/PullOut';
import Home from '~/components/article/Home';
import CtaButton from '~/components/CtaButton';
import VideoEl from '~/components/Video';
import ChartOne from '~/components/charts/ChartOne';
import ChartTwo from '~/components/charts/ChartTwo';
import ChartThree from '~/components/charts/ChartThree';
import Footnotes from '~/components/article/Footnotes';
import CtaOut from '~/components/article/CtaOut';
import Banner from '~/components/article/Banner';
import Script from 'next/script';

const Wrapper = styled.div`
	overflow-x: hidden;
	@media ${device.tablet} {
	}

	video {
		width: 100%;
	}
`;

const Pixel = styled.img`
	position: absolute;
`;

const CtaWrapper = styled.div`
	@media ${device.tablet} {
	}
`;

const ArticleContainer = styled.div`
	@media ${device.tablet} {
	}
`;

const CtaText = styled.div`
	font-weight: bold;
	font-size: 22px;
	line-height: 1.2;
	margin-bottom: 30px;
	@media ${device.tablet} {
	}
`;

export default function ArticlePage({ post, related }) {
	const { cookieConsent, site } = useContext(AppContext);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const isCurrentUrl = () => {
			if (site === document.location.href || site === '') {
				return true;
			} else {
				return false;
			}
		};

		setLoaded(true);

		if (loaded) {
			FtEvents();
			FtAnalytics();
		}

		if (cookieConsent && isCurrentUrl() && loaded) {
			window.permutive.addon('web', {
				page: {
					type: `Partner Content ${
						post.metaData.hasVideo ? 'Video' : 'Article'
					}`,
				},
			});
		}
	}, [cookieConsent, site, loaded]);

	function renderChart(number) {
		switch (number) {
			case 1:
				return <ChartOne />;
			case 2:
				return <ChartThree />;

			case 3:
				return <ChartTwo />;

			default:
				break;
		}
	}

	return (
		<>
			<Head>
				<title>{post.metaData.title}</title>
				<Metadata data={post.metaData} />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Wrapper>
				<ArticleHero data={post.metaData.articleImage} />
				<main className="main" id="content">
					<ArticleContainer>
						<Home />
						<Title data={post.metaData} />
						{post.content.map((el) => {
							switch (el.type) {
								case 'content':
									return <Content key={el.id} id={el.id} data={el.data} />;
								case 'quote':
									return <Quote key={el.id} data={el.data} />;
								case 'pullOut':
									return <PullOut key={el.id} data={el.data} id={el.id} />;
								case 'video':
									return <VideoEl key={el.id} data={el.data} id={el.id} />;
								case 'footnotes':
									return <Footnotes key={el.id} data={el.data} id={el.id} />;
								case 'chart':
									return <div key={el.id}>{renderChart(el.data.type)}</div>;
								case 'cta':
									return (
										<CtaWrapper key={el.id}>
											<CtaOut />
										</CtaWrapper>
									);
							}
						})}
					</ArticleContainer>
				</main>

				<SocialScroll />
			</Wrapper>
			<Related data={related} />
			<Banner />
			<Pixel key={post.id} src={post.bm} />
			<img src="https://collector.brandmetrics.com/Info?pixel=bdb8909f35164aa19a5c6d6ecee1850c" />

			<Script src="https://cdn.brandmetrics.com/survey/script/45b903c6675b4a9b85db13385a3d6084.js?checkconsent=false"></Script>
			<div id="brandmetrics-survey" className="brandmetrics-survey">
				<script
					dangerouslySetInnerHTML={{
						__html: `            window._brandmetrics = window._brandmetrics || [];
							setTimeout(function() {
							  window._brandmetrics.push({cmd: "_forcesurvey", val: {mid:"bdb8909f35164aa19a5c6d6ecee1850c", style:
							  "ft_flyin_default"}});
							}, 10000);`,
					}}
				></script>
			</div>
		</>
	);
}

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	};
};

export async function getStaticProps({ params }) {
	const results = await fetch(ARTICLE_URL);
	const articles = await results.json();

	const post = articles.find((article) => article.id === params.slug);
	const related = articles.filter((article) => {
		return article.id != params.slug;
	});

	return {
		props: { post, related },
	};
}
