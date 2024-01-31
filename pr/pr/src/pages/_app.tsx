// pages/_app.tsx

import { AppProps } from 'next/app';
import  Home  from './index';

function MyApp({ Component, pageProps }: AppProps) {
  // ここで表示させたいコンポーネントを追加
  return (
    <>
      <Home />
    </>
  );
}

export default MyApp;
