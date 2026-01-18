function convertSpeed(){
    let kmph = document.getElementById("kmph").value;
    let mph = document.getElementById("mph").value;
    let resultBox = document.getElementById("result");

    if(kmph !== ""){
        let mphResult = (kmph * 0.621371).toFixed(2);
        document.getElementById("mph").value = mphResult;
        resultBox.innerHTML = `${kmph} km/h = ${mphResult} mph`;
    }
    else if(mph !== ""){
        let kmphResult = (mph / 0.621371).toFixed(2);
        document.getElementById("kmph").value = kmphResult;
        resultBox.innerHTML = `${mph} mph = ${kmphResult} km/h`;
    }
    else{
        resultBox.innerHTML = "Please enter a value to convert.";
    }

    resultBox.classList.remove("d-none");
}

function resetFields(){
    document.getElementById("kmph").value = "";
    document.getElementById("mph").value = "";
    document.getElementById("result").classList.add("d-none");
}