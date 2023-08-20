import '../styles/global.css';
import '../styles/modal.css';
import '../styles/inputfield.css';
import '../styles/radiogroup.css';
import '../styles/radiobutton.css';
import '../styles/card.css';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
