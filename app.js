// first class increased button
const firstClassIncreased = getElementById('increase-f-class');
firstClassIncreased.addEventListener("click", function() {
    count("f-class-count", true); //count function true increased by one
    const countForMultiply = getElementByIdWithValue("f-class-count");
    const price = 150 * countForMultiply;
    const updatePrice = getElementById("f-class-price")
    updatePrice.innerHTML = price;
    const economyClassPrice = getElementByIdWithInnerText("e-class-price");
    const getSubTotal = price + parseInt(economyClassPrice);
    const subTotal = getElementById("sub-total");
    subTotal.innerHTML = getSubTotal; //sub-total count
    let tax = getElementById("tax");
    const taxTotal = getSubTotal * 0.10; //tax count
    tax.innerHTML = taxTotal;
    const total = getElementById("total");
    total.innerHTML = getSubTotal + taxTotal; //total count
})

// first class decreased button
const firstClassDecreased = getElementById("decrease-f-class");
firstClassDecreased.addEventListener("click", function() {
    count("f-class-count", false); //count function false decreased by one
    const countForMultiply = getElementByIdWithValue("f-class-count");
    const price = 150 * countForMultiply;
    const updatePrice = getElementById("f-class-price")
    updatePrice.innerHTML = price;
    const economyClassPrice = getElementByIdWithInnerText("e-class-price");
    const getSubTotal = price + parseInt(economyClassPrice);
    const subTotal = getElementById("sub-total");
    subTotal.innerHTML = getSubTotal; //sub-total count
    let tax = getElementById("tax");
    const taxTotal = getSubTotal * 0.10; //tax count
    tax.innerHTML = taxTotal;
    const total = getElementById("total");
    total.innerHTML = getSubTotal + taxTotal; //total count
})


// economy class increased button
const economyClassIncreased = document.getElementById('increase-e-class');
economyClassIncreased.addEventListener("click", function() {
        count("e-class-count", true); //count function true increased by one
        const countForMultiply = getElementByIdWithValue("e-class-count");
        const price = 100 * countForMultiply;
        const updatePrice = getElementById("e-class-price")
        updatePrice.innerHTML = price;
        const fClassPrice = getElementByIdWithInnerText("f-class-price");
        const getSubTotal = price + parseInt(fClassPrice);
        const subTotal = getElementById("sub-total");
        subTotal.innerHTML = getSubTotal; //sub-total count
        let tax = getElementById("tax");
        const taxTotal = getSubTotal * 0.10; //tax count
        tax.innerHTML = taxTotal;
        const total = getElementById("total");
        total.innerHTML = getSubTotal + taxTotal; //total count





    })
    // economy class decreased button
const economyClassDecreased = getElementById('decrease-e-class');
economyClassDecreased.addEventListener("click", function() {
    count("e-class-count", false); //count function false decreased by one
    const countForMultiply = getElementByIdWithValue("e-class-count");
    const price = 100 * countForMultiply;
    const updatePrice = getElementById("e-class-price")
    updatePrice.innerHTML = price;
    const fClassPrice = getElementByIdWithInnerText("f-class-price");
    const getSubTotal = price + parseInt(fClassPrice);
    const subTotal = getElementById("sub-total");
    subTotal.innerHTML = getSubTotal; //sub-total count
    let tax = getElementById("tax");
    const taxTotal = getSubTotal * 0.10; //tax count
    tax.innerHTML = taxTotal;
    const total = getElementById("total");
    total.innerHTML = getSubTotal + taxTotal; //total count
})

// book now
const bookBtn = getElementById("book-btn");
bookBtn.addEventListener("click", function() {
    const bookingArea = getElementById("booking-area");
    // if ticket are zero it show alert
    if (getElementByIdWithInnerText("total") != 0) {
        bookingArea.style.display = 'none';
        const confirmation = getElementById("confirmation");
        confirmation.style.display = 'block';
    } else {
        alert("Please provide valid information");
    }
    bookPopup("e-class-count", "e-class-price", "e-confirm-quantity", "e-confirm-amount"); //confirmation update function 
    bookPopup("f-class-count", "f-class-price", "f-confirm-quantity", "f-confirm-amount"); //confirmation update function 
    const total = getElementByIdWithInnerText("total");
    const totalprice = getElementById("total-confirmed");
    totalprice.innerHTML = total;
})

// custom function

// This function is for class count
function count(id, isIncrease) {
    const Count = document.getElementById(id).value;
    const CountNumber = parseInt(Count);
    let countIncrease = 0;
    if (isIncrease == true) {
        countIncrease = CountNumber + 1;
    } else if (isIncrease == false) {
        if (Count > 0) {
            countIncrease = CountNumber - 1;
        }

    }
    document.getElementById(id).value = countIncrease;
}

// This function is for selecting element using getElementById
function getElementById(id) {
    const result = document.getElementById(id);
    return result;
}
// This function is for selecting element using getElementByIdWithValue
function getElementByIdWithValue(id) {
    const result = document.getElementById(id).value;
    return result;
}

// This function is for selecting element using getElementByIdWithInnerText
function getElementByIdWithInnerText(id) {
    const result = document.getElementById(id).innerText;
    return result;
}

//function for Showing booked confirmation
function bookPopup(classCountId, classPriceId, bookQuantityId, bookAmountId) {
    const quantity = getElementByIdWithValue(classCountId);
    const Price = getElementByIdWithInnerText(classPriceId)
    const ConfirmationQuantity = getElementById(bookQuantityId);
    ConfirmationQuantity.innerHTML = quantity;
    const ConfirmPrice = getElementById(bookAmountId);
    ConfirmPrice.innerHTML = Price;
}