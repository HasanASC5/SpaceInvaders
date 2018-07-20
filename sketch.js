function setup(){
    createCanvas(800,800);
}
let alienX=[0,2.5,5,7.5];
let alien=[true,true,true,true];
let alienY=2;
let alienSpeed=1;
let pauseBreak=0;
let falling =false;
let gameState=[false,true,false,false]
let shooting=false;
let x=300;
let difficultyBuff=1;
let y=700;

let shotX=1;
function draw(){
    if(gameState[0]===true){
        background(225);
        textSize(200);
        text("SPACE INVADERS", 400, 400);
    }
    if(gameState[1]===true){
    shotX =x+50;
    background(0);
    if(alien[0]===true){
        aliens(alienX[0],alienY);
    }
    if(alien[1]===true){
        aliens(alienX[1],alienY);
    }
    if(alien[2]===true){
        aliens(alienX[2],alienY);
    }
    if(alien[3]===true){
        aliens(alienX[3],alienY);
    }
    ship(x);
    
    if (keyIsDown(UP_ARROW)&&shooting===false){
        y=700;
        shooting=true;

    }
    if (keyIsDown(LEFT_ARROW)){
        x-=5;    
    }
    if (keyIsDown(RIGHT_ARROW)){
        x +=5;
    }
    shot(shotX,y);
    
    alienMove();
    y-=25;
    
    Collision();
    losing();
    winning();
}

if(gameState[2]===true){
   background(0); 
   textSize(25);   
   text('Game Over',375, 400);
}
if(gameState[3]===true){
    background(225); 
    textSize(25);   
    text('YOU WIN', 375, 400);
}
}
function shot(x,y){
    if(shooting===true){
        ellipse(x,y,10,80);
       
    }
    if(y<alienY+50){
        shooting=false;
    }
}
function aliens(x,y){
    fill('green');
    rect(x*50,y*50,100,100);
}
function alienMove(){
    pauseBreak+=1;
  
    if(pauseBreak===35){
        alienX[0]+=alienSpeed;
        alienX[1]+=alienSpeed;
        alienX[2]+=alienSpeed;
        alienX[3]+=alienSpeed;
        pauseBreak=0;
    }
    if(alienX[3]+1.5>16){
        falling=true;
        down();
        alienX=[0,2.5,5,7.5];

    }
}
function down(){
    if(falling===true){
        alienY+=1;
        falling=false;
    }
}
function winning(){
    if(alien[0]===false&&alien[1]===false&&alien[2]===false&&alien[3]===false){
        gameState[1]=false;
        gameState[3]=true;
    }
}
function losing(){
    if(alienY>12){
        gameState[1]=false;
        gameState[2]=true;
    }
}
function Collision(){
    if(dist(alienX[0]*50+50,alienY+50,shotX,y)<50){
        alien[0]=false;
        shooting=false;
    }
    if(dist(alienX[1]*50+50,alienY+50,shotX,y)<50){
        alien[1]=false;
        shooting=false;
    }
    if(dist(alienX[2]*50+50,alienY+50,shotX,y)<50){
        alien[2]=false;
        shooting=false;
    }
    if(dist(alienX[3]*50+50,alienY+50,shotX,y)<50){
        alien[3]=false;
        shooting=false;
    }
}

function ship (x){
    fill('red');
    rect(x,700,100,700);
}