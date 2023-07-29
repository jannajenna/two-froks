import { Hero } from "@/components/Hero/Hero";
import DayList from "@/components/Program/DayList";
import Filterprogram from "@/components/Program/Filterprogram";
import Viewmode from "@/components/Program/Viewmode";

export default function Program() {
    return (
        <>
            <Hero title="Program" />
            <div>
                <Filterprogram />
                <Viewmode />
                <DayList />
            </div>
        </>
    );
}
