import { createContext, useEffect, useState } from 'react';
import TagManager from 'react-gtm-module';
import Layout from '../components/Layout';
import { hasConsentedToBehaviouralAds } from '~/config/utils';

export const AppContext = createContext();

function MyApp({ Component, pageProps, router }) {
	const [cookieConsent, setCookieConsent] = useState(false);
	const [site, setSite] = useState('P9CN7RX');

	useEffect(() => {
		TagManager.initialize({ gtmId: '' });
	}, []);

	useEffect(() => {
		if (hasConsentedToBehaviouralAds()) {
			console.log('ch');
			permutive.consent({ opt_in: true, token: 'behaviouraladsOnsite:on' });
			setCookieConsent(true);
		} else {
			const cookieContainer = document.querySelector('.o-cookie-message');
			const cookieButton =
				cookieContainer && document.querySelector('.o-cookie-message__button');
			cookieButton &&
				cookieButton.addEventListener('click', (e) => {
					console.log('cc');
					permutive.consent({
						opt_in: true,
						token: 'behaviouraladsOnsite:on',
					});
					setCookieConsent(true);
				});
		}
	}, []);

	useEffect(() => {
		router.events.on('routeChangeComplete', () => {
			setSite(document.location.href);
		});
	}, []);

	return (
		<AppContext.Provider value={{ cookieConsent, site }}>
			<Layout>
				<Component {...pageProps} key={router.route} />
			</Layout>
		</AppContext.Provider>
	);
}

export default MyApp;
