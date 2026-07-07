export function totalBirdCount(birdsPerDay) {
  let sum = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    sum += birdsPerDay[i];
  }
  return sum;
}
export function birdsInWeek(birdsPerDay, week) {
  let start = week * 7 - 7;
  let end = week * 7;
  let sum = 0;

for (let i = start; i < end; i++ ) {
    sum += birdsPerDay[i];
}
  return sum;
}
export function fixBirdCountLog(birdsPerDay) {
    for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1;
}
  return birdsPerDay;
}
