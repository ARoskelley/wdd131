document.addEventListener("DOMContentLoaded", () => {
  let participantCount = 1;

  const addButton = document.getElementById("add");
  const form = document.querySelector("form");
  const summarySection = document.getElementById("summary");
  const testbox = document.querySelector(".testbox");

  // Function that creates each participant section dynamically
  function participantTemplate(count) {
    return `
      <section class="participant${count}">
        <p>Participant ${count}</p>
        <div class="item">
          <label for="fname${count}"> First Name<span>*</span></label>
          <input id="fname${count}" type="text" name="fname${count}" required />
        </div>
        <div class="item activities">
          <label for="activity${count}">Activity #<span>*</span></label>
          <input id="activity${count}" type="text" name="activity${count}" />
        </div>
        <div class="item">
          <label for="fee${count}">Fee ($)<span>*</span></label>
          <input id="fee${count}" type="number" name="fee${count}" min="0" step="1" />
        </div>
        <div class="item">
          <label for="date${count}">Desired Date <span>*</span></label>
          <input id="date${count}" type="date" name="date${count}" />
        </div>
        <div class="item">
          <p>Grade</p>
          <select id="grade${count}" name="grade${count}">
            <option selected value="" disabled></option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="5">5th</option>
            <option value="6">6th</option>
            <option value="7">7th</option>
            <option value="8">8th</option>
            <option value="9">9th</option>
            <option value="10">10th</option>
            <option value="11">11th</option>
            <option value="12">12th</option>
          </select>
        </div>
      </section>
    `;
  }

  // Add participant button
  addButton.addEventListener("click", () => {
    participantCount++;
    const newHTML = participantTemplate(participantCount);
    addButton.insertAdjacentHTML("beforebegin", newHTML);
  });

  // Handle form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop form from reloading page

    // Collect all fee inputs
    const feeInputs = form.querySelectorAll('input[id^="fee"]');
    let totalFees = 0;

    feeInputs.forEach((input) => {
      const feeValue = parseFloat(input.value);
      if (!isNaN(feeValue)) totalFees += feeValue;
    });

    // Get adult name
    const adultNameInput = document.getElementById("adult_name");
    const adultName = adultNameInput ? adultNameInput.value || "Participant" : "Participant";

    // Hide the form
    form.style.display = "none";

    // Show summary
    summarySection.style.display = "block";
    summarySection.innerHTML = `
      <h2>Registration Complete</h2>
      <p>Thank you <strong>${adultName}</strong> for registering.</p>
      <p>You have registered <strong>${participantCount}</strong> participant${participantCount > 1 ? "s" : ""} and owe <strong>$${totalFees.toFixed(2)}</strong> in fees.</p>
    `;
  });
});
