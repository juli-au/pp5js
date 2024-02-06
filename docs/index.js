function setup() {
  const s = Math.min(0.9 * window.innerWidth, 0.9 * window.innerHeight, 600) - 4
  createCanvas(s, s).parent("main")
}

function draw() {
  if (mouseIsPressed) {
    fill(0)
  } else {
    fill(255)
  }
  ellipse(mouseX, mouseY, 80, 80)
}
