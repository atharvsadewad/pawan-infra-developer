import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="keywords" content="construction, real estate, developer, pune" />
        <meta property="og:title" content="Pawan Infra Developer" />
        <meta property="og:description" content="Elegant, professional construction and real-estate solutions." />
      </Head>
      <body className="antialiased bg-white text-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
