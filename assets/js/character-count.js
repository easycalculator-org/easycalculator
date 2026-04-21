  const textarea = document.getElementById('textInput');
  const freqGrid = document.getElementById('frequencyGrid');
  
  function getLetterFrequency(text) {
    const freq = {};
    for (let i = 65; i <= 90; i++) {
      freq[String.fromCharCode(i)] = 0;
    }
    for (let ch of text) {
      const upper = ch.toUpperCase();
      if (upper >= 'A' && upper <= 'Z') {
        freq[upper] = (freq[upper] || 0) + 1;
      }
    }
    return freq;
  }
  
  // Render
  function renderFrequencyGrid(freqMap) {
    const letters = Object.keys(freqMap).sort();
    const maxCount = Math.max(...Object.values(freqMap), 1);
    
    let html = '';
    for (let letter of letters) {
      const count = freqMap[letter];
      const percentWidth = maxCount > 0 ? (count / maxCount) * 100 : 0;
      html += `
        <div class="freq-item" data-letter="${letter}" onclick="highlightLetterInText('${letter}')">
          <div class="d-flex align-items-center gap-2">
            <span class="freq-letter">${letter}</span>
            <span class="freq-count fw-bold">${count}</span>
          </div>
          <div style="flex:1; margin-left: 6px;">
            <div class="freq-bar" style="width: ${percentWidth}%;"></div>
          </div>
        </div>
      `;
    }
    freqGrid.innerHTML = html;
  }
  
  window.scrollToTopLetter = function() {
    const items = document.querySelectorAll('.freq-item');
    if (!items.length) return;
    let maxItem = null;
    let maxCount = -1;
    items.forEach(item => {
      const countSpan = item.querySelector('.freq-count');
      if (countSpan) {
        const count = parseInt(countSpan.innerText, 10);
        if (count > maxCount) {
          maxCount = count;
          maxItem = item;
        }
      }
    });
    if (maxItem) {
      maxItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      maxItem.style.transition = '0.2s';
      maxItem.style.backgroundColor = '#fff3cd';
      setTimeout(() => { maxItem.style.backgroundColor = ''; }, 800);
    }
  };
  
  // highlight letter 
  window.highlightLetterInText = function(letter) {
    const text = textarea.value;
    if (!text) return;
    const regex = new RegExp(letter, 'gi');
    const matches = text.match(regex);
    const occ = matches ? matches.length : 0;
    
    // flash the clicked freq item
    const targetDiv = document.querySelector(`.freq-item[data-letter="${letter}"]`);
    if (targetDiv) {
      targetDiv.style.transform = 'scale(1.02)';
      targetDiv.style.backgroundColor = '#dbeafe';
      setTimeout(() => {
        targetDiv.style.transform = '';
        targetDiv.style.backgroundColor = '';
      }, 250);
    }
    
    // notification
    const toastMsg = document.createElement('div');
    toastMsg.innerText = `🔤 Letter ${letter} appears ${occ} time${occ !== 1 ? 's' : ''}`;
    toastMsg.style.position = 'fixed';
    toastMsg.style.bottom = '24px';
    toastMsg.style.right = '24px';
    toastMsg.style.backgroundColor = '#1e293b';
    toastMsg.style.color = 'white';
    toastMsg.style.padding = '8px 18px';
    toastMsg.style.borderRadius = '40px';
    toastMsg.style.fontSize = '0.85rem';
    toastMsg.style.zIndex = '1000';
    toastMsg.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    toastMsg.style.fontWeight = '500';
    document.body.appendChild(toastMsg);
    setTimeout(() => { toastMsg.remove(); }, 1500);
  };
  
  // Advanced stats calculation
  function getAdvancedStats(text) {
    const wordsRaw = text.trim().split(/\s+/).filter(w => w.length > 0);
    const words = wordsRaw;
    const wordCount = words.length;
    const uniqueSet = new Set(words);
    const uniqueWords = uniqueSet.size;
    const lexicalDensityVal = wordCount === 0 ? 0 : (uniqueWords / wordCount) * 100;
    const sentences = text.split(/[.!?]+(?:\s|$)/).filter(s => s.trim().length > 0);
    const sentenceCount = sentences.length;
    const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0);
    const paragraphCount = paragraphs.length;
    const lineCount = (text.match(/\n/g) || []).length;
    const spaceCount = (text.match(/ /g) || []).length;
    const charCount = text.length;
    const totalLettersOnly = (text.match(/[A-Za-z]/g) || []).length;
    const avgWordLength = wordCount === 0 ? 0 : (totalLettersOnly / wordCount).toFixed(1);
    const readingMin = Math.floor(wordCount / 200);
    const readingSecs = wordCount === 0 ? 0 : Math.floor((wordCount % 200) / (200 / 60));
    const speakingTime = Math.ceil(wordCount / 130);
    const charDensityVal = charCount === 0 ? 0 : (wordCount / charCount) * 100;
    const charDensityPercent = charDensityVal.toFixed(1) + '%';
    
    let fleschScore = 0, readabilityLabel = '';
    if (sentenceCount > 0 && wordCount > 0) {
      const avgWordsPerSentence = wordCount / sentenceCount;
      let totalSyllables = 0;
      for (let w of words) {
        let syl = w.toLowerCase().replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '').match(/[aeiouy]{1,2}/g)?.length || 1;
        syl = Math.max(1, syl);
        totalSyllables += syl;
      }
      const avgSyllablesPerWord = totalSyllables / wordCount;
      fleschScore = 206.835 - (1.015 * avgWordsPerSentence) - (84.6 * avgSyllablesPerWord);
      fleschScore = Math.min(100, Math.max(0, fleschScore));
      if (fleschScore >= 90) readabilityLabel = 'Very Easy';
      else if (fleschScore >= 70) readabilityLabel = 'Easy';
      else if (fleschScore >= 50) readabilityLabel = 'Moderate';
      else if (fleschScore >= 30) readabilityLabel = 'Difficult';
      else readabilityLabel = 'Very Hard';
    } else {
      fleschScore = 0;
      readabilityLabel = 'No text';
    }
    
    return {
      wordCount, sentenceCount, paragraphCount, lineCount, spaceCount, charCount,
      avgWordLength: parseFloat(avgWordLength), readingMin, readingSecs, speakingTime,
      charDensityPercent, lexicalDensity: lexicalDensityVal.toFixed(1),
      fleschScore: fleschScore.toFixed(0), readabilityLabel, totalLettersAlpha: totalLettersOnly,
      uniqueWordsCount: uniqueWords
    };
  }
  
  function updateStats() {
    const text = textarea.value;
    const stats = getAdvancedStats(text);
    
    // Update basic 
    document.getElementById('charCount').textContent = stats.charCount;
    document.getElementById('wordCount').textContent = stats.wordCount;
    document.getElementById('spaceCount').textContent = stats.spaceCount;
    document.getElementById('sentenceCount').textContent = stats.sentenceCount;
    document.getElementById('paragraphCount').textContent = stats.paragraphCount;
    document.getElementById('lineCount').textContent = stats.lineCount;
    document.getElementById('readingTime').textContent = stats.readingMin;
    document.getElementById('readingSecs').textContent = `${stats.readingSecs} sec`;
    document.getElementById('speakingTime').textContent = stats.speakingTime;
    document.getElementById('avgWordLength').textContent = stats.avgWordLength;
    document.getElementById('charDensity').textContent = stats.charDensityPercent;
    document.getElementById('fleschScore').textContent = stats.fleschScore;
    document.getElementById('readabilityLabel').textContent = stats.readabilityLabel;
    document.getElementById('lexicalDensity').innerHTML = `${stats.lexicalDensity}% <small>(unique/${stats.uniqueWordsCount})</small>`;
    
    const lexProgress = document.getElementById('lexicalProgress');
    if (lexProgress) lexProgress.style.width = `${Math.min(100, parseFloat(stats.lexicalDensity))}%`;
    document.getElementById('totalLettersCount').textContent = stats.totalLettersAlpha;
    
    // letter vs space ratio bar
    const lettersCount = stats.totalLettersAlpha;
    const spacesCount = stats.spaceCount;
    const totalAlphaSpace = lettersCount + spacesCount;
    const lettersPercent = totalAlphaSpace === 0 ? 0 : (lettersCount / totalAlphaSpace) * 100;
    const spacesPercent = 100 - lettersPercent;
    const densityProgress = document.getElementById('densityProgress');
    const spaceProgressDiv = document.getElementById('spaceProgress');
    if (densityProgress && spaceProgressDiv) {
      densityProgress.style.width = `${lettersPercent}%`;
      spaceProgressDiv.style.width = `${spacesPercent}%`;
    }
    document.getElementById('densityRatioText').innerHTML = `${lettersPercent.toFixed(1)}% letters`;
    
    // render letter frequency grid (A-Z counts)
    const freqMap = getLetterFrequency(text);
    renderFrequencyGrid(freqMap);
    
    localStorage.setItem('textBackupFreq', text);
  }
  
  const trimExtraSpaces = () => {
    let current = textarea.value;
    let trimmed = current.replace(/\s+/g, ' ').trim();
    textarea.value = trimmed;
    updateStats();
  };
  
  const copyText = () => {
    const text = textarea.value;
    if (!text) { alert('Nothing to copy!'); return; }
    navigator.clipboard.writeText(text).then(() => {
      const copyBtn = document.querySelector('button[onclick="copyText()"]');
      const originalHtml = copyBtn.innerHTML;
      copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
      setTimeout(() => { copyBtn.innerHTML = originalHtml; }, 1500);
    }).catch(() => alert('Failed to copy'));
  };
  
  const clearText = () => {
    textarea.value = '';
    updateStats();
    localStorage.removeItem('textBackupFreq');
  };
  
  const loadBackup = () => {
    const saved = localStorage.getItem('textBackupFreq');
    if (saved) {
      textarea.value = saved;
      updateStats();
    } else {
      updateStats();
    }
  };
  
  // Event listeners
  textarea.addEventListener('input', updateStats);
  window.copyText = copyText;
  window.clearText = clearText;
  window.trimExtraSpaces = trimExtraSpaces;
  window.highlightLetterInText = highlightLetterInText;
  window.scrollToTopLetter = scrollToTopLetter;
  
  loadBackup();