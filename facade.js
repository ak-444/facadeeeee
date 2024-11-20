// Booking Page Elements
const selectedRoomElement = document.getElementById("selectedRoom");
const priceElement = document.getElementById("price");

// Payment Page Elements
const paymentRoomElement = document.getElementById("paymentRoom");
const paymentPriceElement = document.getElementById("paymentPrice");

// Global Variables for Booking Details
let selectedRoomType = '';
let selectedRoomPrice = 0;
let bookingDate = '';
let fullName = '';
let email = '';

// Function to Select Room and Update the Booking Form
function selectRoom(roomType, price) {
    selectedRoomType = roomType;
    selectedRoomPrice = price;
    console.log(`Room selected: ${selectedRoomType}, Price: ${selectedRoomPrice}`);
    updateBookingForm();
}

// Update the Booking Form with Selected Room Information
function updateBookingForm() {
    if (selectedRoomElement) selectedRoomElement.value = selectedRoomType;
    if (priceElement) priceElement.value = selectedRoomPrice;
    console.log(`Booking form updated: Room Type - ${selectedRoomElement.value}, Price - ${priceElement.value}`);
}

// Proceed to Payment and Store Data in Local Storage
function proceedToPayment() {
    // Capture input values and store them in localStorage
    fullName = document.getElementById("fullName").value;
    bookingDate = document.getElementById("date").value;
    email = document.getElementById("email").value;

    localStorage.setItem("selectedRoomType", selectedRoomType);
    localStorage.setItem("selectedRoomPrice", selectedRoomPrice);
    localStorage.setItem("bookingDate", bookingDate);
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("email", email);

    console.log("Data stored in localStorage:");
    console.log("Room Type:", localStorage.getItem("selectedRoomType"));
    console.log("Price:", localStorage.getItem("selectedRoomPrice"));
    console.log("Date:", localStorage.getItem("bookingDate"));
    console.log("Full Name:", localStorage.getItem("fullName"));
    console.log("Email:", localStorage.getItem("email"));

    // Redirect to payment page
    window.location.href = "payment.html";
}

// Load Data on the Payment Page
function loadPaymentDetails() {
    if (paymentRoomElement && paymentPriceElement) {
        // Retrieve values from localStorage and set them in the payment page fields
        document.getElementById("fullName").value = localStorage.getItem("fullName") || "";
        paymentRoomElement.value = localStorage.getItem("selectedRoomType") || "";
        document.getElementById("date").value = localStorage.getItem("bookingDate") || "";
        paymentPriceElement.value = localStorage.getItem("selectedRoomPrice") || "";
        document.getElementById("email").value = localStorage.getItem("email") || "";

        console.log("Data loaded on payment page:");
        console.log("Room Type:", paymentRoomElement.value);
        console.log("Price:", paymentPriceElement.value);
    }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    const bookingButton = document.querySelector("#bookingForm button");
    const paymentForm = document.getElementById("paymentForm");

    if (bookingButton) {
        // Attach click event to booking button for proceeding to payment
        bookingButton.addEventListener("click", proceedToPayment);
    }

    // Load data if on the payment page
    if (paymentForm) {
        loadPaymentDetails();
    }
});