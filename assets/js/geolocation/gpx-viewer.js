(function () {
  "use strict";

  // ─── DOM refs ───
  const mapEl = document.getElementById("map");
  const emptyState = document.getElementById("emptyState");
  const fileInput = document.getElementById("fileInput");
  const dropZone = document.getElementById("dropZone");
  const fileName = document.getElementById("fileName");
  const btnZoomIn = document.getElementById("btnZoomIn");
  const btnZoomOut = document.getElementById("btnZoomOut");
  const btnFitBounds = document.getElementById("btnFitBounds");
  const btnDownloadPng = document.getElementById("btnDownloadPng");
  const btnClearTrack = document.getElementById("btnClearTrack");
  const statDistance = document.getElementById("statDistance");
  const statElevation = document.getElementById("statElevation");
  const statTime = document.getElementById("statTime");
  const statPoints = document.getElementById("statPoints");

  // ─── Map init ───
  const map = L.map(mapEl, {
    center: [48.8566, 2.3522],
    zoom: 13,
    zoomControl: false,
    attributionControl: true,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  let gpxLayer = null;
  let isTrackLoaded = false;
  function showToast(message, type = "success") {
    const container = document.getElementById("toastContainer");
    const icon =
      type === "success"
        ? "bi-check-circle-fill"
        : "bi-exclamation-triangle-fill";
    const html = `
         <div class="toast-custom toast-${type} show" role="alert">
           <div class="toast-body">
              <i class="bi ${icon}"></i>
               <span>${message}</span>
               </div>
                </div>
                `;
    container.insertAdjacentHTML("beforeend", html);
    const toastEl = container.lastElementChild;
    setTimeout(() => {
      toastEl.classList.remove("show");
      setTimeout(() => toastEl.remove(), 400);
    }, 4000);
  }
  function formatDistance(meters) {
    if (meters === undefined || meters === null || isNaN(meters)) return "—";
    if (meters < 1000) return meters.toFixed(0) + " m";
    return (meters / 1000).toFixed(2) + " km";
  }

  function formatElevation(meters) {
    if (meters === undefined || meters === null || isNaN(meters)) return "—";
    return meters.toFixed(0) + " m";
  }
  function formatTime(seconds) {
    if (
      seconds === undefined ||
      seconds === null ||
      isNaN(seconds) ||
      seconds < 0
    )
      return "—";
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    if (hrs > 0) {
      return `${hrs}h ${mins}m ${secs}s`;
    }
    return `${mins}m ${secs}s`;
  }
  function resetStats() {
    statDistance.textContent = "—";
    statElevation.textContent = "—";
    statTime.textContent = "—";
    statPoints.textContent = "—";
  }
  function updateStats(layer) {
    if (!layer) {
      resetStats();
      return;
    }
    try {
      const dist = layer.get_distance ? layer.get_distance() : null;
      const elev = layer.get_elevation_gain ? layer.get_elevation_gain() : null;
      const time = layer.get_moving_time ? layer.get_moving_time() : null;
      const pts = layer.get_points ? layer.get_points().length : null;

      statDistance.textContent = formatDistance(dist);
      statElevation.textContent = formatElevation(elev);
      statTime.textContent = formatTime(time);
      statPoints.textContent = pts !== null ? pts : "—";
    } catch (_) {
      resetStats();
    }
  }
  function loadGPX(file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const gpxContent = e.target.result;

        if (gpxLayer) {
          map.removeLayer(gpxLayer);
          gpxLayer = null;
        }
        gpxLayer = new L.GPX(gpxContent, {
          async: true,
          marker_options: {
            startIconUrl:
              "https://cdn.jsdelivr.net/npm/leaflet-gpx@1.7.0/pin-icon-start.png",
            endIconUrl:
              "https://cdn.jsdelivr.net/npm/leaflet-gpx@1.7.0/pin-icon-end.png",
            shadowUrl:
              "https://cdn.jsdelivr.net/npm/leaflet-gpx@1.7.0/pin-shadow.png",
          },
        });

        gpxLayer.on("loaded", function () {
          emptyState.style.display = "none";
          isTrackLoaded = true;
          try {
            const bounds = gpxLayer.getBounds();
            if (bounds.isValid()) {
              map.fitBounds(bounds, { padding: [50, 50] });
            }
          } catch (_) {
            /* ignore */
          }

          updateStats(gpxLayer);
          showToast("GPX loaded successfully!", "success");
        });

        gpxLayer.on("error", function (err) {
          console.error("GPX error:", err);
          showToast(
            "Failed to parse GPX file. Please check the file format.",
            "error",
          );
          resetStats();
          if (gpxLayer) {
            map.removeLayer(gpxLayer);
            gpxLayer = null;
          }
          isTrackLoaded = false;
          emptyState.style.display = "flex";
        });

        gpxLayer.addTo(map);
      } catch (err) {
        console.error("Load error:", err);
        showToast("Error reading file: " + err.message, "error");
        resetStats();
        emptyState.style.display = "flex";
        isTrackLoaded = false;
      }
    };
    reader.onerror = function () {
      showToast("Failed to read file.", "error");
    };

    reader.readAsText(file);
  }
  function clearTrack() {
    if (gpxLayer) {
      map.removeLayer(gpxLayer);
      gpxLayer = null;
    }
    isTrackLoaded = false;
    emptyState.style.display = "flex";
    resetStats();
    // Reset view to default
    map.setView([48.8566, 2.3522], 13);
    showToast("Track cleared.", "success");
  }
  async function downloadPng() {
    if (!isTrackLoaded || !gpxLayer) {
      showToast("Please load a GPX track first.", "error");
      return;
    }
    const container = document.getElementById("map-container");
    const originalOverflow = container.style.overflow;
    container.style.overflow = "hidden";
    try {
      const emptyWasVisible = emptyState.style.display !== "none";
      if (emptyWasVisible) emptyState.style.display = "none";
      const canvas = await html2canvas(container, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#e8ecf1",
        logging: false,
        allowTaint: false,
      });
      if (emptyWasVisible) emptyState.style.display = "flex";
      container.style.overflow = originalOverflow;
      const link = document.createElement("a");
      link.download = "gpx-map.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
      showToast("PNG downloaded!", "success");
    } catch (err) {
      console.error("PNG capture error:", err);
      container.style.overflow = originalOverflow;
      showToast("Failed to capture map: " + err.message, "error");
    }
  }
  function handleFile(file) {
    if (!file) return;
    const ext = file.name.split(".").pop().toLowerCase();
    if (ext !== "gpx") {
      showToast("Please select a .gpx file.", "error");
      return;
    }
    fileName.textContent = "📄 " + file.name;
    fileName.style.display = "block";
    dropZone.querySelector(".hint").style.display = "none";
    loadGPX(file);
  }
  dropZone.addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", function (e) {
    if (this.files && this.files.length > 0) {
      handleFile(this.files[0]);
    }
    this.value = ""; 
  });
  dropZone.addEventListener("dragover", function (e) {
    e.preventDefault();
    this.classList.add("dragover");
  });
  dropZone.addEventListener("dragleave", function (e) {
    e.preventDefault();
    this.classList.remove("dragover");
  });
  dropZone.addEventListener("drop", function (e) {
    e.preventDefault();
    this.classList.remove("dragover");
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  });
  btnZoomIn.addEventListener("click", () => map.zoomIn());
  btnZoomOut.addEventListener("click", () => map.zoomOut());
  btnFitBounds.addEventListener("click", function () {
    if (gpxLayer && isTrackLoaded) {
      try {
        const bounds = gpxLayer.getBounds();
        if (bounds.isValid()) {
          map.fitBounds(bounds, { padding: [50, 50] });
        } else {
          showToast("No valid track bounds.", "error");
        }
      } catch (_) {
        showToast("No track to fit.", "error");
      }
    } else {
      showToast("Please load a GPX track first.", "error");
    }
  });
  btnDownloadPng.addEventListener("click", downloadPng);
  btnClearTrack.addEventListener("click", clearTrack);
  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.key === "o") {
      e.preventDefault();
      fileInput.click();
    }
    if (e.ctrlKey && e.shiftKey && e.key === "D") {
      e.preventDefault();
      downloadPng();
    }
  });

  resetStats();
  emptyState.style.display = "flex";
  setTimeout(() => map.invalidateSize(), 100);

  console.log("🗺️ GPX Viewer ready — upload a .gpx file to begin.");
  console.log("💡 Keyboard: Ctrl+O = upload, Ctrl+Shift+D = download PNG");
})();
