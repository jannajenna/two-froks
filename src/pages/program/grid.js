import { Hero } from "@/components/Hero/Hero";
import DayGrid from "@/components/Program/DayGrid";
import Filterprogram from "@/components/Program/Filterprogram";
import Viewmode from "@/components/Program/Viewmode";

export default function Program() {
    return (
        <>
            <Hero title="Program" />
            <div>
                <Filterprogram />
                <Viewmode />
                <DayGrid />
            </div>
        </>
    );
}


/* export async function getStaticProps() {
    // Fetch data from external API
    const api = "https://blush-entertaining-raver.glitch.me/schedule";
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
} */