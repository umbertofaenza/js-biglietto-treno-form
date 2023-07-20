const userInputName = document.getElementById("user-name");
const userInputKm = document.getElementById("user-km");
const userInputAge = document.getElementById("user-age");
const sendBtn = document.getElementById("send-btn");

const targetPrice = document.getElementById("target-price");
const targetName = document.getElementById("target-name");
const targetTicketType = document.getElementById("target-ticket-type");
const targetCoachNumber = document.getElementById("target-coach-number");
const targetCodeNumber = document.getElementById("target-code-number");

sendBtn.addEventListener("click", function () {
  const userKm = parseFloat(userInputKm.value);
  const userAge = userInputAge.value;
  const basePrice = userKm * 0.21;
  let ticketDiscount = 0;

  if (userAge == "Minorenne") {
    ticketDiscount = basePrice * 0.2;
  } else if (userAge == "Over 65") {
    ticketDiscount = basePrice * 0.4;
  }

  const finalPrice = basePrice - ticketDiscount;
  targetPrice.innerHTML = "€" + finalPrice.toFixed(2);
  targetName.innerHTML = userInputName.value;
  targetTicketType.innerHTML = "Biglietto Standard";
  targetCoachNumber.innerHTML = "5";
  targetCodeNumber.innerHTML = "92911";

  userInputName.value = "";
  userInputKm.value = "";
  userInputAge.value = "";
});
