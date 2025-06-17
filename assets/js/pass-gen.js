document.addEventListener('DOMContentLoaded', function() {
            const lengthSlider = document.getElementById('length-slider');
            const lengthValue = document.getElementById('length-value');
            const uppercase = document.getElementById('uppercase');
            const lowercase = document.getElementById('lowercase');
            const numbers = document.getElementById('numbers');
            const symbols = document.getElementById('symbols');
            const generateBtn = document.getElementById('generate-btn');
            const passwordOutput = document.getElementById('password-output');
            const copyBtn = document.getElementById('copy-btn');
            const strengthText = document.getElementById('strength-text');
            
            // Update length value display
            lengthSlider.addEventListener('input', function() {
                lengthValue.textContent = this.value;
            });
            
            // Generate password
            generateBtn.addEventListener('click', function() {
                const length = lengthSlider.value;
                const hasUpper = uppercase.checked;
                const hasLower = lowercase.checked;
                const hasNumber = numbers.checked;
                const hasSymbol = symbols.checked;
                
                passwordOutput.value = generatePassword(length, hasUpper, hasLower, hasNumber, hasSymbol);
            });
            
            // Copy to clipboard
            copyBtn.addEventListener('click', function() {
                if(passwordOutput.value !== 'Click Generate') {
                    passwordOutput.select();
                    document.execCommand('copy');
                    
                    // Visual feedback
                    const originalText = copyBtn.innerHTML;
                    copyBtn.innerHTML = '<i class="fas fa-check"></i>';
                    setTimeout(() => {
                        copyBtn.innerHTML = originalText;
                    }, 2000);
                }
            });
            
            // Password generation function
            function generatePassword(length, upper, lower, number, symbol) {
                let generatedPassword = '';
                const typesCount = upper + lower + number + symbol;
                const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);
                
                if(typesCount === 0) {
                    return 'Select at least one option';
                }
                
                for(let i = 0; i < length; i += typesCount) {
                    typesArr.forEach(type => {
                        const funcName = Object.keys(type)[0];
                        generatedPassword += randomFunc[funcName]();
                    });
                }
                
                const finalPassword = generatedPassword.slice(0, length);
                return finalPassword;
            }
            
            const randomFunc = {
                upper: () => String.fromCharCode(Math.floor(Math.random() * 26) + 65),
                lower: () => String.fromCharCode(Math.floor(Math.random() * 26) + 97),
                number: () => String.fromCharCode(Math.floor(Math.random() * 10) + 48),
                symbol: () => {
                    const symbols = '!@#$%^&*(){}[]=<>/,.';
                    return symbols[Math.floor(Math.random() * symbols.length)];
                }
            };
        });