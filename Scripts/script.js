var Canvas = document.getElementById("myCanvas");
var Context = Canvas.getContext('2d');

function graph(){
    Context.fillStyle = "#FFF";
    Context.fillRect(0,0,1000,600);
    
    Context.beginPath();
    Context.moveTo(0,600);
    Context.lineTo(300,0);
    Context.closePath();
    Context.strokeStyle = '#00F';
    Context.stroke();
    
    Context.beginPath();
    Context.moveTo(0,600);
    Context.lineTo(1000,0);
    Context.closePath();
    Context.strokeStyle = '#F00';
    Context.stroke();
}

graph();