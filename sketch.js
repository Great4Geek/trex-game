var ball,img,paddle,img2,rand,rand2;
function preload() {
  /* preload your images here of the ball and the paddle */
img = loadImage("paddle.png");
img2 = loadImage ("ball.png");
}
function setup() {
  createCanvas(400, 400);

    
  /* create the Ball Sprite and the Paddle Sprite */
  paddle = createSprite(390,200,10,70);
  ball = createSprite (200,200,12,12);
  /* assign the images to the sprites */
  paddle.addImage("paddle",img);
  ball.addImage("ball",img2);
  
  
  /* give the ball an initial velocity of 9 in the X direction */
ball.velocityX = 9;

  
paddle.setCollider("rectangle",0,0,10,70);
 
  
}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  
  //ball.debug = true;
  //paddle.debug = true;
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
  
 
  if(ball.isTouching(paddle))
  {
    
    
    randomVelocity()
    
  }
  
  
  
  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(paddle);
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    
    paddle.y = paddle.y - 5;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    
    paddle.y = paddle.y + 5;
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  
  var rand=Math.round(random(-4,3))
                      ball.velocityY=rand;
}

