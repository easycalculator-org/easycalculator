const cities = [
    { name: "New York", offset: -4, flag: "https://flagcdn.com/us.svg" },
    { name: "London", offset: 0, flag: "https://flagcdn.com/gb.svg" },
    { name: "Tokyo", offset: 9, flag: "https://flagcdn.com/jp.svg" },
    { name: "Sydney", offset: 11, flag: "https://flagcdn.com/au.svg" }
];

function updateDigitalClock() {
    const now = new Date();
    document.getElementById("digital-clock").innerText = now.toLocaleTimeString() + " | " + now.toDateString();
}
setInterval(updateDigitalClock, 1000);
updateDigitalClock();

function createClock(city) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("clock-wrapper");

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.innerHTML = "×";
    removeBtn.onclick = () => wrapper.remove();
    wrapper.appendChild(removeBtn);

    const flagImg = document.createElement("img");
    flagImg.src = city.flag;
    flagImg.classList.add("flag");
    wrapper.appendChild(flagImg);

    const cityName = document.createElement("div");
    cityName.classList.add("city-name");
    cityName.innerText = city.name;
    wrapper.appendChild(cityName);

    const clockDiv = document.createElement("div");
    clockDiv.classList.add("clock");

    const numbers = document.createElement("div");
    numbers.classList.add("numbers");
    for (let i = 1; i <= 12; i++) {
        const numDiv = document.createElement("div");
        const angle = (i * 30) * (Math.PI / 180);
        const x = 50 + 40 * Math.sin(angle);
        const y = 50 - 40 * Math.cos(angle);
        numDiv.style.left = `${x}%`;
        numDiv.style.top = `${y}%`;
        numDiv.innerText = i;
        numbers.appendChild(numDiv);
    }
    clockDiv.appendChild(numbers);

    const hourHand = document.createElement("div");
    hourHand.classList.add("hand", "hour");
    const minuteHand = document.createElement("div");
    minuteHand.classList.add("hand", "minute");
    const secondHand = document.createElement("div");
    secondHand.classList.add("hand", "second");

    clockDiv.appendChild(hourHand);
    clockDiv.appendChild(minuteHand);
    clockDiv.appendChild(secondHand);
    wrapper.appendChild(clockDiv);

    document.getElementById("clock-container").appendChild(wrapper);

    function updateClock() {
        const now = new Date();
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const localTime = new Date(utc + city.offset * 3600000);
        const hours = localTime.getHours() % 12;
        const minutes = localTime.getMinutes();
        const seconds = localTime.getSeconds();

        hourHand.style.transform = `translateX(-50%) rotate(${(hours * 30) + (minutes / 2)}deg)`;
        minuteHand.style.transform = `translateX(-50%) rotate(${minutes * 6}deg)`;
        secondHand.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
    }
    setInterval(updateClock, 1000);
    updateClock();
}

function addManualCity() {
    const select = document.getElementById("city-select");
    const selectedOption = select.value.split(",");
    const city = { name: selectedOption[0], offset: parseFloat(selectedOption[1]), flag: selectedOption[2] };
    createClock(city);
}

cities.forEach(createClock);


// function goFullscreen() {
//     const elem = document.documentElement; // or any specific element

//     if (elem.requestFullscreen) {
//       elem.requestFullscreen();
//     } else if (elem.webkitRequestFullscreen) { // Safari
//       elem.webkitRequestFullscreen();
//     } else if (elem.msRequestFullscreen) { // IE11
//       elem.msRequestFullscreen();
//     }
//   }

function goFullscreen() {
    const elem = document.getElementById("clock-container");

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(); // Safari
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen(); // IE11
    }
  }
