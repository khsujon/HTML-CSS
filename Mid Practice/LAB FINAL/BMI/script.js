function calculateBMI() {
    var weightInput = document.getElementById("weight");
    var heightInput = document.getElementById("height");
    var heightUnitSelect = document.getElementById("heightUnit");
    var resultDiv = document.getElementById("result");
    
    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value);
    var heightUnit = heightUnitSelect.value;
    
    if (isNaN(weight) || isNaN(height) || height === 0) {
      resultDiv.textContent = "Please enter valid values.";
      return;
    }
    
    if (heightUnit === "cm") {
      height = height / 100; // Convert cm to meters
    } else if (heightUnit === "ft") {
      height = height * 0.3048; // Convert feet to meters
    }
    
    var bmi = weight / (height * height);
    bmi = bmi.toFixed(2); // Round BMI to 2 decimal places
    
    var category;
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 25) {
      category = "Normal weight";
    } else if (bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
    
    resultDiv.textContent = "Your BMI is " + bmi + " (" + category + ").";
  }