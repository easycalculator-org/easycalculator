---
layout: default
title: Time Zone Converter – Convert Time Between Time Zones
permalink: /time-zone-converter
description: "Free time zone converter to convert date and time between IST, EST, CST, MST, PST, UTC and world time zones. Check time differences and plan meetings easily."
#image: "/assets/images/time-zone-converter.jpg"
last_modified_at: 2026-08-02
---




<style>
 /* =========================================
   TIME ZONE CONVERTER
========================================= */

.tz-hero {
    background: linear-gradient(
        180deg,
        #f8fbff 0%,
        #ffffff 100%
    );
}

.tz-badge {
    display: inline-block;
    padding: 7px 14px;
    border-radius: 50px;
    background: #eef5ff;
    color: #0d6efd;
    font-size: 0.85rem;
    font-weight: 600;
}

.tz-converter-card {
    max-width: 1050px;
    margin: -15px auto 0;
    position: relative;
    background: #ffffff;
    border-radius: 18px;
    padding: 32px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
    border: 1px solid #edf0f5;
}

.tz-swap {
    width: 48px;
    height: 48px;
    padding: 0;
}

.tz-result {
    background: #f5f9ff;
    border: 1px solid #dceaff;
    border-radius: 14px;
    padding: 22px;
}

.tz-result-date {
    font-size: 1rem;
    font-weight: 600;
}

.tz-result-time {
    font-size: 2.2rem;
    line-height: 1.2;
    font-weight: 700;
    color: #0d6efd;
}

.tz-link-card {
    display: block;
    background: #fff;
    border: 1px solid #e3e7ed;
    border-radius: 10px;
    padding: 14px 16px;
    color: #212529;
    text-decoration: none;
    text-align: center;
    font-weight: 600;
    transition: all 0.2s ease;
}

.tz-link-card:hover {
    color: #0d6efd;
    border-color: #0d6efd;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,.06);
}

.tz-city {
    width: 100%;
    text-align: left;
    border: 1px solid #e4e7eb;
    background: #fff;
    border-radius: 10px;
    padding: 13px 15px;
    font-weight: 600;
    transition: all .2s ease;
}

.tz-city small {
    display: block;
    color: #6c757d;
    font-weight: 400;
    margin-top: 3px;
}

.tz-city:hover {
    border-color: #0d6efd;
    color: #0d6efd;
    background: #f8fbff;
}

.tz-article {
    max-width: 900px;
}

.tz-article p,
.tz-article li {
    color: #4d5560;
    line-height: 1.75;
}

.tz-article h2,
.tz-article h3 {
    color: #212529;
}

@media (max-width: 767px) {

    .tz-converter-card {
        padding: 20px;
        border-radius: 14px;
    }

    .tz-swap {
        transform: rotate(90deg);
        margin: 5px auto;
    }

    .tz-result-time {
        font-size: 1.8rem;
    }

    .tz-hero h1 {
        font-size: 2rem;
    }

}
</style>   


<main>

<!-- =========================
     HERO
========================= -->
<section class="tz-hero py-5">
    <div class="container">
        <div class="row justify-content-center text-center">
            <div class="col-lg-9">

                <div class="tz-badge mb-3">
                    <i class="fa-regular fa-clock me-2"></i>
                    Free Online Time Zone Tool
                </div>

                <h1 class="display-5 fw-bold mb-3">
                    Time Zone Converter
                </h1>

                <p class="lead text-muted mb-0">
                    Convert date and time between time zones instantly.
                    Compare IST, EST, CST, MST, PST, UTC, GMT and
                    hundreds of locations around the world.
                </p>

            </div>
        </div>
    </div>
</section>


<!-- =========================
     TIME ZONE CONVERTER
