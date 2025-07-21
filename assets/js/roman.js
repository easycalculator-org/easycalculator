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

          // Roman numerals data
        const romanNumerals = [
            { number: 1, roman: 'I' }, { number: 2, roman: 'II' }, { number: 3, roman: 'III' }, { number: 4, roman: 'IV' }, { number: 5, roman: 'V' },
            { number: 6, roman: 'VI' }, { number: 7, roman: 'VII' }, { number: 8, roman: 'VIII' }, { number: 9, roman: 'IX' }, { number: 10, roman: 'X' },
            { number: 11, roman: 'XI' }, { number: 12, roman: 'XII' }, { number: 13, roman: 'XIII' }, { number: 14, roman: 'XIV' }, { number: 15, roman: 'XV' },
            { number: 16, roman: 'XVI' }, { number: 17, roman: 'XVII' }, { number: 18, roman: 'XVIII' }, { number: 19, roman: 'XIX' }, { number: 20, roman: 'XX' },
            { number: 21, roman: 'XXI' }, { number: 22, roman: 'XXII' }, { number: 23, roman: 'XXIII' }, { number: 24, roman: 'XXIV' }, { number: 25, roman: 'XXV' },
            { number: 26, roman: 'XXVI' }, { number: 27, roman: 'XXVII' }, { number: 28, roman: 'XXVIII' }, { number: 29, roman: 'XXIX' }, { number: 30, roman: 'XXX' },
            { number: 31, roman: 'XXXI' }, { number: 32, roman: 'XXXII' }, { number: 33, roman: 'XXXIII' }, { number: 34, roman: 'XXXIV' }, { number: 35, roman: 'XXXV' },
            { number: 36, roman: 'XXXVI' }, { number: 37, roman: 'XXXVII' }, { number: 38, roman: 'XXXVIII' }, { number: 39, roman: 'XXXIX' }, { number: 40, roman: 'XL' },
            { number: 41, roman: 'XLI' }, { number: 42, roman: 'XLII' }, { number: 43, roman: 'XLIII' }, { number: 44, roman: 'XLIV' }, { number: 45, roman: 'XLV' },
            { number: 46, roman: 'XLVI' }, { number: 47, roman: 'XLVII' }, { number: 48, roman: 'XLVIII' }, { number: 49, roman: 'XLIX' }, { number: 50, roman: 'L' },
            { number: 51, roman: 'LI' }, { number: 52, roman: 'LII' }, { number: 53, roman: 'LIII' }, { number: 54, roman: 'LIV' }, { number: 55, roman: 'LV' },
            { number: 56, roman: 'LVI' }, { number: 57, roman: 'LVII' }, { number: 58, roman: 'LVIII' }, { number: 59, roman: 'LIX' }, { number: 60, roman: 'LX' },
            { number: 61, roman: 'LXI' }, { number: 62, roman: 'LXII' }, { number: 63, roman: 'LXIII' }, { number: 64, roman: 'LXIV' }, { number: 65, roman: 'LXV' },
            { number: 66, roman: 'LXVI' }, { number: 67, roman: 'LXVII' }, { number: 68, roman: 'LXVIII' }, { number: 69, roman: 'LXIX' }, { number: 70, roman: 'LXX' },
            { number: 71, roman: 'LXXI' }, { number: 72, roman: 'LXXII' }, { number: 73, roman: 'LXXIII' }, { number: 74, roman: 'LXXIV' }, { number: 75, roman: 'LXXV' },
            { number: 76, roman: 'LXXVI' }, { number: 77, roman: 'LXXVII' }, { number: 78, roman: 'LXXVIII' }, { number: 79, roman: 'LXXIX' }, { number: 80, roman: 'LXXX' },
            { number: 81, roman: 'LXXXI' }, { number: 82, roman: 'LXXXII' }, { number: 83, roman: 'LXXXIII' }, { number: 84, roman: 'LXXXIV' }, { number: 85, roman: 'LXXXV' },
            { number: 86, roman: 'LXXXVI' }, { number: 87, roman: 'LXXXVII' }, { number: 88, roman: 'LXXXVIII' }, { number: 89, roman: 'LXXXIX' }, { number: 90, roman: 'XC' },
            { number: 91, roman: 'XCI' }, { number: 92, roman: 'XCII' }, { number: 93, roman: 'XCIII' }, { number: 94, roman: 'XCIV' }, { number: 95, roman: 'XCV' },
            { number: 96, roman: 'XCVI' }, { number: 97, roman: 'XCVII' }, { number: 98, roman: 'XCVIII' }, { number: 99, roman: 'XCIX' }, { number: 100, roman: 'C' }
        ];

        // When modal opens, populate the table
        document.getElementById('chartModal').addEventListener('show.bs.modal', function() {
            const tbody = document.querySelector('#chartModal tbody');
            tbody.innerHTML = '';
            
            // Add date
            document.getElementById('currentDate').textContent = new Date().toLocaleDateString();
            
            // Create rows (5 numbers per row)
            for (let i = 0; i < 20; i++) {
                const tr = document.createElement('tr');
                for (let j = 0; j < 5; j++) {
                    const index = i * 5 + j;
                    if (index < romanNumerals.length) {
                        const item = romanNumerals[index];
                        tr.innerHTML += `
                            <td>${item.number}</td>
                            <td><strong>${item.roman}</strong></td>
                        `;
                    }
                }
                tbody.appendChild(tr);
            }
        });

        // PDF Generation (A4 size)
        document.getElementById('downloadPdfBtn').addEventListener('click', function() {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });
            
            // Set font
            doc.setFont('helvetica');
            
            // Title
            doc.setFontSize(16);
            doc.setTextColor(13, 110, 253);
            doc.text('Roman Numerals 1-100 Chart', 105, 20, { align: 'center' });
            
            // Subtitle
            doc.setFontSize(12);
            doc.setTextColor(100, 100, 100);
            doc.text('easycalculator.org', 105, 26, { align: 'center' });
            
            // Date
            const today = new Date();
            doc.text(`Generated: ${today.toLocaleDateString()}`, 105, 32, { align: 'center' });
            
            // Set small font for table
            doc.setFontSize(10);
            doc.setTextColor(80, 80, 80);
            // doc.setTextColor(0, 0, 0);
            
            // Table parameters
            const startY = 40;
            const rowHeight = 7;
            const colWidth = 18;
            const cols = 5;
            const pageWidth = 210; // A4 width in mm
            const margin = 15;
            const tableWidth = pageWidth - margin * 2;
            const cellWidth = tableWidth / (cols * 2);
            
            // Table header
            doc.setFillColor(13, 110, 253);
            doc.setTextColor(25, 25, 25);
            // doc.text(headers[i], x, y, { align: 'center' });
            for (let i = 0; i < cols; i++) {
                doc.rect(margin + i * cellWidth * 2, startY, cellWidth * 2, rowHeight, 'F');
            }
            doc.text('Number', margin + cellWidth / 2, startY + 5);
            doc.text('Roman', margin + cellWidth * 1.5, startY + 5);
            doc.text('Number', margin + cellWidth * 2.5, startY + 5);
            doc.text('Roman', margin + cellWidth * 3.5, startY + 5);
            doc.text('Number', margin + cellWidth * 4.5, startY + 5);
            doc.text('Roman', margin + cellWidth * 5.5, startY + 5);
            doc.text('Number', margin + cellWidth * 6.5, startY + 5);
            doc.text('Roman', margin + cellWidth * 7.5, startY + 5);
            doc.text('Number', margin + cellWidth * 8.5, startY + 5);
            doc.text('Roman', margin + cellWidth * 9.5, startY + 5);
            
            // Table rows
            let y = startY + rowHeight;
            let page = 1;
            
            for (let i = 0; i < romanNumerals.length; i += cols) {
                // Check if we need a new page
                if (y > 270) { // A4 height is 297mm
                    doc.addPage();
                    y = 20;
                    page++;
                    
                    // Add header on new pages
                    doc.setFontSize(10);
                    doc.setTextColor(100, 100, 100);
                    doc.text(`Roman Numerals 1-100 Chart - Page ${page}`, 105, 10, { align: 'center' });
                    doc.setFontSize(10);
                    doc.setTextColor(0, 0, 0);
                }
                
                // Draw row
                for (let j = 0; j < cols; j++) {
                    const index = i + j;
                    if (index < romanNumerals.length) {
                        const item = romanNumerals[index];
                        
                        // Alternate row color
                        if (index % 2 === 0) {
                            doc.setFillColor(240, 248, 255);
                            doc.rect(margin + j * cellWidth * 2, y, cellWidth * 2, rowHeight, 'F');
                        }
                        
                        // Number
                        doc.text(item.number.toString(), margin + j * cellWidth * 2 + cellWidth / 2, y + 5);
                        
                        // Roman numeral
                        doc.text(item.roman, margin + j * cellWidth * 2 + cellWidth * 1.5, y + 5);
                    }
                }
                
                y += rowHeight;
            }
            
            // Footer
            doc.setFontSize(8);
            doc.setTextColor(100, 100, 100);
            doc.text(`© ${today.getFullYear()} easycalculator.org - Generated on ${today.toLocaleString()}`, 105, 290, { align: 'center' });
            
            // Save the PDF
            doc.save('Roman-Numerals-1-100-Chart.pdf');
        });