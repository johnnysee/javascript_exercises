var height = prompt("Enter your height in m")
var weight = prompt("Enter your weight in kg")

BMI_height = height * height;
BMI_calc = weight / BMI_height;

alert('Your BMI is ' + BMI_calc)