import { Hero } from "@/components/Hero/Hero";
import Day from "@/components/Program/Day";
import Filterprogram from "@/components/Program/Filterprogram";
import Viewmode from "@/components/Program/Viewmode";


export default function Program() {
    return (
        <>
            <Hero title="Program" />
            <div>
                <Filterprogram />
                <Viewmode />
                <Day />
            </div>
        </>
    );
}
