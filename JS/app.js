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