(function() {
const aInp = document.getElementById('inputA');
const bInp = document.getElementById('inputB');
const cInp = document.getElementById('inputC');
const resultSpan = document.getElementById('resultBadge');
 const formulaSpan = document.getElementById('formulaExpression');
 function num(el) {
        const val = parseFloat(el.value);
        return isNaN(val) ? NaN : val;
      }
      function prettyNumber(value) {
        if (isNaN(value) || !isFinite(value)) return '?';
        let fixed = value.toFixed(4).replace(/\.?0+$/, '');
        return fixed === '' || fixed === '-' ? '0' : fixed;
      }
      function update() {
        const a = num(aInp);
        const b = num(bInp);
        const c = num(cInp);

        // show '—' if a is 0 or any missing
        if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
          resultSpan.textContent = '—';
          formulaSpan.textContent = 'x = ( ? × ? ) / ?';
          return;
        }
        const expr = `(${b} * ${c}) / ${a}`;
        try {
          const x = math.evaluate(expr);
          resultSpan.textContent = prettyNumber(x);

          // use math.js to format with multiplication symbol ×
          const node = math.parse(expr);
          const formulaText = node.toString({ implicit: 'hide', multiplication: '×' });
          formulaSpan.textContent = 'x = ' + formulaText;
        } catch (e) {
          resultSpan.textContent = '?';
          formulaSpan.textContent = 'x = ( ? × ? ) / ?';
        }
      }
      [aInp, bInp, cInp].forEach(inp => inp.addEventListener('input', update));
      document.getElementById('resetBtn').addEventListener('click', () => {
        aInp.value = 3;
        bInp.value = 4;
        cInp.value = 6;
        update();
      });

      update();
    })();