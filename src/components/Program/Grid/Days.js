import DayDropDownGrid from "./DayDropDownGrid";

export function Monday({ bands, open, toggle, dataStage }) {


    //Days
    const stageMo = dataStage?.mon

    return (
        <DayDropDownGrid
            bands={bands}
            open={open}
            toggle={toggle}
            day="MONDAY"
            dataStage={stageMo}
        />
    );
}


export function Tuesday({ bands, open, toggle, dataStage }) {

    //Days
    const stageTue = dataStage?.tue

    return (
        <DayDropDownGrid
            bands={bands}
            open={open}
            toggle={toggle}
            day="TUESDAY"
            dataStage={stageTue}

        />
    );
}

export function Wednesday({ bands, open, toggle, dataStage }) {

    //Days
    const stageWed = dataStage?.wed


    return (
        <DayDropDownGrid
            bands={bands}
            open={open}
            toggle={toggle}
            day="WEDNESDAY"
            dataStage={stageWed}

        />
    );
}

export function Thursday({ bands, open, toggle, dataStage }) {

    //Days
    const stageThu = dataStage?.thu


    return (
        <DayDropDownGrid
            bands={bands}
            open={open}
            toggle={toggle}
            day="THURSDAY"
            dataStage={stageThu}

        />
    );
}

export function Friday({ bands, open, toggle, dataStage }) {

    //Days
    const stageFri = dataStage?.fri


    return (
        <DayDropDownGrid
            bands={bands}
            open={open}
            toggle={toggle}
            day="FRIDAY"
            dataStage={stageFri}

        />
    );
}

export function Saturday({ bands, open, toggle, dataStage }) {

    //Days
    const stageSat = dataStage?.sat


    return (
        <DayDropDownGrid
            bands={bands}
            open={open}
            toggle={toggle}
            day="SATURDAY"
            dataStage={stageSat}

        />
    );
}

export function Sunday({ bands, open, toggle, dataStage }) {

    //Days
    const stageSun = dataStage?.sun


    return (
        <DayDropDownGrid
            bands={bands}
            open={open}
            toggle={toggle}
            day="SUNDAY"
            dataStage={stageSun}

        />
    );
}