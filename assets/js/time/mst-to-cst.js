

/* =========================================================
   TIME ZONES
========================================================= */

const TZ_MST =
    "America/Phoenix";

const TZ_CENTRAL =
    "America/Chicago";


/* =========================================================
   STATE
========================================================= */

/*
 * This is the selected REAL moment in time.
 *
 * Important:
 * We do NOT add one second to this every second.
 *
 * A selected time remains selected until the user:
 * - clicks another hour
 * - clicks Today
 * - clicks Previous Day
 * - clicks Next Day
 */

let tzSelectedInstant =
    new Date();


let tzTimelineStart =
    null;


/* =========================================================
   TIMEZONE PARTS
========================================================= */

function tzParts(
    date,
    timezone
) {

    const parts =
        new Intl.DateTimeFormat(
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
        parts.map(
            part => [
                part.type,
                part.value
            ]
        )
    );

}


/* =========================================================
   TIMEZONE ABBREVIATION
========================================================= */

function tzAbbreviation(
    date,
    timezone
) {

    const parts =
        new Intl.DateTimeFormat(
            "en-US",
            {
                timeZone: timezone,

                timeZoneName: "short"
            }
        ).formatToParts(date);


    const zone =
        parts.find(
            part =>
                part.type ===
                "timeZoneName"
        );


    return zone
        ? zone.value
        : "";

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

function tzFormatDate(
    date,
    timezone
) {

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
   FORMAT LONG DATE
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
   GET UTC OFFSET IN MINUTES
========================================================= */

function tzGetOffset(
    date,
    timezone
) {

    const parts =
        new Intl.DateTimeFormat(
            "en-US",
            {
                timeZone: timezone,

                timeZoneName:
                    "longOffset"
            }
        ).formatToParts(date);


    const zone =
        parts.find(
            part =>
                part.type ===
                "timeZoneName"
        );


    if (
        !zone
    ) {

        return 0;

    }


    /*
     * Examples:
     *
     * GMT-07:00
     * GMT-06:00
     * GMT-05:00
     */

    const match =
        zone.value.match(
            /^GMT([+-])(\d{2}):(\d{2})$/
        );


    if (
        !match
    ) {

        /*
         * Some browsers can return
         * "GMT" for UTC.
         */

        if (
            zone.value === "GMT"
        ) {

            return 0;

        }

        return 0;

    }


    const sign =
        match[1] === "+"
            ? 1
            : -1;


    const hours =
        Number(
            match[2]
        );


    const minutes =
        Number(
            match[3]
        );


    return sign *
        (
            hours * 60 +
            minutes
        );

}


/* =========================================================
   CALCULATE TIME DIFFERENCE
========================================================= */

function tzGetDifferenceText(
    date
) {

    const mstOffset =
        tzGetOffset(
            date,
            TZ_MST
        );


    const centralOffset =
        tzGetOffset(
            date,
            TZ_CENTRAL
        );


    /*
     * Central - Mountain
     *
     * CST:
     * -6 - (-7) = +1 hour
     *
     * CDT:
     * -5 - (-7) = +2 hours
     */

    const difference =
        centralOffset -
        mstOffset;


    const sign =
        difference >= 0
            ? "+"
            : "-";


    const absolute =
        Math.abs(
            difference
        );


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


    if (
        minutes > 0
    ) {

        text +=
            ` ${minutes} MIN`;

    }


    return text;

}


/* =========================================================
   CALCULATE TIMELINE START
========================================================= */

function tzCalculateTimeline() {

    const hour =
        60 *
        60 *
        1000;


    /*
     * Start 12 hours before selected time.
     *
     * Always round down to the hour.
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
   CHECK SAME LOCAL HOUR
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


    if (
        !container
    ) {

        return;

    }


    container.innerHTML =
        "";


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
            Number(
                parts.hour
            );


        const card =
            document.createElement(
                "div"
            );


        /*
         * AM / PM styling
         */

        card.className =
            "tz-hour-card "
            +
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
         * 12-hour display
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
         * CLICK
         *
         * Store the actual instant.
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
   UPDATE DATE HEADERS
========================================================= */

function tzUpdateDateHeaders() {

    const mstDate =
        document.getElementById(
            "tzMstDate"
        );


    const centralDate =
        document.getElementById(
            "tzCentralDate"
        );


    if (
        mstDate
    ) {

        mstDate.textContent =
            tzFormatDate(
                tzTimelineStart,
                TZ_MST
            ).toUpperCase();

    }


    if (
        centralDate
    ) {

        centralDate.textContent =
            tzFormatDate(
                tzTimelineStart,
                TZ_CENTRAL
            ).toUpperCase();

    }

}


/* =========================================================
   UPDATE SELECTED BIG CLOCKS
========================================================= */

function tzUpdateSelectedClocks() {

    const mstZone =
        tzAbbreviation(
            tzSelectedInstant,
            TZ_MST
        );


    const centralZone =
        tzAbbreviation(
            tzSelectedInstant,
            TZ_CENTRAL
        );


    const mstTime =
        tzFormatTime(
            tzSelectedInstant,
            TZ_MST,
            true
        );


    const centralTime =
        tzFormatTime(
            tzSelectedInstant,
            TZ_CENTRAL,
            true
        );


    const mstDate =
        tzFormatDate(
            tzSelectedInstant,
            TZ_MST
        );


    const centralDate =
        tzFormatDate(
            tzSelectedInstant,
            TZ_CENTRAL
        );


    const mstZoneEl =
        document.getElementById(
            "tzSelectedMstZone"
        );


    const centralZoneEl =
        document.getElementById(
            "tzSelectedCentralZone"
        );


    const mstTimeEl =
        document.getElementById(
            "tzSelectedMstLive"
        );


    const centralTimeEl =
        document.getElementById(
            "tzSelectedCentralLive"
        );


    const mstDateEl =
        document.getElementById(
            "tzSelectedMstDate"
        );


    const centralDateEl =
        document.getElementById(
            "tzSelectedCentralDate"
        );


    if (
        mstZoneEl
    ) {

        mstZoneEl.textContent =
            mstZone;

    }


    if (
        centralZoneEl
    ) {

        centralZoneEl.textContent =
            centralZone;

    }


    if (
        mstTimeEl
    ) {

        mstTimeEl.textContent =
            mstTime;

    }


    if (
        centralTimeEl
    ) {

        centralTimeEl.textContent =
            centralTime;

    }


    if (
        mstDateEl
    ) {

        mstDateEl.textContent =
            mstDate;

    }


    if (
        centralDateEl
    ) {

        centralDateEl.textContent =
            centralDate;

    }

}


/* =========================================================
   UPDATE CENTRAL TIME NAME
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


    if (
        code
    ) {

        code.textContent =
            zone;

    }


    if (
        name
    ) {

        name.textContent =
            zone === "CDT"
                ? "Central Daylight Time"
                : "Central Standard Time";

    }

}


/* =========================================================
   UPDATE RESULT BAR
========================================================= */

function tzUpdateResult() {

    const mstZone =
        tzAbbreviation(
            tzSelectedInstant,
            TZ_MST
        );


    const centralZone =
        tzAbbreviation(
            tzSelectedInstant,
            TZ_CENTRAL
        );


    const mstTime =
        tzFormatTime(
            tzSelectedInstant,
            TZ_MST
        );


    const centralTime =
        tzFormatTime(
            tzSelectedInstant,
            TZ_CENTRAL
        );


    const mstDate =
        tzFormatDate(
            tzSelectedInstant,
            TZ_MST
        );


    const centralDate =
        tzFormatDate(
            tzSelectedInstant,
            TZ_CENTRAL
        );


    const gap =
        tzGetDifferenceText(
            tzSelectedInstant
        );


    const mstElement =
        document.getElementById(
            "tzSelectedMst"
        );


    const centralElement =
        document.getElementById(
            "tzSelectedCentral"
        );


    const gapElement =
        document.querySelector(
            ".tz-result-gap"
        );


    const dateElement =
        document.getElementById(
            "tzSelectedDate"
        );


    if (
        mstElement
    ) {

        mstElement.textContent =
            `${mstZone} ${mstTime}`;

    }


    if (
        centralElement
    ) {

        centralElement.textContent =
            `${centralZone} ${centralTime}`;

    }


    if (
        gapElement
    ) {

        gapElement.textContent =
            gap;

    }


    /*
     * Show date change only when required.
     */

    if (
        dateElement
    ) {

        if (
            mstDate !==
            centralDate
        ) {

            dateElement.textContent =
                `${mstDate} → ${centralDate}`;

        } else {

            dateElement.textContent =
                mstDate;

        }

    }

}


/* =========================================================
   DST TRANSITION SEARCH
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


    /*
     * Search up to one year ahead.
     */

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

            /*
             * We found the day of transition.
             */

            return testDate;

        }

    }


    return null;

}


