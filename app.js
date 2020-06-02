var num = 6;
var colors = randomColors(num);
var a = Math.floor(Math.random() * num);

var boxes = document.querySelectorAll(".box");
var givenColor = colors[a];
document.getElementById("displayColor").textContent = givenColor;
var again = document.getElementById("again");
var one = document.getElementById("one");
var message = document.getElementById("message");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");




for(var i=0; i < boxes.length; i++){
    boxes[i].style.background = colors[i];
    
    boxes[i].addEventListener("click", function(){
        var selectedColor = this.style.background;
        
        if (selectedColor === givenColor){
            again.textContent = "PLAY AGAIN";
            message.textContent = "CORRECT";
            for(var j=0; j < boxes.length; j++){
                boxes[j].style.background = colors[a];
            }
            one.style.background = colors[a];
        }

        else{
            this.style.background = "#232323";
            message.textContent = "TRY AGAIN";
        }
    })
}

again.addEventListener("click", function(){
    again.textContent = "NEW COLORS";
    message.textContent = "";
    one.style.background = "rgb(42, 156, 190)";
    colors = randomColors(num);
    a = Math.floor(Math.random() * num);
    boxes = document.querySelectorAll(".box");
    givenColor = colors[a];

    document.getElementById("displayColor").textContent = givenColor;

    for(var i=0; i < boxes.length; i++){
        boxes[i].style.background = colors[i]; 
    }    
})

easy.addEventListener("click", function(){
    message.textContent = "";
    one.style.background = "rgb(42, 156, 190)";
    num = 3;
    colors = randomColors(num);
    a = Math.floor(Math.random() * num);
    boxes = document.querySelectorAll(".box");
    givenColor = colors[a];

    for(var i=0; i < boxes.length; i++){
        if(colors[i]){
            boxes[i].style.background = colors[i];
        }
        else{
            boxes[i].style.display = "none";

        }
    }
})


hard.addEventListener("click", function(){
    message.textContent = "";
    one.style.background = "rgb(42, 156, 190)";
    num = 6;
    colors = randomColors(num);
    a = Math.floor(Math.random() * num);
    boxes = document.querySelectorAll(".box");
    givenColor = colors[a];

    for(var i=0; i < boxes.length; i++){

        boxes[i].style.background = colors[i];
        boxes[i].style.display = "block";

        
    }
})


function randomColors(color) {
    var arr = [];
    for(i=0; i<color; i++){
        var e = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        var c = Math.floor(Math.random()*256);
        d = "rgb("+e+", "+b+", "+c+")";
        arr.push(d);

    }
   return arr;
}