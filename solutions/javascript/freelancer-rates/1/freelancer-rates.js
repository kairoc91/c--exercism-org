export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / (ratePerHour * 8));
}
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let numMounth = Math.floor(numDays / 22); 
  let ratePerMounth = 22 * 8 * ratePerHour;
  let rateDayRemain = (numDays % 22) * 8 * ratePerHour;
  let totalValue = (ratePerMounth * numMounth) * (1 - discount) + rateDayRemain
  return Math.ceil(totalValue);
}