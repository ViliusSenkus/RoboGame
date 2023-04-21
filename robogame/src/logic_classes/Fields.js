class Fields {
      positionX;
      positionY;
      color;
      activeField; // indicates if a field is avialable to position figure in to
      aim;
      start;
      properties=[this.positionX, this.positionY, this.color, this.activeField, this.aim, this.start];

      constructor(x, y, color = false, activeField = false){
            this.positionx = x;
            this.positiony = y;
            this.color = color;
            this.activeField = activeField
      }

      getFieldProperties(){
            this.properties = [this.positionX, this.positionY, this.color, this.activeField];
            return this.properties;
      }

      getColor(){
            return this.color;
      }
      setColor(data){
            this.color = data;
            return this.color;
      }
}