class Circle{
    constructor(x, y, color, rmax=50, rmin=10){
        this.x = x;
        this.y = y;
        this.r = rmin + (rmax-rmin)*Math.random();
        this.color = color;
        this.surface = Math.PI*this.r*this.r;
    }
}
Circle.prototype.show = function(){
    fill(this.color);
    ellipse(this.x, this.y, this.r*2, this.r*2);
}
Circle.prototype.overlap = function(circle){
    let distanceSqr = (this.x - circle.x)*(this.x - circle.x) + (this.y - circle.y)*(this.y - circle.y);
    return distanceSqr < (this.r + circle.r)*(this.r + circle.r);
}