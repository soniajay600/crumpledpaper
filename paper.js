class paper
{
	constructor(x,y)
	{
		var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2			
			}
		this.x=x;
		this.y=y;
		this.w=50
		this.h=50
        this.body=Bodies.rectangle(x, y, 50, 50, options);
        this.image=loadImage("paper.png");
        World.add(world, this.body); 
	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill("red")
			image(this.image,0,0,this.w, this.h);
			pop()
			
	}

}