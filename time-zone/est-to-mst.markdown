---
layout: default
title: EST to MST Converter – Eastern Time to Mountain Time
permalink: /est-to-mst
description: "Convert EST to MST quickly with our free time zone converter. Find the time difference between Eastern Time and Mountain Time and easily convert dates and times."
last_modified_at: 2026-09-04
---

<div class="tz-widget">

    <!-- TOOLBAR -->
    <div class="tz-toolbar">
        <div class="d-flex justify-content-between align-items-center">

            <div class="tz-toolbar-title">
                <i class="fa-solid fa-clock me-1"></i>
                EST to MST Time Converter
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

            <div id="tzSelectedFromZone"
                 class="tz-selected-zone">
                EST
            </div>

            <div id="tzSelectedFromLive"
                 class="tz-selected-time">
                --
            </div>

            <div id="tzSelectedFromDate"
                 class="tz-selected-date">
                --
            </div>

            <div class="tz-selected-status">
                Selected Time
            </div>

        </div>


        <div class="tz-selected-clock">

            <div id="tzSelectedToZone"
                 class="tz-selected-zone">
                MST
            </div>

            <div id="tzSelectedToLive"
                 class="tz-selected-time">
                --
            </div>

            <div id="tzSelectedToDate"
                 class="tz-selected-date">
                --
            </div>

            <div class="tz-selected-status">
                Converted Time
            </div>

        </div>

    </div>


    <!-- DST -->

    <div id="tzDstInfo"
         class="tz-dst-info">
    </div>


    <!-- TIMELINE -->

    <div class="tz-scroll">

        <div class="tz-timeline">


            <!-- EASTERN -->

            <div class="tz-row">

                <div class="tz-info">

                    <div id="tzFromCode"
                         class="tz-code">
                        EST
                    </div>

                    <div id="tzFromName"
                         class="tz-name">
                        Eastern Standard Time
                    </div>

                    <div class="tz-location">
                        New York, New York
                    </div>

                    <div id="tzFromClock"
                         class="tz-clock">
                        --
                    </div>

                    <div id="tzFromClockDate"
                         class="tz-clock-date">
                        --
                    </div>

                    <div class="tz-live">
                        <span class="tz-live-dot"></span>
                        Live time
                    </div>

                </div>


                <div class="tz-hours-area">

                    <div id="tzFromDate"
                         class="tz-date-header">
                        --
                    </div>

                    <div id="tzFromHours"
                         class="tz-hours">
                    </div>

                    <div id="tzFromNowMarker"
                         class="tz-now-marker">
                    </div>

                    <div id="tzFromNowLabel"
                         class="tz-now-label">
                    </div>

                </div>

            </div>


            <!-- MOUNTAIN -->

            <div class="tz-row">

                <div class="tz-info">

                    <div id="tzToCode"
                         class="tz-code">
                        MST
                    </div>

                    <div id="tzToName"
                         class="tz-name">
                        Mountain Standard Time
                    </div>

                    <div class="tz-location">
                        Denver, Colorado
                    </div>

                    <div id="tzToClock"
                         class="tz-clock">
                        --
                    </div>

                    <div id="tzToClockDate"
                         class="tz-clock-date">
                        --
                    </div>

                    <div class="tz-live">
                        <span class="tz-live-dot"></span>
                        Live time
                    </div>

                </div>


                <div class="tz-hours-area">

                    <div id="tzToDate"
                         class="tz-date-header">
                        --
                    </div>

                    <div id="tzToHours"
                         class="tz-hours">
                    </div>

                    <div id="tzToNowMarker"
                         class="tz-now-marker">
                    </div>

                    <div id="tzToNowLabel"
                         class="tz-now-label">
                    </div>

                </div>

            </div>

        </div>

    </div>


    <!-- RESULT -->

    <div class="tz-result">

        <span id="tzSelectedFrom"
              class="tz-result-time eastern-result">
            EST --
        </span>

        <span class="tz-result-gap">
            −2 HOURS
        </span>

        <span class="tz-result-arrow">
            →
        </span>

        <span id="tzSelectedTo"
              class="tz-result-time mountain-result">
            MST --
        </span>

        <span id="tzSelectedDate"
              class="tz-result-date">
            --
        </span>

    </div>

</div>


<script src="{{ '/assets/js/time/est-to-mst.js' | relative_url }}"></script>