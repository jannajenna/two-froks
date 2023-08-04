import Midgard from "../../components/schedule/Midgard";
import Vanaheim from "../../components/schedule/Vanaheim";
import Jotunheim from "../../components/schedule/Jotunheim";




export default function SchedulePage({ data }) {
    return (
        <div>
            <h1>Schedule</h1>
            <ScheduleList data={data} />
        </div>
    );
};


// Component to display the scheduleData as a list
const ScheduleList = ({ data }) => {
    return (
        <ul>
            <li>
                <Midgard midgardData={data.Midgard} />
            </li>
            <li>
                <Vanaheim data={data.Vanaheim} />
            </li>
            <li>
                <Jotunheim data={data.Jotunheim} />
            </li>
        </ul>
    );
};




// Function to fetch data from the API
export async function getServerSideProps() {
    const url = 'https://blush-entertaining-raver.glitch.me/schedule/';
    const response = await fetch(url);
    const data = await response.json();
    return { props: { data } };
}
