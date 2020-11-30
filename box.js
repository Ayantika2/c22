function Box () {
    constructor(x, y, width, height)
    // add options such as friction and restitution. Experiment with the values
    var options = {
        'restitution':0.2,
        'friction': 1.2,
        'density': 0.92

    }
 
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    // create your box using the function arguments
    // x - x-coordinate
    // y - y-coordinate
    // w - width of the box
    // h - height of the box

 

    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
    this.show = function () {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        

    }
}