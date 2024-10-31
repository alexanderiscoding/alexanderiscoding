import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body className="antialiased bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
