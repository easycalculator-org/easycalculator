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

  