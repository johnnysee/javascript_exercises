// Old BMI VALUE: 22.34
// New formula: 1.3 x weight(kg) / height(m)^2.5
// Math.pow(1.86,2) = 3,4596000005
// We want height ^2.5 - DONE
// Multiply with 1.3

var height = prompt("Enter your height in m")
var weight = prompt("Enter your weight in kg")

BMI_height = Math.pow(height, 2.5);
BMI_calc = 1.3 * weight / BMI_height;

// New BMI Value gives 21.8327 (1.77 m and 70 kg)
// Double check with calculator: 21.8327
// New BMI Value gives same value as calculator
alert('Your BMI is ' + BMI_calc)