// document.querySelector('button').addEventListener('click',worker);
// 
// var v=document.querySelector(".btn").innerHTML;
// console.log(v);
document.querySelector("button").addEventListener("click", worker);
function worker() {
    document.getElementById("0").classList.add("first_hidden");
    document.getElementById("0").classList.remove("first");
    document.getElementById("1").classList.add("visible-q1");
    document.getElementById("1").classList.remove("hidden-q1");
    
}
document.querySelector(".q1").addEventListener("click", worker2);
function worker2() {
    document.getElementById("1").classList.add("hidden-q1");
    document.getElementById("1").classList.remove("visible-q1");
    document.getElementById("2").classList.add("visible-q2");
    document.getElementById("2").classList.add("hidden-q2");
}
document.querySelector(".q2").addEventListener("click", worker3);
function worker3() {
    document.getElementById("2").classList.add("hidden-q2");
    document.getElementById("2").classList.remove("visible-q2");
    document.getElementById("3").classList.add("visible-q3");
    document.getElementById("3").classList.remove("hidden-q3");

}
document.querySelector(".q3").addEventListener("click", worker4);
function worker4() {
    document.getElementById("3").classList.add("hidden-q3");
    document.getElementById("3").classList.remove("visible-q3");
    document.getElementById("4").classList.add("visible-q4");
    document.getElementById("4").classList.remove("hidden-q4");

}
document.querySelector(".uni2").addEventListener("click", worker0);
function worker0() {
    document.getElementById("0").classList.add("first");
    document.getElementById("0").classList.remove("first_hidden");

    document.getElementById("2").classList.remove("visible-q2");


    document.getElementById("2").classList.add("hidden-q2");

}
document.querySelector(".uni1").addEventListener("click", worker00);
function worker00() {
    document.getElementById("0").classList.add("first");
    document.getElementById("0").classList.remove("first_hidden");
    document.getElementById("1").classList.remove("visible-q1");
    document.getElementById("1").classList.add("hidden-q1");
}

document.querySelector(".uni3").addEventListener("click", worker000);
function worker000() {
    document.getElementById("0").classList.add("first");
    document.getElementById("0").classList.remove("first_hidden");
    document.getElementById("3").classList.remove("visible-q3");
    document.getElementById("3").classList.add("hidden-q3");
}


document.querySelector(".uni4").addEventListener("click", worker0000);
function worker0000() {
    document.getElementById("0").classList.add("first");
    document.getElementById("0").classList.remove("first_hidden");
    document.getElementById("4").classList.remove("visible-q4");

    document.getElementById("4").classList.add("hidden-q4");
}
var count=0;
for(var i=0;i<document.querySelectorAll(".correct").length;i++)
{
if(i!=document.querySelectorAll(".correct").length-1)
{

    document.querySelectorAll(".correct")[i].addEventListener("click",function()
    
    {
        count=count+2;
        console.log(count);
        document.querySelectorAll(".correct")[i].classList.add("color");
    });
}
if(i==document.querySelectorAll(".correct").length-1)
{
    document.querySelectorAll(".correct")[i].addEventListener("click",function()

    {
      count=count+2;
      console.log("Your final score is:"+count);
      document.querySelectorAll(".correct")[i].classList.add("color");
    });

}
}
