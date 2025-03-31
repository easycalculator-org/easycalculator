function calculateRoot() {
    let num = document.getElementById("number").value;
    let resultBox = document.getElementById("result");
    let descriptionBox = document.getElementById("description");
    let exampleBox = document.getElementById("example");
    if (num === "" || num < 0) {
        resultBox.innerText = "Please enter a valid positive number.";
        resultBox.classList.remove("d-none");
        descriptionBox.classList.add("d-none");
        exampleBox.classList.add("d-none");
        return;
    }
    let result = math.sqrt(num);
    resultBox.innerHTML = `<strong>Result:</strong> √${num} = ${result.toFixed(4)}`;
    descriptionBox.innerHTML = `<strong>Description:</strong><br>
        <small>The square root of ${num} is approximately ${result.toFixed(4)}. This means that multiplying ${result.toFixed(4)} by itself results in approximately ${num}. The square root function is widely used in mathematics, physics, and engineering to solve equations and analyze patterns.</small>`;
    exampleBox.innerHTML = `<strong>Example:</strong><br>
        <small>If x = ${result.toFixed(4)}, then x² = (${result.toFixed(4)})² = ${num}.</small>`;
    
    resultBox.classList.remove("d-none");
    descriptionBox.classList.remove("d-none");
    exampleBox.classList.remove("d-none");
}