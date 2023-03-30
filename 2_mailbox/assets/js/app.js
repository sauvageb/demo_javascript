const buttonMailBox = document.getElementById('toggle-btn');
buttonMailBox.addEventListener('click', toggleMailBox);

function toggleMailBox() {
    const mailbox = document.querySelectorAll(".img")[0];
    const mailbox2 = document.querySelectorAll(".img")[1];

    mailbox.classList.toggle('is-visible');
    mailbox2.classList.toggle('is-visible');

    if (buttonMailBox.innerText === "Poster une lettre") {
        buttonMailBox.innerText = "Vider le courrier";
    } else {
        buttonMailBox.innerText = "Poster une lettre";
    }
}
