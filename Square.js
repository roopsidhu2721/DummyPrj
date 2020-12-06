class Square {
    constructor(){
     this.mySquareXPosition = [];    //Store X locations in this Array
     this.mySquareYPosition = [];    //Store Y locations in this Array
     this.xdir = 0;               //This defines speed of the snake
     this.ydir = 0;               //This defines speed of the snake
     this.tailCount = 1;          //Store number of boxes in the snake (This has to be 1 initially)
     this.x =300;                   //Latest X location of Head
     this.y = 500;                  //Latest Y location of Head
    }
    display()
    {
     if(this.mySquareXPosition.length===0 || this.mySquareYPosition.length===0)
     {
      this.mySquareXPosition.push(this.x); //Adding latest X position of the head
      this.mySquareYPosition.push(this.y); 
     }
     // drawing the body of the snake
     for(var i= 0;i<this.tailCount;i++)
     {
       var y = this.mySquareXPosition[i];
       var x = this.mySquareYPosition[i];
       fill("black");
       rect(x,y,20,20);      //Ensure the snake moves in grid of 20 units in a step
     } 
    }
    update(){    
        //if(!this.gameOver()){   //Keep checking if Game is Over
          this.x += this.xdir;  //Incrementing X position for next step
          this.y += this.ydir;  //Incrementing Y position for next step
         
          if(this.mySquareXPosition.length >= this.tailCount){  //Deleting old positions if the number of positions is more than the tail count
            this.mySquareXPosition.shift();    //Deleting one old position
            this.mySquareYPosition.shift();    //Deleting one old position
          }
          this.mySquareXPosition.push(this.x); //Adding latest X position of the head
          this.mySquareYPosition.push(this.y); //Adding latest Y position of the head
     // }
      }

      eat(x,y){       //If the head is in the same location as food, the food will be considered eaten
        if(this.x===x && this.y===y){  
       this.tailCount++;
        return true;   //Food eaten
        }
        else{
        return false;  //Food not eaten
        }
       }
       
}

  