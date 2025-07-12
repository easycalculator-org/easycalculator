---
layout: default
title: Title 
permalink: /123
description: "description"
#image: "/assets/images/age-calc-open-graph.png"
---
<script type="text/javascript">
  let jinjaVars = {
    pageType: "world-map-timezones"
  };

  const isRealAgent = () => {
    const botPattern = "googlebot|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|bingbot|slurp|java|wget|curl";
    const re = new RegExp(botPattern, "gi");
    const userAgent = navigator.userAgent;
    return !re.test(userAgent);
  };

  (() => {
    const realAgent = isRealAgent();
    const adstack = new URL(window.location.href).searchParams.get("adstack");
    let currentAdstack = "";

    if (realAgent && adstack !== "publift-disabled") {
      const dynExpGroup = parseInt(dataLayer[0].dynExpGroup.replace("v", ""));
      const loadFuse = (adstack === "publift") || dynExpGroup <= 32; // default all groups to Publift

      if (loadFuse) {
        currentAdstack = "publift";
        const fuseScriptTag = document.createElement("script");
        fuseScriptTag.async = true;
        fuseScriptTag.src = "https://cdn.fuseplatform.net/publift/tags/2/3751/fuse.js";
        document.head.appendChild(fuseScriptTag);
      }
    }

  })();
</script>


 <script type="text/javascript">
        const siteLang = navigator.language;
        const dateTimeFormat = new Intl.DateTimeFormat(siteLang, {
            hour: 'numeric',
            minute: 'numeric',
        });
        const formattedDate = dateTimeFormat.format(new Date());
        const timeFormat = formattedDate.match(/\b(?:am|pm)\b/gi) ? 12 : 24;

        if (!localStorage.getItem("timeFormat")) localStorage.setItem("timeFormat", timeFormat);

        const getTimeFormat = () => parseInt(localStorage.getItem("timeFormat"), 10);

        const addLeadingZeros = number => number < 10 ? `0${number}` : number;

        const getTime = (dateObject, is24Hr = false, utcHours = true, ignoreZeros = false) => {
            const is24format = is24Hr ? true : getTimeFormat() === 24;
            const hoursToUse = utcHours ? dateObject.getUTCHours() : dateObject.getHours();
            const minutes = utcHours ? dateObject.getUTCMinutes() : dateObject.getMinutes();

            if (is24format) return `${addLeadingZeros(hoursToUse)}:${addLeadingZeros(minutes)}`;
            else {
                const hours = hoursToUse > 12 ? hoursToUse - 12 : hoursToUse;
                const minutesFor12Format = ignoreZeros && minutes === 0 ? "" : `:${addLeadingZeros(minutes)}`;
                return `${hours}${minutesFor12Format}`;
            }
        };
        const getMeridiem = (dateObject, utcHours = true) => {
            if (getTimeFormat() === 12) {
                const hoursToUse = utcHours ? dateObject.getUTCHours() : dateObject.getHours();
                return hoursToUse >= 12 ? "PM" : "AM";
            } else return "";
        };
        const dstInEffect = (transitionData, dateObject = null, utcDate = false) => {
            if (!transitionData.has_dst) return false;

            const rawOffset = utcDate ? 0 : transitionData.raw_offset;
            const dstOffset = utcDate ? 0 : transitionData.dst_offset;
            const currentTime = dateObject !== null ? (dateObject.getTime() / 1000) : jinjaVars.serverTime;
            const dstStarts = transitionData.dst_starts + rawOffset - 1;
            const dstEnds = transitionData.dst_ends + dstOffset - 1;
            const dstHasStarted = currentTime > dstStarts;
            const dstHasEnded = currentTime > dstEnds;
            return (!dstHasStarted && !dstHasEnded && dstStarts > dstEnds) || (dstHasStarted && !dstHasEnded);
        };
    </script>

