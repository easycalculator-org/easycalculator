---
layout: default
title: EST to CST Converter – Eastern Time to Central Time
permalink: /est-to-cst
description: "Convert EST to CST quickly with our free time zone converter. Find the time difference between Eastern Time and Central Time and easily convert dates and times."
last_modified_at: 2026-09-04
---

<style>
.tz-widget {
    width: 100%;
    background: #fff;
    border: 1px solid #e2e7eb;
    border-radius: 12px;
    box-shadow: 0 4px 18px rgba(30,50,70,.06);
    overflow: hidden;
    color: #263238;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;
}

.tz-toolbar {
    min-height: 54px;
    padding: 9px 15px;
    background: #fff;
    border-bottom: 1px solid #e8edf1;
}

.tz-toolbar-title {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    color: #35424d;
}

.tz-toolbar-title i {
    color: #6a98b9;
}

.tz-toolbar-right {
    display: flex;
    align-items: center;
    gap: 5px;
}

.tz-btn {
    min-height: 31px;
    padding: 5px 10px;
    border: 1px solid #dce3e8;
    border-radius: 6px;
    background: #fff;
    color: #59656f;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: .15s ease;
}

.tz-btn:hover {
    background: #f5f8fa;
    border-color: #cbd7df;
    color: #315f84;
}

.tz-nav-btn {
    width: 32px;
    padding: 4px 0;
}

.tz-today-btn {
    min-width: 86px;
}

.tz-selected-clocks {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: #fafcfd;
    border-bottom: 1px solid #e7ecf0;
}

.tz-selected-clock {
    padding: 16px 20px;
    text-align: center;
}

.tz-selected-clock + .tz-selected-clock {
    border-left: 1px solid #e7ecf0;
}

.tz-selected-zone {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .7px;
    color: #71808b;
    text-transform: uppercase;
}

.tz-selected-time {
    margin-top: 5px;
    font-size: 31px;
    line-height: 1.15;
    font-weight: 650;
    color: #263238;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
}

.tz-selected-date {
    margin-top: 5px;
    font-size: 11px;
    color: #89949d;
}

.tz-selected-status {
    margin-top: 6px;
    font-size: 9px;
    color: #9aa4ac;
    letter-spacing: .4px;
    text-transform: uppercase;
}

.tz-dst-info {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 16px;
    background: #f8fbfd;
    border-bottom: 1px solid #e6edf1;
    color: #60717c;
    font-size: 11px;
    line-height: 1.4;
}

.tz-dst-icon {
    width: 30px;
    height: 30px;
    flex: 0 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #edf5f9;
    color: #638ba5;
}

.tz-dst-title {
    font-size: 11px;
    font-weight: 700;
    color: #42535e;
}

.tz-dst-description {
    margin-top: 2px;
    color: #7d8991;
}

.tz-dst-current {
    display: inline-block;
    margin-left: 4px;
    padding: 2px 6px;
    border-radius: 4px;
    background: #eaf2f7;
    color: #587b92;
    font-size: 9px;
    font-weight: 700;
}

.tz-scroll {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: thin;
}

.tz-timeline {
    min-width: 1180px;
    background: #fff;
}

.tz-row {
    display: grid;
    grid-template-columns: 245px 1fr;
    min-height: 136px;
    border-bottom: 1px solid #edf0f3;
}

.tz-info {
    padding: 17px 18px;
    background: #fff;
    border-right: 1px solid #edf0f3;
}

.tz-code {
    font-size: 20px;
    line-height: 1;
    font-weight: 700;
    color: #263238;
}

.tz-name {
    margin-top: 6px;
    font-size: 12px;
    color: #6f7b85;
}

.tz-location {
    margin-top: 2px;
    font-size: 11px;
    color: #9aa3aa;
}

.tz-clock {
    margin-top: 13px;
    font-size: 24px;
    line-height: 1;
    font-weight: 650;
    color: #34414a;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
}

.tz-clock-date {
    margin-top: 5px;
    font-size: 10px;
    color: #929ca4;
}

.tz-live {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 6px;
    font-size: 9px;
    color: #89949d;
}

.tz-live-dot {
    width: 6px;
    height: 6px;
    flex: 0 0 6px;
    border-radius: 50%;
    background: #68a77c;
    box-shadow: 0 0 0 2px #edf7f0;
}

