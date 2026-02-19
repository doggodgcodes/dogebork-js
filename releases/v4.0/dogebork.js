console.log("Dogebork JS is running - built by doggodgcodes (ChatGPT helped)")


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
		console.log("Dogebork JS Report: Element(s) found:", el);
		return el;
	} else {
		console.warn("Dogebork JS Report: Could not find matching ID(s)", el);
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

function lcg(num1, num2) {
  const fetch = num2
  const maxed = fetch + 1 - num1
  let s = ostime() % 738
  
  s = (s * 9301 + 49297 + num1) % maxed
  return s + num1
}

    function rng(num1, num2, mult = 100) {
      let result = Math.floor(Math.random(num1, num2) * mult)

      return result
    }
    
function addElem(type) {
  document.createElement(type)
}  
