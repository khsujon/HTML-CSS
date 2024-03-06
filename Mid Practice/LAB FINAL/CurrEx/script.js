function convertCurrency() {
    var amountInput = document.getElementById("amount");
    var fromCurrencySelect = document.getElementById("fromCurrency");
    var toCurrencySelect = document.getElementById("toCurrency");
    var resultDiv = document.getElementById("result");

    var amount = parseFloat(amountInput.value);
    var fromCurrency = fromCurrencySelect.value;
    var toCurrency = toCurrencySelect.value;

    if (isNaN(amount) || amount <= 0) {
      resultDiv.textContent = "Please enter a valid amount.";
      return;
    }

    // Conversion rates (sample rates)
    var usdToEur = 0.85;
    var usdToBdt = 103.50;
    var eurToUsd = 1.18;
    var eurToBdt = 122.00;
    var bdtToUsd = 0.0097;
    var bdtToEur = 0.0082;

    var convertedAmount;
    if (fromCurrency === "USD" && toCurrency === "EUR") {
      convertedAmount = amount * usdToEur;
    } else if (fromCurrency === "USD" && toCurrency === "BDT") {
      convertedAmount = amount * usdToBdt;
    } else if (fromCurrency === "EUR" && toCurrency === "USD") {
      convertedAmount = amount * eurToUsd;
    } else if (fromCurrency === "EUR" && toCurrency === "BDT") {
      convertedAmount = amount * eurToBdt;
    } else if (fromCurrency === "BDT" && toCurrency === "USD") {
      convertedAmount = amount * bdtToUsd;
    } else if (fromCurrency === "BDT" && toCurrency === "EUR") {
      convertedAmount = amount * bdtToEur;
    } else {
      convertedAmount = amount;
    }

    resultDiv.textContent = amount + " " + fromCurrency + " is equal to " + convertedAmount.toFixed(2) + " " + toCurrency + ".";
  }