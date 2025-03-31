function convertSpeed() {
    const kmInput = document.getElementById('kmInput').value;
    const mileOutput = document.getElementById('mileOutput');

    if (kmInput) {
        const mph = (kmInput * 0.621371).toFixed(2); // Convert to mph
        mileOutput.value = `${mph} mph`;
    } else {
        mileOutput.value = '';
        alert('Please enter a valid speed in km/h.');
    }
}