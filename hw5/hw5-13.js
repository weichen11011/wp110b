class ratio
{
    constructor(a,b)
    {
        this.a=a;
        this.b=b;
    }
    add(c)
    {
        return new ratio(this.a*c.b+c.a*this.b,this.b*c.b);
    }
    sub(c)
    {
        return new ratio(this.a*c.b-c.a*this.b,this.b*c.b);
    }
    mul(c)
    {
        return new ratio(this.a*c.a,this.b*c.b);
    }
    div(c)
    {
        return new ratio(this.a*c.b,this.b*c.a);
    }
    toString()
    {
        return this.a+"/"+this.b;
    }
}
var r1=new ratio(1,3);
var r2=new ratio(2,4);
var r3=r1.mul(r2);
console.log(r3.toString());
