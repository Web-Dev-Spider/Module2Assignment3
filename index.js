//Q1.   Using getElementById: Select the h1 element with the id of main-title and log it to the console.

const mainHeadElement = document.getElementById("main-title");

console.log(mainHeadElement);

//Using getElementsByClassName: Select all elements with the class container and log them to the console.

const containerElements = document.getElementsByClassName("container");
console.log(containerElements[0]);

//Select all elements with the class section and log them to the console.
const sectionElements = document.getElementsByClassName("section");
console.log(sectionElements);

//Using getElementsByTagName: Select all p elements and log them to the console.
const pTagElements = document.getElementsByTagName("p");
console.log(pTagElements);

//Using querySelector: Select the first button with the class btn and log it to the console.
const firstBtnElement = document.querySelector(".btn");
console.log(firstBtnElement);

const firstSectionElement = document.querySelector(".section");
console.log(firstSectionElement);

//Using querySelectorAll: Select all button elements with the class btn and log them to the console.
const allButtonElements = document.querySelectorAll(".btn");
console.log(allButtonElements);

const containerElement = document.querySelector(".container");
const pElementsInContainer = containerElement.querySelectorAll("p");
console.log(pElementsInContainer);
