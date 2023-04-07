x = 0;
y = 0;
var textnum = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event){
    console.log(event); 
    content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    to_number = num[textnum.indexOf(content)];
    if(to_number == undefined){
        to_number = Number(content);
    }
    console.log(to_number)
    draw_apple = "set"

}

function preload(){
    apple = loadImage("apple.png")
}
function setup() {
    canvas = createCanvas(900, 700);
}

function draw() {
    if(draw_apple == "set")
    {
        for(var i = 0 ; i <= to_number - 1; i++){
            x = random(0, 900);
            y = random(0, 700);
            image(apple, x, y, 40, 40);
        }
        document.getElementById("status").innerHTML = to_number + " Apples drawn";

        draw_apple = "";
    }
}

function speak(){
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    speak_data = "";
}
