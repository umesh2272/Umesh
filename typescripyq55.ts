  interface Shape {
      readonly type: string;
      readonly name: string;
  }
    
  interface Rectangle extends Shape {
    type: 'rectangle';
    width: number;
  }
    
  interface Cone extends Shape {
    type: 'Cone';
    radius: number
  }

  interface Sphere extends Shape {
    type: 'Sphere';
    radius: number
  }
    
  type AppShape = Rectangle | Cone | Sphere;
    
  interface Data {
    obstacles: Obstacle[];
  };
    
  const DATA: Data = {
    obstacles: []
  };
    
  function somefunc(): void {
    for(let i: number = 0; i < DATA.obstacles.length; i++) {
        const o = DATA.obstacles[i];
        const shape = o.shape;
        switch(shape.type) {
                 case 'rectangle':
                  shape.width;
                 break;
                 case 'Cone':
                  shape.radius;
                 break;
                 case 'sphere':
                    shape.radius;
                   break;
            }
     }
}