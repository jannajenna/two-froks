import { Hero } from "@/components/Hero/Hero";
import DayGrid from "@/components/Program/DayGrid";
import Filterprogram from "@/components/Program/Filterprogram";
import Viewmode from "@/components/Program/Viewmode";

import DayList from "@/components/Program/DayList";




export default function Program() {
    return (
        <>
            <Hero title="Program" />
            <div>
                <Filterprogram />
                <Viewmode />
                <DayGrid />
                <DayList />
            </div>
        </>
    );
}
