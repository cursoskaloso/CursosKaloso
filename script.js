const buyPrice = document.getElementById("buyPrice");
const sellPrice = document.getElementById("sellPrice");
const quantity = document.getElementById("quantity");
const result = document.getElementById("result");
const singleResult = document.getElementById("singleResult");

function formatMoney(value) {
  return value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  });
}

function updateCalc() {
  const buy = Number(buyPrice.value || 0);
  const sell = Number(sellPrice.value || 0);
  const qty = Number(quantity.value || 0);
  const single = sell - buy;
  const total = single * qty;
  result.textContent = formatMoney(total);
  singleResult.textContent = "Ganancia por equipo: " + formatMoney(single);
}

[buyPrice, sellPrice, quantity].forEach(input => input?.addEventListener("input", updateCalc));
updateCalc();
