import DayDropDownGrid from "./DayDropDownGrid";

export function Monday({ open, toggle, midgardData, jotunheimData, vanaheimData }) {


    //Days
    const midgardMon = midgardData?.mon
    const jotunheimMon = jotunheimData?.mon
    const vanaheimMon = vanaheimData?.mon

    return (
        <DayDropDownGrid
            open={open}
            toggle={toggle}
            day="MONDAY"
            bandDataM={midgardMon}
            bandDataJ={jotunheimMon}
            bandDataV={vanaheimMon}
        />
    );
}


export function Tuesday({ open, toggle, midgardData, jotunheimData, vanaheimData }) {

    //Days
    const midgardTue = midgardData?.tue
    const jotunheimTue = jotunheimData?.tue
    const vanaheimTue = vanaheimData?.tue

    return (
        <DayDropDownGrid
            open={open}
            toggle={toggle}
            day="TUESDAY"
            bandDataM={midgardTue}
            bandDataJ={jotunheimTue}
            bandDataV={vanaheimTue}
        />
    );
}

export function Wednesday({ open, toggle, midgardData, jotunheimData, vanaheimData }) {

    //Days
    const midgardWed = midgardData?.wed
    const jotunheimWed = jotunheimData?.wed
    const vanaheimWed = vanaheimData?.wed

    return (
        <DayDropDownGrid
            open={open}
            toggle={toggle}
            day="WEDNESDAY"
            bandDataM={midgardWed}
            bandDataJ={jotunheimWed}
            bandDataV={vanaheimWed}
        />
    );
}

export function Thursday({ open, toggle, midgardData, jotunheimData, vanaheimData }) {

    //Days
    const midgardThu = midgardData?.thu
    const jotunheimThu = jotunheimData?.thu
    const vanaheimThu = vanaheimData?.thu

    return (
        <DayDropDownGrid
            open={open}
            toggle={toggle}
            day="THURSDAY"
            bandDataM={midgardThu}
            bandDataJ={jotunheimThu}
            bandDataV={vanaheimThu}
        />
    );
}

export function Friday({ open, toggle, midgardData, jotunheimData, vanaheimData }) {

    //Days
    const midgardFri = midgardData?.fri
    const jotunheimFri = jotunheimData?.fri
    const vanaheimFri = vanaheimData?.fri

    return (
        <DayDropDownGrid
            open={open}
            toggle={toggle}
            day="FRIDAY"
            bandDataM={midgardFri}
            bandDataJ={jotunheimFri}
            bandDataV={vanaheimFri}
        />
    );
}

export function Saturday({ open, toggle, midgardData, jotunheimData, vanaheimData }) {

    //Days
    const midgardSat = midgardData?.sat
    const jotunheimSat = jotunheimData?.sat
    const vanaheimSat = vanaheimData?.sat

    return (
        <DayDropDownGrid
            open={open}
            toggle={toggle}
            day="SATURDAY"
            bandDataM={midgardSat}
            bandDataJ={jotunheimSat}
            bandDataV={vanaheimSat}
        />
    );
}

export function Sunday({ open, toggle, midgardData, jotunheimData, vanaheimData }) {

    //Days
    const midgardSun = midgardData?.sun
    const jotunheimSun = jotunheimData?.sun
    const vanaheimSun = vanaheimData?.sun

    return (
        <DayDropDownGrid
            open={open}
            toggle={toggle}
            day="SUNDAY"
            bandDataM={midgardSun}
            bandDataJ={jotunheimSun}
            bandDataV={vanaheimSun}
        />
    );
}