.tz-hours-area {
    position: relative;
    padding: 12px 14px 15px;
}

.tz-date-header {
    display: flex;
    align-items: center;
    height: 19px;
    margin-bottom: 7px;
    padding-left: 3px;
    font-size: 10px;
    font-weight: 650;
    color: #87919a;
    text-transform: uppercase;
    letter-spacing: .5px;
}

.tz-hours {
    display: grid;
    grid-template-columns: repeat(24,minmax(42px,1fr));
    gap: 6px;
    height: 70px;
}

.tz-hour-card {
    position: relative;
    min-width: 42px;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #e5eaee;
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
    transition: .12s ease;
}

.tz-hour-card.am {
    background: #f7fafc;
    border-color: #e1e9ef;
}

.tz-hour-card.am:hover {
    background: #edf5f9;
    border-color: #c9dce8;
    transform: translateY(-2px);
}

.tz-hour-card.pm {
    background: #fdfaf7;
    border-color: #eee5da;
}

.tz-hour-card.pm:hover {
    background: #f8f0e7;
    border-color: #ddcdbb;
    transform: translateY(-2px);
}

.tz-hour-number {
    font-size: 12px;
    line-height: 1;
    font-weight: 650;
    color: #4c5963;
}

.tz-hour-period {
    margin-top: 5px;
    font-size: 8px;
    line-height: 1;
    font-weight: 700;
}

.tz-hour-card.am .tz-hour-period {
    color: #7192a8;
}

.tz-hour-card.pm .tz-hour-period {
    color: #a17b56;
}

.tz-hour-card.selected {
    background: #72a7ce !important;
    border-color: #4f88b5 !important;
    box-shadow: 0 3px 9px rgba(70,120,160,.20);
    transform: translateY(-2px);
}

.tz-hour-card.selected .tz-hour-number,
.tz-hour-card.selected .tz-hour-period {
    color: #fff !important;
}

.tz-now-marker {
    position: absolute;
    top: 36px;
    bottom: 15px;
    width: 2px;
    background: #566773;
    border-radius: 2px;
    z-index: 20;
    pointer-events: none;
}

.tz-now-label {
    position: absolute;
    top: 25px;
    transform: translateX(-50%);
    padding: 3px 6px;
    border-radius: 4px;
    background: #566773;
    color: #fff;
    font-size: 8px;
    line-height: 1;
    white-space: nowrap;
    z-index: 21;
    pointer-events: none;
}

.tz-result {
    min-height: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 16px;
    background: #f8fafc;
    border-bottom: 1px solid #e6eaee;
    font-size: 14px;
    overflow-x: auto;
}

.tz-result-time {
    font-size: 15px;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
}

.eastern-result {
    color: #466f8c;
}

.central-result {
    color: #866a4d;
}

.tz-result-gap {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 24px;
    padding: 4px 9px;
    border-radius: 20px;
    background: #eaf2f7;
    border: 1px solid #d5e3eb;
    color: #58778d;
    font-size: 9px;
    font-weight: 700;
    white-space: nowrap;
}

.tz-result-arrow {
    color: #8b969e;
    font-size: 16px;
}

.tz-result-date {
    font-size: 10px;
    color: #89949d;
    white-space: nowrap;
}

@media (max-width:768px) {

    .tz-selected-clock {
        padding: 13px 8px;
    }

    .tz-selected-time {
        font-size: 23px;
    }

    .tz-timeline {
        min-width: 1000px;
    }

    .tz-row {
        grid-template-columns: 190px 1fr;
    }

    .tz-result {
        justify-content: flex-start;
    }
}

@media (max-width:480px) {

    .tz-toolbar-title i {
        display: none;
    }

    .tz-selected-time {
        font-size: 19px;
    }

    .tz-timeline {
        min-width: 950px;
    }

    .tz-row {
        grid-template-columns: 175px 1fr;
    }
}
</style>


