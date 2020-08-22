const auth = "563492ad6f917000010000019febed2150574f30a0d9f0dc810283b4"; 
const next = document.querySelector(".next-btn");
const input = document.querySelector("input"); 
const searchBtn = document.querySelector(".search-btn");

let pagenum = 1; 
let search = false; 
let query = "";

input.addEventListener("input", (e) => {
    e.preventDefault(); 
    query = e.target.value;
}); 
