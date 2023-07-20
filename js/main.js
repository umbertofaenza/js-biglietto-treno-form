const targetParagraph = document.getElementById("target");
const userInputKm = document.getElementById("user-km");
const userInputAge = document.getElementById("user-age");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", function () {
  const userKm = parseFloat(userInputKm.value);
  const userAge = parseInt(userInputAge.value);
  const basePrice = userKm * 0.21;
  let ticketDiscount = 0;

  if (userAge < 18) {
    ticketDiscount = basePrice * 0.2;
  } else if (userAge >= 65) {
    ticketDiscount = basePrice * 0.4;
  }

  const finalPrice = basePrice - ticketDiscount;
  targetParagraph.innerHTML = "€" + finalPrice.toFixed(2);

  userInputKm.value = "";
  userInputAge.value = "";
});
