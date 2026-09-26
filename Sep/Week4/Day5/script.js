// What is Event
// There is function

// => anchor  (addEventListenere)
// => participant
// => function of participant (dance / singing / comedy / speach)

// event (target body / event / event handle)

let btn = document.querySelector("button");
console.log(btn);

btn.addEventListener("click", (e) => {
  // document.body.classList.toggle("dark")
  console.log(e.clientX);
  console.log(e.clientY);
});

// Types of event
// mouse event
//  click
//  double click
// mousedown

btn.addEventListener("dblclick", (e) => {
  console.log(e);
  // document.body.classList.toggle("dark")
  console.log("double click");
});

let p = document.querySelector("p");
// p.style.cssText="background:red;padding:4px;cursor:pointer"

// p.addEventListener("mousedown",()=>{
//     console.log("mouse down")
// })
// p.addEventListener("mouseup",()=>{
//     console.log("mouse up")
// })
// p.addEventListener("mouseenter",()=>{
//     console.log("enter")
// })
// p.addEventListener("mousemove",()=>{
//     console.log("move")
// })

// keyboard
// keyup
// key down
// key press

let button = document.querySelector(".btn");
button.style.cssText = "background:blue;padding:4px;cursor:pointer";

// button.addEventListener("keydown",()=>{
//     console.log("key down")
// })
// button.addEventListener("keyup",()=>{
//     console.log("key up")
// })
button.addEventListener("keypress", (e) => {
  console.log(e);
  console.log("key press");
});

// form event

// let form = document.querySelector("form");
// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     console.log(e)
//     console.log("form submitted")
// });

// input event
// let nameInput=document.querySelector("form>input");
// console.log(nameInput)

// nameInput.addEventListener("change",(e)=>{
//     console.log("input changed")
//     console.log(e.target.value)
// })
// nameInput.addEventListener("input",(e)=>{
//     console.log(e.target.value)
//     console.log("some one enter some value")
// })

// nameInput.addEventListener("focus",(e)=>{
//     console.log("now input field is focused")
// })
// nameInput.addEventListener("blur",(e)=>{
//     console.log("when you leave the input")
// })

// window
// window.addEventListener("load",(e)=>{
//     console.log(e)
//     console.log("now my page is loaded")
// })
// window.addEventListener("DOMContentLoaded",(e)=>{
//     console.log("now my page is loaded by dom")
// })

// window.addEventListener("resize",()=>{
//     console.log("my screen is increasing or decreasing")
// })
// p.addEventListener("copy",()=>{
//     console.log("some one i trying copy")
// })
// window.addEventListener("paste",()=>{
//     console.log("some one i trying paste")
// })

let registerForm = document.querySelector(".register");
console.log(registerForm);

let inputs = registerForm.children;
console.log(inputs);

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = inputs[0].value;
  let age = inputs[2].value;
  let email = inputs[4].value;
  let password = inputs[6].value;

  console.log(name, age, email, password);

  localStorage.setItem(
    "userData",
    JSON.stringify({ name, age, email, password }),
  );

  inputs[0].value = "";
  inputs[2].value = "";
  inputs[4].value = "";
  inputs[6].value = "";

  alert("successfully register");
});

let show_container = document.querySelector(".show-container");

let showBtn = document.querySelector(".show");
showBtn.addEventListener("click", () => {
  let userData = JSON.parse(localStorage.getItem("userData"));

  for (let key in userData) {
    let p = document.createElement("p");
    let b = document.createElement("b");
    b.innerText = key;
    p.innerText = userData[key];
    show_container.append(b,p);
  }

  console.log(userData);
});
