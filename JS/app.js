function showToast(message) {
    let toast = document.getElementById("toast");

    toast.innerHTML = message;
    toast.style.display = "block";

    setTimeout(function() {
        toast.style.display = "none";
    }, 3000);
}
function bookTickets() {
    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });

    showToast("Ready to book your IPL tickets!");
}

function updateSummary() {
    let match = document.getElementById("bookingMatch").value;
    let stand = document.getElementById("stand").value;
    let quantity = Number(document.getElementById("ticket").value);

    let prices = {
        General: 500,
        Premium: 1500,
        VIP: 3000
    };

    let total = prices[stand] * quantity;

    document.getElementById("summaryMatch").innerHTML = match;
    document.getElementById("summaryStand").innerHTML = stand;
    document.getElementById("summaryQuantity").innerHTML = quantity;
    document.getElementById("summaryTotal").innerHTML = total;
    showToast("Booking summary updated!");
}

document.getElementById("bookingMatch").addEventListener("change", updateSummary);
document.getElementById("stand").addEventListener("change", updateSummary);
document.getElementById("ticket").addEventListener("change", updateSummary);