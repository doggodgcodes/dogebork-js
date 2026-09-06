"use strict";

class DogeborkClass {
    constructor() { }
    fetchId(id) {
        return document.getElementById(id);
    }
    fetchSelector(selector) {
        return document.querySelector(selector);
    }
    fetchSelectorAll(selector) {
        return document.querySelectorAll(selector);
    }
    print(text) {
        console.log(text);
    }
    warn(text) {
        console.warn(text);
    }
    info(text) {
        console.info(text);
    }
    error(text) {
        console.error(text);
    }
    borkport(library) {
        library = library.toLowerCase();
        if (library == "jquery") {
            let a = document.createElement("script");
            a.type = "type/javascript";
            a.src = "https://cdn.jsdelivr.net/npm/jquery@4.0.0/dist/jquery.min.js";
            document.head.appendChild(a);
        }
        else if (library == "7.css") {
            let a = document.createElement("link");
            a.type = "type/css";
            a.rel = "stylesheet";
            a.href = "https://unpkg.com/7.css";
            document.head.appendChild(a);
        }
        else if (library == "xp.css") {
            let a = document.createElement("link");
            a.type = "type/css";
            a.rel = "stylesheet";
            a.href = "https://unpkg.com/xp.css";
            document.head.appendChild(a);
        }
        else if (library == "98.css") {
            let a = document.createElement("link");
            a.type = "type/css";
            a.rel = "stylesheet";
            a.href = "https://unpkg.com/98.css";
            document.head.appendChild(a);
        }
    }
    randomInt(min, max) {
        min = Math.round(min);
        max = Math.round(max) + 1;
        let time = Date.now();
        return (((time + min) % 738) * 9301 + 49297) % max;
    }
}
const Dogebork = new DogeborkClass();
