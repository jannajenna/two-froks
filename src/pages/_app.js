import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { StoreProvider } from "@/contexts/storeContext";
// import "@/styles/fonts.js";

export default function App({ Component, pageProps }) {
  return (
    <>
      <StoreProvider>
        <Layout>
          <main className="wrapper">
            <Component {...pageProps} />
          </main>
        </Layout>
      </StoreProvider>
    </>
  );
}