========================= -->
<section class="pb-5">
    <div class="container">

        <div class="tz-converter-card">

            <div class="text-center mb-4">
                <h2 class="h3 fw-bold mb-2">
                    Convert Time Between Time Zones
                </h2>

                <p class="text-muted mb-0">
                    Select a date, time and time zones to get the exact
                    local time in another location.
                </p>
            </div>

            <div class="row g-4 align-items-end">

                <!-- FROM -->
                <div class="col-lg-5">

                    <label for="tzFrom" class="form-label fw-semibold">
                        From Time Zone
                    </label>

                    <select id="tzFrom" class="form-select form-select-lg">
                        <option value="Asia/Kolkata" selected>
                            🇮🇳 India Standard Time (IST) — Kolkata
                        </option>

                        <option value="America/New_York">
                            🇺🇸 Eastern Time (ET) — New York
                        </option>

                        <option value="America/Chicago">
                            🇺🇸 Central Time (CT) — Chicago
                        </option>

                        <option value="America/Denver">
                            🇺🇸 Mountain Time (MT) — Denver
                        </option>

                        <option value="America/Los_Angeles">
                            🇺🇸 Pacific Time (PT) — Los Angeles
                        </option>

                        <option value="Europe/London">
                            🇬🇧 United Kingdom — London
                        </option>

                        <option value="Europe/Paris">
                            🇫🇷 France — Paris
                        </option>

                        <option value="Europe/Berlin">
                            🇩🇪 Germany — Berlin
                        </option>

                        <option value="Europe/Madrid">
                            🇪🇸 Spain — Madrid
                        </option>

                        <option value="Europe/Rome">
                            🇮🇹 Italy — Rome
                        </option>

                        <option value="Europe/Amsterdam">
                            🇳🇱 Netherlands — Amsterdam
                        </option>

                        <option value="UTC">
                            🌐 UTC — Coordinated Universal Time
                        </option>

                        <option value="Asia/Tokyo">
                            🇯🇵 Japan — Tokyo
                        </option>

                        <option value="Asia/Singapore">
                            🇸🇬 Singapore — Singapore
                        </option>

                        <option value="Australia/Sydney">
                            🇦🇺 Australia — Sydney
                        </option>
                    </select>

                </div>


                <!-- SWAP -->
                <div class="col-lg-2 text-center">

                    <button
                        type="button"
                        id="swapZones"
                        class="btn btn-outline-primary rounded-circle tz-swap"
                        aria-label="Swap time zones"
                        title="Swap time zones">

                        <i class="fa-solid fa-right-left"></i>

                    </button>

                </div>


                <!-- TO -->
                <div class="col-lg-5">

                    <label for="tzTo" class="form-label fw-semibold">
                        To Time Zone
                    </label>

                    <select id="tzTo" class="form-select form-select-lg">

                        <option value="America/New_York" selected>
                            🇺🇸 Eastern Time (ET) — New York
                        </option>

                        <option value="America/Chicago">
                            🇺🇸 Central Time (CT) — Chicago
                        </option>

                        <option value="America/Denver">
                            🇺🇸 Mountain Time (MT) — Denver
                        </option>

                        <option value="America/Los_Angeles">
                            🇺🇸 Pacific Time (PT) — Los Angeles
                        </option>

                        <option value="Asia/Kolkata">
                            🇮🇳 India Standard Time (IST) — Kolkata
                        </option>

                        <option value="Europe/London">
                            🇬🇧 United Kingdom — London
                        </option>

                        <option value="Europe/Paris">
                            🇫🇷 France — Paris
                        </option>

                        <option value="Europe/Berlin">
                            🇩🇪 Germany — Berlin
                        </option>

                        <option value="Europe/Madrid">
                            🇪🇸 Spain — Madrid
                        </option>

                        <option value="Europe/Rome">
                            🇮🇹 Italy — Rome
                        </option>

                        <option value="Europe/Amsterdam">
                            🇳🇱 Netherlands — Amsterdam
                        </option>

                        <option value="UTC">
                            🌐 UTC — Coordinated Universal Time
                        </option>

                        <option value="Asia/Tokyo">
                            🇯🇵 Japan — Tokyo
                        </option>

                        <option value="Asia/Singapore">
                            🇸🇬 Singapore — Singapore
                        </option>

                        <option value="Australia/Sydney">
                            🇦🇺 Australia — Sydney
                        </option>

                    </select>

                </div>


                <!-- DATE -->
                <div class="col-md-6">

                    <label for="tzDate" class="form-label fw-semibold">
                        Date
                    </label>

                    <input
                        type="date"
                        id="tzDate"
                        class="form-control form-control-lg">

                </div>


                <!-- TIME -->
                <div class="col-md-6">

                    <label for="tzTime" class="form-label fw-semibold">
                        Time
                    </label>

                    <input
                        type="time"
                        id="tzTime"
                        class="form-control form-control-lg"
                        value="10:00">

                </div>

            </div>


            <!-- RESULT -->
            <div id="tzResult" class="tz-result mt-4">

                <div class="row align-items-center">

                    <div class="col-md-6">

                        <div class="small text-muted mb-1">
                            Converted Local Time
                        </div>

                        <div id="convertedDate" class="tz-result-date">
                            --
                        </div>

                        <div id="convertedTime" class="tz-result-time">
                            --
                        </div>

                    </div>

                    <div class="col-md-6 mt-3 mt-md-0">

                        <div class="small text-muted">
                            Time Zone
                        </div>

                        <div id="convertedZone" class="fw-semibold">
                            --
                        </div>

                        <div id="timeDifference"
                             class="small text-muted mt-1">
                            --
                        </div>

                    </div>

                </div>

            </div>


            <div class="text-center mt-3">

                <button
                    type="button"
                    id="useNow"
                    class="btn btn-sm btn-outline-secondary">

                    <i class="fa-regular fa-clock me-1"></i>
                    Use Current Date & Time

                </button>

            </div>

        </div>

    </div>
