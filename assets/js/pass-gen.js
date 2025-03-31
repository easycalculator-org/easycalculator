const passwordDisplay = document.getElementById('password-display');
const passwordLengthInput = document.getElementById('password-length');
const lengthValue = document.getElementById('length-value');
const decreaseLengthButton = document.getElementById('decrease-length');
const increaseLengthButton = document.getElementById('increase-length');
const generatePasswordButton = document.getElementById('generate-password');
const copyPasswordButton = document.getElementById('copy-password');

const includeUppercase = document.getElementById('include-uppercase');
const includeLowercase = document.getElementById('include-lowercase');
const includeNumbers = document.getElementById('include-numbers');
const includeSymbols = document.getElementById('include-symbols');

const charSets = {
    uppercase: 'ABCDEFGHIJKLMNPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnpqrstuvwxyz',
    numbers: '123456789',
    symbols: '!@#$%&()_[]{}|<>?/'
};

function generatePassword() {
    let length = parseInt(passwordLengthInput.value);
    let charPool = '';
    
    if (includeUppercase.checked) charPool += charSets.uppercase;
    if (includeLowercase.checked) charPool += charSets.lowercase;
    if (includeNumbers.checked) charPool += charSets.numbers;
    if (includeSymbols.checked) charPool += charSets.symbols;
    
    if (charPool === '') return;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }

    passwordDisplay.textContent = password;
}

passwordLengthInput.addEventListener('input', () => {
    lengthValue.textContent = passwordLengthInput.value;
    generatePassword();
});

decreaseLengthButton.addEventListener('click', () => {
    if (passwordLengthInput.value > 6) {
        passwordLengthInput.value--;
        lengthValue.textContent = passwordLengthInput.value;
        generatePassword();
    }
});

increaseLengthButton.addEventListener('click', () => {
    if (passwordLengthInput.value < 32) {
        passwordLengthInput.value++;
        lengthValue.textContent = passwordLengthInput.value;
        generatePassword();
    }
});

generatePasswordButton.addEventListener('click', generatePassword);

copyPasswordButton.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordDisplay.textContent).then(() => {
        alert('Password copied to clipboard!');
    });
});

// Generate default password on page load
generatePassword();