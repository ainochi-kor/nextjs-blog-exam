import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}

/**
 - strategy타사 스크립트를 로드해야 하는 시기를 제어합니다. 값은 lazyOnload브라우저 유휴 시간 동안 이 특정 스크립트를 느리게 로드하도록 Next.js에 지시합니다.
 - onLoad스크립트 로드가 완료된 직후 JavaScript 코드를 실행하는 데 사용됩니다. 이 예에서는 스크립트가 올바르게 로드되었다는 메시지를 콘솔에 기록합니다.
 */