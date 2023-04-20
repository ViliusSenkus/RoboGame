class Item {
      positionX;
      positionY;
      direction;

      constructor(x, y, dierction){
            this.positionX = x;
            this.positionY = y;
            this.direction = direction;
      }

      changePosition(axis, value){
            if (axis === "x"){
                  switch (value){
                        case "-1" : 
                              this.positionX -= 1;
                              break;
                        case "1" :
                              this.positionX += 1;
                              break;
                        case "0" :
                              break;
                        default :
                              message = "!!! DANGER !!! ...Illegal move!!!"
                  }
            }
            if (axis === "y"){
                  switch (value){
                        case "-1" : 
                              this.positionY -= 1;
                              break;
                        case "1" :
                              this.positionY += 1;
                              break;
                        case "0" :
                              break;
                        default :
                              message = "!!! DANGER !!! ...Illegal move!!!"
                  }
            }
                  
      }

      changeDirection (direction){
            switch (direction){
                  // messege in testing phase
                  case "up" :
                        messege = "pasisuko į viršų";
                        break;
                  case "left" :
                        messege = "pasisuko į kairę";
                        break;
                  case "right" :
                        messege = "pasisuko į dešinę";
                        break;
                  case "down" :
                        messege = "pasisuko į apačią";
                        break;
                  default :
                        messege = "!!! DANGER !!! ...nepasisuko!!!";
                        break;
            }
      }
}