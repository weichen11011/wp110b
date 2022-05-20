class vector {
    constructor(array) {
      this.x=array;
    }
  
    length() {
      let a=0;
      for (let i=0;i<this.x.length;i++)
      {
         a+=Math.pow(this.x[i],2);
      }
      return Math.sqrt(a);
    }
  
    neg() {
      let a=[]
      for (let i=0;i<this.x.length;i++)
      {
        a[i]=this.x[i]*-1;
      }
      return new vector(a);
    }
  
    add(p2) {
      let a=[];
      for (let i=0;i<this.x.length;i++)
      {
        a[i]=this.x[i]+p2.x[i];
      }
      return new vector(a);
    }
  
    sub(p2) {
      return this.add(p2.neg())
    }
  
    dot(p2) {
      let a=0;
      for (let i=0;i<this.x.length;i++)
      {
        a+=this.x[i]*p2.x[i];
      }
      return a;
    }
  
    distance(p2) {
      let a=0;
      for (let i=0;i<this.x.length;i++)
      {
        a+=Math.pow(this.x[i]-p2.x[i],2);
      }
      return Math.sqrt(a);
    }
  }
  
  let p = new vector([2,5]), p2 = new vector([1,3])
  console.log('p=',p)
  console.log('p2=',p2)
  console.log('p.length()=', p.length())
  console.log('p.neg,',p.neg())
  console.log('p.add(p2),',p.add(p2))
  console.log('p.sub(p2),',p.sub(p2))
  console.log('p.dot(p2)',p.dot(p2))
  console.log('p.distance(p2)',p.distance(p2))

