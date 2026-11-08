const addbtn = document.getElementById("add");
const input = document.getElementById("input");
const ul = document.querySelector(".taskdisplay")
const errorbox = document.getElementById("error")
const btn = document.getElementById("darklight")
const body = document.getElementById("body");
const img = document.getElementById("img");
const h1 = document.getElementById("heading")
function addtask(){
    
    const text = input.value.trim();
    
    if(text===""){
        errorbox.textContent="Enter Valid Tasks"
        errorbox.classList.add("err")
        input.value="";
        input.focus();
        return;

    }
    const li = document.createElement("li");
    li.classList.add("limods")
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.classList.add("redbtn");
    button.textContent="X";
    button.addEventListener("click", ()=>{
        li.remove();
    })
    input.value="";
    input.focus();
    
    li.appendChild(span);
    span.classList.add("cursorpointer")
    span.addEventListener("click", ()=>{
        li.classList.toggle("greendone")
    })
    li.appendChild(button);
    ul.appendChild(li);
    span.textContent=text;
}
btn.addEventListener("click", ()=>{
    body.classList.toggle("dark")
    h1.classList.toggle("headingcolor")
    
})
addbtn.addEventListener("click", addtask)