<div class="tz-widget">

    <!-- TOOLBAR -->
    <div class="tz-toolbar">

        <div class="d-flex justify-content-between align-items-center">

            <div class="tz-toolbar-title">
                <i class="fa-solid fa-clock me-1"></i>
                EST to CST Time Converter
            </div>

            <div class="tz-toolbar-right">

                <button
                    type="button"
                    class="tz-btn tz-nav-btn"
                    onclick="tzPreviousDay()"
                    aria-label="Previous day">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>

                <button
                    type="button"
                    class="tz-btn tz-today-btn"
                    onclick="tzToday()">
                    Today · Now
                </button>

                <button
                    type="button"
                    class="tz-btn tz-nav-btn"
                    onclick="tzNextDay()"
                    aria-label="Next day">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>

            </div>

        </div>

    </div>


    <!-- SELECTED CLOCKS -->

    <div class="tz-selected-clocks">

        <div class="tz-selected-clock">

            <div
                id="tzSelectedFromZone"
                class="tz-selected-zone">
                EST
            </div>

            <div
                id="tzSelectedFromLive"
                class="tz-selected-time">
                --
            </div>

            <div
                id="tzSelectedFromDate"
                class="tz-selected-date">
                --
            </div>

            <div class="tz-selected-status">
                Selected Time
            </div>

        </div>


        <div class="tz-selected-clock">

            <div
                id="tzSelectedToZone"
                class="tz-selected-zone">
                CST
            </div>

            <div
                id="tzSelectedToLive"
                class="tz-selected-time">
                --
            </div>

            <div
                id="tzSelectedToDate"
                class="tz-selected-date">
                --
            </div>

            <div class="tz-selected-status">
                Converted Time
            </div>

        </div>

    </div>


    <!-- DST -->

    <div
        id="tzDstInfo"
        class="tz-dst-info">
    </div>


    <!-- TIMELINE -->

    <div class="tz-scroll">

        <div class="tz-timeline">

            <!-- EASTERN -->

            <div class="tz-row">

                <div class="tz-info">

                    <div
                        id="tzFromCode"
                        class="tz-code">
                        EST
                    </div>

                    <div
                        id="tzFromName"
                        class="tz-name">
                        Eastern Standard Time
                    </div>

                    <div class="tz-location">
                        New York, New York
                    </div>

                    <div
                        id="tzFromClock"
                        class="tz-clock">
                        --
                    </div>

                    <div
                        id="tzFromClockDate"
                        class="tz-clock-date">
                        --
                    </div>

                    <div class="tz-live">
                        <span class="tz-live-dot"></span>
                        Live time
                    </div>

                </div>


                <div class="tz-hours-area">

                    <div
                        id="tzFromDate"
                        class="tz-date-header">
                        --
                    </div>

                    <div
                        id="tzFromHours"
                        class="tz-hours">
                    </div>

                    <div
                        id="tzFromNowMarker"
                        class="tz-now-marker">
                    </div>

                    <div
                        id="tzFromNowLabel"
                        class="tz-now-label">
                    </div>

                </div>

            </div>


            <!-- CENTRAL -->

            <div class="tz-row">

                <div class="tz-info">

                    <div
                        id="tzToCode"
                        class="tz-code">
                        CST
                    </div>

                    <div
                        id="tzToName"
                        class="tz-name">
                        Central Standard Time
                    </div>

                    <div class="tz-location">
                        Chicago, Illinois
                    </div>

                    <div
                        id="tzToClock"
                        class="tz-clock">
                        --
                    </div>

                    <div
                        id="tzToClockDate"
                        class="tz-clock-date">
                        --
                    </div>

                    <div class="tz-live">
                        <span class="tz-live-dot"></span>
                        Live time
                    </div>

                </div>


                <div class="tz-hours-area">

                    <div
                        id="tzToDate"
                        class="tz-date-header">
                        --
                    </div>

                    <div
                        id="tzToHours"
                        class="tz-hours">
                    </div>

                    <div
                        id="tzToNowMarker"
                        class="tz-now-marker">
                    </div>

                    <div
                        id="tzToNowLabel"
                        class="tz-now-label">
                    </div>

                </div>

            </div>

        </div>

    </div>


    <!-- RESULT -->

    <div class="tz-result">

        <span
            id="tzSelectedFrom"
            class="tz-result-time eastern-result">
            EST --
        </span>

        <span class="tz-result-gap">
            −1 HOUR
        </span>

        <span class="tz-result-arrow">
            →
        </span>

        <span
            id="tzSelectedTo"
            class="tz-result-time central-result">
            CST --
        </span>

        <span
            id="tzSelectedDate"
            class="tz-result-date">
            --
        </span>

    </div>

</div>


<script src="{{ '/assets/js/time/est-to-cst.js' | relative_url }}"></script>