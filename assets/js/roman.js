// Conversion functions
        function convertToRoman() {
            const num = parseInt(document.getElementById('numberInput').value);
            const resultElement = document.getElementById('romanResult');
            
            if (isNaN(num) || num < 1 || num > 3999) {
                resultElement.innerHTML = '<span class="text-danger">Please enter a number between 1 and 3999</span>';
                return;
            }
            
            resultElement.innerHTML = numberToRoman(num);
        }
        
        function convertToNumber() {
            const roman = document.getElementById('romanInput').value.trim().toUpperCase();
            const resultElement = document.getElementById('numberResult');
            
            if (!roman) {
                resultElement.innerHTML = '<span class="text-danger">Please enter a Roman numeral</span>';
                return;
            }
            
            const result = romanToNumber(roman);
            if (isNaN(result)) {
                resultElement.innerHTML = '<span class="text-danger">Invalid Roman numeral</span>';
            } else {
                resultElement.innerHTML = result;
            }
        }
        
        // Conversion algorithms
        function numberToRoman(num) {
            const romanNumerals = [
                { value: 1000, symbol: 'M' },
                { value: 900, symbol: 'CM' },
                { value: 500, symbol: 'D' },
                { value: 400, symbol: 'CD' },
                { value: 100, symbol: 'C' },
                { value: 90, symbol: 'XC' },
                { value: 50, symbol: 'L' },
                { value: 40, symbol: 'XL' },
                { value: 10, symbol: 'X' },
                { value: 9, symbol: 'IX' },
                { value: 5, symbol: 'V' },
                { value: 4, symbol: 'IV' },
                { value: 1, symbol: 'I' }
            ];
            
            let result = '';
            for (const { value, symbol } of romanNumerals) {
                while (num >= value) {
                    result += symbol;
                    num -= value;
                }
            }
            return result;
        }
        
        function romanToNumber(roman) {
            const romanMap = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
            let total = 0;
            let previousValue = 0;
            
            // Validate the Roman numeral string first
            if (!/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(roman)) {
                return NaN;
            }
            
            for (let i = roman.length - 1; i >= 0; i--) {
                const currentChar = roman[i];
                const currentValue = romanMap[currentChar];
                
                if (currentValue < previousValue) {
                    total -= currentValue;
                } else {
                    total += currentValue;
                }
                
                previousValue = currentValue;
            }
            
            return total;
        }