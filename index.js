function rate(button) {
    let ratingValue = document.getElementById("ratingValue");
    ratingValue.value = button.innerText;

    /* remove selected from other button */
    let selected = document.querySelector(".btn-rate-value-selected");
    console.log(selected);
    if (selected != undefined) {
        selected.disabled = false;
        selected.classList.remove("btn-rate-value-selected");
    }
    /* select current button */
    button.classList.add("btn-rate-value-selected");
    button.disabled = true;

}


function submit() {
    let thankYou = document.querySelector(".submited");
    let rateComp = document.querySelector(".component");
    rateComp.classList.add("hidden");
    thankYou.classList.remove("hidden");

    let ratingDisplay = document.getElementById("ratingDisplay");
    ratingDisplay.innerText = document.getElementById("ratingValue").value;

}