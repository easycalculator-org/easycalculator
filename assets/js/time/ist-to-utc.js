/* =========================================================
   EASY CALCULATOR
   IST → UTC
========================================================= */

const TZ_FROM = "Asia/Kolkata";
const TZ_TO   = "UTC";

let tzSelectedInstant = new Date();
let tzTimelineStart;


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
        parts.map(p => [p.type, p.value])
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
        p => p.type === "timeZoneName"
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
            second: seconds ? "2-digit" : undefined,
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
   UTC OFFSET
========================================================= */

function tzGetOffset(date, timezone) {

    if (timezone === "UTC") {
        return 0;
    }

    const parts = new Intl.DateTimeFormat(
        "en-US",
        {
            timeZone: timezone,
            timeZoneName: "longOffset"
        }
    ).formatToParts(date);

    const zone = parts.find(
        p => p.type === "timeZoneName"
    );

    if (!zone) return 0;

    const match = zone.value.match(
        /^GMT([+-])(\d{2}):(\d{2})$/
    );

    if (!match) return 0;

    const sign =
        match[1] === "+"
            ? 1
            : -1;

    return sign * (
        Number(match[2]) * 60 +
        Number(match[3])
    );
}


/* =========================================================
   TIME DIFFERENCE
========================================================= */

function tzGetDifference(date) {

    const fromOffset =
        tzGetOffset(date, TZ_FROM);

    const toOffset =
        tzGetOffset(date, TZ_TO);

    const difference =
        toOffset - fromOffset;

    const sign =
        difference >= 0
            ? "+"
            : "−";

    const absolute =
        Math.abs(difference);

    const hours =
        Math.floor(absolute / 60);

    const minutes =
        absolute % 60;

    let result =
        `${sign}${hours} ${
            hours === 1
                ? "HOUR"
                : "HOURS"
        }`;

    if (minutes) {
        result += ` ${minutes} MIN`;
    }

    return result;
}


/* =========================================================
   TIMELINE
========================================================= */

function tzCalculateTimeline() {

    const hour =
        60 * 60 * 1000;

    tzTimelineStart =
        new Date(
            Math.floor(
                (
                    tzSelectedInstant.getTime()
                    -
                    12 * hour
                ) / hour
            ) * hour
        );
}


/* =========================================================
   SAME HOUR
========================================================= */

function tzSameHour(a, b, timezone) {

    const x =
        tzParts(a, timezone);

    const y =
        tzParts(b, timezone);

    return (
        x.year === y.year &&
        x.month === y.month &&
        x.day === y.day &&
        x.hour === y.hour
    );
}


/* =========================================================
   CREATE 24 HOURS
========================================================= */

function tzCreateHours(
    elementId,
    timezone
) {

    const container =
        document.getElementById(elementId);

    if (!container) return;

    container.innerHTML = "";

    const hour =
        60 * 60 * 1000;

    for (let i = 0; i < 24; i++) {

        const instant =
            new Date(
                tzTimelineStart.getTime()
                +
                i * hour
            );

        const parts =
            tzParts(
                instant,
                timezone
            );

        const localHour =
            Number(parts.hour);

        const card =
            document.createElement("div");


        card.className =
            "tz-hour-card " +
            (
                localHour < 12
                    ? "am"
                    : "pm"
            );


        if (
            tzSameHour(
                instant,
                tzSelectedInstant,
                timezone
            )
        ) {
            card.classList.add("selected");
        }


        const displayHour =
            localHour % 12 || 12;

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


        card.addEventListener(
            "click",
            () => {

                tzSelectedInstant =
                    new Date(
                        instant.getTime()
                    );

                tzRender();
            }
        );


        container.appendChild(card);
    }
}


/* =========================================================
   SELECTED TIME
========================================================= */

function tzUpdateSelected() {

    const fromZone = "IST";
    const toZone = "UTC";


    const fromTime =
        tzFormatTime(
            tzSelectedInstant,
            TZ_FROM,
            true
        );

    const toTime =
        tzFormatTime(
            tzSelectedInstant,
            TZ_TO,
            true
        );


    const fromDate =
        tzFormatDate(
            tzSelectedInstant,
            TZ_FROM
        );

    const toDate =
        tzFormatDate(
            tzSelectedInstant,
            TZ_TO
        );


    document.getElementById(
        "tzSelectedFromZone"
    ).textContent = fromZone;

    document.getElementById(
        "tzSelectedToZone"
    ).textContent = toZone;

    document.getElementById(
        "tzSelectedFromLive"
    ).textContent = fromTime;

    document.getElementById(
        "tzSelectedToLive"
    ).textContent = toTime;

    document.getElementById(
        "tzSelectedFromDate"
    ).textContent = fromDate;

    document.getElementById(
        "tzSelectedToDate"
    ).textContent = toDate;


    document.getElementById(
        "tzSelectedFrom"
    ).textContent =
        `IST ${tzFormatTime(
            tzSelectedInstant,
            TZ_FROM
        )}`;


    document.getElementById(
        "tzSelectedTo"
    ).textContent =
        `UTC ${tzFormatTime(
            tzSelectedInstant,
            TZ_TO
        )}`;


    document.getElementById(
        "tzSelectedDate"
    ).textContent =
        fromDate !== toDate
            ? `${fromDate} → ${toDate}`
            : fromDate;


    document.querySelector(
        ".tz-result-gap"
    ).textContent =
        tzGetDifference(
            tzSelectedInstant
        );
}