</section>


<!-- =========================
     QUICK CONVERSIONS
========================= -->
<section class="py-5 bg-light">

    <div class="container">

        <div class="text-center mb-4">

            <h2 class="h3 fw-bold">
                Popular Time Zone Converters
            </h2>

            <p class="text-muted">
                Quickly convert between frequently used time zones.
            </p>

        </div>

        <div class="row g-3">

            <div class="col-6 col-md-4 col-lg-3">
                <a href="/mst-to-cst" class="tz-link-card">
                    MST to CST
                </a>
            </div>

            <div class="col-6 col-md-4 col-lg-3">
                <a href="/cst-to-mst" class="tz-link-card">
                    CST to MST
                </a>
            </div>

            <div class="col-6 col-md-4 col-lg-3">
                <a href="/est-to-cst" class="tz-link-card">
                    EST to CST
                </a>
            </div>

            <div class="col-6 col-md-4 col-lg-3">
                <a href="/cst-to-est" class="tz-link-card">
                    CST to EST
                </a>
            </div>

            <div class="col-6 col-md-4 col-lg-3">
                <a href="/pst-to-est" class="tz-link-card">
                    PST to EST
                </a>
            </div>

            <div class="col-6 col-md-4 col-lg-3">
                <a href="/est-to-pst" class="tz-link-card">
                    EST to PST
                </a>
            </div>

            <div class="col-6 col-md-4 col-lg-3">
                <a href="/mst-to-est" class="tz-link-card">
                    MST to EST
                </a>
            </div>

            <div class="col-6 col-md-4 col-lg-3">
                <a href="/est-to-mst" class="tz-link-card">
                    EST to MST
                </a>
            </div>

            <div class="col-6 col-md-4 col-lg-3">
                <a href="/pst-to-cst" class="tz-link-card">
                    PST to CST
                </a>
            </div>

            <div class="col-6 col-md-4 col-lg-3">
                <a href="/cst-to-pst" class="tz-link-card">
                    CST to PST
                </a>
            </div>

            <div class="col-6 col-md-4 col-lg-3">
                <a href="/ist-to-est" class="tz-link-card">
                    IST to EST
                </a>
            </div>

            <div class="col-6 col-md-4 col-lg-3">
                <a href="/ist-to-cst" class="tz-link-card">
                    IST to CST
                </a>
            </div>

            <div class="col-6 col-md-4 col-lg-3">
                <a href="/ist-to-mst" class="tz-link-card">
                    IST to MST
                </a>
            </div>

            <div class="col-6 col-md-4 col-lg-3">
                <a href="/ist-to-pst" class="tz-link-card">
                    IST to PST
                </a>
            </div>

            <div class="col-6 col-md-4 col-lg-3">
                <a href="/utc-to-ist" class="tz-link-card">
                    UTC to IST
                </a>
            </div>

            <div class="col-6 col-md-4 col-lg-3">
                <a href="/ist-to-utc" class="tz-link-card">
                    IST to UTC
                </a>
            </div>

        </div>

    </div>

</section>


<!-- =========================
     POPULAR WORLD ZONES
