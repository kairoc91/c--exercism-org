export function frontDoorResponse(line) {
  return line.slice(0, 1);
}
export function frontDoorPassword(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
}
export function backDoorResponse(line) {
  return line.trim().slice(-1);
}
export function backDoorPassword(word) {
  let capitalize = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
  return `${capitalize}, please`;
}