/* =========================================================
   ZONE NAMES
========================================================= */

function tzUpdateNames() {

    document.getElementById(
        "tzFromCode"
    ).textContent = "IST";

    document.getElementById(
        "tzToCode"
    ).textContent = "UTC";


    document.getElementById(
        "tzFromName"
    ).textContent =
        "India Standard Time";


    document.getElementById(
        "tzToName"
    ).textContent =
        "Coordinated Universal Time";
}


/* =========================================================
   DATE HEADERS
========================================================= */

function tzUpdateDates() {

    document.getElementById(
        "tzFromDate"
    ).textContent =
        tzFormatDate(
            tzTimelineStart,
            TZ_FROM
        ).toUpperCase();


    document.getElementById(
        "tzToDate"
    ).textContent =
        tzFormatDate(
            tzTimelineStart,
            TZ_TO
        ).toUpperCase();
}


/* =========================================================
   LIVE CLOCK
========================================================= */

function tzUpdateLive() {

    const now = new Date();


    document.getElementById(
        "tzFromClock"
    ).textContent =
        tzFormatTime(
            now,
            TZ_FROM,
            true
        );


    document.getElementById(
        "tzToClock"
    ).textContent =
        tzFormatTime(
            now,
            TZ_TO,
            true
        );


    document.getElementById(
        "tzFromClockDate"
    ).textContent =
        tzFormatDate(
            now,
            TZ_FROM
        );


    document.getElementById(
        "tzToClockDate"
    ).textContent =
        tzFormatDate(
            now,
            TZ_TO
        );


    tzUpdateNowMarker(
        "tzFromNowMarker",
        "tzFromNowLabel",
        TZ_FROM
    );


    tzUpdateNowMarker(
        "tzToNowMarker",
        "tzToNowLabel",
        TZ_TO
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
        document.getElementById(markerId);

    const label =
        document.getElementById(labelId);


    if (
        !marker ||
        !label ||
        !tzTimelineStart
    ) return;


    const now = new Date();

    const total =
        24 * 60 * 60 * 1000;

    const elapsed =
        now.getTime()
        -
        tzTimelineStart.getTime();

    const percentage =
        elapsed / total * 100;


    if (
        percentage < 0 ||
        percentage > 100
    ) {

        marker.style.display = "none";
        label.style.display = "none";

        return;
    }


    marker.style.display = "block";
    label.style.display = "block";

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
   UTC INFORMATION
========================================================= */

function tzUpdateDST() {

    const element =
        document.getElementById(
            "tzDstInfo"
        );

    if (!element) return;


    element.innerHTML = `

        <div class="tz-dst-icon">
            <i class="fa-solid fa-globe"></i>
        </div>

        <div>

            <div class="tz-dst-title">

                Fixed Time Difference

                <span class="tz-dst-current">
                    IST → UTC
                </span>

            </div>

            <div class="tz-dst-description">

                India Standard Time remains at
                <strong>UTC+5:30</strong>
                throughout the year.

                UTC does not observe daylight saving time.

                The current difference is
                <strong>
                    ${tzGetDifference(new Date())}
                </strong>.

            </div>

        </div>
    `;
}


/* =========================================================
   RENDER
========================================================= */

function tzRender() {

    tzCalculateTimeline();

    tzUpdateDates();

    tzCreateHours(
        "tzFromHours",
        TZ_FROM
    );

    tzCreateHours(
        "tzToHours",
        TZ_TO
    );

    tzUpdateSelected();

    tzUpdateNames();

    tzUpdateLive();

    tzUpdateDST();
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
            24 * 60 * 60 * 1000
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
            24 * 60 * 60 * 1000
        );

    tzRender();
}


/* =========================================================
   INITIALIZE
========================================================= */

tzToday();


/* =========================================================
   LIVE UPDATE — EVERY SECOND
========================================================= */

setInterval(
    () => {

        tzUpdateLive();

    },
    1000
);