import { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import FtAnalytics from '~/config/FtAnalytics';
import FtEvents from '~/config/FtEvents';
import { ARTICLE_URL, device } from '~/config/utils';
import { AppContext } from '../_app';

// Components
import Metadata from '~/components/Metadata';
import Related from '~/components/Related';
import SectionOne from '~/components/infographic/SectionOne';
import SectionTwo from '~/components/infographic/SectionTwo';
import SectionThree from '~/components/infographic/SectionThree';
import SectionFour from '~/components/infographic/SectionFour';
import SectionFive from '~/components/infographic/SectionFive';
import SectionSix from '~/components/infographic/SectionSix';
import SectionEight from '~/components/infographic/SectionEight';
import SectionSeven from '~/components/infographic/SectionSeven';

const Wrapper = styled.div`
	font-family: 'Fujitsu Infinity Pro';
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
	max-width: 883px;
	padding: 0 10px;
	margin: 50px auto;
	@media ${device.tablet} {
	}
`;

const ArticleContainer = styled.div`
	@media ${device.tablet} {
	}
`;

const CtaText = styled.div`
	font-family: henderson-sans-basic, sans-serif;
	font-weight: bold;
	font-size: 22px;
	line-height: 1.2;
	margin-bottom: 30px;
	@media ${device.tablet} {
	}
`;

export default function InfographicPage({ articles }) {
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
					type: 'Article',
				},
			});
		}
	}, [cookieConsent, site, loaded]);

	const related = articles.filter((article) => {
		return article.id != 'infographic';
	});

	const selected = articles.filter((article) => {
		return article.id === 'infographic';
	});

	return (
		<>
			<Head>
				<title>Sustainability Transformation: Perceptions vs reality</title>
				<Metadata data={selected[0].metaData} />
			</Head>
			<Wrapper>
				<main className="main" id="content">
					<SectionOne />
					<SectionTwo />
					<SectionThree />
					<SectionFour />
					<SectionFive />
					<SectionSix />
					<SectionSeven />
					<SectionEight />
				</main>
			</Wrapper>
			<Related data={related} />
			<Pixel key={articles.id} src={articles.bm} />
		</>
	);
}

export async function getStaticProps({ params }) {
	const results = await fetch(ARTICLE_URL);
	const articles = await results.json();

	return {
		props: { articles },
	};
}
