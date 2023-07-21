let stock = 10; // Example initial stock value
let quantity = 0;

function updateStockDisplay() {
    document.getElementById('stock').innerText = stock;
}

function updateQuantityDisplay() {
    document.getElementById('quantity').innerText = quantity;
}

function increment() {
    if (quantity < stock) {
        quantity++;
        updateQuantityDisplay();
    }
}

function decrement() {
    if (quantity > 0) {
        quantity--;
        updateQuantityDisplay();
    }
}

function checkout() {
    if (quantity > 0) {
        // Here, you can handle the checkout logic securely
        // For this example, we will just display an alert with the selected quantity.
        alert(`Checkout: Selected Quantity: ${quantity}`);
    } else {
        alert("Please select at least one item before checkout.");
    }
}

updateStockDisplay();