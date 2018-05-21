var persons = [];

function Person(name, email, age, id){
    this.name = name;
    this.email = email;
    this.age = age;
    this.id = id;
}

function register(){
    var fName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var id = document.getElementById("id").value;
    
    var inputBoxes = document.getElementsByTagName("input");
    var error = false;
    
    if(fName == ""){
        error = true;
    }
    if(email == ""){
        error = true;
    }
    if(age == ""){
        error = true;
    }
    if(id == ""){
        error = true;
    }
    
if(error == true){
    alert("Missing fields required");
}
else{
    var idExists = false;
    for (i = 0; i < persons.length; i++){
        if (persons[i].id == id){
            idExists = true;
        }
    }
    
    if(idExists){
        alert ("A person with your id has already registered with us");
    }
    else{
        for (i=0; i< inputBoxes.length - 1; i++){
            document.getElementById(inputBoxes[i].id).value = "";
        }
        persons.push(new Person(fName, email, age, id));
    }
    
    var HTMLString = "";
    for(i = 0; i < persons.length; i++){
        HTMLString += "Person: "+(i+1)+" <br>Full Name: "+persons[i].name+" <br>Email: "+persons[i].email+" <br>Age: "+persons[i].age+" <br>ID: "+persons[i].id+"<br><br>";
    }
    document.getElementById("registeredUsers").innerHTML = HTMLString;
    }
}