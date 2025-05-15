  const updateStats = () => {
            const text = document.getElementById('textInput').value;
            const words = text.trim().split(/\s+/).filter(word => word.length > 0);
            const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
            const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0);
            
            // Basic Stats
            document.getElementById('charCount').textContent = text.length;
            document.getElementById('wordCount').textContent = words.length;
            document.getElementById('spaceCount').textContent = (text.match(/ /g) || []).length;
            document.getElementById('sentenceCount').textContent = sentences.length;
            document.getElementById('paragraphCount').textContent = paragraphs.length;
            
            // Readability Stats
            const readingTime = Math.ceil(words.length / 200);
            const speakingTime = Math.ceil(words.length / 130);
            const avgWordLength = words.length > 0 
                ? (text.replace(/\s/g, '').length / words.length).toFixed(1)
                : 0;
            const charDensity = text.length > 0 
                ? ((words.length / text.length) * 100).toFixed(1) + '%'
                : '0%';
            
            document.getElementById('readingTime').textContent = readingTime;
            document.getElementById('speakingTime').textContent = speakingTime;
            document.getElementById('avgWordLength').textContent = avgWordLength;
            document.getElementById('charDensity').textContent = charDensity;
        };

 // Event Listeners
  document.getElementById('textInput').addEventListener('input', updateStats);
  document.getElementById('darkModeToggle').addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });

  // Utility Functions
  const copyText = () => {
            const textarea = document.getElementById('textInput');
            textarea.select();
            navigator.clipboard.writeText(textarea.value);
        };

 const clearText = () => {
            document.getElementById('textInput').value = '';
            updateStats();
        };

    // Initialize
    updateStats();