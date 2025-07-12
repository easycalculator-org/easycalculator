 let jinjaVars = {
    pageType: "world-clock-map"
  };
  const isRealAgent = () => {
    const botPattern = "googlebot|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|bingbot|slurp|java|wget|curl";
    const re = new RegExp(botPattern, "gi");
    const userAgent = navigator.userAgent;
    return !re.test(userAgent);
  };

  (() => {
    if (realAgent && adstack !== "publift-disabled") {
      const dynExpGroup = parseInt(dataLayer[0].dynExpGroup.replace("v", ""));
      const loadFuse = (adstack === "publift") || dynExpGroup <= 32; 
    }
  })();