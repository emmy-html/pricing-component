function priceSwitch() {
    var toggle = document.getElementById("price-toggle");
    var basicPrice = document.getElementById("basic-price");
    var professionalPrice = document.getElementById("professional-price");
    var masterPrice = document.getElementById("master-price");
    if (toggle.checked === true) {
        basicPrice.innerHTML = "$199.99";
        professionalPrice.innerHTML = "$249.99";
        masterPrice.innerHTML = "$399.99";
    } else if (toggle.checked === false) {
        basicPrice.innerHTML = "$19.99";
        professionalPrice.innerHTML = "$24.99";
        masterPrice.innerHTML = "$39.99";
    }
}