
(function() {
    // input fields
    const sideA = document.getElementById('sideA');
    const sideB = document.getElementById('sideB');
    const sideC = document.getElementById('sideC');
    const calcBtn = document.getElementById('calculateBtn');
    const clearBtn = document.getElementById('clearBtn');

    // result texts
    const perimeterSpan = document.getElementById('perimeterVal');
    const areaSpan = document.getElementById('areaVal');
    const semiSpan = document.getElementById('semiVal');
    const typeSpan = document.getElementById('typeVal');
    const infoText = document.getElementById('infoText');
    const infoDiv = document.getElementById('infoMessage');

    // angle spans (numeric)
    const angleASpan = document.getElementById('angleAVal');
    const angleBSpan = document.getElementById('angleBVal');
    const angleCSpan = document.getElementById('angleCVal');

    // feedback
    const aFeed = document.getElementById('aFeedback');
    const bFeed = document.getElementById('bFeedback');
    const cFeed = document.getElementById('cFeedback');

    // SVG elements
    const fillPoly = document.getElementById('fillPoly');
    const sideABline = document.getElementById('sideAB');  // blue (c)
    const sideBCline = document.getElementById('sideBC');  // red (a)
    const sideCAline = document.getElementById('sideCA');  // green (b)
    const mA = document.getElementById('markerA');
    const mB = document.getElementById('markerB');
    const mC = document.getElementById('markerC');
    const lA = document.getElementById('labelA');
    const lB = document.getElementById('labelB');
    const lC = document.getElementById('labelC');
    const angleLabelA = document.getElementById('angleLabelA');
    const angleLabelB = document.getElementById('angleLabelB');
    const angleLabelC = document.getElementById('angleLabelC');

    function resetValidation() {
        [sideA, sideB, sideC].forEach(el => {
            el.classList.remove('is-invalid', 'is-valid');
        });
        aFeed.innerText = ''; bFeed.innerText = ''; cFeed.innerText = '';
    }

    function resetAll() {
        perimeterSpan.innerText = '—';
        areaSpan.innerText = '—';
        semiSpan.innerText = '—';
        typeSpan.innerText = '—';
        angleASpan.innerText = '—';
        angleBSpan.innerText = '—';
        angleCSpan.innerText = '—';
        infoText.innerText = 'Enter three different positive sides.';
        infoDiv.className = 'alert mt-4 mb-0 rounded-4 d-flex align-items-center';
        infoDiv.classList.add('alert-info', 'bg-opacity-10');
        infoDiv.classList.remove('alert-success', 'alert-warning', 'alert-danger');
        resetValidation();

        // clear svg lines / points
        sideABline.setAttribute('x1', ''); sideBCline.setAttribute('x1', ''); sideCAline.setAttribute('x1', '');
        fillPoly.setAttribute('points', '');
        mA.setAttribute('cx', ''); mB.setAttribute('cx', ''); mC.setAttribute('cx', '');
        lA.setAttribute('x', ''); lB.setAttribute('x', ''); lC.setAttribute('x', '');
        angleLabelA.textContent = ''; angleLabelB.textContent = ''; angleLabelC.textContent = '';
    }

    clearBtn.addEventListener('click', function() {
        sideA.value = ''; sideB.value = ''; sideC.value = '';
        resetAll();
    });

    calcBtn.addEventListener('click', function() {
        const aStr = sideA.value.trim();
        const bStr = sideB.value.trim();
        const cStr = sideC.value.trim();

        if (aStr === '' || bStr === '' || cStr === '') {
            resetAll();
            infoText.innerText = 'Please fill all sides.';
            infoDiv.classList.add('alert-warning');
            if (aStr === '') { sideA.classList.add('is-invalid'); aFeed.innerText = 'required'; }
            if (bStr === '') { sideB.classList.add('is-invalid'); bFeed.innerText = 'required'; }
            if (cStr === '') { sideC.classList.add('is-invalid'); cFeed.innerText = 'required'; }
            return;
        }

        const a = parseFloat(aStr);
        const b = parseFloat(bStr);
        const c = parseFloat(cStr);
        let valid = true;
        resetValidation();

        if (isNaN(a) || a <= 0) { sideA.classList.add('is-invalid'); aFeed.innerText = 'positive'; valid = false; } else { sideA.classList.add('is-valid'); }
        if (isNaN(b) || b <= 0) { sideB.classList.add('is-invalid'); bFeed.innerText = 'positive'; valid = false; } else { sideB.classList.add('is-valid'); }
        if (isNaN(c) || c <= 0) { sideC.classList.add('is-invalid'); cFeed.innerText = 'positive'; valid = false; } else { sideC.classList.add('is-valid'); }

        if (!valid) {
            infoText.innerText = '❌ enter positive numbers only.';
            infoDiv.classList.add('alert-danger'); infoDiv.classList.remove('alert-info','alert-success','alert-warning');
            perimeterSpan.innerText = '—'; areaSpan.innerText = '—'; semiSpan.innerText = '—'; typeSpan.innerText = '—';
            angleASpan.innerText = '—'; angleBSpan.innerText = '—'; angleCSpan.innerText = '—';
            return;
        }

        // inequalities
        if (a + b <= c || b + c <= a || a + c <= b) {
            sideA.classList.add('is-invalid'); sideB.classList.add('is-invalid'); sideC.classList.add('is-invalid');
            aFeed.innerText = (a + b <= c ? 'a+b ≤ c' : ''); bFeed.innerText = (b + c <= a ? 'b+c ≤ a' : ''); cFeed.innerText = (a + c <= b ? 'a+c ≤ b' : '');
            infoText.innerText = 'triangle inequality fails.';
            infoDiv.classList.add('alert-danger'); infoDiv.classList.remove('alert-success','alert-info','alert-warning');
            perimeterSpan.innerText = '—'; areaSpan.innerText = '—'; semiSpan.innerText = '—'; typeSpan.innerText = '—';
            angleASpan.innerText = '—'; angleBSpan.innerText = '—'; angleCSpan.innerText = '—';
            return;
        }

        // scalene check
        if (a === b || b === c || a === c) {
            sideA.classList.add('is-invalid'); sideB.classList.add('is-invalid'); sideC.classList.add('is-invalid');
            aFeed.innerText = (a === b ? 'a=b' : (a === c ? 'a=c' : '')); bFeed.innerText = (b === a ? 'b=a' : (b === c ? 'b=c' : '')); cFeed.innerText = (c === a ? 'c=a' : (c === b ? 'c=b' : ''));
            infoText.innerText = 'sides not all different (not scalene)';
            infoDiv.classList.add('alert-warning'); infoDiv.classList.remove('alert-success','alert-info','alert-danger');
            perimeterSpan.innerText = '—'; areaSpan.innerText = '—'; semiSpan.innerText = '—'; typeSpan.innerText = '—';
            angleASpan.innerText = '—'; angleBSpan.innerText = '—'; angleCSpan.innerText = '—';
            return;
        }

        // valid scalene
        const per = a + b + c;
        const s = per / 2;
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        // angles (degrees)
        const angleA_deg = Math.acos((b*b + c*c - a*a) / (2*b*c)) * 180 / Math.PI;
        const angleB_deg = Math.acos((a*a + c*c - b*b) / (2*a*c)) * 180 / Math.PI;
        const angleC_deg = 180 - angleA_deg - angleB_deg; // or compute directly

        perimeterSpan.innerText = per.toFixed(2);
        areaSpan.innerText = area.toFixed(2);
        semiSpan.innerText = s.toFixed(2);
        typeSpan.innerText = 'scalene';
        angleASpan.innerText = angleA_deg.toFixed(1) + '°';
        angleBSpan.innerText = angleB_deg.toFixed(1) + '°';
        angleCSpan.innerText = angleC_deg.toFixed(1) + '°';

        infoText.innerText = `✅ scalene: a=${a.toFixed(2)} , b=${b.toFixed(2)} , c=${c.toFixed(2)}`;
        infoDiv.classList.add('alert-success');
        infoDiv.classList.remove('alert-warning','alert-danger','alert-info');

        // --- draw 
        // place A (100, 250), B (320, 250) base AB = 220 (c side)
        const xA = 80, yA = 260;
        const xB = 340, yB = 260; 
        const baseAB = xB - xA; 

        // scale to fit: we want length AB (c) to become baseAB exactly
        const scale = baseAB / c;
        const aScaled = a * scale;  // BC (red)
        const bScaled = b * scale;  // CA (green)

        // angle at A (CAB) from sides b and c with opposite a:
        const angleAtA_rad = Math.acos((bScaled*bScaled + baseAB*baseAB - aScaled*aScaled) / (2 * bScaled * baseAB));
        const Cx = xA + bScaled * Math.cos(angleAtA_rad);
        const Cy = yA - bScaled * Math.sin(angleAtA_rad); // y downwards

        // update fill polygon (optional light fill)
        fillPoly.setAttribute('points', `${xA},${yA} ${xB},${yB} ${Cx},${Cy}`);

        // coloured sides
        sideABline.setAttribute('x1', xA); sideABline.setAttribute('y1', yA); sideABline.setAttribute('x2', xB); sideABline.setAttribute('y2', yB); // blue c
        sideBCline.setAttribute('x1', xB); sideBCline.setAttribute('y1', yB); sideBCline.setAttribute('x2', Cx); sideBCline.setAttribute('y2', Cy); // red a
        sideCAline.setAttribute('x1', Cx); sideCAline.setAttribute('y1', Cy); sideCAline.setAttribute('x2', xA); sideCAline.setAttribute('y2', yA); // green b

        // markers
        mA.setAttribute('cx', xA); mA.setAttribute('cy', yA);
        mB.setAttribute('cx', xB); mB.setAttribute('cy', yB);
        mC.setAttribute('cx', Cx); mC.setAttribute('cy', Cy);

        // labels A, B, C
        lA.setAttribute('x', xA-18); lA.setAttribute('y', yA-15); lA.textContent = 'A';
        lB.setAttribute('x', xB+12); lB.setAttribute('y', yB-15); lB.textContent = 'B';
        lC.setAttribute('x', Cx-6); lC.setAttribute('y', Cy-22); lC.textContent = 'C';

        // angle labels near vertices (show value)
        angleLabelA.setAttribute('x', xA-5); angleLabelA.setAttribute('y', yA-30); angleLabelA.textContent = angleA_deg.toFixed(1) + '°';
        angleLabelB.setAttribute('x', xB+35); angleLabelB.setAttribute('y', yB-30); angleLabelB.textContent = angleB_deg.toFixed(1) + '°';
        angleLabelC.setAttribute('x', Cx-15); angleLabelC.setAttribute('y', Cy-40); angleLabelC.textContent = angleC_deg.toFixed(1) + '°';
    });

    resetAll();
})();