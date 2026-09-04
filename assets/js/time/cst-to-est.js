/* =========================================================
   CST → EST TIME ZONE CONVERTER
   EasyCalculator.org
========================================================= */


/* =========================================================
   TIME ZONES
========================================================= */

const TZ_CENTRAL = "America/Chicago";
const TZ_EASTERN = "America/New_York";


/* =========================================================
   STATE
========================================================= */

let tzSelectedInstant = new Date();
let tzTimelineStart = null;


/* =========================================================
   TIMEZONE PARTS
========================================================= */

function tzParts(date, timezone) {

    const parts = new Intl.DateTimeFormat(
        "en-US",
        {
            timeZone: timezone,

            year: "numeric",
            month: "numeric",
            day: "numeric",

            hour: "numeric",
            minute: "numeric",
            second: "numeric",

            hourCycle: "h23"
        }
    ).formatToParts(date);

    return Object.fromEntries(
        parts.map(part => [
            part.type,
            part.value
        ])
    );
}


/* =========================================================
   TIMEZONE ABBREVIATION
========================================================= */

function tzAbbreviation(date, timezone) {

    const parts = new Intl.DateTimeFormat(
        "en-US",
        {
            timeZone: timezone,
            timeZoneName: "short"
        }
    ).formatToParts(date);

    const zone = parts.find(
        part => part.type === "timeZoneName"
    );

    return zone ? zone.value : "";
}


/* =========================================================
   FORMAT TIME
========================================================= */

function tzFormatTime(
    date,
    timezone,
    seconds = false
) {

    return new Intl.DateTimeFormat(
        "en-US",
        {
            timeZone: timezone,

            hour: "numeric",
            minute: "2-digit",

            ...(seconds
                ? {
                    second: "2-digit"
                }
                : {}),

            hour12: true
        }
    ).format(date);
}


/* =========================================================
   FORMAT DATE
========================================================= */

function tzFormatDate(date, timezone) {

    return new Intl.DateTimeFormat(
        "en-US",
        {
            timeZone: timezone,

            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric"
        }
    ).format(date);
}


/* =========================================================
   LONG DATE
========================================================= */

function tzFormatLongDate(
    date,
    timezone
) {

    return new Intl.DateTimeFormat(
        "en-US",
        {
            timeZone: timezone,

            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric"
        }
    ).format(date);
}


/* =========================================================
   GET UTC OFFSET
========================================================= */

function tzGetOffset(date, timezone) {

    const parts = new Intl.DateTimeFormat(
        "en-US",
        {
            timeZone: timezone,
            timeZoneName: "longOffset"
        }
    ).formatToParts(date);

    const zone = parts.find(
        part => part.type === "timeZoneName"
    );

    if (!zone) {
        return 0;
    }

    /*
     * Examples:
     *
     * GMT-06:00
     * GMT-05:00
     */

    const match = zone.value.match(
        /^GMT([+-])(\d{2}):(\d{2})$/
    );

    if (!match) {
        return 0;
    }

    const sign =
        match[1] === "+"
            ? 1
            : -1;

    const hours =
        Number(match[2]);

    const minutes =
        Number(match[3]);

    return sign * (
        hours * 60 + minutes
    );
}


/* =========================================================
   TIME DIFFERENCE
========================================================= */

function tzGetDifferenceText(date) {

    const centralOffset =
        tzGetOffset(
            date,
            TZ_CENTRAL
        );

    const easternOffset =
        tzGetOffset(
            date,
            TZ_EASTERN
        );


    /*
     * Eastern - Central
     *
     * CST → EST:
     * -5 - (-6) = +1 hour
     *
     * CDT → EDT:
     * -4 - (-5) = +1 hour
     */

    const difference =
        easternOffset -
        centralOffset;


    const sign =
        difference >= 0
            ? "+"
            : "-";


    const absolute =
        Math.abs(difference);


    const hours =
        Math.floor(
            absolute / 60
        );


    const minutes =
        absolute % 60;


    let text =
        `${sign}${hours} ${
            hours === 1
                ? "HOUR"
                : "HOURS"
        }`;


    if (minutes > 0) {

        text +=
            ` ${minutes} MIN`;

    }


    return text;
}


/* =========================================================
   CALCULATE 24-HOUR TIMELINE
========================================================= */

function tzCalculateTimeline() {

    const hour =
        60 *
        60 *
        1000;


    /*
     * Show 12 hours before selected
     * and 12 hours after selected.
     */

    tzTimelineStart =
        new Date(
            Math.floor(
                (
                    tzSelectedInstant.getTime()
                    -
                    12 * hour
                )
                /
                hour
            )
            *
            hour
        );
}


/* =========================================================
   SAME LOCAL HOUR
========================================================= */

