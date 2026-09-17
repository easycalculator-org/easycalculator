function calculatePercentage() {
    const initialValue = parseFloat(document.getElementById('initialValue').value);
    const finalValue = parseFloat(document.getElementById('finalValue').value);
    const resultElement = document.getElementById('result');
    
    if (isNaN(initialValue) || isNaN(finalValue)) {
        resultElement.textContent = 'Please enter valid numbers.';
        resultElement.className = '';
        return;
    }

    const change = finalValue - initialValue;
    const percentageChange = (change / initialValue) * 100;

    if (percentageChange > 0) {
        resultElement.textContent = `Increase of ${percentageChange.toFixed(2)}%`;
        resultElement.className = 'result-positive';
    } else if (percentageChange < 0) {
        resultElement.textContent = `Decrease of ${Math.abs(percentageChange).toFixed(2)}%`;
        resultElement.className = 'result-negative';
    } else {
        resultElement.textContent = 'No change.';
        resultElement.className = '';
    }
}