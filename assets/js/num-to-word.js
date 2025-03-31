 const numberToWords = (num) => {
            const singleDigits = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
            const teens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
            const bigNumbers = ["", "Thousand", "Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion", "Septillion", "Octillion", "Nonillion", "Decillion"];

            if (num === "0") return "Zero";
            if (!/^\d+$/.test(num)) return "Invalid input. Please enter a number.";
            
            let result = "";
            let index = 0;
            while (num.length > 0) {
                let chunk = num.slice(-3);
                num = num.slice(0, -3);
                
                if (parseInt(chunk) > 0) {
                    result = parseChunk(chunk) + " " + bigNumbers[index] + " " + result;
                }
                index++;
            }
            return result.trim();

            function parseChunk(chunk) {
                let [hundreds, tens, ones] = ("000" + chunk).slice(-3).split("").map(Number);
                let chunkResult = "";

                if (hundreds) chunkResult += singleDigits[hundreds] + " Hundred ";
                if (tens === 1) {
                    chunkResult += ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"][ones];
                } else {
                    chunkResult += teens[tens];
                    chunkResult += (tens && ones ? " " : "") + singleDigits[ones];
                }

                return chunkResult.trim();
            }
        };

        document.getElementById("convertButton").addEventListener("click", () => {
            const input = document.getElementById("numberInput").value.trim();
            const result = numberToWords(input);
            const resultBox = document.getElementById("result");
            resultBox.textContent = result;
            resultBox.classList.remove("d-none");
        });