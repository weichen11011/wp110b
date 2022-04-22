//(物件導向) 請寫一個有理數物件，包含 toString() 函數
class Ratio
{
    constructor(a, b)
    {
        this.a = a;
        this.b = b;
    }

    toString()
    {
        return this.a + "/" + this.b;
    }
}

var r1 = new Ratio(1,3);
console.log(r1.toString());