function tzIsSameHour(
    date1,
    date2,
    timezone
) {

    const a =
        tzParts(
            date1,
            timezone
        );

    const b =
        tzParts(
            date2,
            timezone
        );

    return (
        a.year === b.year &&
        a.month === b.month &&
        a.day === b.day &&
        a.hour === b.hour
    );
}


/* =========================================================
   CREATE 24-HOUR TIMELINE
========================================================= */

function tzCreateTimeline(
    elementId,
    timezone
) {

    const container =
        document.getElementById(
            elementId
        );

    if (!container) {
        return;
    }


    container.innerHTML = "";


    const hour =
        60 *
        60 *
        1000;


    for (
        let index = 0;
        index < 24;
        index++
    ) {

        const instant =
            new Date(
                tzTimelineStart.getTime()
                +
                index * hour
            );


        const parts =
            tzParts(
                instant,
                timezone
            );


        const localHour =
            Number(parts.hour);


        const card =
            document.createElement(
                "div"
            );


        /*
         * AM / PM class
         */

        card.className =
            "tz-hour-card " +
            (
                localHour < 12
                    ? "am"
                    : "pm"
            );


        /*
         * Selected hour
         */

        if (
            tzIsSameHour(
                instant,
                tzSelectedInstant,
                timezone
            )
        ) {

            card.classList.add(
                "selected"
            );
        }


        /*
         * 12-hour format
         */

        let displayHour =
            localHour % 12;


        if (
            displayHour === 0
        ) {

            displayHour = 12;

        }


        const period =
            localHour < 12
                ? "AM"
                : "PM";


        card.innerHTML = `

            <div class="tz-hour-number">
                ${displayHour}
            </div>

            <div class="tz-hour-period">
                ${period}
            </div>

        `;


        /*
         * Click hour
         */

        card.addEventListener(
            "click",
            function () {

                tzSelectedInstant =
                    new Date(
                        instant.getTime()
                    );


                tzRender();

            }
        );


        container.appendChild(
            card
        );
    }
}


/* =========================================================
   DATE HEADERS
========================================================= */

function tzUpdateDateHeaders() {

    const centralDate =
        document.getElementById(
            "tzCentralDate"
        );


    const easternDate =
        document.getElementById(
            "tzEasternDate"
        );


    if (centralDate) {

        centralDate.textContent =
            tzFormatDate(
                tzTimelineStart,
                TZ_CENTRAL
            ).toUpperCase();

    }


    if (easternDate) {

        easternDate.textContent =
            tzFormatDate(
                tzTimelineStart,
                TZ_EASTERN
            ).toUpperCase();

    }
}


/* =========================================================
   SELECTED BIG CLOCKS
========================================================= */

function tzUpdateSelectedClocks() {

    const centralZone =
        tzAbbreviation(
            tzSelectedInstant,
            TZ_CENTRAL
        );


    const easternZone =
        tzAbbreviation(
            tzSelectedInstant,
            TZ_EASTERN
        );


    const centralTime =
        tzFormatTime(
            tzSelectedInstant,
            TZ_CENTRAL,
            true
        );


    const easternTime =
        tzFormatTime(
            tzSelectedInstant,
            TZ_EASTERN,
            true
        );


    const centralDate =
        tzFormatDate(
            tzSelectedInstant,
            TZ_CENTRAL
        );


    const easternDate =
        tzFormatDate(
            tzSelectedInstant,
            TZ_EASTERN
        );


    const centralZoneEl =
        document.getElementById(
            "tzSelectedCentralZone"
        );


    const easternZoneEl =
        document.getElementById(
            "tzSelectedEasternZone"
        );


    const centralTimeEl =
        document.getElementById(
            "tzSelectedCentralLive"
        );


    const easternTimeEl =
        document.getElementById(
            "tzSelectedEasternLive"
        );


    const centralDateEl =
        document.getElementById(
            "tzSelectedCentralDate"
        );


    const easternDateEl =
        document.getElementById(
            "tzSelectedEasternDate"
        );


    if (centralZoneEl) {

        centralZoneEl.textContent =
            centralZone;

    }


    if (easternZoneEl) {

        easternZoneEl.textContent =
            easternZone;

    }


    if (centralTimeEl) {

        centralTimeEl.textContent =
            centralTime;

    }


    if (easternTimeEl) {

        easternTimeEl.textContent =
            easternTime;

    }


    if (centralDateEl) {

        centralDateEl.textContent =
            centralDate;

    }


    if (easternDateEl) {

        easternDateEl.textContent =
            easternDate;

    }
}


/* =========================================================
   CENTRAL TIME NAME
========================================================= */

