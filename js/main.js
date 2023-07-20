const targetPrice = document.getElementById("target-price");

const targetName = document.getElementById("target-name");

const userInputName = document.getElementById("user-name");

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
  targetPrice.innerHTML = "€" + finalPrice.toFixed(2);
  targetName.innerHTML = userInputName.value;

  userInputName.value = "";
  userInputKm.value = "";
  userInputAge.value = "";
});
