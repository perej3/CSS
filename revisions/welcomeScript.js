var images = ['apple.jpg','word.png','yes.png','youtube.jpg'];
var d = document.getElementById("result");
    var index = 1;
function image(){
    result.innerHTML = "<img src='apple.jpg' id='app'/>";
    
}
function displImg(){
        if(index >= images.length){
            index = 0;
        }
        else{
            document.getElementById("app").src = images[index];
            index++;
        
        
}
}