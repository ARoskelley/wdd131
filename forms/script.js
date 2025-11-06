document.getElementById("submit-btn").addEventListener("click", (e) => {
    e.preventDefault();
    const fields = ["card-number", "card-holder", "exp-month", "exp-year", "cvc"];
    const missing = fields.some((id) => !document.getElementById(id).value.trim());
    if (missing) {
        alert("Please fill out all fields before submitting.");
    } else {
        alert("Payment submitted successfully!");
    }
});