<style type="text/css">
       
        .mapboxgl-map {
            font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
            overflow: hidden;
            position: relative;
            -webkit-tap-highlight-color: transparent
        }

        .mapboxgl-map:-webkit-full-screen {
            width: 100%;
            height: 100%
        }

        .mapboxgl-canary {
            background-color: salmon
        }

     
        .mapboxgl-canvas-container.mapboxgl-interactive:active,
        .mapboxgl-ctrl-group>button.mapboxgl-ctrl-compass:active {
            cursor: -webkit-grabbing;
            cursor: -moz-grabbing;
            cursor: grabbing
        }

        .mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate,
        .mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate .mapboxgl-canvas {
            touch-action: pan-x pan-y
        }

        .mapboxgl-canvas-container.mapboxgl-touch-drag-pan,
        .mapboxgl-canvas-container.mapboxgl-touch-drag-pan .mapboxgl-canvas {
            touch-action: pinch-zoom
        }

        .mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate.mapboxgl-touch-drag-pan,
        .mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate.mapboxgl-touch-drag-pan .mapboxgl-canvas {
            touch-action: none
        }

        .mapboxgl-ctrl-bottom-left,
        .mapboxgl-ctrl-bottom-right,
        .mapboxgl-ctrl-top-left,
        .mapboxgl-ctrl-top-right {
            position: absolute;
            pointer-events: none;
            z-index: 2
        }

        .mapboxgl-ctrl-top-left {
            top: 0;
            left: 0
        }

        .mapboxgl-ctrl-top-right {
            top: 0;
            right: 0
        }

        .mapboxgl-ctrl-bottom-left {
            bottom: 0;
            left: 0
        }

        .mapboxgl-ctrl-bottom-right {
            right: 0;
            bottom: 0
        }

        .mapboxgl-ctrl {
            clear: both;
            pointer-events: auto
        }

      
        .mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-waiting {
            -webkit-animation: mapboxgl-spin 2s infinite linear;
            -moz-animation: mapboxgl-spin 2s infinite linear;
            -o-animation: mapboxgl-spin 2s infinite linear;
            -ms-animation: mapboxgl-spin 2s infinite linear;
            animation: mapboxgl-spin 2s infinite linear
        }

        @-webkit-keyframes mapboxgl-spin {
            0% {
                -webkit-transform: rotate(0)
            }

            100% {
                -webkit-transform: rotate(360deg)
            }
        }

        @-moz-keyframes mapboxgl-spin {
            0% {
                -moz-transform: rotate(0)
            }

            100% {
                -moz-transform: rotate(360deg)
            }
        }

        @-o-keyframes mapboxgl-spin {
            0% {
                -o-transform: rotate(0)
            }

            100% {
                -o-transform: rotate(360deg)
            }
        }

        @-ms-keyframes mapboxgl-spin {
            0% {
                -ms-transform: rotate(0)
            }

            100% {
                -ms-transform: rotate(360deg)
            }
        }

        @keyframes mapboxgl-spin {
            0% {
                transform: rotate(0)
            }

            100% {
                transform: rotate(360deg)
            }
        }

        .mapboxgl-ctrl-icon.mapboxgl-ctrl-fullscreen {
            background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M 5 4 C 4.5 4 4 4.5 4 5 L 4 6 L 4 9 L 4.5 9 L 5.7773438 7.296875 C 6.7771319 8.0602131 7.835765 8.9565728 8.890625 10 C 7.8257121 11.0633 6.7761791 11.951675 5.78125 12.707031 L 4.5 11 L 4 11 L 4 15 C 4 15.5 4.5 16 5 16 L 9 16 L 9 15.5 L 7.2734375 14.205078 C 8.0428931 13.187886 8.9395441 12.133481 9.9609375 11.068359 C 11.042371 12.14699 11.942093 13.2112 12.707031 14.21875 L 11 15.5 L 11 16 L 14 16 L 15 16 C 15.5 16 16 15.5 16 15 L 16 14 L 16 11 L 15.5 11 L 14.205078 12.726562 C 13.177985 11.949617 12.112718 11.043577 11.037109 10.009766 C 12.151856 8.981061 13.224345 8.0798624 14.228516 7.3046875 L 15.5 9 L 16 9 L 16 5 C 16 4.5 15.5 4 15 4 L 11 4 L 11 4.5 L 12.703125 5.7773438 C 11.932647 6.7864834 11.026693 7.8554712 9.9707031 8.9199219 C 8.9584739 7.8204943 8.0698767 6.7627188 7.3046875 5.7714844 L 9 4.5 L 9 4 L 6 4 L 5 4 z '/%3E %3C/svg%3E")
        }

        .mapboxgl-ctrl-icon.mapboxgl-ctrl-shrink {
            background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath style='fill:%23000000;' d='M 4.2421875 3.4921875 A 0.750075 0.750075 0 0 0 3.71875 4.78125 L 5.9648438 7.0273438 L 4 8.5 L 4 9 L 8 9 C 8.500001 8.9999988 9 8.4999992 9 8 L 9 4 L 8.5 4 L 7.0175781 5.9550781 L 4.78125 3.71875 A 0.750075 0.750075 0 0 0 4.2421875 3.4921875 z M 15.734375 3.4921875 A 0.750075 0.750075 0 0 0 15.21875 3.71875 L 12.984375 5.953125 L 11.5 4 L 11 4 L 11 8 C 11 8.4999992 11.499999 8.9999988 12 9 L 16 9 L 16 8.5 L 14.035156 7.0273438 L 16.28125 4.78125 A 0.750075 0.750075 0 0 0 15.734375 3.4921875 z M 4 11 L 4 11.5 L 5.9648438 12.972656 L 3.71875 15.21875 A 0.75130096 0.75130096 0 1 0 4.78125 16.28125 L 7.0273438 14.035156 L 8.5 16 L 9 16 L 9 12 C 9 11.500001 8.500001 11.000001 8 11 L 4 11 z M 12 11 C 11.499999 11.000001 11 11.500001 11 12 L 11 16 L 11.5 16 L 12.972656 14.035156 L 15.21875 16.28125 A 0.75130096 0.75130096 0 1 0 16.28125 15.21875 L 14.035156 12.972656 L 16 11.5 L 16 11 L 12 11 z '/%3E %3C/svg%3E")
        }

        .mapboxgl-ctrl-icon.mapboxgl-ctrl-compass>.mapboxgl-ctrl-compass-arrow {
            width: 20px;
            height: 20px;
            margin: 5px;
            background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E %3Cpolygon fill='%23333333' points='6,9 10,1 14,9'/%3E %3Cpolygon fill='%23CCCCCC' points='6,11 10,19 14,11 '/%3E %3C/svg%3E");
            background-repeat: no-repeat;
            display: inline-block
        }

        a.mapboxgl-ctrl-logo {
            width: 85px;
            height: 21px;
            margin: 0 0 -3px -3px;
            display: block;
            background-repeat: no-repeat;
            cursor: pointer;
            background-image: url("data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='utf-8'?%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 84.49 21' style='enable-background:new 0 0 84.49 21;' xml:space='preserve'%3E%3Cg%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M83.25,14.26c0,0.12-0.09,0.21-0.21,0.21h-1.61c-0.13,0-0.24-0.06-0.3-0.17l-1.44-2.39l-1.44,2.39 c-0.06,0.11-0.18,0.17-0.3,0.17h-1.61c-0.04,0-0.08-0.01-0.12-0.03c-0.09-0.06-0.13-0.19-0.06-0.28l0,0l2.43-3.68L76.2,6.84 c-0.02-0.03-0.03-0.07-0.03-0.12c0-0.12,0.09-0.21,0.21-0.21h1.61c0.13,0,0.24,0.06,0.3,0.17l1.41,2.36l1.4-2.35 c0.06-0.11,0.18-0.17,0.3-0.17H83c0.04,0,0.08,0.01,0.12,0.03c0.09,0.06,0.13,0.19,0.06,0.28l0,0l-2.37,3.63l2.43,3.67 C83.24,14.18,83.25,14.22,83.25,14.26z'/%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M66.24,9.59c-0.39-1.88-1.96-3.28-3.84-3.28c-1.03,0-2.03,0.42-2.73,1.18V3.51c0-0.13-0.1-0.23-0.23-0.23h-1.4 c-0.13,0-0.23,0.11-0.23,0.23v10.72c0,0.13,0.1,0.23,0.23,0.23h1.4c0.13,0,0.23-0.11,0.23-0.23V13.5c0.71,0.75,1.7,1.18,2.73,1.18 c1.88,0,3.45-1.41,3.84-3.29C66.37,10.79,66.37,10.18,66.24,9.59L66.24,9.59z M62.08,13c-1.32,0-2.39-1.11-2.41-2.48v-0.06 c0.02-1.38,1.09-2.48,2.41-2.48s2.42,1.12,2.42,2.51S63.41,13,62.08,13z'/%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M71.67,6.32c-1.98-0.01-3.72,1.35-4.16,3.29c-0.13,0.59-0.13,1.19,0,1.77c0.44,1.94,2.17,3.32,4.17,3.3 c2.35,0,4.26-1.87,4.26-4.19S74.04,6.32,71.67,6.32z M71.65,13.01c-1.33,0-2.42-1.12-2.42-2.51s1.08-2.52,2.42-2.52 c1.33,0,2.42,1.12,2.42,2.51S72.99,13,71.65,13.01L71.65,13.01z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M62.08,7.98c-1.32,0-2.39,1.11-2.41,2.48v0.06C59.68,11.9,60.75,13,62.08,13s2.42-1.12,2.42-2.51 S63.41,7.98,62.08,7.98z M62.08,11.76c-0.63,0-1.14-0.56-1.17-1.25v-0.04c0.01-0.69,0.54-1.25,1.17-1.25 c0.63,0,1.17,0.57,1.17,1.27C63.24,11.2,62.73,11.76,62.08,11.76z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M71.65,7.98c-1.33,0-2.42,1.12-2.42,2.51S70.32,13,71.65,13s2.42-1.12,2.42-2.51S72.99,7.98,71.65,7.98z M71.65,11.76c-0.64,0-1.17-0.57-1.17-1.27c0-0.7,0.53-1.26,1.17-1.26s1.17,0.57,1.17,1.27C72.82,11.21,72.29,11.76,71.65,11.76z'/%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M45.74,6.53h-1.4c-0.13,0-0.23,0.11-0.23,0.23v0.73c-0.71-0.75-1.7-1.18-2.73-1.18 c-2.17,0-3.94,1.87-3.94,4.19s1.77,4.19,3.94,4.19c1.04,0,2.03-0.43,2.73-1.19v0.73c0,0.13,0.1,0.23,0.23,0.23h1.4 c0.13,0,0.23-0.11,0.23-0.23V6.74c0-0.12-0.09-0.22-0.22-0.22C45.75,6.53,45.75,6.53,45.74,6.53z M44.12,10.53 C44.11,11.9,43.03,13,41.71,13s-2.42-1.12-2.42-2.51s1.08-2.52,2.4-2.52c1.33,0,2.39,1.11,2.41,2.48L44.12,10.53z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M41.71,7.98c-1.33,0-2.42,1.12-2.42,2.51S40.37,13,41.71,13s2.39-1.11,2.41-2.48v-0.06 C44.1,9.09,43.03,7.98,41.71,7.98z M40.55,10.49c0-0.7,0.52-1.27,1.17-1.27c0.64,0,1.14,0.56,1.17,1.25v0.04 c-0.01,0.68-0.53,1.24-1.17,1.24C41.08,11.75,40.55,11.19,40.55,10.49z'/%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M52.41,6.32c-1.03,0-2.03,0.42-2.73,1.18V6.75c0-0.13-0.1-0.23-0.23-0.23h-1.4c-0.13,0-0.23,0.11-0.23,0.23 v10.72c0,0.13,0.1,0.23,0.23,0.23h1.4c0.13,0,0.23-0.1,0.23-0.23V13.5c0.71,0.75,1.7,1.18,2.74,1.18c2.17,0,3.94-1.87,3.94-4.19 S54.58,6.32,52.41,6.32z M52.08,13.01c-1.32,0-2.39-1.11-2.42-2.48v-0.07c0.02-1.38,1.09-2.49,2.4-2.49c1.32,0,2.41,1.12,2.41,2.51 S53.4,13,52.08,13.01L52.08,13.01z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M52.08,7.98c-1.32,0-2.39,1.11-2.42,2.48v0.06c0.03,1.38,1.1,2.48,2.42,2.48s2.41-1.12,2.41-2.51 S53.4,7.98,52.08,7.98z M52.08,11.76c-0.63,0-1.14-0.56-1.17-1.25v-0.04c0.01-0.69,0.54-1.25,1.17-1.25c0.63,0,1.17,0.58,1.17,1.27 S52.72,11.76,52.08,11.76z'/%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M36.08,14.24c0,0.13-0.1,0.23-0.23,0.23h-1.41c-0.13,0-0.23-0.11-0.23-0.23V9.68c0-0.98-0.74-1.71-1.62-1.71 c-0.8,0-1.46,0.7-1.59,1.62l0.01,4.66c0,0.13-0.11,0.23-0.23,0.23h-1.41c-0.13,0-0.23-0.11-0.23-0.23V9.68 c0-0.98-0.74-1.71-1.62-1.71c-0.85,0-1.54,0.79-1.6,1.8v4.48c0,0.13-0.1,0.23-0.23,0.23h-1.4c-0.13,0-0.23-0.11-0.23-0.23V6.74 c0.01-0.13,0.1-0.22,0.23-0.22h1.4c0.13,0,0.22,0.11,0.23,0.22V7.4c0.5-0.68,1.3-1.09,2.16-1.1h0.03c1.09,0,2.09,0.6,2.6,1.55 c0.45-0.95,1.4-1.55,2.44-1.56c1.62,0,2.93,1.25,2.9,2.78L36.08,14.24z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M84.34,13.59l-0.07-0.13l-1.96-2.99l1.94-2.95c0.44-0.67,0.26-1.56-0.41-2.02c-0.02,0-0.03,0-0.04-0.01 c-0.23-0.15-0.5-0.22-0.78-0.22h-1.61c-0.56,0-1.08,0.29-1.37,0.78L79.72,6.6l-0.34-0.56C79.09,5.56,78.57,5.27,78,5.27h-1.6 c-0.6,0-1.13,0.37-1.35,0.92c-2.19-1.66-5.28-1.47-7.26,0.45c-0.35,0.34-0.65,0.72-0.89,1.14c-0.9-1.62-2.58-2.72-4.5-2.72 c-0.5,0-1.01,0.07-1.48,0.23V3.51c0-0.82-0.66-1.48-1.47-1.48h-1.4c-0.81,0-1.47,0.66-1.47,1.47v3.75 c-0.95-1.36-2.5-2.18-4.17-2.19c-0.74,0-1.46,0.16-2.12,0.47c-0.24-0.17-0.54-0.26-0.84-0.26h-1.4c-0.45,0-0.87,0.21-1.15,0.56 c-0.02-0.03-0.04-0.05-0.07-0.08c-0.28-0.3-0.68-0.47-1.09-0.47h-1.39c-0.3,0-0.6,0.09-0.84,0.26c-0.67-0.3-1.39-0.46-2.12-0.46 c-1.83,0-3.43,1-4.37,2.5c-0.2-0.46-0.48-0.89-0.83-1.25c-0.8-0.81-1.89-1.25-3.02-1.25h-0.01c-0.89,0.01-1.75,0.33-2.46,0.88 c-0.74-0.57-1.64-0.88-2.57-0.88H28.1c-0.29,0-0.58,0.03-0.86,0.11c-0.28,0.06-0.56,0.16-0.82,0.28c-0.21-0.12-0.45-0.18-0.7-0.18 h-1.4c-0.82,0-1.47,0.66-1.47,1.47v7.5c0,0.82,0.66,1.47,1.47,1.47h1.4c0.82,0,1.48-0.66,1.48-1.48l0,0V9.79 c0.03-0.36,0.23-0.59,0.36-0.59c0.18,0,0.38,0.18,0.38,0.47v4.57c0,0.82,0.66,1.47,1.47,1.47h1.41c0.82,0,1.47-0.66,1.47-1.47 l-0.01-4.57c0.06-0.32,0.25-0.47,0.35-0.47c0.18,0,0.38,0.18,0.38,0.47v4.57c0,0.82,0.66,1.47,1.47,1.47h1.41 c0.82,0,1.47-0.66,1.47-1.47v-0.38c0.96,1.29,2.46,2.06,4.06,2.06c0.74,0,1.46-0.16,2.12-0.47c0.24,0.17,0.54,0.26,0.84,0.26h1.39 c0.3,0,0.6-0.09,0.84-0.26v2.01c0,0.82,0.66,1.47,1.47,1.47h1.4c0.82,0,1.47-0.66,1.47-1.47v-1.77c0.48,0.15,0.99,0.23,1.49,0.22 c1.7,0,3.22-0.87,4.17-2.2v0.52c0,0.82,0.66,1.47,1.47,1.47h1.4c0.3,0,0.6-0.09,0.84-0.26c0.66,0.31,1.39,0.47,2.12,0.47 c1.92,0,3.6-1.1,4.49-2.73c1.54,2.65,4.95,3.53,7.58,1.98c0.18-0.11,0.36-0.22,0.53-0.36c0.22,0.55,0.76,0.91,1.35,0.9H78 c0.56,0,1.08-0.29,1.37-0.78l0.37-0.61l0.37,0.61c0.29,0.48,0.81,0.78,1.38,0.78h1.6c0.81,0,1.46-0.66,1.45-1.46 C84.49,14.02,84.44,13.8,84.34,13.59L84.34,13.59z M35.86,14.47h-1.41c-0.13,0-0.23-0.11-0.23-0.23V9.68 c0-0.98-0.74-1.71-1.62-1.71c-0.8,0-1.46,0.7-1.59,1.62l0.01,4.66c0,0.13-0.1,0.23-0.23,0.23h-1.41c-0.13,0-0.23-0.11-0.23-0.23 V9.68c0-0.98-0.74-1.71-1.62-1.71c-0.85,0-1.54,0.79-1.6,1.8v4.48c0,0.13-0.1,0.23-0.23,0.23h-1.4c-0.13,0-0.23-0.11-0.23-0.23 V6.74c0.01-0.13,0.11-0.22,0.23-0.22h1.4c0.13,0,0.22,0.11,0.23,0.22V7.4c0.5-0.68,1.3-1.09,2.16-1.1h0.03 c1.09,0,2.09,0.6,2.6,1.55c0.45-0.95,1.4-1.55,2.44-1.56c1.62,0,2.93,1.25,2.9,2.78l0.01,5.16C36.09,14.36,35.98,14.46,35.86,14.47 L35.86,14.47z M45.97,14.24c0,0.13-0.1,0.23-0.23,0.23h-1.4c-0.13,0-0.23-0.11-0.23-0.23V13.5c-0.7,0.76-1.69,1.18-2.72,1.18 c-2.17,0-3.94-1.87-3.94-4.19s1.77-4.19,3.94-4.19c1.03,0,2.02,0.43,2.73,1.18V6.74c0-0.13,0.1-0.23,0.23-0.23h1.4 c0.12-0.01,0.22,0.08,0.23,0.21c0,0.01,0,0.01,0,0.02v7.51h-0.01V14.24z M52.41,14.67c-1.03,0-2.02-0.43-2.73-1.18v3.97 c0,0.13-0.1,0.23-0.23,0.23h-1.4c-0.13,0-0.23-0.1-0.23-0.23V6.75c0-0.13,0.1-0.22,0.23-0.22h1.4c0.13,0,0.23,0.11,0.23,0.23v0.73 c0.71-0.76,1.7-1.18,2.73-1.18c2.17,0,3.94,1.86,3.94,4.18S54.58,14.67,52.41,14.67z M66.24,11.39c-0.39,1.87-1.96,3.29-3.84,3.29 c-1.03,0-2.02-0.43-2.73-1.18v0.73c0,0.13-0.1,0.23-0.23,0.23h-1.4c-0.13,0-0.23-0.11-0.23-0.23V3.51c0-0.13,0.1-0.23,0.23-0.23 h1.4c0.13,0,0.23,0.11,0.23,0.23v3.97c0.71-0.75,1.7-1.18,2.73-1.17c1.88,0,3.45,1.4,3.84,3.28C66.37,10.19,66.37,10.8,66.24,11.39 L66.24,11.39L66.24,11.39z M71.67,14.68c-2,0.01-3.73-1.35-4.17-3.3c-0.13-0.59-0.13-1.19,0-1.77c0.44-1.94,2.17-3.31,4.17-3.3 c2.36,0,4.26,1.87,4.26,4.19S74.03,14.68,71.67,14.68L71.67,14.68z M83.04,14.47h-1.61c-0.13,0-0.24-0.06-0.3-0.17l-1.44-2.39 l-1.44,2.39c-0.06,0.11-0.18,0.17-0.3,0.17h-1.61c-0.04,0-0.08-0.01-0.12-0.03c-0.09-0.06-0.13-0.19-0.06-0.28l0,0l2.43-3.68 L76.2,6.84c-0.02-0.03-0.03-0.07-0.03-0.12c0-0.12,0.09-0.21,0.21-0.21h1.61c0.13,0,0.24,0.06,0.3,0.17l1.41,2.36l1.41-2.36 c0.06-0.11,0.18-0.17,0.3-0.17h1.61c0.04,0,0.08,0.01,0.12,0.03c0.09,0.06,0.13,0.19,0.06,0.28l0,0l-2.38,3.64l2.43,3.67 c0.02,0.03,0.03,0.07,0.03,0.12C83.25,14.38,83.16,14.47,83.04,14.47L83.04,14.47L83.04,14.47z'/%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M10.5,1.24c-5.11,0-9.25,4.15-9.25,9.25s4.15,9.25,9.25,9.25s9.25-4.15,9.25-9.25 C19.75,5.38,15.61,1.24,10.5,1.24z M14.89,12.77c-1.93,1.93-4.78,2.31-6.7,2.31c-0.7,0-1.41-0.05-2.1-0.16c0,0-1.02-5.64,2.14-8.81 c0.83-0.83,1.95-1.28,3.13-1.28c1.27,0,2.49,0.51,3.39,1.42C16.59,8.09,16.64,11,14.89,12.77z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M10.5-0.01C4.7-0.01,0,4.7,0,10.49s4.7,10.5,10.5,10.5S21,16.29,21,10.49C20.99,4.7,16.3-0.01,10.5-0.01z M10.5,19.74c-5.11,0-9.25-4.15-9.25-9.25s4.14-9.26,9.25-9.26s9.25,4.15,9.25,9.25C19.75,15.61,15.61,19.74,10.5,19.74z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M14.74,6.25C12.9,4.41,9.98,4.35,8.23,6.1c-3.16,3.17-2.14,8.81-2.14,8.81s5.64,1.02,8.81-2.14 C16.64,11,16.59,8.09,14.74,6.25z M12.47,10.34l-0.91,1.87l-0.9-1.87L8.8,9.43l1.86-0.9l0.9-1.87l0.91,1.87l1.86,0.9L12.47,10.34z'/%3E %3Cpolygon class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' points='14.33,9.43 12.47,10.34 11.56,12.21 10.66,10.34 8.8,9.43 10.66,8.53 11.56,6.66 12.47,8.53 '/%3E%3C/g%3E%3C/svg%3E")
        }

        a.mapboxgl-ctrl-logo.mapboxgl-compact {
            width: 21px;
            height: 21px;
            background-image: url("data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='utf-8'?%3E %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 21 21' style='enable-background:new 0 0 21 21;' xml:space='preserve'%3E%3Cg transform='translate(0,0.01)'%3E%3Cpath d='m 10.5,1.24 c -5.11,0 -9.25,4.15 -9.25,9.25 0,5.1 4.15,9.25 9.25,9.25 5.1,0 9.25,-4.15 9.25,-9.25 0,-5.11 -4.14,-9.25 -9.25,-9.25 z m 4.39,11.53 c -1.93,1.93 -4.78,2.31 -6.7,2.31 -0.7,0 -1.41,-0.05 -2.1,-0.16 0,0 -1.02,-5.64 2.14,-8.81 0.83,-0.83 1.95,-1.28 3.13,-1.28 1.27,0 2.49,0.51 3.39,1.42 1.84,1.84 1.89,4.75 0.14,6.52 z' style='opacity:0.9;fill:%23ffffff;enable-background:new' class='st0'/%3E%3Cpath d='M 10.5,-0.01 C 4.7,-0.01 0,4.7 0,10.49 c 0,5.79 4.7,10.5 10.5,10.5 5.8,0 10.5,-4.7 10.5,-10.5 C 20.99,4.7 16.3,-0.01 10.5,-0.01 Z m 0,19.75 c -5.11,0 -9.25,-4.15 -9.25,-9.25 0,-5.1 4.14,-9.26 9.25,-9.26 5.11,0 9.25,4.15 9.25,9.25 0,5.13 -4.14,9.26 -9.25,9.26 z' style='opacity:0.35;enable-background:new' class='st1'/%3E%3Cpath d='M 14.74,6.25 C 12.9,4.41 9.98,4.35 8.23,6.1 5.07,9.27 6.09,14.91 6.09,14.91 c 0,0 5.64,1.02 8.81,-2.14 C 16.64,11 16.59,8.09 14.74,6.25 Z m -2.27,4.09 -0.91,1.87 -0.9,-1.87 -1.86,-0.91 1.86,-0.9 0.9,-1.87 0.91,1.87 1.86,0.9 z' style='opacity:0.35;enable-background:new' class='st1'/%3E%3Cpolygon points='11.56,12.21 10.66,10.34 8.8,9.43 10.66,8.53 11.56,6.66 12.47,8.53 14.33,9.43 12.47,10.34 ' style='opacity:0.9;fill:%23ffffff;enable-background:new' class='st0'/%3E%3C/g%3E%3C/svg%3E")
        }

        .mapboxgl-ctrl.mapboxgl-ctrl-attrib {
            padding: 0 5px;
            background-color: rgba(255, 255, 255, .5);
            margin: 0
        }

        @media screen {
            .mapboxgl-ctrl-attrib.mapboxgl-compact {
                margin: 10px;
                position: relative;
                background-color: #fff;
                border-radius: 3px 12px 12px 3px
            }

            .mapboxgl-ctrl-attrib.mapboxgl-compact:hover {
                padding: 2px 24px 2px 4px;
                visibility: visible
            }

            .mapboxgl-ctrl-bottom-left>.mapboxgl-ctrl-attrib.mapboxgl-compact:hover,
            .mapboxgl-ctrl-top-left>.mapboxgl-ctrl-attrib.mapboxgl-compact:hover {
                padding: 2px 4px 2px 24px;
                border-radius: 12px 3px 3px 12px
            }

            .mapboxgl-ctrl-attrib.mapboxgl-compact .mapboxgl-ctrl-attrib-inner {
                display: none
            }

            .mapboxgl-ctrl-attrib.mapboxgl-compact:hover .mapboxgl-ctrl-attrib-inner {
                display: block
            }

            .mapboxgl-ctrl-attrib.mapboxgl-compact::after {
                content: '';
                cursor: pointer;
                position: absolute;
                background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill='%23333333' fill-rule='evenodd' d='M4,10a6,6 0 1,0 12,0a6,6 0 1,0 -12,0 M9,7a1,1 0 1,0 2,0a1,1 0 1,0 -2,0 M9,10a1,1 0 1,1 2,0l0,3a1,1 0 1,1 -2,0'/%3E %3C/svg%3E");
                background-color: rgba(255, 255, 255, .5);
                width: 24px;
                height: 24px;
                box-sizing: border-box;
                border-radius: 12px
            }

            .mapboxgl-ctrl-bottom-right>.mapboxgl-ctrl-attrib.mapboxgl-compact::after {
                bottom: 0;
                right: 0
            }

            .mapboxgl-ctrl-top-right>.mapboxgl-ctrl-attrib.mapboxgl-compact::after {
                top: 0;
                right: 0
            }

            .mapboxgl-ctrl-top-left>.mapboxgl-ctrl-attrib.mapboxgl-compact::after {
                top: 0;
                left: 0
            }

            .mapboxgl-ctrl-bottom-left>.mapboxgl-ctrl-attrib.mapboxgl-compact::after {
                bottom: 0;
                left: 0
            }
        }

        .mapboxgl-ctrl-attrib a {
            color: rgba(0, 0, 0, .75);
            text-decoration: none
        }

        .mapboxgl-ctrl-attrib a:hover {
            color: inherit;
            text-decoration: underline
        }

        .mapboxgl-ctrl-attrib .mapbox-improve-map {
            font-weight: 700;
            margin-left: 2px
        }

        .mapboxgl-attrib-empty {
            display: none
        }

        .mapboxgl-ctrl-scale {
            background-color: rgba(255, 255, 255, .75);
            font-size: 10px;
            border-width: medium 2px 2px;
            border-style: none solid solid;
            border-color: #333;
            padding: 0 5px;
            color: #333;
            box-sizing: border-box
        }

        .mapboxgl-popup {
            position: absolute;
            display: -webkit-flex;
            display: flex;
            pointer-events: none
        }

        .mapboxgl-popup-anchor-top,
        .mapboxgl-popup-anchor-top-left,
        .mapboxgl-popup-anchor-top-right {
            -webkit-flex-direction: column;
            flex-direction: column
        }

        .mapboxgl-popup-anchor-bottom,
        .mapboxgl-popup-anchor-bottom-left,
        .mapboxgl-popup-anchor-bottom-right {
            -webkit-flex-direction: column-reverse;
            flex-direction: column-reverse
        }

        .mapboxgl-popup-anchor-left {
            -webkit-flex-direction: row;
            flex-direction: row
        }

        .mapboxgl-popup-anchor-right {
            -webkit-flex-direction: row-reverse;
            flex-direction: row-reverse
        }

        .mapboxgl-popup-tip {
            width: 0;
            height: 0;
            border: 10px solid transparent;
            z-index: 1
        }

        .mapboxgl-user-location-dot,
        .mapboxgl-user-location-dot::before {
            width: 15px;
            height: 15px;
            background-color: #1da1f2;
            border-radius: 50%
        }

        .mapboxgl-popup-anchor-top .mapboxgl-popup-tip {
            -webkit-align-self: center;
            align-self: center;
            border-top: none;
            border-bottom-color: #fff
        }

        .mapboxgl-popup-anchor-top-left .mapboxgl-popup-tip {
            -webkit-align-self: flex-start;
            align-self: flex-start;
            border-top: none;
            border-left: none;
            border-bottom-color: #fff
        }

        .mapboxgl-popup-anchor-top-right .mapboxgl-popup-tip {
            -webkit-align-self: flex-end;
            align-self: flex-end;
            border-top: none;
            border-right: none;
            border-bottom-color: #fff
        }

        .mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip {
            -webkit-align-self: center;
            align-self: center;
            border-bottom: none;
            border-top-color: #fff
        }

        .mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-tip {
            -webkit-align-self: flex-start;
            align-self: flex-start;
            border-bottom: none;
            border-left: none;
            border-top-color: #fff
        }

        .mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-tip {
            -webkit-align-self: flex-end;
            align-self: flex-end;
            border-bottom: none;
            border-right: none;
            border-top-color: #fff
        }

        .mapboxgl-popup-anchor-left .mapboxgl-popup-tip {
            -webkit-align-self: center;
            align-self: center;
            border-left: none;
            border-right-color: #fff
        }

        .mapboxgl-popup-anchor-right .mapboxgl-popup-tip {
            -webkit-align-self: center;
            align-self: center;
            border-right: none;
            border-left-color: #fff
        }

        .mapboxgl-popup-close-button {
            position: absolute;
            right: 0;
            top: 0;
            border: 0;
            border-radius: 0 3px 0 0;
            cursor: pointer;
            background-color: transparent
        }

        .mapboxgl-popup-close-button:hover {
            background-color: rgba(0, 0, 0, .05)
        }

        .mapboxgl-popup-content {
            position: relative;
            background: #fff;
            border-radius: 3px;
            box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
            padding: 10px 10px 15px;
            pointer-events: auto
        }

        .mapboxgl-popup-anchor-top-left .mapboxgl-popup-content {
            border-top-left-radius: 0
        }

        .mapboxgl-popup-anchor-top-right .mapboxgl-popup-content {
            border-top-right-radius: 0
        }

        .mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-content {
            border-bottom-left-radius: 0
        }

        .mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-content {
            border-bottom-right-radius: 0
        }

        .mapboxgl-marker {
            position: absolute
        }

        .mapboxgl-user-location-dot {
            box-shadow: 0 0 2px rgba(0, 0, 0, .25)
        }

        .mapboxgl-user-location-dot::before {
            content: '';
            position: absolute;
            -webkit-animation: mapboxgl-user-location-dot-pulse 2s infinite;
            -moz-animation: mapboxgl-user-location-dot-pulse 2s infinite;
            -ms-animation: mapboxgl-user-location-dot-pulse 2s infinite;
            animation: mapboxgl-user-location-dot-pulse 2s infinite
        }

        .mapboxgl-user-location-dot::after {
            border-radius: 50%;
            border: 2px solid #fff;
            content: '';
            height: 19px;
            left: -2px;
            position: absolute;
            top: -2px;
            width: 19px;
            box-sizing: border-box
        }

        @-webkit-keyframes mapboxgl-user-location-dot-pulse {
            0% {
                -webkit-transform: scale(1);
                opacity: 1
            }

            70% {
                -webkit-transform: scale(3);
                opacity: 0
            }

            100% {
                -webkit-transform: scale(1);
                opacity: 0
            }
        }

        @-ms-keyframes mapboxgl-user-location-dot-pulse {

            0%,
            100% {
                -ms-transform: scale(1)
            }

            100%,
            70% {
                opacity: 0
            }

            0% {
                opacity: 1
            }

            70% {
                -ms-transform: scale(3)
            }
        }

        @keyframes mapboxgl-user-location-dot-pulse {
            0% {
                transform: scale(1);
                opacity: 1
            }

            70% {
                transform: scale(3);
                opacity: 0
            }

            100% {
                transform: scale(1);
                opacity: 0
            }
        }

        .mapboxgl-user-location-dot-stale {
            background-color: #aaa
        }

        .mapboxgl-user-location-dot-stale::after {
            display: none
        }

        .mapboxgl-crosshair,
        .mapboxgl-crosshair .mapboxgl-interactive,
        .mapboxgl-crosshair .mapboxgl-interactive:active {
            cursor: crosshair
        }

        .mapboxgl-boxzoom {
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 0;
            background: #fff;
            border: 2px dotted #202020;
            opacity: .5
        }

        @media print {
            .mapbox-improve-map {
                display: none
            }
        }

        .suggestions {
            background-color: #FFF;
            font-size: 14px;
            left: 0;
            list-style: none;
            margin: 0;
            padding: 0;
            position: absolute;
            text-align: left;
            width: 100%;
            top: 100%;
            z-index: 1
        }

        .suggestions>li>a {
            clear: both;
            cursor: default;
            display: block;
            padding: 5px 10px;
            text-decoration: none;
            border: 0;
            color: rgba(0, 0, 0, .75);
            font-weight: 400
        }

        .suggestions>li.active>a,
        .suggestions>li>a:hover {
            background-color: #0d8dff;
            color: #fff;
            text-decoration: none;
            cursor: pointer
        }

        .map-canvas {
            width: 100%;
            height: 600px
        }

        .controls {
            background-color: #fff;
            border-radius: 2px;
            border: 1px solid #ccc;
            box-sizing: border-box;
            font-size: 15px;
            font-weight: 300;
            height: 29px;
            outline: 0;
            padding: 0 11px 0 13px;
            text-overflow: ellipsis;
            width: 80%;
            margin-left: 10px
        }

        .btn-text,
        .custom-control-btn {
            color: #191919;
            font-family: sans-serif;
            font-size: 14px;
            line-height: 24px
        }

        .controls-button {
            background-color: #fff;
            border: 2px solid #fff;
            box-shadow: 0 2px 6px rgba(0, 0, 0, .3);
            cursor: pointer
        }

        .custom-control-btn {
            border-bottom: 1px solid #ddd;
            cursor: pointer;
            padding: 3px 5px
        }

        .custom-control-btn:hover {
            background-color: rgba(0, 0, 0, .05)
        }

        .btn-text {
            padding-left: 5px;
            padding-right: 5px
        }

        .controls-top {
            margin-top: 10px
        }

        @media all and (min-width:769px) {
            .controls {
                width: 60%
            }
        }

        .controls:focus {
            border-color: #4d90fe
        }

        .title {
            font-weight: 700
        }

        #gmap-search-box,
        #info-window-content {
            display: none
        }

        #map #info-window-content {
            display: inline
        }

        

        @-webkit-keyframes rotate {
            from {
                -webkit-transform: rotate(0)
            }

            to {
                -webkit-transform: rotate(360deg)
            }
        }

        @-moz-keyframes rotate {
            from {
                -moz-transform: rotate(0)
            }

            to {
                -moz-transform: rotate(360deg)
            }
        }

        @-ms-keyframes rotate {
            from {
                -ms-transform: rotate(0)
            }

            to {
                -ms-transform: rotate(360deg)
            }
        }

        @keyframes rotate {
            from {
                transform: rotate(0)
            }

            to {
                transform: rotate(360deg)
            }
        }

       

        .mapboxgl-style-list {
            display: none
        }

        .mapboxgl-style-list button {
            background: 0 0;
            border: none;
            cursor: pointer;
            display: block;
            font-size: 14px;
            padding: 8px 8px 6px;
            text-align: right;
            width: 100%
        }

        .mapboxgl-style-list button.active {
            font-weight: 700
        }

        .mapboxgl-style-list button:hover {
            background-color: rgba(0, 0, 0, .05)
        }

        .mapboxgl-style-list button+button {
            border-top: 1px solid #ddd
        }

        /* .mapboxgl-style-switcher {
            background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTQuODQ5cHgiIGhlaWdodD0iNTQuODQ5cHgiIHZpZXdCb3g9IjAgMCA1NC44NDkgNTQuODQ5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NC44NDkgNTQuODQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PGc+PGc+PHBhdGggZD0iTTU0LjQ5NywzOS42MTRsLTEwLjM2My00LjQ5bC0xNC45MTcsNS45NjhjLTAuNTM3LDAuMjE0LTEuMTY1LDAuMzE5LTEuNzkzLDAuMzE5Yy0wLjYyNywwLTEuMjU0LTAuMTA0LTEuNzktMC4zMThsLTE0LjkyMS01Ljk2OEwwLjM1MSwzOS42MTRjLTAuNDcyLDAuMjAzLTAuNDY3LDAuNTI0LDAuMDEsMC43MTZMMjYuNTYsNTAuODFjMC40NzcsMC4xOTEsMS4yNTEsMC4xOTEsMS43MjksMEw1NC40ODgsNDAuMzNDNTQuOTY0LDQwLjEzOSw1NC45NjksMzkuODE3LDU0LjQ5NywzOS42MTR6Ii8+PHBhdGggZD0iTTU0LjQ5NywyNy41MTJsLTEwLjM2NC00LjQ5MWwtMTQuOTE2LDUuOTY2Yy0wLjUzNiwwLjIxNS0xLjE2NSwwLjMyMS0xLjc5MiwwLjMyMWMtMC42MjgsMC0xLjI1Ni0wLjEwNi0xLjc5My0wLjMyMWwtMTQuOTE4LTUuOTY2TDAuMzUxLDI3LjUxMmMtMC40NzIsMC4yMDMtMC40NjcsMC41MjMsMC4wMSwwLjcxNkwyNi41NiwzOC43MDZjMC40NzcsMC4xOSwxLjI1MSwwLjE5LDEuNzI5LDBsMjYuMTk5LTEwLjQ3OUM1NC45NjQsMjguMDM2LDU0Ljk2OSwyNy43MTYsNTQuNDk3LDI3LjUxMnoiLz48cGF0aCBkPSJNMC4zNjEsMTYuMTI1bDEzLjY2Miw1LjQ2NWwxMi41MzcsNS4wMTVjMC40NzcsMC4xOTEsMS4yNTEsMC4xOTEsMS43MjksMGwxMi41NDEtNS4wMTZsMTMuNjU4LTUuNDYzYzAuNDc3LTAuMTkxLDAuNDgtMC41MTEsMC4wMS0wLjcxNkwyOC4yNzcsNC4wNDhjLTAuNDcxLTAuMjA0LTEuMjM2LTAuMjA0LTEuNzA4LDBMMC4zNTEsMTUuNDFDLTAuMTIxLDE1LjYxNC0wLjExNiwxNS45MzUsMC4zNjEsMTYuMTI1eiIvPjwvZz48L2c+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPg==);
            background-position: center;
            background-repeat: no-repeat;
            background-size: 70%
        } */
    </style>
