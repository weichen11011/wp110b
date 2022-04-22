function isPrime(n){ 
    for(var i=2;i<=Math.sqrt(n);i++){ 
        if(n % i == 0){
            return false; 
        } 
    } return true;
}

function PrimeFactorizer(n){ 
    var hash = {}; 
    while(n > 1)
    {
        for(var i=2;i<=n;i++)
        { 
            if(isPrime(i) && n % i == 0)
            { 
                if(hash[i])
                {
                     hash[i] = hash[i] + 1; 
                }
                else
                {
                     hash[i] = 1; 
                }
                n /= i;
            } 
        } 
    }
    this.factor = hash; 
    hash = null;
}
new PrimeFactorizer(24).factor;