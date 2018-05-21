document.getElementById("blockt").addEventListener("mouseover",changeT);
document.getElementById("blockt").addEventListener("mouseleave",leave);
document.getElementById("blockt").addEventListener("click",changeCol);

function changeT(){
   
    
    this.innerHTML = "Click Me!";
}

function leave(){
    this.innerHTML = "My Block";
}

function changeCol(){
    var block = document.getElementById("block");
    if(block.style.backgroundColor == "red"){
        block.style.backgroundColor = "blue";
    
    }
    else{
        block.style.backgroundColor = "red";
    }
}