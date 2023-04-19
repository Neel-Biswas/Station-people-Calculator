let countEl=document.getElementById("count-el")//passing in variable
let inc=0;
 let p=0
 let j=0
function increment()
{
    inc=inc+1;
    // console.log("The button was clicked-")
    countEl.innerText=inc
    j=inc;
}
let countsl=document.getElementById("count-sl")
function save()
{
    inc=0;
    p=j+p;
    countsl.innerText=p
    j=0;
    console.log(p)
    countEl.innerText=0;
}
function reset()
{
    inc=0
    p=0
    j=0
    countEl.innerText=0
    countsl.innerText=0
}