
import ScheduleDay from "./ScheduleDay";

export default function Midgard({ midgardData }) {

    console.log('MIDGARD 2:', midgardData);

    return (
        <div>
            <h2>Midgard</h2>
            {Object.entries(midgardData).map(([midgardData, dayData]) => (
                <div key={midgardData}>
                    <h3>{midgardData}</h3>
                    <ScheduleDay key={midgardData} dayData={dayData} />
                </div>
            ))}
        </div>
    );
};