<style>
        .mapboxgl-marker {
            cursor: pointer;
        }
    </style>


<!-- <body data-page-type="world-map-timezones"> -->
<div class="bg-overlay"></div>
<script type="text/javascript">
        jinjaVars = {
            ...jinjaVars,
            lang: "en",
            customUrlLangs: ["de"],
            getTime,
            addLeadingZeros,
            dstInEffect,
            getMeridiem,
            getTimeFormat,
        };
        const handleServerTime = serverTime => {
            console.info("Server time loaded.")
            jinjaVars.serverTime = serverTime;
        }
 </script>
<!-- <script src="https://24timezones.com/t?callback=handleServerTime" async defer></script> -->

 <script type="text/javascript">
        const httpGet = (url, callback, failCallback) => {
            const request = new XMLHttpRequest();
            request.onreadystatechange = () => {
                if (request.readyState === 4 && request.status === 200) callback(request);
                if (request.readyState === 4 && request.status !== 200 && typeof failCallback !== "undefined") {
                    failCallback(request);
                }
            };
            request.open("GET", url, true);
            request.send(null);
        };

        const addScriptTag = (src, async = false, defer = false, onload = null) => {
            const scriptTag = document.createElement("script")
            scriptTag.defer = defer;
            scriptTag.async = async;
            scriptTag.src = src;
            if (onload) scriptTag.onload = onload;
            document.body.appendChild(scriptTag);
        }

        const addScriptOnLoad = (src, async = false, defer = false) => {
            if (document.readyState !== "loading") {
                addScriptTag(src, async, defer);
            } else {
                document.addEventListener("DOMContentLoaded", () => {
                    addScriptTag(src, async, defer);
                });
            }
        }

        let timeLoadingTimeout;
        const loadServerTime = (callback, attempt = 0) => {
            clearTimeout(timeLoadingTimeout);
            const maxAttempts = 10;
            const desiredDelay = 1000 * (attempt || 1);
            const delay = desiredDelay > 5000 ? 5000 : desiredDelay;

            if (attempt > maxAttempts) throw new Error("Server time didn't load after 10 attempts.");

            if (jinjaVars.serverTime) {
                callback(jinjaVars.serverTime);
            } else {
                console.info("Waiting for the server time...");
                timeLoadingTimeout = setTimeout(() => loadServerTime(callback, attempt + 1), delay);
            }
        }
    </script>


 <div id="page">
        <!-- Start Sentry loader and config -->
        <script src="https://browser.sentry-cdn.com/8.13.0/bundle.replay.min.js"
            integrity="sha384-qjmvDcIpD3JwPAeOYv3SVWU5mx6TLnn885/+CwwMEVXy3NaFzcHYG8vRAzGgtNKJ"
            crossorigin="anonymous"></script>
        <script type="text/javascript">
            Sentry.init({
                dsn: "https://d87eaa02ddca2c3cfa43910c8ef65ea1@o4507384302403584.ingest.us.sentry.io/4507384304304128",
                allowUrls: [/^https?:\/\/([a-zA-Z0-9-]+\.)*24timezones\.com/],
                beforeSend(event) {
                    if (event.exception && event.exception.values) {
                        const errorMessage = event.exception.values[0].value;
                        // Filter out events with the specific non-error promise rejection message
                        const includesNonErrorMessage = errorMessage.includes("Non-Error promise rejection captured with value: timeout");
                        // Filter out all events thrown by external sources
                        const allowedSourcePatterns = [/24timezones\.com/gi];
                        const frames = event.exception.values[0].stacktrace?.frames || [];
                        const hasValidSource = frames.some(
                            frame => allowedSourcePatterns.some(
                                sourcePattern => sourcePattern.test(frame.filename)
                            )
                        );
                        if (includesNonErrorMessage || !hasValidSource) {
                            return null; 
                        }
                    }
                    return event; 
                },
                maxBreadcrumbs: 50,
                sampleRate: 0.02,
                tracesSampleRate: 0.01,
                replaysSessionSampleRate: 0.1,
                replaysOnErrorSampleRate: 1.0,
                integrations: [
                    Sentry.replayIntegration({
                        maskAllText: true,
                        blockAllMedia: true,
                    }),
                ],
            })
            Sentry.setContext("dataLayer", { dataLayer: JSON.stringify(dataLayer) });
        </script>
        <!-- /Header -->
        <script>
            const setTimeFormat = value => {
                localStorage.setItem("timeFormat", value);
                const mapConfig = JSON.stringify({
                    clocksPage: { "timeformat": value },
                    mapPage: { "timeformat": value },
                });
                localStorage.setItem("worldconfig", mapConfig);
                localStorage.setItem("auconfig", mapConfig);
                localStorage.setItem("caconfig", mapConfig);
                localStorage.setItem("euconfig", mapConfig);
                localStorage.setItem("usconfig", mapConfig);
                const closeButton = document.getElementById("menu-close-button");
                if (closeButton) closeButton.dispatchEvent(new Event("click"));
                if (jinjaVars.timeFormatCallback) jinjaVars.timeFormatCallback(value);
            };
            const storageTimeFormat = getTimeFormat();
            setTimeFormat(storageTimeFormat);
        </script>
        <!-- Content -->

