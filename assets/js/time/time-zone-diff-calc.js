   
  (function() {
    // ---------- Data: All IANA time zones sorted ----------
    const allZones = moment.tz.names().sort((a,b) => a.localeCompare(b));
    
    // State
    let selectedZoneA = 'America/New_York';
    let selectedZoneB = 'Europe/London';
    
    // DOM elements for custom selects
    const containerA = document.getElementById('searchSelectA');
    const containerB = document.getElementById('searchSelectB');
    
    // Live display elements
    const timeAEl = document.getElementById('timeA');
    const dateAEl = document.getElementById('dateA');
    const offsetAEl = document.getElementById('offsetA');
    const timeBEl = document.getElementById('timeB');
    const dateBEl = document.getElementById('dateB');
    const offsetBEl = document.getElementById('offsetB');
    const diffValueEl = document.getElementById('diffValue');
    const diffDetailEl = document.getElementById('diffDetail');
    const utcDiffNoteEl = document.getElementById('utcDiffNote');
    
    // Helper: format zone name for display
    function formatZoneName(zone) {
      return zone.replace(/_/g, ' ');
    }
    
    // ---------- Build Searchable Select Component ----------
    class SearchableSelect {
      constructor(container, initialZone, onSelectCallback) {
        this.container = container;
        this.selectedZone = initialZone;
        this.onSelect = onSelectCallback;
        this.filterText = '';
        this.isOpen = false;
        this.zonesList = [...allZones];
        this.render();
        this.bindEvents();
      }
      
      render() {
        const formattedSelected = formatZoneName(this.selectedZone);
        this.container.innerHTML = `
          <div class="search-select-input" id="selectInput-${this.container.id || 'sel'}">
            <span class="selected-value">${formattedSelected}</span>
            <i class="fas fa-chevron-down"></i>
          </div>
          <div class="search-select-dropdown" id="dropdown-${this.container.id || 'sel'}">
            <div class="search-box">
              <input type="text" placeholder="🔍 Search time zone... (e.g., Tokyo, London, EST)" id="searchInput-${this.container.id || 'sel'}">
            </div>
            <div class="options-list" id="optionsList-${this.container.id || 'sel'}"></div>
          </div>
        `;
        this.updateOptionsList();
      }
      
      updateOptionsList() {
        const dropdown = this.container.querySelector('.options-list');
        if (!dropdown) return;
        const searchTerm = this.filterText.toLowerCase();
        let filtered = this.zonesList;
        if (searchTerm) {
          filtered = this.zonesList.filter(zone => zone.toLowerCase().includes(searchTerm) || formatZoneName(zone).toLowerCase().includes(searchTerm));
        }
        if (filtered.length === 0) {
          dropdown.innerHTML = `<div class="no-results"><i class="fas fa-search-minus"></i> No matching zones</div>`;
          return;
        }
        const fragment = document.createDocumentFragment();
        filtered.forEach(zone => {
          const optionDiv = document.createElement('div');
          optionDiv.className = 'select-option';
          if (zone === this.selectedZone) optionDiv.classList.add('selected');
          optionDiv.textContent = formatZoneName(zone);
          optionDiv.dataset.value = zone;
          fragment.appendChild(optionDiv);
        });
        dropdown.innerHTML = '';
        dropdown.appendChild(fragment);
      }
      
      bindEvents() {
        const inputDiv = this.container.querySelector('.search-select-input');
        const dropdownDiv = this.container.querySelector('.search-select-dropdown');
        const searchInput = this.container.querySelector('.search-box input');
        
        // toggle dropdown
        inputDiv.addEventListener('click', (e) => {
          e.stopPropagation();
          if (this.isOpen) {
            this.closeDropdown();
          } else {
            this.openDropdown();
          }
        });
        
        // search filter
        if (searchInput) {
          searchInput.addEventListener('input', (e) => {
            this.filterText = e.target.value;
            this.updateOptionsList();
          });
          searchInput.addEventListener('click', (e) => e.stopPropagation());
        }
        
        // delegate option selection
        dropdownDiv.addEventListener('click', (e) => {
          const option = e.target.closest('.select-option');
          if (option && option.dataset.value) {
            const newZone = option.dataset.value;
            this.selectZone(newZone);
            this.closeDropdown();
          }
        });
        
        // close on outside click
        document.addEventListener('click', (e) => {
          if (!this.container.contains(e.target)) {
            this.closeDropdown();
          }
        });
      }
      
      openDropdown() {
        if (this.isOpen) return;
        this.isOpen = true;
        const dropdown = this.container.querySelector('.search-select-dropdown');
        if (dropdown) dropdown.classList.add('show');
        // focus search input after open
        const searchInput = this.container.querySelector('.search-box input');
        if (searchInput) {
          setTimeout(() => searchInput.focus(), 50);
          searchInput.value = this.filterText;
          this.updateOptionsList();
        }
      }
      
      closeDropdown() {
        if (!this.isOpen) return;
        this.isOpen = false;
        const dropdown = this.container.querySelector('.search-select-dropdown');
        if (dropdown) dropdown.classList.remove('show');
        // reset filter on close
        this.filterText = '';
        const searchInput = this.container.querySelector('.search-box input');
        if (searchInput) searchInput.value = '';
        this.updateOptionsList();
      }
      
      selectZone(zone) {
        if (this.selectedZone === zone) return;
        this.selectedZone = zone;
        const selectedSpan = this.container.querySelector('.selected-value');
        if (selectedSpan) selectedSpan.textContent = formatZoneName(zone);
        if (this.onSelect) this.onSelect(zone);
        this.updateOptionsList();
      }
      
      getValue() {
        return this.selectedZone;
      }
      
      setValue(zone) {
        if (zone && allZones.includes(zone)) {
          this.selectedZone = zone;
          const selectedSpan = this.container.querySelector('.selected-value');
          if (selectedSpan) selectedSpan.textContent = formatZoneName(zone);
          this.updateOptionsList();
          if (this.onSelect) this.onSelect(zone);
        }
      }
    }
    
    // ---------- Timezone Logic ----------
    function getZoneDetails(tzName) {
      if (!tzName || !moment.tz.zone(tzName)) {
        return { timeStr: '--:--:--', dateStr: 'Invalid', offsetMinutes: 0, offsetFormatted: 'UTC ?' };
      }
      const m = moment.tz(tzName);
      const timeStr = m.format('HH:mm:ss');
      const dateStr = m.format('dddd, MMM D, YYYY');
      const offsetMinutes = m.utcOffset();
      const offsetHours = offsetMinutes / 60;
      const sign = offsetHours >= 0 ? '+' : '';
      let offsetDisplay = (Math.abs(offsetHours) % 1 === 0) ? `${sign}${Math.abs(offsetHours)}` : `${sign}${offsetHours.toFixed(2)}`;
      const offsetFormatted = `UTC${offsetDisplay}`;
      return { timeStr, dateStr, offsetMinutes, offsetFormatted, momentObj: m };
    }
    
    function computeDiffAndUpdateUI() {
      const zoneA = searchSelectA.getValue();
      const zoneB = searchSelectB.getValue();
      if (!zoneA || !zoneB) return;
      
      const infoA = getZoneDetails(zoneA);
      const infoB = getZoneDetails(zoneB);
      
      timeAEl.textContent = infoA.timeStr;
      dateAEl.textContent = infoA.dateStr;
      offsetAEl.textContent = infoA.offsetFormatted;
      
      timeBEl.textContent = infoB.timeStr;
      dateBEl.textContent = infoB.dateStr;
      offsetBEl.textContent = infoB.offsetFormatted;
      
      const diffMinutes = infoB.offsetMinutes - infoA.offsetMinutes;
      const absMinutes = Math.abs(diffMinutes);
      const hours = Math.floor(absMinutes / 60);
      const minutes = absMinutes % 60;
      const isAhead = diffMinutes >= 0;
      
      if (diffMinutes === 0) {
        diffValueEl.innerHTML = '0 hr <span>0 min</span>';
        diffDetailEl.innerHTML = '✨ Zone B and Zone A are exactly the same time.';
      } else {
        if (minutes === 0) {
          diffValueEl.innerHTML = `${hours} ${hours === 1 ? 'hr' : 'hrs'} <span></span>`;
        } else {
          diffValueEl.innerHTML = `${hours} ${hours === 1 ? 'hr' : 'hrs'} <span>${minutes} ${minutes === 1 ? 'min' : 'mins'}</span>`;
        }
        const direction = isAhead ? 'ahead of' : 'behind';
        const minutePart = minutes > 0 ? ` and ${minutes} ${minutes === 1 ? 'minute' : 'minutes'}` : '';
        diffDetailEl.innerHTML = `Zone B is ${hours} ${hours === 1 ? 'hour' : 'hours'}${minutePart} ${direction} Zone A.`;
      }
      utcDiffNoteEl.innerHTML = `🌍 Offsets: ${infoA.offsetFormatted} (A)  |  ${infoB.offsetFormatted} (B)  |  Δ = ${(diffMinutes/60) > 0 ? '+' : ''}${(diffMinutes/60).toFixed(2)} hr`;
    }
    
    // Auto refresh every second
    let interval = null;
    function startLiveRefresh() {
      if (interval) clearInterval(interval);
      interval = setInterval(() => {
        computeDiffAndUpdateUI();
      }, 1000);
    }
    
    // ---------- Initialize Searchable Selects ----------
    let searchSelectA, searchSelectB;
    
    function initSelects() {
      searchSelectA = new SearchableSelect(containerA, selectedZoneA, (newZone) => {
        selectedZoneA = newZone;
        computeDiffAndUpdateUI();
      });
      searchSelectB = new SearchableSelect(containerB, selectedZoneB, (newZone) => {
        selectedZoneB = newZone;
        computeDiffAndUpdateUI();
      });
      // assign ids for internal reference
      containerA.id = 'zoneAContainer';
      containerB.id = 'zoneBContainer';
      searchSelectA.render();
      searchSelectB.render();
      // re-bind after render ensures events
      searchSelectA.bindEvents();
      searchSelectB.bindEvents();
      // set values again for consistency
      searchSelectA.setValue(selectedZoneA);
      searchSelectB.setValue(selectedZoneB);
      computeDiffAndUpdateUI();
    }
    
    // Buttons logic
    function bindGlobalButtons() {
      const refreshBtn = document.getElementById('refreshBtn');
      const swapBtn = document.getElementById('swapBtn');
      
      refreshBtn.addEventListener('click', () => {
        computeDiffAndUpdateUI();
        refreshBtn.innerHTML = '<i class="fas fa-spinner fa-pulse me-2"></i> Updated';
        setTimeout(() => {
          refreshBtn.innerHTML = '<i class="fas fa-sync-alt me-2"></i> Refresh Difference';
        }, 600);
      });
      
      swapBtn.addEventListener('click', () => {
        const tempZone = searchSelectA.getValue();
        const tempZoneVal = tempZone;
        const newA = searchSelectB.getValue();
        const newB = tempZoneVal;
        searchSelectA.setValue(newA);
        searchSelectB.setValue(newB);
        selectedZoneA = newA;
        selectedZoneB = newB;
        computeDiffAndUpdateUI();
        swapBtn.innerHTML = '<i class="fas fa-exchange-alt me-2"></i> Swapped!';
        setTimeout(() => {
          swapBtn.innerHTML = '<i class="fas fa-arrow-up-down me-2"></i> Swap Zones';
        }, 700);
      });
    }
    
    // Start application
    function startApp() {
      initSelects();
      bindGlobalButtons();
      startLiveRefresh();
    }
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', startApp);
    } else {
      startApp();
    }
  })();