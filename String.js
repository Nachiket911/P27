class Thread {

    constructor(pointA,body2){

        var options = {

            pointA: pointA,
            bodyB: body2,
            stiffness: 0.04,
            length: 10
    
        }
    
        const Constraint = Matter.Constraint;

        this.suspension = Constraint.create(options);
        World.add(world, this.suspension);  

    }

    display(){     

        if (this.suspension.bodyB){

            var pointA = this.suspension.pointA;
            var pointB = this.suspension.bodyB.position;

            push();

            strokeWeight(10);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
    
            pop ();   

    }

    }   

}