function tzUpdateCentralName() {

    const zone =
        tzAbbreviation(
            tzSelectedInstant,
            TZ_CENTRAL
        );


    const code =
        document.getElementById(
            "tzCentralCode"
        );


    const name =
        document.getElementById(
            "tzCentralName"
        );


    if (code) {

        code.textContent =
            zone;

    }


    if (name) {

        name.textContent =
            zone === "CDT"
                ? "Central Daylight Time"
                : "Central Standard Time";

    }
}


/* =========================================================
   EASTERN TIME NAME
========================================================= */

function tzUpdateEasternName() {

    const zone =
        tzAbbreviation(
            tzSelectedInstant,
            TZ_EASTERN
        );


    const code =
        document.getElementById(
            "tzEasternCode"
        );


    const name =
        document.getElementById(
            "tzEasternName"
        );


    if (code) {

        code.textContent =
            zone;

    }


    if (name) {

        name.textContent =
            zone === "EDT"
                ? "Eastern Daylight Time"
                : "Eastern Standard Time";

    }
}


/* =========================================================
   RESULT BAR
========================================================= */

function tzUpdateResult() {

    const centralZone =
        tzAbbreviation(
            tzSelectedInstant,
            TZ_CENTRAL
        );


    const easternZone =
        tzAbbreviation(
            tzSelectedInstant,
            TZ_EASTERN
        );


    const centralTime =
        tzFormatTime(
            tzSelectedInstant,
            TZ_CENTRAL
        );


    const easternTime =
        tzFormatTime(
            tzSelectedInstant,
            TZ_EASTERN
        );


    const centralDate =
        tzFormatDate(
            tzSelectedInstant,
            TZ_CENTRAL
        );


    const easternDate =
        tzFormatDate(
            tzSelectedInstant,
            TZ_EASTERN
        );


    const gap =
        tzGetDifferenceText(
            tzSelectedInstant
        );


    const centralElement =
        document.getElementById(
            "tzSelectedCentral"
        );


    const easternElement =
        document.getElementById(
            "tzSelectedEastern"
        );


    const gapElement =
        document.querySelector(
            ".tz-result-gap"
        );


    const dateElement =
        document.getElementById(
            "tzSelectedDate"
        );


    if (centralElement) {

        centralElement.textContent =
            `${centralZone} ${centralTime}`;

    }


    if (easternElement) {

        easternElement.textContent =
            `${easternZone} ${easternTime}`;

    }


    if (gapElement) {

        gapElement.textContent =
            gap;

    }


    if (dateElement) {

        if (
            centralDate !==
            easternDate
        ) {

            dateElement.textContent =
                `${centralDate} → ${easternDate}`;

        } else {

            dateElement.textContent =
                centralDate;

        }

    }
}


/* =========================================================
   FIND NEXT DST TRANSITION
========================================================= */

function tzGetNextDstTransition(
    date
) {

    const currentZone =
        tzAbbreviation(
            date,
            TZ_CENTRAL
        );


    const day =
        24 *
        60 *
        60 *
        1000;


    for (
        let i = 1;
        i <= 370;
        i++
    ) {

        const testDate =
            new Date(
                date.getTime()
                +
                i * day
            );


        const testZone =
            tzAbbreviation(
                testDate,
                TZ_CENTRAL
            );


        if (
            testZone !==
            currentZone
        ) {

            return testDate;

        }
    }


    return null;
}


/* =========================================================
   DST DATE
========================================================= */

function tzFormatDstDate(
    date
) {

    return new Intl.DateTimeFormat(
        "en-US",
        {
            timeZone:
                TZ_CENTRAL,

            month: "short",
            day: "numeric",
            year: "numeric"
        }
    ).format(date);
}


/* =========================================================
   DST INFORMATION
========================================================= */

function tzUpdateDstInfo() {

    const container =
        document.getElementById(
            "tzDstInfo"
        );


    if (!container) {
        return;
    }


    const now =
        new Date();


    const centralZone =
        tzAbbreviation(
            now,
            TZ_CENTRAL
        );


    const easternZone =
        tzAbbreviation(
            now,
            TZ_EASTERN
        );


    const isDst =
        centralZone === "CDT";


    const nextTransition =
        tzGetNextDstTransition(
            now
        );


    if (isDst) {

        container.innerHTML = `

            <div class="tz-dst-icon">

                <i class="fa-solid fa-sun"></i>

            </div>


            <div class="tz-dst-content">

                <div class="tz-dst-title">

                    Daylight Saving Time

                    <span class="tz-dst-current">

                        ${centralZone} · UTC−5

                    </span>

                </div>


                <div class="tz-dst-description">

                    Central Time is currently
                    <strong>${centralZone}</strong>.

                    Eastern Time is
                    <strong>${easternZone}</strong>.

                    ${
                        nextTransition
                            ? `
                                <span class="tz-dst-date">

                                    CST returns
                                    ${tzFormatDstDate(
                                        nextTransition
                                    )}

                                </span>
                              `
                            : ""
                    }

                </div>

            </div>

        `;

    } else {

        container.innerHTML = `

            <div class="tz-dst-icon">

                <i class="fa-regular fa-clock"></i>

            </div>


            <div class="tz-dst-content">

                <div class="tz-dst-title">

                    Standard Time

                    <span class="tz-dst-current">

                        ${centralZone} · UTC−6

                    </span>

                </div>


                <div class="tz-dst-description">

                    Central Time is currently
                    <strong>${centralZone}</strong>.

                    Eastern Time is
                    <strong>${easternZone}</strong>.

                    ${
                        nextTransition
                            ? `
                                <span class="tz-dst-date">

                                    CDT starts
                                    ${tzFormatDstDate(
                                        nextTransition
                                    )}

                                </span>
                              `
                            : ""
                    }

                </div>

            </div>

        `;

    }
}