<div class="ad-container-wtd"><div data-fuse="23203724861" id="div-gpt-ad-1" class="margin-bottom-15"></div> </div>
<div id="timezones-map" style="width: 100%; height: 700px; margin-bottom: 0.8em;"></div>
<script type="text/javascript">
            const icoMenu = document.querySelector("#ico-menu");
            const closeButton = document.getElementById("menu-close-button");
            if (icoMenu) icoMenu.addEventListener("click", () => {
                document.getElementById("m1").classList.add("open-menu");
                document.body.classList.add("opened-menu");
                document.body.classList.add("no-scroll");
            });
            if (closeButton) closeButton.addEventListener("click", () => {
                document.getElementById("m1").classList.remove("open-menu");
                document.body.classList.remove("opened-menu");
                document.body.classList.remove("no-scroll");
            });
            const downArrows = document.querySelectorAll("ul#m1 li.nav-item .arrow-down");
            const langDropdown = document.getElementById("language-selector-dropdown");
            for (const element of downArrows) {
                const navItem = element.parentElement.parentElement;
                const someClassElement = navItem.querySelector(".some-class");
                const toggleOpening = e => {
                    e.preventDefault();
                    e.stopPropagation();
                    someClassElement.classList.toggle("expanded");
                    navItem.classList.toggle("open");
                    if (langDropdown) langDropdown.classList.remove("open");
                    for (const element of downArrows) {
                        const otherNavItem = element.parentElement.parentElement;
                        if (otherNavItem !== navItem) {
                            otherNavItem.classList.remove("open");
                            const contentContainer = otherNavItem.querySelector(".some-class");
                            if (contentContainer) contentContainer.classList.remove("expanded");
                        }
                    }
                }
                if (someClassElement) {
                    const link = navItem.querySelector("a");
                    link.addEventListener("click", e => {
                        const mediaQuery = window.matchMedia("only screen and (max-width: 768px)");
                        if (mediaQuery.matches) {
                            toggleOpening(e);
                        }
                    })
                }
                element.addEventListener("click", e => {
                    toggleOpening(e);
                });
            }
        </script>
        <!-- Page scripts -->

