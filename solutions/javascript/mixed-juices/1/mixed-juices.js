export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
      break;
    case 'Energizer':
    case'Green Garden':
      return 1.5;
      break;
    case 'All or Nothing':
      return 5.0;
      break;
    case 'Tropical Island':
      return 3.0;
      break;
    default: return 2.5;
  }
}
export function limesToCut(wedgesNeeded, limes) {
  let i = 0;
  let sum = 0;
  while (sum < wedgesNeeded && i < limes.length) {
 
    if (limes[i] === 'small') {
    sum += 6;
 }  else if (limes[i] === 'medium') {
    sum += 8;
 } else if (limes[i] === 'large') {
    sum += 10;
 }
    i++;
} 
  return i;
}
export function remainingOrders(timeLeft, orders) {
  do {
      timeLeft -= timeToMixJuice(orders[0]);
      orders.shift();
  } while (timeLeft > 0 && orders.length > 0);
  return orders;
}

