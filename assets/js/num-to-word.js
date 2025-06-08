// Number conversion function
        function convertNumberToWords(number) {
            const num = parseFloat(number);
            if (isNaN(num)) return "Please enter a valid number";
            const isNegative = num < 0;
            const absoluteNum = Math.abs(num);
            const dollars = Math.floor(absoluteNum);
            const cents = Math.round((absoluteNum - dollars) * 100);
            const dollarsText = convertIntegerToWords(dollars);
            let centsText = "";
            if (cents > 0) {
                centsText = convertIntegerToWords(cents) + " Cent";
                if (cents !== 1) centsText += "s";
            }
            let result = isNegative ? "Minus " : "";
            result += dollarsText;
            
            if (dollars === 1) {
                result += " Dollar";
            } else if (dollars > 1) {
                result += " Dollars";
            }
            if (centsText) {
                if (dollars > 0) result += " and ";
                result += centsText;
            }
            if (dollars === 0 && cents === 0) {
                result = "Zero Dollars";
            }
            return result;
        }
        function convertIntegerToWords(num) {
            if (num === 0) return "Zero";
            const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
            const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
            const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
            const thousands = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];
            function convertHundreds(n) {
                let str = '';
                
                if (n >= 100) {
                    str += ones[Math.floor(n / 100)] + ' Hundred ';
                    n %= 100;
                }
                if (n >= 20) {
                    str += tens[Math.floor(n / 10)] + ' ';
                    n %= 10;
                } else if (n >= 10) {
                    str += teens[n - 10] + ' ';
                    n = 0;
                }
                if (n > 0) {
                    str += ones[n] + ' ';
                }
                
                return str.trim();
            }
            if (num === 0) return 'Zero';
            let words = '';
            let chunkCount = 0;
            while (num > 0) {
                const chunk = num % 1000;
                if (chunk !== 0) {
                    const chunkWords = convertHundreds(chunk);
                    words = chunkWords + (thousands[chunkCount] ? ' ' + thousands[chunkCount] : '') + ' ' + words;
                }
                num = Math.floor(num / 1000);
                chunkCount++;
            }
            
            return words.trim();
        }
         // copy function
    function copyResultText() {
        const text = document.getElementById("resultText").innerText;
        navigator.clipboard.writeText(text).catch(err => {
            console.error("Copy failed", err);
        });
    }
        // Set up converter tool
        document.getElementById('convertBtn').addEventListener('click', function() {
            const input = document.getElementById('numberInput').value;
            const result = convertNumberToWords(input);
            document.getElementById('resultText').textContent = result;
        });
        // Convert on Enter key
        document.getElementById('numberInput').addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                document.getElementById('convertBtn').click();
            }
        });
 