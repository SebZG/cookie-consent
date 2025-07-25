const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const declineBtn = document.getElementById("decline-btn");
const modalChoicesBtns = document.getElementById("modal-choice-btns");

setTimeout(() => {
    modal.style.display = "inline";
}, 1500);

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

declineBtn.addEventListener("mouseenter", () => {
    modalChoicesBtns.classList.toggle("modal-btns-reverse");
});

consentForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const consentFormData = new FormData(consentForm);
    const fullName = consentFormData.get("fullName");

    modalText.innerHTML = `
        <div class="modal-inner-loading">
            <img src="images/loading.svg" class="loading">
            <p id="upload-text">Uploading your data to the dark web...</p>
        </div>`

    setTimeout(() => {
        document.getElementById("upload-text").innerText = `
            Making the sale...`
    }, 1500);

    setTimeout(() => {
        document.getElementById("modal-body").innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>`

        closeModalBtn.disabled = false;
    }, 3000);
});