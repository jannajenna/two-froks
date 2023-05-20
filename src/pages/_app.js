import "@/styles/globals.css";
import Layout from "@/components/Layout";
// import "@/styles/fonts.js";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <main className="wrapper">
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}
