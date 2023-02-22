export function randomNumber(num) {
  return Math.floor(Math.random() * num);
}

export function randomHeadshot() {
  return `../images/headshot${randomNumber(11)}.jpeg`;
}

export function randomColor() {
  return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(
    255
  )})`;
}
