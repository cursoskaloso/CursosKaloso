const phones = document.getElementById("phones");
const profit = document.getElementById("profit");
const result = document.getElementById("result");

function formatMoney(value) {
  return value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  });
}

function updateCalc() {
  const qty = Number(phones.value || 0);
  const gain = Number(profit.value || 0);
  result.textContent = formatMoney(qty * gain);
}

phones?.addEventListener("input", updateCalc);
profit?.addEventListener("input", updateCalc);
updateCalc();
