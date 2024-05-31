var sclose = document.querySelector(".sclose");
var lclose = document.querySelector(".lclose");
var sform = document.querySelector(".signup");
var lform = document.querySelector(".loginForm");

var log = document.querySelector(".log");
var sign = document.querySelector(".sign");

var loghere = document.querySelector(".loghere");
var signhere = document.querySelector(".signhere");


log.addEventListener("click",()=>{
    lform.style.scale = 1;
})

sign.addEventListener("click",()=>{
    sform.style.scale = 1;
})


sclose.addEventListener("click",()=>{
    sform.style.scale = 0;
})

lclose.addEventListener("click",()=>{
    lform.style.scale = 0;
})


loghere.addEventListener("click",()=>{
    lform.style.scale = 1;
    sform.style.scale = 0;
})

signhere.addEventListener("click",()=>{
   sform.style.scale = 1;
   lform.style.scale = 0;
})
