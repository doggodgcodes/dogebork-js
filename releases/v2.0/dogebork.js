const ctx = canvas.getContext("2d");
const gl = canvas.getContext("webgl");
const gl2 = canvas.getContext("webgl2") || canvas.getContext("webgl");
if (!gl2) {
	console.error("WebGL not supported on this browser!");
}
const gameGl = canvasGame.getContext("webgl");
const uiGl = canvasUI.getContext("webgl");
let gameGl2 = canvasGame.getContext("webgl2");
let uiGl2 = canvasUI.getContext("webgl2");

// Optional fallback to WebGL1 if WebGL2 is not supported
if (!gameGl2) gameGl2 = canvasGame.getContext("webgl");
if (!uiGl2) uiGl2 = canvasUI.getContext("webgl");
console.log("Doggo JS is running - built by doggodgcodes (ChatGPT helped)")


function fetchId(id) {
	const el = document.getElementById(id);
	if (el) {
		console.log("Doggo JS Report: Element found:", el);
		return el;
	} else {
		console.warn("Doggo JS Report: Could not find matching ID", el);
		return null;
	}

}

function fetchIdAll(selector) {
	const el = document.querySelectorAll(selector);
	if (el) {
		console.log("Doggo JS Report: Element(s) found:", el);
		return el;
	} else {
		console.warn("Doggo JS Report: Could not find matching ID(s)", el);
		return null;
	}
}

function print(text) {
	console.log(text);
}

function warn(text) {
	console.warn(text);
}

function ostime() {
  let time = Math.floor(Date.now() / 1000)
  return time
}

function rng(num1, num2) {
  const fetch = num2
  const maxed = fetch + 1 - num1
  let s = ostime() % 738
  
  s = (s * 9301 + 49297 + num1) % maxed
  return s + num1
}
