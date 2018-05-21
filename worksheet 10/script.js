var car = new Object();

car.make = "Fiat";
car.model = "Cinquecento";
car.color = "White";
car.year = 2017;
car.started = false;

car.start = function(){
    if(car.started){
        alert ("Car is already on");
    }
    else{
        car.started = true;
        alert ("Car ON!");
    }
}
car.stop = function(){
    if(car.started){
        car.started = false;
        alert("Car stopped");
    }
    else{
        alert("You need to start the car first");
    }
}
car.drive = function(){
    if(car.started){
        alert("Driving forward!");
    }
    else{
        alert("Car is not powered on!");
    }
}
car.brake = function(){
    if(car.started){
        alert("Braking Car");
    }
    
}
function getCar(){
    var x = document.getElementById("carDetails");
    x.innerHTML = "Car make: "+car.make+"<br/>Car model: "+car.model+"<br/>Car Color: "+car.color+"<br/> Car Year: "+car.year;
}