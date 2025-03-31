function alphabetSum(name) {
    let sum = 0;
    for (let char of name.toUpperCase()) {
        if (char >= 'A' && char <= 'Z') {
            sum += char.charCodeAt(0) - 64; // A=1, B=2, ..., Z=26
        }
    }
    return sum;
}

function calculateLove() {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    const progressBar = document.getElementById("progressBar");
    const fireworks = document.querySelector(".fireworks");

    if (name1 && name2) {
        const sum1 = alphabetSum(name1);
        const sum2 = alphabetSum(name2);
        const totalSum = (sum1 + sum2) % 101; // Calculate percentage

        // Update progress bar
        progressBar.style.width = totalSum + "%";
        progressBar.innerText = totalSum + "%";

        // Fireworks for scores above 70
        if (totalSum > 70) {
            fireworks.style.display = "block";
            setTimeout(() => {
                fireworks.style.display = "none";
            }, 3000); // Hide fireworks after 3 seconds
        } else {
            fireworks.style.display = "none";
        }
    } else {
        alert("Please enter both names!");
    }
}