/* =========================================================
   LIVE CLOCKS
========================================================= */

function tzUpdateLiveClocks() {

    const now =
        new Date();


    const centralClock =
        document.getElementById(
            "tzCentralClock"
        );


    const easternClock =
        document.getElementById(
            "tzEasternClock"
        );


    const centralClockDate =
        document.getElementById(
            "tzCentralClockDate"
        );


    const easternClockDate =
        document.getElementById(
            "tzEasternClockDate"
        );


    if (centralClock) {

        centralClock.textContent =
            tzFormatTime(
                now,
                TZ_CENTRAL,
                true
            );

    }


    if (centralClockDate) {

        centralClockDate.textContent =
            tzFormatDate(
                now,
                TZ_CENTRAL
            );

    }


    if (easternClock) {

        easternClock.textContent =
            tzFormatTime(
                now,
                TZ_EASTERN,
                true
            );

    }


    if (easternClockDate) {

        easternClockDate.textContent =
            tzFormatDate(
                now,
                TZ_EASTERN
            );

    }


    tzUpdateNowMarker(
        "tzCentralNowMarker",
        "tzCentralNowLabel",
        TZ_CENTRAL
    );


    tzUpdateNowMarker(
        "tzEasternNowMarker",
        "tzEasternNowLabel",
        TZ_EASTERN
    );
}


/* =========================================================
   NOW MARKER
========================================================= */

function tzUpdateNowMarker(
    markerId,
    labelId,
    timezone
) {

    const marker =
        document.getElementById(
            markerId
        );


    const label =
        document.getElementById(
            labelId
        );


    if (
        !marker ||
        !label ||
        !tzTimelineStart
    ) {

        return;

    }


    const now =
        new Date();


    const elapsed =
        now.getTime()
        -
        tzTimelineStart.getTime();


    const total =
        24 *
        60 *
        60 *
        1000;


    const percentage =
        (
            elapsed /
            total
        ) * 100;


    if (
        percentage < 0 ||
        percentage > 100
    ) {

        marker.style.display =
            "none";

        label.style.display =
            "none";

        return;

    }


    marker.style.display =
        "block";


    label.style.display =
        "block";


    marker.style.left =
        percentage + "%";


    label.style.left =
        percentage + "%";


    label.textContent =
        tzFormatTime(
            now,
            timezone
        );
}


/* =========================================================
   MAIN RENDER
========================================================= */

function tzRender() {

    tzCalculateTimeline();


    tzUpdateDateHeaders();


    tzCreateTimeline(
        "tzCentralHours",
        TZ_CENTRAL
    );


    tzCreateTimeline(
        "tzEasternHours",
        TZ_EASTERN
    );


    tzUpdateSelectedClocks();


    tzUpdateCentralName();


    tzUpdateEasternName();


    tzUpdateResult();


    tzUpdateDstInfo();


    tzUpdateLiveClocks();
}


/* =========================================================
   TODAY
========================================================= */

function tzToday() {

    tzSelectedInstant =
        new Date();


    tzRender();
}


/* =========================================================
   PREVIOUS DAY
========================================================= */

function tzPreviousDay() {

    tzSelectedInstant =
        new Date(
            tzSelectedInstant.getTime()
            -
            24 *
            60 *
            60 *
            1000
        );


    tzRender();
}


/* =========================================================
   NEXT DAY
========================================================= */

function tzNextDay() {

    tzSelectedInstant =
        new Date(
            tzSelectedInstant.getTime()
            +
            24 *
            60 *
            60 *
            1000
        );


    tzRender();
}


/* =========================================================
   INITIALIZE
========================================================= */

tzToday();


/* =========================================================
   LIVE UPDATE
========================================================= */

setInterval(
    function () {

        /*
         * Live clocks continue ticking.
         *
         * Selected time DOES NOT move.
         */

        tzUpdateLiveClocks();

        tzUpdateDstInfo();

    },
    1000
);