========================= -->
<section class="py-5">

    <div class="container">

        <div class="text-center mb-5">

            <h2 class="h3 fw-bold">
                Popular World Time Zones
            </h2>

            <p class="text-muted mb-0">
                Choose a major city to use its local time zone.
            </p>

        </div>


        <div class="row g-4">

            <!-- USA -->
            <div class="col-lg-6">

                <div class="card border-0 shadow-sm h-100">

                    <div class="card-body p-4">

                        <h3 class="h4 fw-bold mb-3">
                            🇺🇸 United States
                        </h3>

                        <div class="row g-2">

                            <div class="col-sm-6">
                                <button class="tz-city"
                                    data-zone="America/New_York">
                                    New York
                                    <small>Eastern Time</small>
                                </button>
                            </div>

                            <div class="col-sm-6">
                                <button class="tz-city"
                                    data-zone="America/Chicago">
                                    Chicago
                                    <small>Central Time</small>
                                </button>
                            </div>

                            <div class="col-sm-6">
                                <button class="tz-city"
                                    data-zone="America/Denver">
                                    Denver
                                    <small>Mountain Time</small>
                                </button>
                            </div>

                            <div class="col-sm-6">
                                <button class="tz-city"
                                    data-zone="America/Los_Angeles">
                                    Los Angeles
                                    <small>Pacific Time</small>
                                </button>
                            </div>

                            <div class="col-sm-6">
                                <button class="tz-city"
                                    data-zone="America/Phoenix">
                                    Phoenix
                                    <small>Mountain Time</small>
                                </button>
                            </div>

                            <div class="col-sm-6">
                                <button class="tz-city"
                                    data-zone="Pacific/Honolulu">
                                    Honolulu
                                    <small>Hawaii Time</small>
                                </button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <!-- EUROPE -->
            <div class="col-lg-6">

                <div class="card border-0 shadow-sm h-100">

                    <div class="card-body p-4">

                        <h3 class="h4 fw-bold mb-3">
                            🌍 Western Europe
                        </h3>

                        <div class="row g-2">

                            <div class="col-sm-6">
                                <button class="tz-city"
                                    data-zone="Europe/London">
                                    London
                                    <small>UK · GMT / BST</small>
                                </button>
                            </div>

                            <div class="col-sm-6">
                                <button class="tz-city"
                                    data-zone="Europe/Paris">
                                    Paris
                                    <small>France</small>
                                </button>
                            </div>

                            <div class="col-sm-6">
                                <button class="tz-city"
                                    data-zone="Europe/Berlin">
                                    Berlin
                                    <small>Germany</small>
                                </button>
                            </div>

                            <div class="col-sm-6">
                                <button class="tz-city"
                                    data-zone="Europe/Madrid">
                                    Madrid
                                    <small>Spain</small>
                                </button>
                            </div>

                            <div class="col-sm-6">
                                <button class="tz-city"
                                    data-zone="Europe/Rome">
                                    Rome
                                    <small>Italy</small>
                                </button>
                            </div>

                            <div class="col-sm-6">
                                <button class="tz-city"
                                    data-zone="Europe/Amsterdam">
                                    Amsterdam
                                    <small>Netherlands</small>
                                </button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <!-- ASIA -->
            <div class="col-lg-6">

                <div class="card border-0 shadow-sm h-100">

                    <div class="card-body p-4">

                        <h3 class="h4 fw-bold mb-3">
                            🌏 Asia
                        </h3>

                        <div class="row g-2">

                            <div class="col-sm-6">
                                <button class="tz-city"
                                    data-zone="Asia/Kolkata">
                                    Mumbai / Delhi
                                    <small>India · IST</small>
                                </button>
                            </div>

                            <div class="col-sm-6">
                                <button class="tz-city"
                                    data-zone="Asia/Tokyo">
                                    Tokyo
                                    <small>Japan</small>
                                </button>
                            </div>

                            <div class="col-sm-6">
                                <button class="tz-city"
                                    data-zone="Asia/Singapore">
                                    Singapore
                                    <small>Singapore</small>
                                </button>
                            </div>

                            <div class="col-sm-6">
                                <button class="tz-city"
                                    data-zone="Asia/Dubai">
                                    Dubai
                                    <small>UAE</small>
                                </button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <!-- AUSTRALIA -->
            <div class="col-lg-6">

                <div class="card border-0 shadow-sm h-100">

                    <div class="card-body p-4">

                        <h3 class="h4 fw-bold mb-3">
                            🌏 Australia & Pacific
                        </h3>

                        <div class="row g-2">

                            <div class="col-sm-6">
                                <button class="tz-city"
                                    data-zone="Australia/Sydney">
                                    Sydney
                                    <small>Australia</small>
                                </button>
                            </div>

                            <div class="col-sm-6">
                                <button class="tz-city"
                                    data-zone="Australia/Melbourne">
                                    Melbourne
                                    <small>Australia</small>
                                </button>
                            </div>

                            <div class="col-sm-6">
                                <button class="tz-city"
                                    data-zone="Pacific/Auckland">
                                    Auckland
                                    <small>New Zealand</small>
                                </button>
                            </div>

                            <div class="col-sm-6">
                                <button class="tz-city"
                                    data-zone="Pacific/Honolulu">
                                    Honolulu
                                    <small>Hawaii</small>
                                </button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>


