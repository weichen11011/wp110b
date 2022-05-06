class vector {
  
    constructor(array) {
      this.a = array
    }
  
    length() {
      let b = 0;
      for(let i = 0 ; i < this.a.length ; i++){
        b += this.a[i]*this.a[i]
      }
      return Math.sqrt(b)
    }
  
    neg() {
      for(let i = 0 ; i < this.a.length ; i++){
        this.a[i] = -this.a[i]
      }
      return new vector(this.a)
    }
  
    add(p2) {
      let b = [];
      for(let i = 0 ; i < this.a.length ; i++){
        b[i] = this.a[i] + p2.a[i]
      }
      return new vector(b)
    }
  
    sub(p2) {
      return this.add(p2.neg())
    }
  
    distance(p2) {
      return new vector(this.sub(p2).length())
    }
  
    dot(p2){
      let b = 0;
      for(let i = 0 ; i < this.a.length ; i++){
        b += this.a[i]*p2.a[i]
      }
      return b
    }

    toString() {
      return this.a.toString()
    }
  }
  let p = new vector([2,3])
  let p2 = new vector([1,2])
  console.log('p.length()=', p.toString())
  console.log('p.length()=', p.length())
  console.log('p.neg()=', p.neg())
  console.log('p.add()=',p.add(p2))
  console.log('p.sub()=',p.sub(p2))
  console.log('p.distance()=',p.distance(p2))
  console.log('p.dot()=',p.dot(p2))