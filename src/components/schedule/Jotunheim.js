const ScheduleDay = ({ dayData }) => {
    return (
        <div>
            <h3>{dayData.day}</h3>
            <p>Start: {dayData.start}</p>
            <p>End: {dayData.end}</p>
            <p>Activity: {dayData.act}</p>
        </div>
    );
};

const ScheduleData = ({ data }) => {
    return (
        <div>
            <h2>Jotunheim</h2>
            {Object.entries(data).map(([day, dayData]) => (
                <div key={day}>
                    <h3>{day}</h3>
                    <ScheduleDay dayData={dayData} />
                </div>
            ))}
        </div>
    );
};

export default ScheduleData;
