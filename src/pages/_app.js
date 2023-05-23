import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { StoreProvider } from "@/contexts/storeContext";
import { Space_Grotesk, Poppins } from "next/font/google";

export const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
// import "@/styles/fonts.js";

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
          font-family: ${space_grotesk.style.fontFamily};
        }
      `}</style>
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
