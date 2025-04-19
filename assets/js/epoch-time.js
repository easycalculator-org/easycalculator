document.getElementById('epochForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const epochInput = document.getElementById('epochTime').value;
    const resultDiv = document.getElementById('result');
    const gmtTime = document.getElementById('gmtTime');
    const localTime = document.getElementById('localTime');
    const relativeTime = document.getElementById('relativeTime');
    const timeZone = document.getElementById('timeZone');

    if (epochInput) {
      const date = new Date(parseInt(epochInput) * 1000);

      // GMT time
      const gmtFormatted = date.toUTCString();

      // Local time
      const localFormatted = date.toLocaleString();

      // Time Zone
      const offset = -date.getTimezoneOffset() / 60; // Time zone offset in hours
      const minutesOffset = date.getTimezoneOffset() % 60;
      const timeZoneFormatted = `GMT${(offset >= 0 ? '+' : '')}${offset}:${(minutesOffset < 10 ? '0' : '')}${Math.abs(minutesOffset)}`;

      // Relative time
      const now = new Date();
      const timeDifference = date - now; // Positive if future, negative if past
      const relativeFormatted = getRelativeTime(timeDifference);

      // Set result
      gmtTime.textContent = gmtFormatted;
      localTime.textContent = localFormatted;
      timeZone.textContent = timeZoneFormatted;
      relativeTime.textContent = relativeFormatted;

      // Show result
      resultDiv.classList.remove('d-none');
    } else {
      resultDiv.classList.add('d-none');
      alert('Please enter a valid Unix epoch timestamp.');
    }
  });

  function getRelativeTime(ms) {
    const seconds = Math.abs(ms) / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const months = days / 30; // Approximate months
    const years = days / 365; // Approximate years

    if (ms > 0) { // Future time
      if (years >= 1) return `${Math.floor(years)} year${Math.floor(years) > 1 ? 's' : ''} ahead`;
      if (months >= 1) return `${Math.floor(months)} month${Math.floor(months) > 1 ? 's' : ''} ahead`;
      if (days >= 1) return `${Math.floor(days)} day${Math.floor(days) > 1 ? 's' : ''} ahead`;
      if (hours >= 1) return `${Math.floor(hours)} hour${Math.floor(hours) > 1 ? 's' : ''} ahead`;
      if (minutes >= 1) return `${Math.floor(minutes)} minute${Math.floor(minutes) > 1 ? 's' : ''} ahead`;
      return `${Math.floor(seconds)} second${Math.floor(seconds) > 1 ? 's' : ''} ahead`;
    } else { // Past time
      if (years >= 1) return `${Math.floor(years)} year${Math.floor(years) > 1 ? 's' : ''} ago`;
      if (months >= 1) return `${Math.floor(months)} month${Math.floor(months) > 1 ? 's' : ''} ago`;
      if (days >= 1) return `${Math.floor(days)} day${Math.floor(days) > 1 ? 's' : ''} ago`;
      if (hours >= 1) return `${Math.floor(hours)} hour${Math.floor(hours) > 1 ? 's' : ''} ago`;
      if (minutes >= 1) return `${Math.floor(minutes)} minute${Math.floor(minutes) > 1 ? 's' : ''} ago`;
      return `${Math.floor(seconds)} second${Math.floor(seconds) > 1 ? 's' : ''} ago`;
    }
  }

  setInterval(() => {
    const now = new Date();
  
    // Epoch
    const epoch = Math.floor(now.getTime() / 1000);
    document.getElementById('currentEpochTime').textContent = epoch;
  
    // Time
    document.getElementById('currentDigitalTime').textContent = now.toLocaleTimeString();
  
    // Date
    document.getElementById('currentDate').textContent = now.toLocaleDateString();
  
    // Day of Week
    const dayOptions = { weekday: 'long' };
    const day = now.toLocaleDateString(undefined, dayOptions);
    document.getElementById('currentDay').textContent = day;
  
    // Time Zone Offset
    const offsetMinutes = now.getTimezoneOffset();
    const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
    const offsetRemainingMinutes = Math.abs(offsetMinutes) % 60;
    const sign = offsetMinutes <= 0 ? '+' : '-';
    const timeZoneStr = `GMT${sign}${offsetHours}:${offsetRemainingMinutes.toString().padStart(2, '0')}`;
    document.getElementById('currentTimeZone').textContent = timeZoneStr;
  }, 1000);
  