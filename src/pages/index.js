import Head from "next/head";
import Band from "@/components/Band";

export default function Home({ data }) {
  console.log(data);
  return (
    <>
      <Head>
        <title>HELLOOOOOO</title>
      </Head>
      <div>
        <h1>Hello this is Anna</h1>
        <h2>Trying server side fetching</h2>
        <h3>The banda are:</h3>
        <div>
          {data.map((band) => (
            <Band key={band.name} {...band} />
          ))}
          {/*  <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Fetch data from external API
  const api = "https://blush-entertaining-raver.glitch.me/bands";
  const res = await fetch(api);
  // If no data - no page (404)
  if (res.status != 200) {
    return {
      notFound: true,
    };
  }
  const data = await res.json();
  // Pass data to the page via props
  return {
    props: {
      data,
    },
  };
}

/* In general, you should use getServerSideProps when you need to fetch data that changes frequently and you need to ensure that the data is always up-to-date. Use getStaticProps when you need to fetch data that doesn't change frequently and you want to serve the same data to all users. */

