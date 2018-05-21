document.getElementById("fullName").addEventListener("focusout",name);
document.getElementById("locality").addEventListener("focusout",local);
document.getElementById("telephone").addEventListener("focusout",tel);

var locations = ['Rabat','Zebbug','Nadur'];

function name(){
    var as = this.value;
    if(as.length < 3){
        document.getElementById("errname").innerHTML = "Name required 3 characters";
        
    }
    else{
        document.getElementById("errname").innerHTML = "";
    }
}

function local(){
    var asd = this.value;
    if(!(locations.includes(asd))){
        document.getElementById("errloc").innerHTML = "LOCATION INVALID";
    }
    else{
        document.getElementById("errloc").innerHTML = "";
    }
}

function tel(){
    var tel = this.value;
    if(tel.length != 8){
        document.getElementById("errnum").innerHTML = "A number requires 8 digits";
    }
    else{
        document.getElementById("errnum").innerHTML = "";
    }
}