<!-- =========================
     ABOUT ARTICLE
========================= -->
<section class="py-5 bg-light">

    <div class="container">

        <article class="tz-article mx-auto">

            <h2 class="h3 fw-bold mb-4">
                Time Zone Converter: Convert Time Around the World
            </h2>

            <p>
                A time zone converter helps you find the equivalent local
                time in another part of the world. This is useful when
                planning meetings, calling friends and family, scheduling
                online events, working with international teams, or
                checking the time in another country.
            </p>

            <p>
                EasyCalculator's Time Zone Converter lets you select a
                date, time, starting time zone and destination time zone.
                The tool then calculates the corresponding local time.
            </p>


            <h3 class="h5 fw-bold mt-4">
                How to use the time zone converter
            </h3>

            <ol>
                <li>Select the time zone where your original time is located.</li>
                <li>Select the destination time zone.</li>
                <li>Choose the date.</li>
                <li>Enter the time you want to convert.</li>
                <li>View the converted local time.</li>
            </ol>


            <h3 class="h5 fw-bold mt-4">
                What are IST, EST, CST, MST and PST?
            </h3>

            <p>
                Time zone abbreviations are commonly used to describe
                different regions. IST is commonly used for India Standard
                Time. In the United States, Eastern, Central, Mountain and
                Pacific Time are often abbreviated as ET, CT, MT and PT.
            </p>

            <p>
                Standard-time abbreviations such as EST, CST, MST and PST
                can be confusing because many locations change their clocks
                for daylight saving time. For this reason, a geographic
                time-zone identifier such as
                <code>America/New_York</code> or
                <code>America/Chicago</code> is more reliable for software
                calculations.
            </p>


            <h3 class="h5 fw-bold mt-4">
                Time zones and daylight saving time
            </h3>

            <p>
                Some countries and regions change their clocks during part
                of the year. This means that the difference between two
                locations may change depending on the date.
            </p>

            <p>
                For example, the difference between India and a US location
                can change when the US changes between standard time and
                daylight time. Always include the date when converting
                between locations that observe daylight saving time.
            </p>


            <h3 class="h5 fw-bold mt-4">
                Why use a time zone converter?
            </h3>

            <p>
                International schedules can become difficult when people
                live in different time zones. A time zone converter makes
                it easier to check the local time before arranging a
                meeting, phone call, interview, webinar or other event.
            </p>

            <p>
                The converter can also help compare popular locations such
                as New York, Chicago, Denver, Los Angeles, London, Paris,
                Berlin, Mumbai, Tokyo and Sydney.
            </p>

        </article>

    </div>

</section>


<!-- =========================
     FAQ