/* =========================================================
   DST DATE FORMAT
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


    if (
        !container
    ) {

        return;

    }


    const now =
        new Date();


    const currentZone =
        tzAbbreviation(
            now,
            TZ_CENTRAL
        );


    const isDst =
        currentZone === "CDT";


    const nextTransition =
        tzGetNextDstTransition(
            now
        );


    /*
     * Current CDT
     */

    if (
        isDst
    ) {

        container.innerHTML = `

            <div class="tz-dst-icon">
                <i class="fa-solid fa-sun"></i>
            </div>

            <div class="tz-dst-content">

                <div class="tz-dst-title">

                    Daylight Saving Time

                    <span class="tz-dst-current">
                        CDT · UTC−5
                    </span>

                </div>

                <div class="tz-dst-description">

                    Central Time is currently
                    <strong>CDT</strong>.

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

    }


    /*
     * Current CST
     */

    else {

        container.innerHTML = `

            <div class="tz-dst-icon">
                <i class="fa-regular fa-clock"></i>
            </div>

            <div class="tz-dst-content">

                <div class="tz-dst-title">

                    Standard Time

                    <span class="tz-dst-current">
                        CST · UTC−6
                    </span>

                </div>

                <div class="tz-dst-description">

                    Central Time is currently
                    <strong>CST</strong>.

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


    const mstClock =
        document.getElementById(
            "tzMstClock"
        );


    const centralClock =
        document.getElementById(
            "tzCentralClock"
        );


    const mstClockDate =
        document.getElementById(
            "tzMstClockDate"
        );


    const centralClockDate =
        document.getElementById(
            "tzCentralClockDate"
        );


    if (
        mstClock
    ) {

        mstClock.textContent =
            tzFormatTime(
                now,
                TZ_MST,
                true
            );

    }


    if (
        mstClockDate
    ) {

        mstClockDate.textContent =
            tzFormatDate(
                now,
                TZ_MST
            );

    }


    if (
        centralClock
    ) {

        centralClock.textContent =
            tzFormatTime(
                now,
                TZ_CENTRAL,
                true
            );

    }


    if (
        centralClockDate
    ) {

        centralClockDate.textContent =
            tzFormatDate(
                now,
                TZ_CENTRAL
            );

    }


    /*
     * Current-time marker.
     */

    tzUpdateNowMarker(
        "tzMstNowMarker",
        "tzMstNowLabel",
        TZ_MST
    );


    tzUpdateNowMarker(
        "tzCentralNowMarker",
        "tzCentralNowLabel",
        TZ_CENTRAL
    );

}


/* =========================================================
   CURRENT TIME MARKER
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


    /*
     * Marker is outside timeline.
     */

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

    /*
     * Recalculate 24-hour window.
     */

    tzCalculateTimeline();


    /*
     * Timeline dates.
     */

    tzUpdateDateHeaders();


    /*
     * MST timeline.
     */

    tzCreateTimeline(
        "tzMstHours",
        TZ_MST
    );


    /*
     * Central timeline.
     */

    tzCreateTimeline(
        "tzCentralHours",
        TZ_CENTRAL
    );


    /*
     * Selected conversion.
     */

    tzUpdateSelectedClocks();


    tzUpdateCentralName();

    tzUpdateResult();


    /*
     * DST information.
     */

    tzUpdateDstInfo();


    /*
     * Real current clocks.
     */

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

    /*
     * Move exactly 24 hours.
     *
     * For the MST/Phoenix → Chicago
     * use case this keeps the selected
     * instant stable and predictable.
     */

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

        tzUpdateLiveClocks();

        tzUpdateDstInfo();

    },
    1000
);
