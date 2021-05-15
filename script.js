let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
   x: 8*box,
   y: 8*box
}

let direction = "right";

function criaBG(){
   context.fillStyle = "lightgreen";
   context.fillRect(0,0, 16*box, 16*box);
}

function criarCobrinha(){
   for(i=0; i<snake.length;i++){
      context.fillStyle ="green"
      context.fillRect(snake[i].x, snake[i].y, box, box);
   }
}

document.addEventListener('keydown',update);

function update(event){
   if (event.keyCode == 37 && direction != "right" ){
      direction = "left";
   }
   else if (event.keyCode == 38 && direction != "down"){
      direction = "up";
   }
   else if (event.keyCode == 39 && direction != "left"){
      direction = "right";
   }
   else if (event.keyCode == 40 && direction != "up"){
      direction = "down";
   }

}


function iniciarJogo(){
   
   if (snake[0].x > 15 * box && direction == "right") {snake[0].x = 0;}
   else if (snake[0].x < 0  && direction == "left") {snake[0].x = 16 * box;}
   else if (snake[0].y > 15 * box && direction == "down") {snake[0].y = 0;}
   else if (snake[0].y < 0  && direction == "up") {snake[0].y = 16 * box;}
   
   criaBG();
   criarCobrinha();   

   let snakeX = snake[0].x;
   let snakeY = snake[0].y;

   if (direction == "right") {snakeX += box;}
   else if (direction == "left") {snakeX -= box;}
   else if (direction == "up") {snakeY -= box;}
   else if (direction == "down") {snakeY += box;}
   
   snake.pop(); // REMOVE O ULTIMO ELEMENTO

   let newHead = {
      x: snakeX,
      y: snakeY
   }

   snake.unshift(newHead); // ADICIONA NOVO ELEMENTO NO ARRAY

}

let jogo = setInterval(iniciarJogo, 100)