<script type="text/javascript"  src="https://24timezones.com/assets/maps/map-scripts.min.js?_1736618869"></script>
 <script type="text/javascript"  src="https://24timezones.com/assets/moment-with-data.min.js?_1736618869"></script>
 <script>
            var iana_timezone_offsets = { "Africa\/Abidjan": 0, "Africa\/Accra": 0, "Africa\/Addis_Ababa": 10800, "Africa\/Algiers": 3600, "Africa\/Asmara": 10800, "Africa\/Bamako": 0, "Africa\/Bangui": 3600, "Africa\/Banjul": 0, "Africa\/Bissau": 0, "Africa\/Blantyre": 7200, "Africa\/Brazzaville": 3600, "Africa\/Bujumbura": 7200, "Africa\/Cairo": 10800, "Africa\/Casablanca": 3600, "Africa\/Ceuta": 7200, "Africa\/Conakry": 0, "Africa\/Dakar": 0, "Africa\/Dar_es_Salaam": 10800, "Africa\/Djibouti": 10800, "Africa\/Douala": 3600, "Africa\/El_Aaiun": 3600, "Africa\/Freetown": 0, "Africa\/Gaborone": 7200, "Africa\/Harare": 7200, "Africa\/Johannesburg": 7200, "Africa\/Juba": 7200, "Africa\/Kampala": 10800, "Africa\/Khartoum": 7200, "Africa\/Kigali": 7200, "Africa\/Kinshasa": 3600, "Africa\/Lagos": 3600, "Africa\/Libreville": 3600, "Africa\/Lome": 0, "Africa\/Luanda": 3600, "Africa\/Lubumbashi": 7200, "Africa\/Lusaka": 7200, "Africa\/Malabo": 3600, "Africa\/Maputo": 7200, "Africa\/Maseru": 7200, "Africa\/Mbabane": 7200, "Africa\/Mogadishu": 10800, "Africa\/Monrovia": 0, "Africa\/Nairobi": 10800, "Africa\/Ndjamena": 3600, "Africa\/Niamey": 3600, "Africa\/Nouakchott": 0, "Africa\/Ouagadougou": 0, "Africa\/Porto-Novo": 3600, "Africa\/Sao_Tome": 0, "Africa\/Tripoli": 7200, "Africa\/Tunis": 3600, "Africa\/Windhoek": 7200, "America\/Adak": -32400, "America\/Anchorage": -28800, "America\/Anguilla": -14400, "America\/Antigua": -14400, "America\/Araguaina": -10800, "America\/Argentina\/Buenos_Aires": -10800, "America\/Argentina\/Catamarca": -10800, "America\/Argentina\/Cordoba": -10800, "America\/Argentina\/Jujuy": -10800, "America\/Argentina\/La_Rioja": -10800, "America\/Argentina\/Mendoza": -10800, "America\/Argentina\/Rio_Gallegos": -10800, "America\/Argentina\/Salta": -10800, "America\/Argentina\/San_Juan": -10800, "America\/Argentina\/San_Luis": -10800, "America\/Argentina\/Tucuman": -10800, "America\/Argentina\/Ushuaia": -10800, "America\/Aruba": -14400, "America\/Asuncion": -14400, "America\/Atikokan": -18000, "America\/Bahia": -10800, "America\/Bahia_Banderas": -21600, "America\/Barbados": -14400, "America\/Belem": -10800, "America\/Belize": -21600, "America\/Blanc-Sablon": -14400, "America\/Boa_Vista": -14400, "America\/Bogota": -18000, "America\/Boise": -21600, "America\/Cambridge_Bay": -21600, "America\/Campo_Grande": -14400, "America\/Cancun": -18000, "America\/Caracas": -14400, "America\/Cayenne": -10800, "America\/Cayman": -18000, "America\/Chicago": -18000, "America\/Chihuahua": -21600, "America\/Ciudad_Juarez": -21600, "America\/Costa_Rica": -21600, "America\/Creston": -25200, "America\/Cuiaba": -14400, "America\/Curacao": -14400, "America\/Danmarkshavn": 0, "America\/Dawson": -25200, "America\/Dawson_Creek": -25200, "America\/Denver": -21600, "America\/Detroit": -14400, "America\/Dominica": -14400, "America\/Edmonton": -21600, "America\/Eirunepe": -18000, "America\/El_Salvador": -21600, "America\/Fort_Nelson": -25200, "America\/Fortaleza": -10800, "America\/Glace_Bay": -10800, "America\/Goose_Bay": -10800, "America\/Grand_Turk": -14400, "America\/Grenada": -14400, "America\/Guadeloupe": -14400, "America\/Guatemala": -21600, "America\/Guayaquil": -18000, "America\/Guyana": -14400, "America\/Halifax": -10800, "America\/Havana": -14400, "America\/Hermosillo": -25200, "America\/Indiana\/Indianapolis": -14400, "America\/Indiana\/Knox": -18000, "America\/Indiana\/Marengo": -14400, "America\/Indiana\/Petersburg": -14400, "America\/Indiana\/Tell_City": -18000, "America\/Indiana\/Vevay": -14400, "America\/Indiana\/Vincennes": -14400, "America\/Indiana\/Winamac": -14400, "America\/Inuvik": -21600, "America\/Iqaluit": -14400, "America\/Jamaica": -18000, "America\/Juneau": -28800, "America\/Kentucky\/Louisville": -14400, "America\/Kentucky\/Monticello": -14400, "America\/Kralendijk": -14400, "America\/La_Paz": -14400, "America\/Lima": -18000, "America\/Los_Angeles": -25200, "America\/Lower_Princes": -14400, "America\/Maceio": -10800, "America\/Managua": -21600, "America\/Manaus": -14400, "America\/Marigot": -14400, "America\/Martinique": -14400, "America\/Matamoros": -18000, "America\/Mazatlan": -25200, "America\/Menominee": -18000, "America\/Merida": -21600, "America\/Metlakatla": -28800, "America\/Mexico_City": -21600, "America\/Miquelon": -7200, "America\/Moncton": -10800, "America\/Monterrey": -21600, "America\/Montevideo": -10800, "America\/Montserrat": -14400, "America\/Nassau": -14400, "America\/New_York": -14400, "America\/Nome": -28800, "America\/Noronha": -7200, "America\/North_Dakota\/Beulah": -18000, "America\/North_Dakota\/Center": -18000, "America\/North_Dakota\/New_Salem": -18000, "America\/Nuuk": -3600, "America\/Ojinaga": -18000, "America\/Panama": -18000, "America\/Paramaribo": -10800, "America\/Phoenix": -25200, "America\/Port-au-Prince": -14400, "America\/Port_of_Spain": -14400, "America\/Porto_Velho": -14400, "America\/Puerto_Rico": -14400, "America\/Punta_Arenas": -10800, "America\/Rankin_Inlet": -18000, "America\/Recife": -10800, "America\/Regina": -21600, "America\/Resolute": -18000, "America\/Rio_Branco": -18000, "America\/Santarem": -10800, "America\/Santiago": -14400, "America\/Santo_Domingo": -14400, "America\/Sao_Paulo": -10800, "America\/Scoresbysund": -3600, "America\/Sitka": -28800, "America\/St_Barthelemy": -14400, "America\/St_Johns": -9000, "America\/St_Kitts": -14400, "America\/St_Lucia": -14400, "America\/St_Thomas": -14400, "America\/St_Vincent": -14400, "America\/Swift_Current": -21600, "America\/Tegucigalpa": -21600, "America\/Thule": -10800, "America\/Tijuana": -25200, "America\/Toronto": -14400, "America\/Tortola": -14400, "America\/Vancouver": -25200, "America\/Whitehorse": -25200, "America\/Winnipeg": -18000, "America\/Yakutat": -28800, "Antarctica\/Casey": 28800, "Antarctica\/Davis": 25200, "Antarctica\/DumontDUrville": 36000, "Antarctica\/Macquarie": 36000, "Antarctica\/Mawson": 18000, "Antarctica\/McMurdo": 43200, "Antarctica\/Palmer": -10800, "Antarctica\/Rothera": -10800, "Antarctica\/Syowa": 10800, "Antarctica\/Troll": 7200, "Antarctica\/Vostok": 18000, "Arctic\/Longyearbyen": 7200, "Asia\/Aden": 10800, "Asia\/Almaty": 18000, "Asia\/Amman": 10800, "Asia\/Anadyr": 43200, "Asia\/Aqtau": 18000, "Asia\/Aqtobe": 18000, "Asia\/Ashgabat": 18000, "Asia\/Atyrau": 18000, "Asia\/Baghdad": 10800, "Asia\/Bahrain": 10800, "Asia\/Baku": 14400, "Asia\/Bangkok": 25200, "Asia\/Barnaul": 25200, "Asia\/Beirut": 10800, "Asia\/Bishkek": 21600, "Asia\/Brunei": 28800, "Asia\/Chita": 32400, "Asia\/Choibalsan": 28800, "Asia\/Colombo": 19800, "Asia\/Damascus": 10800, "Asia\/Dhaka": 21600, "Asia\/Dili": 32400, "Asia\/Dubai": 14400, "Asia\/Dushanbe": 18000, "Asia\/Famagusta": 10800, "Asia\/Gaza": 10800, "Asia\/Hebron": 10800, "Asia\/Ho_Chi_Minh": 25200, "Asia\/Hong_Kong": 28800, "Asia\/Hovd": 25200, "Asia\/Irkutsk": 28800, "Asia\/Jakarta": 25200, "Asia\/Jayapura": 32400, "Asia\/Jerusalem": 10800, "Asia\/Kabul": 16200, "Asia\/Kamchatka": 43200, "Asia\/Karachi": 18000, "Asia\/Kathmandu": 20700, "Asia\/Khandyga": 32400, "Asia\/Kolkata": 19800, "Asia\/Krasnoyarsk": 25200, "Asia\/Kuala_Lumpur": 28800, "Asia\/Kuching": 28800, "Asia\/Kuwait": 10800, "Asia\/Macau": 28800, "Asia\/Magadan": 39600, "Asia\/Makassar": 28800, "Asia\/Manila": 28800, "Asia\/Muscat": 14400, "Asia\/Nicosia": 10800, "Asia\/Novokuznetsk": 25200, "Asia\/Novosibirsk": 25200, "Asia\/Omsk": 21600, "Asia\/Oral": 18000, "Asia\/Phnom_Penh": 25200, "Asia\/Pontianak": 25200, "Asia\/Pyongyang": 32400, "Asia\/Qatar": 10800, "Asia\/Qostanay": 18000, "Asia\/Qyzylorda": 18000, "Asia\/Riyadh": 10800, "Asia\/Sakhalin": 39600, "Asia\/Samarkand": 18000, "Asia\/Seoul": 32400, "Asia\/Shanghai": 28800, "Asia\/Singapore": 28800, "Asia\/Srednekolymsk": 39600, "Asia\/Taipei": 28800, "Asia\/Tashkent": 18000, "Asia\/Tbilisi": 14400, "Asia\/Tehran": 12600, "Asia\/Thimphu": 21600, "Asia\/Tokyo": 32400, "Asia\/Tomsk": 25200, "Asia\/Ulaanbaatar": 28800, "Asia\/Urumqi": 28800, "Asia\/Ust-Nera": 36000, "Asia\/Vientiane": 25200, "Asia\/Vladivostok": 36000, "Asia\/Yakutsk": 32400, "Asia\/Yangon": 23400, "Asia\/Yekaterinburg": 18000, "Asia\/Yerevan": 14400, "Atlantic\/Azores": 0, "Atlantic\/Bermuda": -10800, "Atlantic\/Canary": 3600, "Atlantic\/Cape_Verde": -3600, "Atlantic\/Faroe": 3600, "Atlantic\/Madeira": 3600, "Atlantic\/Reykjavik": 0, "Atlantic\/South_Georgia": -7200, "Atlantic\/St_Helena": 0, "Atlantic\/Stanley": -10800, "Australia\/Adelaide": 34200, "Australia\/Brisbane": 36000, "Australia\/Broken_Hill": 34200, "Australia\/Darwin": 34200, "Australia\/Eucla": 31500, "Australia\/Hobart": 36000, "Australia\/Lindeman": 36000, "Australia\/Lord_Howe": 37800, "Australia\/Melbourne": 36000, "Australia\/Perth": 28800, "Australia\/Sydney": 36000, "Europe\/Amsterdam": 7200, "Europe\/Andorra": 7200, "Europe\/Astrakhan": 14400, "Europe\/Athens": 10800, "Europe\/Belgrade": 7200, "Europe\/Berlin": 7200, "Europe\/Bratislava": 7200, "Europe\/Brussels": 7200, "Europe\/Bucharest": 10800, "Europe\/Budapest": 7200, "Europe\/Busingen": 7200, "Europe\/Chisinau": 10800, "Europe\/Copenhagen": 7200, "Europe\/Dublin": 3600, "Europe\/Gibraltar": 7200, "Europe\/Guernsey": 3600, "Europe\/Helsinki": 10800, "Europe\/Isle_of_Man": 3600, "Europe\/Istanbul": 10800, "Europe\/Jersey": 3600, "Europe\/Kaliningrad": 7200, "Europe\/Kirov": 10800, "Europe\/Kyiv": 10800, "Europe\/Lisbon": 3600, "Europe\/Ljubljana": 7200, "Europe\/London": 3600, "Europe\/Luxembourg": 7200, "Europe\/Madrid": 7200, "Europe\/Malta": 7200, "Europe\/Mariehamn": 10800, "Europe\/Minsk": 10800, "Europe\/Monaco": 7200, "Europe\/Moscow": 10800, "Europe\/Oslo": 7200, "Europe\/Paris": 7200, "Europe\/Podgorica": 7200, "Europe\/Prague": 7200, "Europe\/Riga": 10800, "Europe\/Rome": 7200, "Europe\/Samara": 14400, "Europe\/San_Marino": 7200, "Europe\/Sarajevo": 7200, "Europe\/Saratov": 14400, "Europe\/Simferopol": 10800, "Europe\/Skopje": 7200, "Europe\/Sofia": 10800, "Europe\/Stockholm": 7200, "Europe\/Tallinn": 10800, "Europe\/Tirane": 7200, "Europe\/Ulyanovsk": 14400, "Europe\/Vaduz": 7200, "Europe\/Vatican": 7200, "Europe\/Vienna": 7200, "Europe\/Vilnius": 10800, "Europe\/Volgograd": 10800, "Europe\/Warsaw": 7200, "Europe\/Zagreb": 7200, "Europe\/Zurich": 7200, "Indian\/Antananarivo": 10800, "Indian\/Chagos": 21600, "Indian\/Christmas": 25200, "Indian\/Cocos": 23400, "Indian\/Comoro": 10800, "Indian\/Kerguelen": 18000, "Indian\/Mahe": 14400, "Indian\/Maldives": 18000, "Indian\/Mauritius": 14400, "Indian\/Mayotte": 10800, "Indian\/Reunion": 14400, "Pacific\/Apia": 46800, "Pacific\/Auckland": 43200, "Pacific\/Bougainville": 39600, "Pacific\/Chatham": 45900, "Pacific\/Chuuk": 36000, "Pacific\/Easter": -21600, "Pacific\/Efate": 39600, "Pacific\/Fakaofo": 46800, "Pacific\/Fiji": 43200, "Pacific\/Funafuti": 43200, "Pacific\/Galapagos": -21600, "Pacific\/Gambier": -32400, "Pacific\/Guadalcanal": 39600, "Pacific\/Guam": 36000, "Pacific\/Honolulu": -36000, "Pacific\/Kanton": 46800, "Pacific\/Kiritimati": 50400, "Pacific\/Kosrae": 39600, "Pacific\/Kwajalein": 43200, "Pacific\/Majuro": 43200, "Pacific\/Marquesas": -34200, "Pacific\/Midway": -39600, "Pacific\/Nauru": 43200, "Pacific\/Niue": -39600, "Pacific\/Norfolk": 39600, "Pacific\/Noumea": 39600, "Pacific\/Pago_Pago": -39600, "Pacific\/Palau": 32400, "Pacific\/Pitcairn": -28800, "Pacific\/Pohnpei": 39600, "Pacific\/Port_Moresby": 36000, "Pacific\/Rarotonga": -36000, "Pacific\/Saipan": 36000, "Pacific\/Tahiti": -36000, "Pacific\/Tarawa": 43200, "Pacific\/Tongatapu": 46800, "Pacific\/Wake": 43200, "Pacific\/Wallis": 43200, "UTC": 0, "Etc\/GMT": 0, "Etc\/GMT+1": -3600, "Etc\/GMT+10": -36000, "Etc\/GMT+11": -39600, "Etc\/GMT+12": -43200, "Etc\/GMT+2": -7200, "Etc\/GMT+3": -10800, "Etc\/GMT+4": -14400, "Etc\/GMT+5": -18000, "Etc\/GMT+6": -21600, "Etc\/GMT+7": -25200, "Etc\/GMT+8": -28800, "Etc\/GMT+9": -32400, "Etc\/GMT-1": 3600, "Etc\/GMT-10": 36000, "Etc\/GMT-11": 39600, "Etc\/GMT-12": 43200, "Etc\/GMT-13": 46800, "Etc\/GMT-14": 50400, "Etc\/GMT-2": 7200, "Etc\/GMT-3": 10800, "Etc\/GMT-4": 14400, "Etc\/GMT-5": 18000, "Etc\/GMT-6": 21600, "Etc\/GMT-7": 25200, "Etc\/GMT-8": 28800, "Etc\/GMT-9": 32400 };
            var iana_timezone_colors = { "Africa\/Abidjan": "red", "Africa\/Accra": "red", "Africa\/Addis_Ababa": "green", "Africa\/Algiers": "orange", "Africa\/Asmara": "green", "Africa\/Bamako": "red", "Africa\/Bangui": "orange", "Africa\/Banjul": "red", "Africa\/Bissau": "red", "Africa\/Blantyre": "yellow", "Africa\/Brazzaville": "orange", "Africa\/Bujumbura": "yellow", "Africa\/Cairo": "green", "Africa\/Casablanca": "orange", "Africa\/Ceuta": "yellow", "Africa\/Conakry": "red", "Africa\/Dakar": "red", "Africa\/Dar_es_Salaam": "green", "Africa\/Djibouti": "green", "Africa\/Douala": "orange", "Africa\/El_Aaiun": "orange", "Africa\/Freetown": "red", "Africa\/Gaborone": "yellow", "Africa\/Harare": "yellow", "Africa\/Johannesburg": "yellow", "Africa\/Juba": "yellow", "Africa\/Kampala": "green", "Africa\/Khartoum": "yellow", "Africa\/Kigali": "yellow", "Africa\/Kinshasa": "orange", "Africa\/Lagos": "orange", "Africa\/Libreville": "orange", "Africa\/Lome": "red", "Africa\/Luanda": "orange", "Africa\/Lubumbashi": "yellow", "Africa\/Lusaka": "yellow", "Africa\/Malabo": "orange", "Africa\/Maputo": "yellow", "Africa\/Maseru": "yellow", "Africa\/Mbabane": "yellow", "Africa\/Mogadishu": "green", "Africa\/Monrovia": "red", "Africa\/Nairobi": "green", "Africa\/Ndjamena": "orange", "Africa\/Niamey": "orange", "Africa\/Nouakchott": "red", "Africa\/Ouagadougou": "red", "Africa\/Porto-Novo": "orange", "Africa\/Sao_Tome": "red", "Africa\/Tripoli": "yellow", "Africa\/Tunis": "orange", "Africa\/Windhoek": "yellow", "America\/Adak": "yellow", "America\/Anchorage": "orange", "America\/Anguilla": "cyan", "America\/Antigua": "cyan", "America\/Araguaina": "green", "America\/Argentina\/Buenos_Aires": "green", "America\/Argentina\/Catamarca": "green", "America\/Argentina\/Cordoba": "green", "America\/Argentina\/Jujuy": "green", "America\/Argentina\/La_Rioja": "green", "America\/Argentina\/Mendoza": "green", "America\/Argentina\/Rio_Gallegos": "green", "America\/Argentina\/Salta": "green", "America\/Argentina\/San_Juan": "green", "America\/Argentina\/San_Luis": "green", "America\/Argentina\/Tucuman": "green", "America\/Argentina\/Ushuaia": "green", "America\/Aruba": "cyan", "America\/Asuncion": "cyan", "America\/Atikokan": "blue", "America\/Bahia": "green", "America\/Bahia_Banderas": "violet", "America\/Barbados": "cyan", "America\/Belem": "green", "America\/Belize": "violet", "America\/Blanc-Sablon": "cyan", "America\/Boa_Vista": "cyan", "America\/Bogota": "blue", "America\/Boise": "violet", "America\/Cambridge_Bay": "violet", "America\/Campo_Grande": "cyan", "America\/Cancun": "blue", "America\/Caracas": "cyan", "America\/Cayenne": "green", "America\/Cayman": "blue", "America\/Chicago": "blue", "America\/Chihuahua": "violet", "America\/Ciudad_Juarez": "violet", "America\/Costa_Rica": "violet", "America\/Creston": "red", "America\/Cuiaba": "cyan", "America\/Curacao": "cyan", "America\/Danmarkshavn": "red", "America\/Dawson": "red", "America\/Dawson_Creek": "red", "America\/Denver": "violet", "America\/Detroit": "cyan", "America\/Dominica": "cyan", "America\/Edmonton": "violet", "America\/Eirunepe": "blue", "America\/El_Salvador": "violet", "America\/Fort_Nelson": "red", "America\/Fortaleza": "green", "America\/Glace_Bay": "green", "America\/Goose_Bay": "green", "America\/Grand_Turk": "cyan", "America\/Grenada": "cyan", "America\/Guadeloupe": "cyan", "America\/Guatemala": "violet", "America\/Guayaquil": "blue", "America\/Guyana": "cyan", "America\/Halifax": "green", "America\/Havana": "cyan", "America\/Hermosillo": "red", "America\/Indiana\/Indianapolis": "cyan", "America\/Indiana\/Knox": "blue", "America\/Indiana\/Marengo": "cyan", "America\/Indiana\/Petersburg": "cyan", "America\/Indiana\/Tell_City": "blue", "America\/Indiana\/Vevay": "cyan", "America\/Indiana\/Vincennes": "cyan", "America\/Indiana\/Winamac": "cyan", "America\/Inuvik": "violet", "America\/Iqaluit": "cyan", "America\/Jamaica": "blue", "America\/Juneau": "orange", "America\/Kentucky\/Louisville": "cyan", "America\/Kentucky\/Monticello": "cyan", "America\/Kralendijk": "cyan", "America\/La_Paz": "cyan", "America\/Lima": "blue", "America\/Los_Angeles": "red", "America\/Lower_Princes": "cyan", "America\/Maceio": "green", "America\/Managua": "violet", "America\/Manaus": "cyan", "America\/Marigot": "cyan", "America\/Martinique": "cyan", "America\/Matamoros": "blue", "America\/Mazatlan": "red", "America\/Menominee": "blue", "America\/Merida": "violet", "America\/Metlakatla": "orange", "America\/Mexico_City": "violet", "America\/Miquelon": "yellow", "America\/Moncton": "green", "America\/Monterrey": "violet", "America\/Montevideo": "green", "America\/Montserrat": "cyan", "America\/Nassau": "cyan", "America\/New_York": "cyan", "America\/Nome": "orange", "America\/Noronha": "yellow", "America\/North_Dakota\/Beulah": "blue", "America\/North_Dakota\/Center": "blue", "America\/North_Dakota\/New_Salem": "blue", "America\/Nuuk": "orange", "America\/Ojinaga": "blue", "America\/Panama": "blue", "America\/Paramaribo": "green", "America\/Phoenix": "red", "America\/Port-au-Prince": "cyan", "America\/Port_of_Spain": "cyan", "America\/Porto_Velho": "cyan", "America\/Puerto_Rico": "cyan", "America\/Punta_Arenas": "green", "America\/Rankin_Inlet": "blue", "America\/Recife": "green", "America\/Regina": "violet", "America\/Resolute": "blue", "America\/Rio_Branco": "blue", "America\/Santarem": "green", "America\/Santiago": "cyan", "America\/Santo_Domingo": "cyan", "America\/Sao_Paulo": "green", "America\/Scoresbysund": "orange", "America\/Sitka": "orange", "America\/St_Barthelemy": "cyan", "America\/St_Johns": "wheat", "America\/St_Kitts": "cyan", "America\/St_Lucia": "cyan", "America\/St_Thomas": "cyan", "America\/St_Vincent": "cyan", "America\/Swift_Current": "violet", "America\/Tegucigalpa": "violet", "America\/Thule": "green", "America\/Tijuana": "red", "America\/Toronto": "cyan", "America\/Tortola": "cyan", "America\/Vancouver": "red", "America\/Whitehorse": "red", "America\/Winnipeg": "blue", "America\/Yakutat": "orange", "Antarctica\/Casey": "orange", "Antarctica\/Davis": "red", "Antarctica\/DumontDUrville": "green", "Antarctica\/Macquarie": "green", "Antarctica\/Mawson": "blue", "Antarctica\/McMurdo": "blue", "Antarctica\/Palmer": "green", "Antarctica\/Rothera": "green", "Antarctica\/Syowa": "green", "Antarctica\/Troll": "yellow", "Antarctica\/Vostok": "blue", "Arctic\/Longyearbyen": "yellow", "Asia\/Aden": "green", "Asia\/Almaty": "blue", "Asia\/Amman": "green", "Asia\/Anadyr": "blue", "Asia\/Aqtau": "blue", "Asia\/Aqtobe": "blue", "Asia\/Ashgabat": "blue", "Asia\/Atyrau": "blue", "Asia\/Baghdad": "green", "Asia\/Bahrain": "green", "Asia\/Baku": "cyan", "Asia\/Bangkok": "red", "Asia\/Barnaul": "red", "Asia\/Beirut": "green", "Asia\/Bishkek": "violet", "Asia\/Brunei": "orange", "Asia\/Chita": "yellow", "Asia\/Choibalsan": "orange", "Asia\/Colombo": "wheat", "Asia\/Damascus": "green", "Asia\/Dhaka": "violet", "Asia\/Dili": "yellow", "Asia\/Dubai": "cyan", "Asia\/Dushanbe": "blue", "Asia\/Famagusta": "green", "Asia\/Gaza": "green", "Asia\/Hebron": "green", "Asia\/Ho_Chi_Minh": "red", "Asia\/Hong_Kong": "orange", "Asia\/Hovd": "red", "Asia\/Irkutsk": "orange", "Asia\/Jakarta": "red", "Asia\/Jayapura": "yellow", "Asia\/Jerusalem": "green", "Asia\/Kabul": "wheat", "Asia\/Kamchatka": "blue", "Asia\/Karachi": "blue", "Asia\/Kathmandu": "wheat", "Asia\/Khandyga": "yellow", "Asia\/Kolkata": "wheat", "Asia\/Krasnoyarsk": "red", "Asia\/Kuala_Lumpur": "orange", "Asia\/Kuching": "orange", "Asia\/Kuwait": "green", "Asia\/Macau": "orange", "Asia\/Magadan": "cyan", "Asia\/Makassar": "orange", "Asia\/Manila": "orange", "Asia\/Muscat": "cyan", "Asia\/Nicosia": "green", "Asia\/Novokuznetsk": "red", "Asia\/Novosibirsk": "red", "Asia\/Omsk": "violet", "Asia\/Oral": "blue", "Asia\/Phnom_Penh": "red", "Asia\/Pontianak": "red", "Asia\/Pyongyang": "yellow", "Asia\/Qatar": "green", "Asia\/Qostanay": "blue", "Asia\/Qyzylorda": "blue", "Asia\/Riyadh": "green", "Asia\/Sakhalin": "cyan", "Asia\/Samarkand": "blue", "Asia\/Seoul": "yellow", "Asia\/Shanghai": "orange", "Asia\/Singapore": "orange", "Asia\/Srednekolymsk": "cyan", "Asia\/Taipei": "orange", "Asia\/Tashkent": "blue", "Asia\/Tbilisi": "cyan", "Asia\/Tehran": "wheat", "Asia\/Thimphu": "violet", "Asia\/Tokyo": "yellow", "Asia\/Tomsk": "red", "Asia\/Ulaanbaatar": "orange", "Asia\/Urumqi": "orange", "Asia\/Ust-Nera": "green", "Asia\/Vientiane": "red", "Asia\/Vladivostok": "green", "Asia\/Yakutsk": "yellow", "Asia\/Yangon": "wheat", "Asia\/Yekaterinburg": "blue", "Asia\/Yerevan": "cyan", "Atlantic\/Azores": "red", "Atlantic\/Bermuda": "green", "Atlantic\/Canary": "orange", "Atlantic\/Cape_Verde": "orange", "Atlantic\/Faroe": "orange", "Atlantic\/Madeira": "orange", "Atlantic\/Reykjavik": "red", "Atlantic\/South_Georgia": "yellow", "Atlantic\/St_Helena": "red", "Atlantic\/Stanley": "green", "Australia\/Adelaide": "wheat", "Australia\/Brisbane": "green", "Australia\/Broken_Hill": "wheat", "Australia\/Darwin": "wheat", "Australia\/Eucla": "wheat", "Australia\/Hobart": "green", "Australia\/Lindeman": "green", "Australia\/Lord_Howe": "wheat", "Australia\/Melbourne": "green", "Australia\/Perth": "orange", "Australia\/Sydney": "green", "Europe\/Amsterdam": "yellow", "Europe\/Andorra": "yellow", "Europe\/Astrakhan": "cyan", "Europe\/Athens": "green", "Europe\/Belgrade": "yellow", "Europe\/Berlin": "yellow", "Europe\/Bratislava": "yellow", "Europe\/Brussels": "yellow", "Europe\/Bucharest": "green", "Europe\/Budapest": "yellow", "Europe\/Busingen": "yellow", "Europe\/Chisinau": "green", "Europe\/Copenhagen": "yellow", "Europe\/Dublin": "orange", "Europe\/Gibraltar": "yellow", "Europe\/Guernsey": "orange", "Europe\/Helsinki": "green", "Europe\/Isle_of_Man": "orange", "Europe\/Istanbul": "green", "Europe\/Jersey": "orange", "Europe\/Kaliningrad": "yellow", "Europe\/Kirov": "green", "Europe\/Kyiv": "green", "Europe\/Lisbon": "orange", "Europe\/Ljubljana": "yellow", "Europe\/London": "orange", "Europe\/Luxembourg": "yellow", "Europe\/Madrid": "yellow", "Europe\/Malta": "yellow", "Europe\/Mariehamn": "green", "Europe\/Minsk": "green", "Europe\/Monaco": "yellow", "Europe\/Moscow": "green", "Europe\/Oslo": "yellow", "Europe\/Paris": "yellow", "Europe\/Podgorica": "yellow", "Europe\/Prague": "yellow", "Europe\/Riga": "green", "Europe\/Rome": "yellow", "Europe\/Samara": "cyan", "Europe\/San_Marino": "yellow", "Europe\/Sarajevo": "yellow", "Europe\/Saratov": "cyan", "Europe\/Simferopol": "green", "Europe\/Skopje": "yellow", "Europe\/Sofia": "green", "Europe\/Stockholm": "yellow", "Europe\/Tallinn": "green", "Europe\/Tirane": "yellow", "Europe\/Ulyanovsk": "cyan", "Europe\/Vaduz": "yellow", "Europe\/Vatican": "yellow", "Europe\/Vienna": "yellow", "Europe\/Vilnius": "green", "Europe\/Volgograd": "green", "Europe\/Warsaw": "yellow", "Europe\/Zagreb": "yellow", "Europe\/Zurich": "yellow", "Indian\/Antananarivo": "green", "Indian\/Chagos": "violet", "Indian\/Christmas": "red", "Indian\/Cocos": "wheat", "Indian\/Comoro": "green", "Indian\/Kerguelen": "blue", "Indian\/Mahe": "cyan", "Indian\/Maldives": "blue", "Indian\/Mauritius": "cyan", "Indian\/Mayotte": "green", "Indian\/Reunion": "cyan", "Pacific\/Apia": "violet", "Pacific\/Auckland": "blue", "Pacific\/Bougainville": "cyan", "Pacific\/Chatham": "wheat", "Pacific\/Chuuk": "green", "Pacific\/Easter": "violet", "Pacific\/Efate": "cyan", "Pacific\/Fakaofo": "violet", "Pacific\/Fiji": "blue", "Pacific\/Funafuti": "blue", "Pacific\/Galapagos": "violet", "Pacific\/Gambier": "yellow", "Pacific\/Guadalcanal": "cyan", "Pacific\/Guam": "green", "Pacific\/Honolulu": "green", "Pacific\/Kanton": "violet", "Pacific\/Kiritimati": "red", "Pacific\/Kosrae": "cyan", "Pacific\/Kwajalein": "blue", "Pacific\/Majuro": "blue", "Pacific\/Marquesas": "wheat", "Pacific\/Midway": "cyan", "Pacific\/Nauru": "blue", "Pacific\/Niue": "cyan", "Pacific\/Norfolk": "cyan", "Pacific\/Noumea": "cyan", "Pacific\/Pago_Pago": "cyan", "Pacific\/Palau": "yellow", "Pacific\/Pitcairn": "orange", "Pacific\/Pohnpei": "cyan", "Pacific\/Port_Moresby": "green", "Pacific\/Rarotonga": "green", "Pacific\/Saipan": "green", "Pacific\/Tahiti": "green", "Pacific\/Tarawa": "blue", "Pacific\/Tongatapu": "violet", "Pacific\/Wake": "blue", "Pacific\/Wallis": "blue", "UTC": "red", "Etc\/GMT": "#f8f8f8", "Etc\/GMT+1": "#f8f8f8", "Etc\/GMT+10": "#f8f8f8", "Etc\/GMT+11": "#f8f8f8", "Etc\/GMT+12": "#f8f8f8", "Etc\/GMT+2": "#f8f8f8", "Etc\/GMT+3": "#f8f8f8", "Etc\/GMT+4": "#f8f8f8", "Etc\/GMT+5": "#f8f8f8", "Etc\/GMT+6": "#f8f8f8", "Etc\/GMT+7": "#f8f8f8", "Etc\/GMT+8": "#f8f8f8", "Etc\/GMT+9": "#f8f8f8", "Etc\/GMT-1": "#f8f8f8", "Etc\/GMT-10": "#f8f8f8", "Etc\/GMT-11": "#f8f8f8", "Etc\/GMT-12": "#f8f8f8", "Etc\/GMT-13": "#f8f8f8", "Etc\/GMT-14": "#f8f8f8", "Etc\/GMT-2": "#f8f8f8", "Etc\/GMT-3": "#f8f8f8", "Etc\/GMT-4": "#f8f8f8", "Etc\/GMT-5": "#f8f8f8", "Etc\/GMT-6": "#f8f8f8", "Etc\/GMT-7": "#f8f8f8", "Etc\/GMT-8": "#f8f8f8", "Etc\/GMT-9": "#f8f8f8" };
            var utc_offset_colors = { "-11": "cyan", "-10": "green", "-9": "yellow", "-8": "orange", "-7": "red", "-6": "violet", "-5": "blue", "-4": "cyan", "-3": "green", "-2": "yellow", "-1": "orange", "UTC": "red", "+1": "orange", "+2": "yellow", "+3": "green", "+4": "cyan", "+5": "blue", "+6": "violet", "+7": "red", "+8": "orange", "+9": "yellow", "+10": "green", "+11": "cyan", "+12": "blue" };
            var timer_interval = null;
            jinjaVars = {
                ...jinjaVars,
                lang: "en"
            };
            var newLangs = ["da"];
            var mapStyleUrl = newLangs.includes(jinjaVars.lang) ?
                "/map/osm-bright-" + jinjaVars.lang + "/style.json" :
                "https://m.24timezones.com/styles/osm-bright-" + jinjaVars.lang + "/style.json";
            function debounce(func, wait, immediate) {
                var timeout;
                return function () {
                    var context = this, args = arguments;
                    var later = function () {
                        timeout = null;
                        if (!immediate) func.apply(context, args);
                    };
                    var callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) func.apply(context, args);
                };
            }
            function hasOwnProp(a, b) {
                return Object.prototype.hasOwnProperty.call(a, b);
            }
            function extend(a, b) {
                for (var i in b) {
                    if (hasOwnProp(b, i)) {
                        a[i] = b[i];
                    }
                }
                if (hasOwnProp(b, 'toString')) {
                    a.toString = b.toString;
                }
                if (hasOwnProp(b, 'valueOf')) {
                    a.valueOf = b.valueOf;
                }
                return a;
            }
            function SearchCityPlugin(options) {
                if (typeof options !== "undefined") {
                    this.options = extend(this.options, options);
                }
            }
            SearchCityPlugin.prototype = {
                options: {
                    placeholder: 'name',
                    minLength: 1,
                    limit: 1,
                },
                onAdd: function (map) {
                    this._map = map;
                    this._onChange = this._onChange.bind(this);
                    this._onKeyDown = this._onKeyDown.bind(this);
                    this._clear = this._clear.bind(this);
                    var el = this.container = document.createElement('div');
                    // el.className = 'mapboxgl-ctrl-geocoder mapboxgl-ctrl';
                    var icon = document.createElement('span');
                    // icon.className = 'geocoder-icon geocoder-icon-search';
                    this._inputEl = document.createElement('input');
                    this._inputEl.type = 'text';
                    this._inputEl.placeholder = this.options.placeholder;
                    this._inputEl.addEventListener('keydown', this._onKeyDown);
                    this._inputEl.addEventListener('change', this._onChange);
                    var actions = document.createElement('div');
                    actions.classList.add('geocoder-pin-right');
                    this._clearEl = document.createElement('button');
                    this._clearEl.className = 'geocoder-icon geocoder-icon-close';
                    this._clearEl.setAttribute('aria-label', 'Clear');
                    this._clearEl.addEventListener('click', this._clear);
                    this._loadingEl = document.createElement('span');
                    // this._loadingEl.className = 'geocoder-icon geocoder-icon-loading';
                    actions.appendChild(this._clearEl);
                    actions.appendChild(this._loadingEl);
                    el.appendChild(icon);
                    el.appendChild(this._inputEl);
                    el.appendChild(actions);
                    this._typeahead = new Suggestions(this._inputEl, [], {
                        filter: false,
                        minLength: this.options.minLength,
                        limit: this.options.limit
                    });
                    this._typeahead.getItemValue = function (item) { return item.display_name; };
                    return el;
                },
                onRemove: function () {
                    this.container.parentNode.removeChild(this.container);
                    this._map = null;
                    return this;
                },
                _onKeyDown: debounce(function (e) {
                    // if target has shadowRoot, then get the actual active element inside the shadowRoot
                    var target = e.target.shadowRoot ? e.target.shadowRoot.activeElement : e.target;
                    if (!target.value) {
                        return this._clearEl.style.display = 'none';
                    }
                    // TAB, ESC, LEFT, RIGHT, ENTER, UP, DOWN
                    if (e.metaKey || [9, 27, 37, 39, 13, 38, 40].indexOf(e.keyCode) !== -1) return;
                    if (target.value.length >= this.options.minLength) {
                        this._geocode(target.value);
                    }
                }, 200),
                _onChange: function () {
                    if (this._inputEl.value) this._clearEl.style.display = 'block';
                    var selected = this._typeahead.selected;
                    if (selected && this.options['marker']) {
                        this.options.marker.setLngLat([selected.lng, selected.lat])
                            .addTo(this._map);
                    }
                },
                _geocode: function (searchInput) {
                    var self = this;
                    this._loadingEl.style.display = 'block';
                    $.ajax({
                        url: "/timezone-map/suggest",
                        method: "GET",
                        data: {
                            term: searchInput,
                            limit: self.options.limit
                        },
                        success: function (data) {
                            self._loadingEl.style.display = 'none';
                            self._typeahead.update(data.items);
                        },
                        error: function () {
                            self._loadingEl.style.display = 'none';
                        }
                    });
                },
                _clear: function (ev) {
                    if (ev) ev.preventDefault();
                    this._inputEl.value = '';
                    this._typeahead.selected = null;
                    this._typeahead.clear();
                    this._onChange();
                    this._inputEl.focus();
                    this.options.marker.remove();
                    this._clearEl.style.display = 'none';
                }
            };
            function renderMap() {
                var map_bounds = [
                    [-180.0, -65.0], // Southwest coordinates
                    [180.0, 85.0]
                ];
                var map = new mapboxgl.Map({
                    container: 'timezones-map',
                    style: mapStyleUrl,
                    zoom: 0.9,
                    minZoom: 0.9,
                    center: [0, 30],
                    attributionControl: false,
                    maxBounds: map_bounds
                });
                map.scrollZoom.disable();
                map.dragRotate.disable();
                map.touchZoomRotate.disableRotation();

                var popup = new mapboxgl.Popup({
                    closeButton: false
                });
                var utc_popup = new mapboxgl.Popup({
                    closeButton: false
                });

                var marker = new mapboxgl.Marker({
                    draggable: false
                });

                map.on('load', function () {
                    var expression = ["match", ["get", "tzid"]];
                    var tz_id;
                    for (tz_id in iana_timezone_colors) {
                        expression.push(tz_id, iana_timezone_colors[tz_id]);
                    }
                    expression.push("#f8f8f8");

                    map.addSource('timezones', {
                        "type": "vector",
                        "tiles": ["https://m.24timezones.com/timezone-tiles/{z}/{x}/{y}.mvt"]

                    });

                    map.addLayer({
                        "id": "timezones",
                        "type": "fill",
                        "source": "timezones",
                        "source-layer": "geojsonLayer",
                        "paint": {
                            "fill-color": expression,
                            "fill-opacity": 0.25
                        }
                    });

                    map.addLayer({
                        "id": "timezones-highlighted",
                        "type": "fill",
                        "source": "timezones",
                        "source-layer": "geojsonLayer",
                        "paint": {
                            "fill-color": expression,
                            "fill-opacity": 0.5
                        },
                        "filter": ["==", "offset", ""]
                    });

                    map.addControl(new SearchCityPlugin({ 'marker': marker }), 'top-left');
                    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }));

                    var throttle = function (func, limit) {
                        var inThrottle;
                        return function () {
                            var args = arguments;
                            var context = this;
                            if (!inThrottle) {
                                func.apply(context, args);
                                inThrottle = true;
                                setTimeout(function () {
                                    inThrottle = false;
                                }, limit);
                            }
                        }
                    };
                    map.on('mousemove', 'timezones', throttle(function (e) {
                        // Change the cursor style as a UI indicator.
                        map.getCanvas().style.cursor = 'pointer';

                        // Single out the first found feature.
                        var feature = e.features[0];
                        var c_time = moment().utcOffset(feature.properties.offset / 60);
                        utc_popup.setHTML(c_time.format('Z'));
                        utc_popup.setLngLat(e.lngLat);
                        utc_popup.addTo(map);

                        map.setFilter('timezones-highlighted', ['==', 'offset', feature.properties.offset]);
                    }, 30));
                    map.on('mouseleave', 'timezones', function () {
                        map.getCanvas().style.cursor = '';
                        utc_popup.remove();
                        map.setFilter('timezones-highlighted', ['==', 'offset', '']);
                    });
                    map.addSource('offset_blocks', {
                        type: 'geojson',
                        data: '/js/data/timezones_map/offsets.json'
                    });
                    var utc_expression = ["match", ['get', 'description']];
                    var utc_offset;
                    for (utc_offset in utc_offset_colors) {
                        utc_expression.push(utc_offset, utc_offset_colors[utc_offset]);
                    }
                    utc_expression.push("#088");
                    map.addLayer({
                        'id': 'offset-blocks',
                        'type': 'fill',
                        'source': 'offset_blocks',
                        'layout': {},
                        'paint': {
                            'fill-color': utc_expression,
                            'fill-opacity': 0.65
                        }
                    });
                    map.addLayer({
                        "id": "offset-block-labels",
                        "type": "symbol",
                        "source": "offset_blocks",
                        "layout": {
                            "text-field": ["get", "description"],
                            // "text-variable-anchor": ["top", "bottom", "left", "right"],
                            "text-justify": "center",
                            'text-font': ['Open Sans Regular']
                        }
                    });
                    map.addSource('cities', {
                        type: 'geojson',
                        data: "/js/data/timezones_map/cities.json"
                    });
                    map.addLayer({
                        "id": "cities",
                        'type': 'circle',
                        "source": "cities",
                        'paint': {
                            // make circles larger as the user zooms from z12 to z22
                            'circle-radius': 3,
                            'circle-color': 'red'
                        }
                    });
                    map.on('click', function (e) {
                        var width = 10;
                        var height = 20;
                        var point = e.point;

                        var features = map.queryRenderedFeatures([
                            [point.x - width / 2, point.y - height / 2],
                            [point.x + width / 2, point.y + height / 2]
                        ], { layers: ['cities'] });

                        if (!features.length) {
                            return;
                        }
                        if (null !== timer_interval) {
                            clearInterval(timer_interval);
                            timer_interval = null;
                        }
                        utc_popup.remove();
                        // Single out the first found feature.
                        var feature = features[0];
                        var updatePopupHtml = function () {
                            var current_time = moment.utc().tz(feature.properties.tz);
                            popup.setHTML("<div><b>" + feature.properties.name + "</b></div>" +
                                "<div>" + current_time.format("MM/DD HH:mm:ss z") + "</div>" +
                                "<div>UTC offset: " + current_time.format("Z") + "</div>"
                            );
                        };
                        popup.setLngLat(e.lngLat);
                        updatePopupHtml(feature);
                        popup.addTo(map);
                        if (null == timer_interval) {
                            timer_interval = setInterval(updatePopupHtml, 1000);
                        }
                    });
                    var onMouseMoveCityLayer = function (e) {
                        // Change the cursor style as a UI indicator.
                        map.getCanvas().style.cursor = 'pointer';
                        if (null !== timer_interval) {
                            clearInterval(timer_interval);
                            timer_interval = null;
                        }
                        utc_popup.remove();

                        // Single out the first found feature.
                        var feature = e.features[0];

                        popup.setLngLat(e.lngLat);
                        var updatePopupHtml = function () {
                            var current_time = moment.utc().tz(feature.properties.tz);
                            popup.setHTML("<div><b>" + feature.properties.name + "</b></div>" +
                                "<div>" + current_time.format("MM/DD HH:mm:ss z") + "</div>" +
                                "<div>UTC offset: " + current_time.format("Z") + "</div>"
                            );
                        };
                        updatePopupHtml();
                        popup.addTo(map);
                        if (null == timer_interval) {
                            timer_interval = setInterval(updatePopupHtml, 1000);
                        }
                    };
                    var onMouseLeaveCityLayer = function (e) {
                        map.getCanvas().style.cursor = '';
                        popup.remove();
                        clearInterval(timer_interval);
                        timer_interval = null;
                    };
                    map.on('mousemove', 'cities', onMouseMoveCityLayer);
                    map.on('mouseleave', 'cities', onMouseLeaveCityLayer);

                    map.on('touchstart', 'cities', onMouseMoveCityLayer);
                    map.on('touchcancel', 'cities', onMouseLeaveCityLayer);
                });
            }
            renderMap();

            addScriptOnLoad("/js/search-bundle.min.js?_=1736618872", true, true);
        </script>

        <script type="text/javascript">
            const loadPageScript = () => {
                addScriptOnLoad("/js/page-scripts/dist/main.js?_=1736618872", true, true);
            }
        </script>
        <!-- /Page scripts -->

        <script type="text/javascript">
            // Fix issue with GTM overwriting replaceState, causing url changes in IE and Edge browsers.

            function fixHistoryMethod(name) {
                var oldMethod = window.history[name];
                window.history[name] = function (state, title, url) {
                    if (url === undefined) {
                        oldMethod.apply(window.history, [state, title]);
                    } else {
                        oldMethod.apply(window.history, [state, title, url]);
                    }
                }
            }

            fixHistoryMethod("replaceState");
            fixHistoryMethod("pushState");

            if (langDropdown) {
                const langButton = document.getElementById("lang-selector-button");
                let enteredTimeout = null;
                let mouseEntered = false;

                langButton.addEventListener("mouseenter", () => {
                    mouseEntered = true;
                    langDropdown.classList.add("open");
                    if (enteredTimeout) {
                        clearTimeout(enteredTimeout);
                    }
                    enteredTimeout = setTimeout(() => {
                        mouseEntered = false
                    }, 100);
                });

                langButton.addEventListener("click", () => {
                    if (!mouseEntered) {
                        langDropdown.classList.toggle("open");
                    }
                });

                langDropdown.addEventListener("mouseleave", () => {
                    const mediaQuery = window.matchMedia("only screen and (min-width: 769px)");
                    if (mediaQuery.matches) langDropdown.classList.remove("open");
                });

                const langSelectorLink = document.getElementById("language-selector-link");

                langSelectorLink.addEventListener("click", e => {
                    langDropdown.classList.toggle("open");
                    e.target.parentElement.classList.toggle("open-selector");

                    const downArrows = document.querySelectorAll("ul#m1 li.nav-item .arrow-down");
                    for (const element of downArrows) {
                        const navItem = element.parentElement.parentElement;
                        const contentContainer = navItem.querySelector(".some-class");
                        if (contentContainer) {
                            contentContainer.classList.remove("expanded");
                            navItem.classList.remove("open");
                        }
                    }
                });
            }
        </script>
        <script defer src="https://24timezones.com/perfops.js"></script>
