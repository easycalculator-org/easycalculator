// Main conversion function
    function convertNumberToWords(number, system) {
        const num = parseFloat(number);
        if (isNaN(num)) return "Please enter a valid number";
        
        const isNegative = num < 0;
        const absoluteNum = Math.abs(num);
        
        if (system === 'us') {
            // US System (Dollars/Cents)
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
            } else if (dollars > 1 || dollars === 0) {
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
        } else {
            // Indian System (Rupees/Paise)
            const rupees = Math.floor(absoluteNum);
            const paise = Math.round((absoluteNum - rupees) * 100);
            const rupeesText = convertIndianIntegerToWords(rupees);
            
            let paiseText = "";
            if (paise > 0) {
                paiseText = convertIntegerToWords(paise) + " Paise";
                if (paise === 1) paiseText = "One Paisa";
            }
            
            let result = isNegative ? "Minus " : "";
            result += rupeesText;
            
            if (rupees === 1) {
                result += " Rupee";
            } else {
                result += " Rupees";
            }
            
            if (paiseText) {
                if (rupees > 0) result += " and ";
                result += paiseText;
            }
            
            if (rupees === 0 && paise === 0) {
                result = "Zero Rupees";
            }
            
            return result;
        }
    }

    // Indian number system converter (supports lakhs and crores)
    function convertIndianIntegerToWords(num) {
        if (num === 0) return "Zero";
        
        const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
        const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
        const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
        
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

        let words = '';
        
        // Handle crores (10^7)
        const crores = Math.floor(num / 10000000);
        if (crores > 0) {
            words += convertIndianIntegerToWords(crores) + ' Crore ';
            num %= 10000000;
        }
        
        // Handle lakhs (10^5)
        const lakhs = Math.floor(num / 100000);
        if (lakhs > 0) {
            words += convertIndianIntegerToWords(lakhs) + ' Lakh ';
            num %= 100000;
        }
        
        // Handle thousands
        const thousands = Math.floor(num / 1000);
        if (thousands > 0) {
            words += convertHundreds(thousands) + ' Thousand ';
            num %= 1000;
        }
        
        // Handle hundreds and below
        if (num > 0) {
            words += convertHundreds(num);
        }
        
        return words.trim();
    }

    // US/International number system converter
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

    // Copy function
    function copyResultText() {
        const text = document.getElementById("resultText").innerText;
        navigator.clipboard.writeText(text).catch(err => {
            console.error("Copy failed", err);
        });
    }

    // Set up converter tool
    document.getElementById('convertBtn').addEventListener('click', function() {
        const input = document.getElementById('numberInput').value;
        const system = document.getElementById('numberSystem').value;
        const result = convertNumberToWords(input, system);
        document.getElementById('resultText').textContent = result;
    });

    // Convert on Enter key
    document.getElementById('numberInput').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('convertBtn').click();
        }
    });