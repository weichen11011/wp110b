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
    reduce()
    {
        if (this.a<=this.b)
        {
            for (var i=this.a;i>=1;i--)
            {
                if (this.b%i==0)
                {
                    this.b/=i;
                    this.a/=i;
                }
            }
        }
        else
        {
            for (var i=this.b;i>=1;i--)
            {
                if (this.a%i==0)
                {
                    this.b/=i;
                    this.a/=i;
                }
            }
        }
    }
    toString()
    {
        return this.a+"/"+this.b;
    }
}
var r1=new ratio(6,9);
r1.reduce();
console.log(r1.toString());
