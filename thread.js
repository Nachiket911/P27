class Thread {

    constructor(pointB,bodyA){

        var options = {

            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 11
    
        }
    
        const Constraint = Matter.Constraint;

        this.pointB = pointB;

        this.suspension = Constraint.create(options);
        World.add(world, this.suspension);  

    }

    display(){         

            var pointA = this.suspension.bodyA.position;
            var pointB = this.pointB

            push();

            strokeWeight(10);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
    
            pop ();     

    }   

}