"use strict"
function solveEquation(a, b, c) {

  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    let arr = [] }
  else if (discriminant === 0) {
    let root = -b / ( 2 * a );
    let arr =[]
    arr.push(+root.toFixed(2)); }
  else if (discriminant > 0) {
    let arr = [] } {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a)); }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  let monthPercent = +percent / 100 / 12;
  let principal = +amount - +contribution;
  let monthlyPayment = principal * (monthPercent + (monthPercent / (((1 + monthPercent) ** +countMonths) - 1)));
  let sum = +(monthlyPayment * countMonths).toFixed(2);
  
  return sum;
}