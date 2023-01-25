import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import HeaderOuter from './HeaderOuter';
import Disclaimer from './Disclaimer';
import { device } from '~/config/utils';
import ClientFooter from './ClientFooter';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: poppins, sans-serif;
    padding: 0;
    margin: 0;
    line-height: 1.4;
  }

  a {
    font-weight: 600;
    color: #028374;
    text-decoration: underline;

  }

  a:hover {
    text-decoration: none;
  }

  button {
  }

  .o-footer {
    margin-top: 0;
  }

  .o-header {
    position: relative;
    z-index: 1;
  }


  h1 {

  }

  h2 {
    font-weight: 600;
    line-height: 1.2;
    text-transform: uppercase;
    color: #05322B;
    font-size: 24px;

    @media ${device.tablet} {
      font-size: 28px;
    }
  }

  h3 {
    font-weight: 700;
    line-height: 1.2;
    text-decoration: none;
    color: #05322B;
    text-transform: uppercase;
    font-size: 22px;

@media ${device.tablet} {
  font-size: 24px;
}

  }

  p {
    
    font-weight: 400;
    font-size: 16px;
    @media ${device.tablet} {
      font-size: 20px;


    }
  }

  main {
    position: relative;
  }

  .o-cookie-message {
    z-index: 10;

    p {
      font-size: MetricWeb, sans-serif !important;
    }
  }

  .o-cookie-message__heading {
    h1 {
      color: black;
    }
  }

  

.brandmetrics-survey {
  display: none;
  position: fixed;
  right: 0%;
  bottom: 50px;
  z-index: 1000;
  margin-right: -10px;
  max-width: 300px;

    @media (min-width: 740px) {

    display: block;

    }
}
`;

// Poppins Light
// font-family: poppins, sans-serif;
// font-weight: 300;
// font-style: normal;

// Poppins Regular
// font-family: poppins, sans-serif;
// font-weight: 400;
// font-style: normal;

// Poppins Medium
// font-family: poppins, sans-serif;
// font-weight: 500;
// font-style: normal;

// Poppins SemiBold
// font-family: poppins, sans-serif;
// font-weight: 600;
// font-style: normal;

// Poppins Bold
// font-family: poppins, sans-serif;
// font-weight: 700;
// font-style: normal;

export default function Page({ children }) {
	return (
		<>
			<GlobalStyles />
			<Header />
			<Disclaimer client="Baker Hughes" />
			{children}
			<ClientFooter />
			<Footer />
			<HeaderOuter />
		</>
	);
}

Page.propTypes = {
	children: PropTypes.any,
};
