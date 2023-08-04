// components/ScheduleDay.js


export default function ScheduleDay({ day, dayData }) {
    return (
        <div>
            <h2>{day}</h2>
            {dayData.map((dayData, index) => (
                <div key={index}>
                    <h3>{dayData.day}</h3>
                    <p>Start: {dayData.start}</p>
                    <p>End: {dayData.end}</p>
                    <p>Activity: {dayData.act}</p>
                </div>
            ))}
        </div>
    );
};



