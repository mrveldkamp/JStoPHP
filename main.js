document.getElementById("button").addEventListener("click", fetchToPHP);

function fetchToPHP(event) {
    // Prevent Default Page Reload
    event.preventDefault();

    // Get form data
    let formEl = document.getElementById("my-form");
    let formData = new FormData(formEl);

    // Or you can make an empty formData object and then add info to it
    // let formData = new FormData();
    // formData.append("id", 2);
    // formData.append("name", "George");

    // Send form data to submit.php
    fetch("submit.php", {
            method: "POST",
            body: formData
        })
        .then(convertData)
        .then(processData);

    function convertData(responseData) {
        return responseData.json();
    }

    function processData(jsonData) {
        console.log(jsonData);
    }
}