========================= -->
<section class="py-5">

    <div class="container">

        <div class="tz-article mx-auto">

            <h2 class="h3 fw-bold mb-4">
                Frequently Asked Questions
            </h2>

            <div class="accordion" id="timezoneFAQ">

                <div class="accordion-item">
                    <h3 class="accordion-header">
                        <button class="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq1">
                            What is a time zone converter?
                        </button>
                    </h3>

                    <div id="faq1"
                         class="accordion-collapse collapse show"
                         data-bs-parent="#timezoneFAQ">

                        <div class="accordion-body">
                            A time zone converter changes a date and time
                            from one geographic time zone to another.
                        </div>

                    </div>
                </div>


                <div class="accordion-item">
                    <h3 class="accordion-header">
                        <button class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq2">
                            How do I convert IST to US time?
                        </button>
                    </h3>

                    <div id="faq2"
                         class="accordion-collapse collapse"
                         data-bs-parent="#timezoneFAQ">

                        <div class="accordion-body">
                            Select India Standard Time as the starting
                            time zone and choose the required US location,
                            such as New York, Chicago, Denver or Los Angeles.
                            Then select the date and time to see the
                            corresponding local time.
                        </div>

                    </div>
                </div>


                <div class="accordion-item">
                    <h3 class="accordion-header">
                        <button class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq3">
                            Is CST always one hour ahead of MST?
                        </button>
                    </h3>

                    <div id="faq3"
                         class="accordion-collapse collapse"
                         data-bs-parent="#timezoneFAQ">

                        <div class="accordion-body">
                            The answer depends on the geographic locations
                            and the date. Daylight saving time can change
                            the offset used by a location, so a date-aware
                            converter is more reliable than a fixed
                            abbreviation-to-offset calculation.
                        </div>

                    </div>
                </div>


                <div class="accordion-item">
                    <h3 class="accordion-header">
                        <button class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq4">
                            Does this converter account for daylight saving time?
                        </button>
                    </h3>

                    <div id="faq4"
                         class="accordion-collapse collapse"
                         data-bs-parent="#timezoneFAQ">

                        <div class="accordion-body">
                            Yes. The converter uses geographic time-zone
                            identifiers provided by the browser's
                            internationalization system, allowing the
                            selected date to be considered when determining
                            the local time.
                        </div>

                    </div>
                </div>


                <div class="accordion-item">
                    <h3 class="accordion-header">
                        <button class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq5">
                            Can I convert UTC to IST?
                        </button>
                    </h3>

                    <div id="faq5"
                         class="accordion-collapse collapse"
                         data-bs-parent="#timezoneFAQ">

                        <div class="accordion-body">
                            Yes. Select UTC as the source time zone and
                            India Standard Time as the destination.
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </div>

</section>


<!-- =========================
     RELATED LINKS
========================= -->
<section class="pb-5">

    <div class="container">

        <div class="text-center">

            <h2 class="h4 fw-bold mb-3">
                More Time Zone Tools
            </h2>

            <div class="d-flex flex-wrap gap-2 justify-content-center">

                <a href="/time-zone-converter"
                   class="btn btn-outline-primary">
                    Time Zone Converter
                </a>

                <a href="/ist-to-est"
                   class="btn btn-outline-secondary">
                    IST to EST
                </a>

                <a href="/ist-to-cst"
                   class="btn btn-outline-secondary">
                    IST to CST
                </a>

                <a href="/ist-to-pst"
                   class="btn btn-outline-secondary">
                    IST to PST
                </a>

                <a href="/utc-to-ist"
                   class="btn btn-outline-secondary">
                    UTC to IST
                </a>

                <a href="/mst-to-cst"
                   class="btn btn-outline-secondary">
                    MST to CST
                </a>

            </div>

        </div>

    </div>

</section>

</main>

