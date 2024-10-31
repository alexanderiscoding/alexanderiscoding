// pages/index.js
import { useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  useEffect(() => {
    const swaggerScript = document.createElement('script');
    swaggerScript.src = 'https://unpkg.com/swagger-ui-dist@5.17.14/swagger-ui-bundle.js';
    swaggerScript.crossOrigin = 'anonymous';
    swaggerScript.onload = () => {
      window.ui = SwaggerUIBundle({
        url: 'https://assets.alexanderiscoding.com/openapi/iam.json',
        dom_id: '#swagger-ui',
        lang: 'pt-BR'
      });
    };
    document.body.appendChild(swaggerScript);

    // Clean up script on unmount
    return () => {
      document.body.removeChild(swaggerScript);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Alexanderiscoding</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/swagger-ui-dist@5.17.14/swagger-ui.css"
        />
        <style>{`
          .swagger-ui .info hgroup.main a {
            display: none;
          }
        `}</style>
      </Head>
      <div id="swagger-ui"></div>
    </>
  );
}
