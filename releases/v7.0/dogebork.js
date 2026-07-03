console.info("Dogebork JS is active") // is running - built by doggodgcodes (ChatGPT helped)

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
	if (el.length > 0) {
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

function info(text) {
	console.info(text);
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

    function rng(min, max) {
      let result = Math.floor(Math.random() * (max - min + 1) + min)

      return result
    }
    
function addElem(type, parent = document.body) {
		const el = document.createElement(type);
		parent.appendChild(el);
		return el;
	}
function doggify() {
  const css = document.createElement("link")
  css.rel = "stylesheet";
  css.href = "https://doggodgcodes.github.io/assets/css/dog.css";

  document.head.appendChild(css);
}
function borkport(library) {
  let status = true;
  library = library.toLowerCase();
  if (library == "jquery") {
    let a = document.createElement("script");
    a.type = "type/javascript";
    a.href = "https://cdn.jsdelivr.net/npm/jquery@4.0.0/dist/jquery.min.js";
  } else if (library == "7.css") {
    let a = document.createElement("link");
    a.type = "type/css";
    a.rel = "stylesheet";
    a.href = "https://unpkg.com/7.css";
  } else if (library == "xp.css") {
    let a = document.createElement("link");
    a.type = "type/css";
    a.rel = "stylesheet";
    a.href = "https://unpkg.com/xp.css";
  } else if (library == "98.css") {
    let a = document.createElement("link");
    a.type = "type/css";
    a.rel = "stylesheet";
    a.href = "https://unpkg.com/98.css";
  }
  else {
    status = false;
  }
  if (status == true) {
    document.head.appendChild(a);
  }
}

const Dogebork = {
  fetchId,
  fetchIdAll,
  print,
  warn,
  ostime,
  lcg,
  rng,
  addElem,
  doggify,
  borkport
}
const Doge = Dogebork;
