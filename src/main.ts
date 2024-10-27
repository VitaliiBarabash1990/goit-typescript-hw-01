// Import stylesheets
import "./style.css";

// Write TypeScript code!
// const appDiv = document.getElementById("app");
const appDiv = document.getElementById("app") as HTMLElement;
// const appDiv: HTMLElement = document.getElementById("app") as HTMLElement;
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
