   
    (function(){
        // ======================= CONFIGURATION =======================
        // WebApp base URL for sharing (so friends can click and check the love calculator)
        const APP_BASE_URL = "https://easycalculator.org/love-calculator";
        
        // DOM elements
        const yourNameInput = document.getElementById('yourName');
        const crushNameInput = document.getElementById('crushName');
        const calculateBtn = document.getElementById('calculateBtn');
        const resetBtn = document.getElementById('resetBtn');
        const percentageDisplay = document.getElementById('percentageDisplay');
        const messageDisplay = document.getElementById('messageDisplay');
        const extraAdvice = document.getElementById('extraAdvice');
        const shareSection = document.getElementById('shareSection');
        const shareWhatsAppBtn = document.getElementById('shareWhatsAppBtn');
        const shareEmailBtn = document.getElementById('shareEmailBtn');
        
        // Store latest result details for sharing
        let latestLoveData = {
            percentage: 0,
            name1: '',
            name2: '',
            message: '',
            advice: ''
        };
        
        // Helper: deterministic + romantic sparkle algorithm (0-100)
        function computeLovePercentage(name1, name2) {
            if(!name1.trim() || !name2.trim()) return 0;
            const clean1 = name1.trim().toLowerCase();
            const clean2 = name2.trim().toLowerCase();
            
            let totalCode = 0;
            for(let i=0; i<clean1.length; i++) totalCode += clean1.charCodeAt(i);
            for(let i=0; i<clean2.length; i++) totalCode += clean2.charCodeAt(i);
            
            const set1 = new Set(clean1.split(''));
            const set2 = new Set(clean2.split(''));
            let common = 0;
            for(let ch of set1) if(set2.has(ch)) common++;
            const totalUnique = set1.size + set2.size;
            const commonFactor = totalUnique > 0 ? (common / totalUnique) * 30 : 0;
            
            const lenDiff = Math.abs(clean1.length - clean2.length);
            const lengthBonus = Math.max(0, 12 - lenDiff * 1.2);
            
            const vowels = ['a','e','i','o','u'];
            let vowelCount1 = 0, vowelCount2 = 0;
            for(let ch of clean1) if(vowels.includes(ch)) vowelCount1++;
            for(let ch of clean2) if(vowels.includes(ch)) vowelCount2++;
            const vowelSynergy = Math.min(20, (vowelCount1 + vowelCount2) * 1.8);
            
            const hashMod = (totalCode % 57);
            const hashBonus = (hashMod / 57) * 28;
            
            let rawScore = (totalCode % 47) + commonFactor + lengthBonus + vowelSynergy + hashBonus;
            let finalScore = 20 + (rawScore % 79);
            if(finalScore > 98) finalScore = 98;
            if(finalScore < 18) finalScore = 18 + (finalScore % 15);
            
            // Sparkle randomness: -2..+4
            const sparkle = Math.floor(Math.random() * 7) - 2;
            let lovePercent = finalScore + sparkle;
            lovePercent = Math.min(100, Math.max(12, lovePercent));
            return Math.floor(lovePercent);
        }
        
        function getLoveMessage(percentage, name1, name2) {
            const safe1 = escapeHtml(name1.trim() || "?");
            const safe2 = escapeHtml(name2.trim() || "?");
            if(!name1.trim() || !name2.trim()) return "💔 Please enter both names to unveil destiny!";
            if(percentage >= 90) return `💖✨ Cosmic love! ${safe1} & ${safe2} are soulmates! A match written in the stars. ✨💖`;
            if(percentage >= 75) return `💕🌸 Amazing chemistry! True romance is blossoming between ${safe1} and ${safe2}. Keep nurturing! 🌸💕`;
            if(percentage >= 55) return `💗🌹 Good vibes! You share a sweet bond. With a little more care, love can flourish beautifully. 🌹💗`;
            if(percentage >= 35) return `🍃💫 Interesting potential! Friendship and laughter can spark something deeper. Give it time. 💫🍃`;
            if(percentage >= 15) return `🌙🍂 A gentle connection. Not every love is fire, but respect and understanding can bloom. 🍂🌙`;
            return `💧🌿 The universe works in mysterious ways. Sometimes the best love stories start unexpectedly. Stay open! 🌿💧`;
        }
        
        function getExtraTip(percentage) {
            if(percentage >= 85) return "🎁 Surprise them with a handwritten letter — your bond is destined!";
            if(percentage >= 65) return "☕ Plan a cozy coffee date or stargazing night to deepen that spark!";
            if(percentage >= 40) return "💬 Honest conversations and shared laughter can turn friendship into romance.";
            return "✨ Sometimes the greatest love is the one we least expect. Be yourself!";
        }
        
        function escapeHtml(str) {
            if(!str) return '';
            return str.replace(/[&<>]/g, function(m) {
                if(m === '&') return '&amp;';
                if(m === '<') return '&lt;';
                if(m === '>') return '&gt;';
                return m;
            });
        }
        
        // Build shareable message text that includes the webapp URL so friends can click & check
        function getShareableMessage(withUrl = true) {
            const pct = latestLoveData.percentage;
            const nameA = latestLoveData.name1.trim() || "Your";
            const nameB = latestLoveData.name2.trim() || "Crush";
            const romanticLine = latestLoveData.message;
            const tip = latestLoveData.advice;
            
            let baseMsg = `💖 Love Calculator Result 💖\n\n${nameA} ❤️ ${nameB}\n✨ Compatibility: ${pct}% Match! ✨\n\n${romanticLine}\n💡 Tip: ${tip}\n`;
            if(withUrl) {
                baseMsg += `\n🔗 Check your own love score here: ${APP_BASE_URL}\n💘 Calculate yours & share the magic!`;
            }
            return baseMsg;
        }
        
        function getEmailSubject() {
            const pct = latestLoveData.percentage;
            const nameA = latestLoveData.name1.trim();
            const nameB = latestLoveData.name2.trim();
            return `💕 Love Compatibility: ${nameA} & ${nameB} - ${pct}% Match!`;
        }
        
        // Share via WhatsApp (includes webapp URL)
        function shareWhatsApp() {
            if(!latestLoveData.percentage && latestLoveData.percentage !== 0) {
                alert("💘 Please calculate your love score first before sharing!");
                return;
            }
            if(latestLoveData.percentage === 0 && (!latestLoveData.name1 || !latestLoveData.name2)) {
                alert("✨ Calculate your love match first to share the romantic result!");
                return;
            }
            const text = getShareableMessage(true);
            // Using WhatsApp share URL with pre-filled text
            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
            window.open(whatsappUrl, '_blank');
        }
        
        // Share via Email (includes webapp URL + clickable link in most email clients)
        function shareEmail() {
            if(!latestLoveData.percentage && latestLoveData.percentage !== 0) {
                alert("💖 Please calculate your love score before sharing via email.");
                return;
            }
            if(latestLoveData.percentage === 0 && (!latestLoveData.name1 || !latestLoveData.name2)) {
                alert("🌈 First calculate the love percentage, then share the magic!");
                return;
            }
            const subject = getEmailSubject();
            // Build email body with explicit URL and encouraging message
            const body = getShareableMessage(true) + `\n\n❤️ Click the link above to discover your own destiny! Sent with love from Love Calculator.`;
            const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
        }
        
        // Core calculation + update UI + show share section
        function performLoveCalculation() {
            let yourName = yourNameInput.value.trim();
            let crushName = crushNameInput.value.trim();
            
            // validation
            if(yourName === "" && crushName === "") {
                percentageDisplay.innerHTML = "💔 ? % 💔";
                messageDisplay.innerHTML = "<i class='fas fa-exclamation-triangle'></i> Please enter both names to calculate love!";
                extraAdvice.innerHTML = "✨ Love needs two hearts ✨";
                shareSection.style.display = "none";
                latestLoveData = { percentage: 0, name1: '', name2: '', message: '', advice: '' };
                return;
            }
            if(yourName === "") {
                percentageDisplay.innerHTML = "❓ ? % ❓";
                messageDisplay.innerHTML = "<i class='fas fa-user-friends'></i> Tell us your name first!";
                extraAdvice.innerHTML = "💗 Every story starts with a name.";
                shareSection.style.display = "none";
                latestLoveData = { percentage: 0, name1: '', name2: '', message: '', advice: '' };
                return;
            }
            if(crushName === "") {
                percentageDisplay.innerHTML = "❓ ? % ❓";
                messageDisplay.innerHTML = "<i class='fas fa-heart-broken'></i> Who is your special someone? Enter their name 💘";
                extraAdvice.innerHTML = "🌟 True love deserves a name!";
                shareSection.style.display = "none";
                latestLoveData = { percentage: 0, name1: '', name2: '', message: '', advice: '' };
                return;
            }
            
            // Compute love percentage
            let lovePercent = computeLovePercentage(yourName, crushName);
            lovePercent = Math.floor(lovePercent);
            const loveMessageHtml = getLoveMessage(lovePercent, yourName, crushName);
            const tipHtml = getExtraTip(lovePercent);
            
            // Update display with animation
            percentageDisplay.style.opacity = '0';
            setTimeout(() => {
                percentageDisplay.innerHTML = `💘 ${lovePercent}% 💘`;
                percentageDisplay.style.opacity = '1';
            }, 50);
            messageDisplay.innerHTML = `<i class="fas fa-heart me-1" style="color:#ff6b8b;"></i> ${loveMessageHtml}`;
            extraAdvice.innerHTML = `<i class="fas fa-comment-dots me-1"></i> ${tipHtml}`;
            
            // Store latest data for sharing (plain text versions)
            const plainMessage = loveMessageHtml.replace(/<[^>]*>/g, '');
            const plainTip = tipHtml.replace(/<[^>]*>/g, '');
            latestLoveData = {
                percentage: lovePercent,
                name1: yourName,
                name2: crushName,
                message: plainMessage,
                advice: plainTip
            };
            
            // Show share section with a smooth fade effect
            shareSection.style.display = "block";
            shareSection.style.opacity = "0";
            setTimeout(() => { shareSection.style.opacity = "1"; }, 80);
            
            // Add subtle result pop effect
            const resultDiv = document.getElementById('resultContainer');
            resultDiv.style.transform = 'scale(1.01)';
            setTimeout(() => { resultDiv.style.transform = 'scale(1)'; }, 200);
        }
        
        // Reset everything: clear fields, hide share section, reset result
        function resetCalculator() {
            yourNameInput.value = "";
            crushNameInput.value = "";
            percentageDisplay.innerHTML = "✨ ? % ✨";
            messageDisplay.innerHTML = "<i class='fas fa-heartbeat me-1'></i> Enter names & press calculate";
            extraAdvice.innerHTML = "💞 Type your love story and press the magic button!";
            shareSection.style.display = "none";
            latestLoveData = { percentage: 0, name1: '', name2: '', message: '', advice: '' };
            percentageDisplay.style.opacity = '1';
        }
        
        // Event listeners
        calculateBtn.addEventListener('click', performLoveCalculation);
        resetBtn.addEventListener('click', resetCalculator);
        shareWhatsAppBtn.addEventListener('click', shareWhatsApp);
        shareEmailBtn.addEventListener('click', shareEmail);
        
        // Allow Enter key in inputs
        const inputs = [yourNameInput, crushNameInput];
        inputs.forEach(input => {
            input.addEventListener('keypress', function(e) {
                if(e.key === 'Enter') {
                    e.preventDefault();
                    performLoveCalculation();
                }
            });
        });
        
        // Optional: If you want to display a small tooltip or demo, fine.
        console.log("💖 Love Calculator with webapp URL sharing enabled: " + APP_BASE_URL);
    })();