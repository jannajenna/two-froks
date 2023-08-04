import { Hero } from "@/components/Hero/Hero";
import Filterprogram from "@/components/FilterProgram/Filterprogram";


export default function Program({ data }) {

    console.log('DATA:', data);

    return (
        <>
            <Hero title="Program" />
            <Filterprogram data={data} />
        </>
    );
}


// Function to fetch data from the API
export async function getServerSideProps() {
    // Fetch data from external API
    const url = 'https://blush-entertaining-raver.glitch.me/schedule/';
    const res = await fetch(url);
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



