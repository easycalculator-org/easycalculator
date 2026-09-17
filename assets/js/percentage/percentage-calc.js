 // Calculator 1: Calculate Percentage
 function calculatePercentage() {
    const part = parseFloat(document.getElementById('part1').value);
    const whole = parseFloat(document.getElementById('whole1').value);
    const resultElement = document.getElementById('result1');

    if (isNaN(part) || isNaN(whole) || whole === 0) {
        resultElement.textContent = 'Please enter valid numbers (Whole cannot be zero)';
        resultElement.className = 'error';
        return;
    }

    const percentage = (part / whole) * 100;
    resultElement.textContent = `Percentage: ${percentage.toFixed(2)}%`;
    resultElement.className = 'result';
}

// Calculator 2: Calculate Part
function calculatePart() {
    const percentage = parseFloat(document.getElementById('percentage2').value);
    const whole = parseFloat(document.getElementById('whole2').value);
    const resultElement = document.getElementById('result2');

    if (isNaN(percentage) || isNaN(whole)) {
        resultElement.textContent = 'Please enter valid numbers';
        resultElement.className = 'error';
        return;
    }

    const part = (percentage * whole) / 100;
    resultElement.textContent = `Part Value: ${part.toFixed(2)}`;
    resultElement.className = 'result';
}

// Calculator 3: Calculate Whole
function calculateWhole() {
    const part = parseFloat(document.getElementById('part3').value);
    const percentage = parseFloat(document.getElementById('percentage3').value);
    const resultElement = document.getElementById('result3');

    if (isNaN(part) || isNaN(percentage) || percentage === 0) {
        resultElement.textContent = 'Please enter valid numbers (Percentage cannot be zero)';
        resultElement.className = 'error';
        return;
    }

    const whole = (part * 100) / percentage;
    resultElement.textContent = `Whole Value: ${whole.toFixed(2)}`;
    resultElement.className = 'result';
}