<script>
(function () {

    const fromSelect = document.getElementById("tzFrom");
    const toSelect = document.getElementById("tzTo");
    const dateInput = document.getElementById("tzDate");
    const timeInput = document.getElementById("tzTime");

    const convertedDate = document.getElementById("convertedDate");
    const convertedTime = document.getElementById("convertedTime");
    const convertedZone = document.getElementById("convertedZone");
    const timeDifference = document.getElementById("timeDifference");

    const swapButton = document.getElementById("swapZones");
    const useNowButton = document.getElementById("useNow");

    const pad = n => String(n).padStart(2, "0");


    function setCurrentDateTime() {

        const now = new Date();

        const year = now.getFullYear();
        const month = pad(now.getMonth() + 1);
        const day = pad(now.getDate());

        dateInput.value = `${year}-${month}-${day}`;

        dateInput.dispatchEvent(new Event("change"));

        const hours = pad(now.getHours());
        const minutes = pad(now.getMinutes());

        timeInput.value = `${hours}:${minutes}`;

    }


    /*
     * Convert a local date/time in one IANA zone
     * into a Date representing the correct instant.
     *
     * This uses the browser's Intl implementation.
     */
    function localTimeToInstant(dateString, timeString, timeZone) {

        const [year, month, day] = dateString.split("-").map(Number);
        const [hour, minute] = timeString.split(":").map(Number);

        let guess = new Date(
            Date.UTC(year, month - 1, day, hour, minute)
        );

        for (let i = 0; i < 5; i++) {

            const parts = new Intl.DateTimeFormat("en-US", {
                timeZone: timeZone,
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                hourCycle: "h23"
            }).formatToParts(guess);

            const values = {};

            parts.forEach(part => {
                if (part.type !== "literal") {
                    values[part.type] = Number(part.value);
                }
            });

            const asUTC = Date.UTC(
                values.year,
                values.month - 1,
                values.day,
                values.hour,
                values.minute
            );

            const desiredUTC = Date.UTC(
                year,
                month - 1,
                day,
                hour,
                minute
            );

            const difference = desiredUTC - asUTC;

            if (Math.abs(difference) < 1000) {
                break;
            }

            guess = new Date(guess.getTime() + difference);
        }

        return guess;
    }


    function getTimeZoneParts(date, timeZone) {

        return new Intl.DateTimeFormat("en-US", {
            timeZone: timeZone,
            year: "numeric",
            month: "long",
            day: "numeric",
            weekday: "long",
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit",
            timeZoneName: "long"
        }).formatToParts(date);

    }


    function getOffset(date, timeZone) {

        const parts = new Intl.DateTimeFormat("en-US", {
            timeZone: timeZone,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hourCycle: "h23"
        }).formatToParts(date);

        const values = {};

        parts.forEach(part => {
            if (part.type !== "literal") {
                values[part.type] = Number(part.value);
            }
        });

        const utcTime = Date.UTC(
            values.year,
            values.month - 1,
            values.day,
            values.hour,
            values.minute,
            values.second
        );

        return Math.round(
            (utcTime - date.getTime()) / 60000
        );

    }


    function formatOffset(minutes) {

        const sign = minutes >= 0 ? "+" : "-";
        const absolute = Math.abs(minutes);

        const hours = Math.floor(absolute / 60);
        const mins = absolute % 60;

        return `UTC${sign}${hours}${mins ? ":" + pad(mins) : ""}`;

    }


    function getZoneName(zone) {

        const option = [...fromSelect.options, ...toSelect.options]
            .find(option => option.value === zone);

        return option
            ? option.textContent.trim()
            : zone;

    }


    function convertTime() {

        if (!dateInput.value || !timeInput.value) {
            return;
        }

        const fromZone = fromSelect.value;
        const toZone = toSelect.value;

        const instant = localTimeToInstant(
            dateInput.value,
            timeInput.value,
            fromZone
        );

        const parts = getTimeZoneParts(
            instant,
            toZone
        );

        const values = {};

        parts.forEach(part => {
            if (part.type !== "literal") {
                values[part.type] = part.value;
            }
        });


        convertedDate.textContent =
            `${values.weekday}, ${values.month} ${values.day}, ${values.year}`;

        convertedTime.textContent =
            `${values.hour}:${values.minute}:${values.second} ${values.dayPeriod || ""}`;


        convertedZone.textContent =
            getZoneName(toZone);


        const fromOffset = getOffset(
            instant,
            fromZone
        );

        const toOffset = getOffset(
            instant,
            toZone
        );

        const difference = toOffset - fromOffset;

        let differenceText;

        if (difference === 0) {

            differenceText = "Same time zone offset";

        } else {

            const direction =
                difference > 0 ? "ahead" : "behind";

            const abs = Math.abs(difference);

            const hours = Math.floor(abs / 60);
            const minutes = abs % 60;

            let amount = "";

            if (hours) {
                amount += `${hours} hour${hours !== 1 ? "s" : ""}`;
            }

            if (minutes) {

                if (amount) {
                    amount += " ";
                }

                amount += `${minutes} minute${minutes !== 1 ? "s" : ""}`;
            }

            differenceText =
                `${getZoneName(toZone).split("—")[0].trim()} is ${amount} ${direction}`;
        }

        timeDifference.textContent =
            `${differenceText} · ${formatOffset(toOffset)}`;

    }


    fromSelect.addEventListener("change", convertTime);
    toSelect.addEventListener("change", convertTime);
    dateInput.addEventListener("change", convertTime);
    timeInput.addEventListener("input", convertTime);


    swapButton.addEventListener("click", function () {

        const oldFrom = fromSelect.value;

        fromSelect.value = toSelect.value;
        toSelect.value = oldFrom;

        convertTime();

    });


    useNowButton.addEventListener("click", function () {

        const now = new Date();

        dateInput.value =
            `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;

        timeInput.value =
            `${pad(now.getHours())}:${pad(now.getMinutes())}`;

        convertTime();

    });


    document.querySelectorAll(".tz-city").forEach(button => {

        button.addEventListener("click", function () {

            toSelect.value = this.dataset.zone;

            document.querySelector(".tz-converter-card")
                .scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            convertTime();

        });

    });


    // Initialize
    setCurrentDateTime();
    convertTime();

})();
</script>