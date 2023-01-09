import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

import { ServerStyleSheet } from 'styled-components';

import Pixels from '../config/Pixels';
export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html lang="en">
				<Head>
					<Pixels />
					<script
						id={'mainOrig'}
						async
						src="https://ft.com/partnercontent/cms/ftStyle.js"
					></script>
					<link
						rel="icon"
						type="image/png"
						href="https://www.ft.com/__origami/service/image/v2/images/raw/ftlogo-v1%3Abrand-ft-logo-square-coloured?source=update-logos&amp;width=32&amp;height=32&amp;format=png"
						sizes="32x32"
					/>
					<link
						rel="icon"
						type="image/png"
						href="https://www.ft.com/__origami/service/image/v2/images/raw/ftlogo-v1%3Abrand-ft-logo-square-coloured?source=update-logos&amp;width=194&amp;height=194&amp;format=png"
						sizes="194x194"
					/>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="https://www.ft.com/__origami/service/image/v2/images/raw/ftlogo-v1%3Abrand-ft-logo-square-coloured?source=update-logos&amp;width=180&amp;height=180&amp;format=png"
					/>
					<meta name="msapplication-TileColor" content="#fff1e0" />
					<meta
						name="msapplication-TileImage"
						content="https://www.ft.com/__assets/creatives/brand-ft/icons/v3/mstile-144x144.png"
					/>
					<link
						rel="stylesheet"
						href="https://ft.com/partnercontent/cms/ftStyle.css"
					/>
					<link rel="stylesheet" href="https://use.typekit.net/yyp3lik.css" />
				</Head>
				<body>
					<Main />
					<NextScript />
					<div data-o-component="o-cookie-message"></div>
					<Script src="https://cdn.brandmetrics.com/survey/script/45b903c6675b4a9b85db13385a3d6084.js?checkconsent=false"></Script>
					<div id="brandmetrics-survey" className="brandmetrics-survey">
						<script
							dangerouslySetInnerHTML={{
								__html: `            window._brandmetrics = window._brandmetrics || [];
							setTimeout(function() {
							  window._brandmetrics.push({cmd: "_forcesurvey", val: {mid:"ad8d65cfd7484bc8bda6ab51b48848e9", style:
							  "ft_flyin_default"}});
							}, 10000);`,
							}}
						></script>
					</div>
				</body>
			</Html>
		);
	}
}
