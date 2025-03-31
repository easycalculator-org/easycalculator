function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

function calculateLCM() {
    const num1 = parseInt(document.getElementById('number1').value) || 0;
    const num2 = parseInt(document.getElementById('number2').value) || 0;
    const num3 = parseInt(document.getElementById('number3').value) || null;
    const num4 = parseInt(document.getElementById('number4').value) || null;

    const numbers = [num1, num2, num3, num4].filter(num => !isNaN(num) && num > 0);

    if (numbers.length < 2) {
        document.getElementById('lcmResult').innerHTML = 'Please enter at least two numbers.';
        document.getElementById('lcmDetails').innerHTML = '';
        return;
    }

    let result = numbers[0];
    let details = `LCM of ${numbers.join(', ')}:<br>`;

    numbers.slice(1).forEach(num => {
        const prevResult = result;
        result = lcm(result, num);
        details += `LCM(${prevResult}, ${num}) = ${result}<br>`;
    });

    document.getElementById('lcmResult').innerHTML = `<strong>LCM = ${result}</strong>`;
    document.getElementById('lcmDetails').innerHTML = details;
}