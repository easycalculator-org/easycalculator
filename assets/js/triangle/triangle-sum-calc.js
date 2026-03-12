 (function() {
      // DOM elements
      const angleA = document.getElementById('angleA');
      const angleB = document.getElementById('angleB');
      const angleC = document.getElementById('angleC');
      const sumDisplay = document.getElementById('sumDisplay');
      const warningMsg = document.getElementById('warningMessage');
      const resetBtn = document.getElementById('resetDefaults');
      const canvas = document.getElementById('triangleCanvas');
      const placeholder = document.getElementById('graphPlaceholder');
      const ctx = canvas.getContext('2d');

      // Side length spans
      const sideASpan = document.getElementById('sideAVal');
      const sideBSpan = document.getElementById('sideBVal');
      const sideCSpan = document.getElementById('sideCVal');

      const CANVAS_W = 600, CANVAS_H = 480;

      // Helper: round to 2 decimals
      const r2 = (x) => Math.round(x * 100) / 100;

      // Helper: check if we have valid numbers
      function hasValidInputs() {
        let a = parseFloat(angleA.value);
        let b = parseFloat(angleB.value);
        return !isNaN(a) && !isNaN(b) && a > 0 && b > 0 && a < 180 && b < 180;
      }

      // Show/hide canvas and placeholder
      function toggleGraph(show) {
        if (show) {
          canvas.style.display = 'block';
          placeholder.style.display = 'none';
        } else {
          canvas.style.display = 'none';
          placeholder.style.display = 'flex';
        }
      }

      // Clear all outputs
      function clearOutputs() {
        angleC.value = '—';
        sumDisplay.textContent = '⚡ Enter angles to see sum';
        warningMsg.innerHTML = '';
        sideASpan.textContent = '—';
        sideBSpan.textContent = '—';
        sideCSpan.textContent = '—';
        
        // Clear canvas
        ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
        toggleGraph(false);
      }

      // Main update function
      function updateAll() {
        // Parse angles
        let aDeg = parseFloat(angleA.value);
        let bDeg = parseFloat(angleB.value);

        // If either input is invalid or empty, clear everything
        if (isNaN(aDeg) || isNaN(bDeg) || angleA.value === '' || angleB.value === '') {
          clearOutputs();
          return;
        }

        // Basic validation
        if (aDeg <= 0 || bDeg <= 0) {
          clearOutputs();
          warningMsg.innerHTML = '<span class="text-danger">⚠️ Angles must be positive</span>';
          return;
        }

        if (aDeg >= 180 || bDeg >= 180) {
          clearOutputs();
          warningMsg.innerHTML = '<span class="text-danger">⚠️ Angles must be less than 180°</span>';
          return;
        }

        // Calculate third angle
        let cDeg = 180 - (aDeg + bDeg);

        // Validate triangle possibility
        if (cDeg <= 0) {
          clearOutputs();
          warningMsg.innerHTML = '<span class="text-danger">⚠️ Sum of angles exceeds 180°</span>';
          return;
        }

        if (cDeg >= 180) {
          clearOutputs();
          warningMsg.innerHTML = '<span class="text-danger">⚠️ Sum of angles too small</span>';
          return;
        }

        // Valid triangle - update all outputs
        angleC.value = r2(cDeg) + '°';
        sumDisplay.textContent = `🔹 ${r2(aDeg)}° + ${r2(bDeg)}° + ${r2(cDeg)}° = 180°`;
        warningMsg.innerHTML = '<span class="text-success">✓ Valid triangle!</span>';

        // --- Compute side lengths using Law of Sines ---
        const A = aDeg * Math.PI / 180;
        const B = bDeg * Math.PI / 180;
        const C = cDeg * Math.PI / 180;

        const sinA = Math.sin(A);
        const sinB = Math.sin(B);
        const sinC = Math.sin(C);

        // Scale factor for display - make triangle fit nicely in canvas
        const targetSize = 200;
        let k = targetSize / Math.max(sinA, sinB, sinC);
        
        const aLen = k * sinA;
        const bLen = k * sinB;
        const cLen = k * sinC;

        // Update side length displays
        sideASpan.textContent = r2(aLen);
        sideBSpan.textContent = r2(bLen);
        sideCSpan.textContent = r2(cLen);

        // Show canvas and hide placeholder
        toggleGraph(true);

        // ----- Draw triangle with improved positioning -----
        ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
        
        // Light gradient background
        const gradient = ctx.createLinearGradient(0, 0, CANVAS_W, CANVAS_H);
        gradient.addColorStop(0, '#f8faff');
        gradient.addColorStop(1, '#f0f5ff');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

        // Find the longest side to determine scaling
        const sides = [aLen, bLen, cLen];
        const maxSide = Math.max(...sides);
        
        // Calculate scale to fit in canvas with margin
        const margin = 80;
        const maxAllowed = Math.min(CANVAS_W - 2 * margin, CANVAS_H - 2 * margin);
        const scale = (maxAllowed * 0.9) / maxSide;
        
        const scaledA = aLen * scale;
        const scaledB = bLen * scale;
        const scaledC = cLen * scale;

        // Position triangle with base at bottom
        const baseY = CANVAS_H - margin;
        const xA = margin + (CANVAS_W - 2 * margin - scaledC) / 2; // Center horizontally
        const yA = baseY;
        const xB = xA + scaledC;
        const yB = baseY;

        // Calculate C coordinates using law of cosines
        const cosA = (scaledB * scaledB + scaledC * scaledC - scaledA * scaledA) / (2 * Math.max(scaledB * scaledC, 0.001));
        const cosAClamped = Math.max(-1, Math.min(1, cosA));
        const angleA_rad = Math.acos(cosAClamped);
        
        let xC = xA + scaledB * Math.cos(angleA_rad);
        let yC = yA - scaledB * Math.sin(angleA_rad);

        // Ensure triangle stays within bounds
        const minY = margin / 2;
        if (yC < minY) {
          // Shift triangle down
          const shift = minY - yC + 10;
          yC += shift;
        }

        // Draw triangle with soft colors
        ctx.beginPath();
        ctx.moveTo(xA, yA);
        ctx.lineTo(xB, yB);
        ctx.lineTo(xC, yC);
        ctx.closePath();
        
        // Soft fill with gradient
        const fillGradient = ctx.createLinearGradient(xA, yA, xC, yC);
        fillGradient.addColorStop(0, '#d9e6ff');
        fillGradient.addColorStop(1, '#c7d9ff');
        ctx.fillStyle = fillGradient;
        ctx.fill();
        
        // Softer border
        ctx.strokeStyle = '#8ba3d9';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Draw subtle dashed lines for height reference (optional)
        ctx.beginPath();
        ctx.setLineDash([5, 3]);
        ctx.moveTo(xC, yC);
        ctx.lineTo(xC, yA);
        ctx.strokeStyle = '#b3c7ff';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.setLineDash([]); // Reset to solid

        // Label vertices with soft colors
        ctx.font = 'bold 15px system-ui, sans-serif';
        ctx.fillStyle = '#4a5a8c';
        ctx.fillText('A', xA - 18, yA - 12);
        ctx.fillText('B', xB + 12, yB - 12);
        ctx.fillText('C', xC - 14, yC - 18);

        // Draw angle arcs with soft green
        ctx.strokeStyle = '#6b8c5c';
        ctx.lineWidth = 1.8;
        
        // Arc at A
        if (aDeg > 5) {
          ctx.beginPath();
          ctx.arc(xA, yA, 22, 0, Math.atan2(yC - yA, xC - xA), false);
          ctx.stroke();
        }
        
        // Arc at B
        if (bDeg > 5) {
          ctx.beginPath();
          ctx.arc(xB, yB, 22, Math.atan2(yC - yB, xC - xB), Math.PI, false);
          ctx.stroke();
        }
        
        // Arc at C
        if (cDeg > 5) {
          ctx.beginPath();
          ctx.arc(xC, yC, 18, Math.atan2(yA - yC, xA - xC), Math.atan2(yB - yC, xB - xC), false);
          ctx.stroke();
        }

        // Show angle values near vertices
        ctx.font = 'bold 13px system-ui, sans-serif';
        ctx.fillStyle = '#5b6b9c';
        ctx.fillText(r2(aDeg) + '°', xA - 30, yA - 35);
        ctx.fillText(r2(bDeg) + '°', xB + 25, yB - 35);
        ctx.fillText(r2(cDeg) + '°', xC - 30, yC - 35);

        // Right angle indicator
        if (Math.abs(aDeg - 90) < 0.1) {
          ctx.fillStyle = '#bf7b3b';
          ctx.font = 'bold 18px system-ui';
          ctx.fillText('∟', xA - 20, yA - 25);
        } else if (Math.abs(bDeg - 90) < 0.1) {
          ctx.fillStyle = '#bf7b3b';
          ctx.font = 'bold 18px system-ui';
          ctx.fillText('∟', xB + 5, yB - 25);
        } else if (Math.abs(cDeg - 90) < 0.1) {
          ctx.fillStyle = '#bf7b3b';
          ctx.font = 'bold 18px system-ui';
          ctx.fillText('∟', xC - 15, yC - 30);
        }

        // Draw side length labels near midpoints
        ctx.font = '12px system-ui, sans-serif';
        ctx.fillStyle = '#8f9bb5';
        
        // Side a (BC)
        const midBC = { x: (xB + xC)/2, y: (yB + yC)/2 };
        ctx.fillText('a=' + r2(aLen), midBC.x + 10, midBC.y - 10);
        
        // Side b (AC)
        const midAC = { x: (xA + xC)/2, y: (yA + yC)/2 };
        ctx.fillText('b=' + r2(bLen), midAC.x - 40, midAC.y - 15);
        
        // Side c (AB)
        const midAB = { x: (xA + xB)/2, y: (yA + yB)/2 - 15 };
        ctx.fillText('c=' + r2(cLen), midAB.x - 15, midAB.y - 10);
      }

      // Reset to example values
      function resetToExample() {
        angleA.value = 60;
        angleB.value = 50;
        updateAll();
      }

      // Event listeners
      angleA.addEventListener('input', updateAll);
      angleB.addEventListener('input', updateAll);
      resetBtn.addEventListener('click', resetToExample);

      // Initialize with blank values
      angleA.value = '';
      angleB.value = '';
      clearOutputs();

      // Handle window resize
      window.addEventListener('resize', () => {
        if (hasValidInputs()) {
          updateAll();
        }
      });
    })();