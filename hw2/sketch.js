function setup() {
  // Name
  let name = prompt("Hello, what is your name?");
  alert("Welcome " + name + ", it's a pleasure to greet you!");

  // Age + birth year
  let age = Number(prompt("May I ask how old are you?"));
  let currentYear = new Date().getFullYear();
  let birthYear = currentYear - age;
  alert("In that case, you must have been born around " + birthYear + ", right? 😊");

  // Temperature conversion
  let tempF = Number(prompt("What's the current temperature in F?"));
  let tempC = (tempF - 32) * 5 / 9;
  alert("Well, " + tempF + " F would be " + tempC.toFixed(0) + " in C! 🌡");

  // Two integers
  let num1 = Number(prompt("Please enter an integer value:"));
  let num2 = Number(prompt("Please enter a second integer value:"));

  alert("Let me show you what I can do with the numbers " + num1 + " and " + num2 + ":");

  alert(num1 + " + " + num2 + " = " + (num1 + num2));
  alert(num1 + " - " + num2 + " = " + (num1 - num2));
  alert(num1 + " * " + num2 + " = " + (num1 * num2));
  alert(num1 + " / " + num2 + " = " + (num1 / num2));
  alert(num1 + " % " + num2 + " = " + (num1 % num2));

  alert("The max of " + num1 + " and " + num2 + " is " + Math.max(num1, num2));
  alert("The min of " + num1 + " and " + num2 + " is " + Math.min(num1, num2));

  // Even / Odd
  alert(num1 + " is " + (num1 % 2 === 0 ? "an EVEN number" : "an ODD number"));
  alert(num2 + " is " + (num2 % 2 === 0 ? "an EVEN number" : "an ODD number"));

  // Comparison
  if (num1 > num2) {
    alert(num1 + " is greater than " + num2);
  } else if (num1 < num2) {
    alert(num1 + " is less than " + num2);
  } else {
    alert(num1 + " is equal to " + num2);
  }

  // Decimal number
  let decimalNum = Number(prompt("Please enter a value with a decimal part:"));
  alert("Let me show you what I can do with the number " + decimalNum + ":");

  alert("The negative of " + decimalNum + " is " + (-decimalNum));
  alert("The sine of " + decimalNum + " radians is " + Math.sin(decimalNum));
  alert("The cosine of " + decimalNum + " radians is " + Math.cos(decimalNum));
  alert(decimalNum + "^10 = " + Math.pow(decimalNum, 10));
  alert("Square root of " + decimalNum + " = " + Math.sqrt(decimalNum));
  alert("Rounded " + decimalNum + " = " + Math.round(decimalNum));

  // Custom rounding
  let decimals = Number(prompt("How many decimals to round to?"));
  alert(decimalNum + " rounded to " + decimals + " decimals = " + decimalNum.toFixed(decimals));

  alert("Floor of " + decimalNum + " = " + Math.floor(decimalNum));
  alert("Ceiling of " + decimalNum + " = " + Math.ceil(decimalNum));
  alert("Absolute value of " + decimalNum + " = " + Math.abs(decimalNum));

  // Fun question
  let favNum = Number(prompt("What's your favorite number?"));
  alert("Fun fact: " + favNum + " squared is " + Math.pow(favNum, 2) +
        " and cubed is " + Math.pow(favNum, 3) + "! 🎉");

  // Goodbye
  alert("Thanks for chatting with me, " + name + "! Have a great day! 👋");

  noLoop();
}