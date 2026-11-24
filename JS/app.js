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

// Team Filter
document.getElementById("teamFilter").addEventListener("change", function() {
    let selectedTeam = this.value;
    let cards = document.querySelectorAll(".match-card");

    cards.forEach(function(card) {
        let teams = card.getAttribute("data-teams");

        if (selectedTeam === "all" || teams.includes(selectedTeam)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// Grid View
document.getElementById("gridView").addEventListener("click", function() {
    document.getElementById("matchContainer").className = "match-grid";
});

// List View
document.getElementById("listView").addEventListener("click", function() {
    document.getElementById("matchContainer").className = "match-list";
});

// Hamburger Menu
document.getElementById("menuToggle").addEventListener("click", function() {
    let menu = document.getElementById("navMenu");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
});
