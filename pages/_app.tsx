import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { AccessProvider } from "../components/access";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AccessProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AccessProvider>
  );
}

export default MyApp;
