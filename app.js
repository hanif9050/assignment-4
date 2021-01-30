const firstClassIncreased = document.getElementById('increase-f-class');
firstClassIncreased.addEventListener("click", function() {

    // const fClassCount = document.getElementById("f-class-count").value;
    // const fClassCountNumber = parseInt(fClassCount);
    // const countIncrease = fClassCountNumber + 1;
    // document.getElementById("f-class-count").value = countIncrease;
    count("f-class-count", true);

    const countForMultiply = getElementByIdWithValue("f-class-count");
    const price = 150 * countForMultiply;
    const updatePrice = getElementById("f-class-price")
    updatePrice.innerHTML = price;
    const economyClassPrice = getElementByIdWithInnerText("e-class-price");
    const getSubTotal = price + parseInt(economyClassPrice);
    const subTotal = getElementById("sub-total");
    subTotal.innerHTML = getSubTotal;


    let tax = getElementById("tax");
    const taxTotal = getSubTotal * 0.10
    tax.innerHTML = taxTotal;
    const total = getElementById("total");
    total.innerHTML = getSubTotal + taxTotal;





})

const firstClassDecreased = getElementById("decrease-f-class");
firstClassDecreased.addEventListener("click", function() {
    console.log("clicked")
    count("f-class-count", false)

    const countForMultiply = getElementByIdWithValue("f-class-count");
    const price = 150 * countForMultiply;
    const updatePrice = getElementById("f-class-price")
    updatePrice.innerHTML = price;
    const economyClassPrice = getElementByIdWithInnerText("e-class-price");
    const getSubTotal = price + parseInt(economyClassPrice);
    const subTotal = getElementById("sub-total");
    subTotal.innerHTML = getSubTotal;


    let tax = getElementById("tax");
    const taxTotal = getSubTotal * 0.10
    tax.innerHTML = taxTotal;
    const total = getElementById("total");
    total.innerHTML = getSubTotal + taxTotal;
})


// economy class
const economyClassIncreased = document.getElementById('increase-e-class');
economyClassIncreased.addEventListener("click", function() {


    count("e-class-count", true);

    const countForMultiply = getElementByIdWithValue("e-class-count");
    const price = 100 * countForMultiply;
    const updatePrice = getElementById("e-class-price")
    updatePrice.innerHTML = price;
    const fClassPrice = getElementByIdWithInnerText("f-class-price");
    const getSubTotal = price + parseInt(fClassPrice);
    const subTotal = getElementById("sub-total");
    subTotal.innerHTML = getSubTotal;


    let tax = getElementById("tax");
    const taxTotal = getSubTotal * 0.10
    tax.innerHTML = taxTotal;
    const total = getElementById("total");
    total.innerHTML = getSubTotal + taxTotal;





})

const economyClassDecreased = document.getElementById('decrease-e-class');
economyClassDecreased.addEventListener("click", function() {


    count("e-class-count", false);

    const countForMultiply = getElementByIdWithValue("e-class-count");
    const price = 100 * countForMultiply;
    const updatePrice = getElementById("e-class-price")
    updatePrice.innerHTML = price;
    const fClassPrice = getElementByIdWithInnerText("f-class-price");
    const getSubTotal = price + parseInt(fClassPrice);
    const subTotal = getElementById("sub-total");
    subTotal.innerHTML = getSubTotal;


    let tax = getElementById("tax");
    const taxTotal = getSubTotal * 0.10
    tax.innerHTML = taxTotal;
    const total = getElementById("total");
    total.innerHTML = getSubTotal + taxTotal;





})

// book now
const bookBtn = getElementById("book-btn");
bookBtn.addEventListener("click", function() {
        const bookingArea = getElementById("booking-area");
        if (getElementByIdWithInnerText("total") != 0) {
            bookingArea.style.display = 'none';
            const confirmation = getElementById("confirmation");
            confirmation.style.display = 'block';
        }

        // const equantity = getElementByIdWithValue("e-class-count");
        // const ePrice = getElementByIdWithInnerText("e-class-price")
        // console.log(equantity)
        // console.log(ePrice)
        // const eConfirmationQuantity = getElementById("e-confirm-quantity");
        // eConfirmationQuantity.innerHTML = equantity;
        // const eConfirmPrice = getElementById("e-confirm-amount");
        // eConfirmPrice.innerHTML = ePrice;
        bookPopup("e-class-count", "e-class-price", "e-confirm-quantity", "e-confirm-amount")
        bookPopup("f-class-count", "f-class-price", "f-confirm-quantity", "f-confirm-amount")
        const total = getElementByIdWithInnerText("total");
        const totalprice = getElementById("total-confirmed");
        totalprice.innerHTML = total;
    })
    // custom function

// This function is for id count
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


// function total(classCountId,tiketPrice,workingClassPriceId,differClassPriceId){
//     const countForMultiply = getElementByIdWithValue("e-class-count");
//     const price = 100 * countForMultiply;
//     const updatePrice = getElementById("e-class-price")
//     updatePrice.innerHTML = price;
//     const fClassPrice = getElementByIdWithInnerText("f-class-price");
//     const getSubTotal = price + parseInt(fClassPrice);
//     const subTotal = getElementById("sub-total");
//     subTotal.innerHTML = getSubTotal;
// }

// Showing booked information
function bookPopup(classCountId, classPriceId, bookQuantityId, bookAmountId) {
    const quantity = getElementByIdWithValue(classCountId);
    const Price = getElementByIdWithInnerText(classPriceId)
    const ConfirmationQuantity = getElementById(bookQuantityId);
    ConfirmationQuantity.innerHTML = quantity;
    const ConfirmPrice = getElementById(bookAmountId);
    ConfirmPrice.innerHTML = Price;
}