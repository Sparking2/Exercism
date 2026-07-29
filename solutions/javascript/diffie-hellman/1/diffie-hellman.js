//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isPrime = (num) => {
    if(num < 2) return false;
    if(num === 2) return true;
    if(num % 2 === 0) return false;
    
    for(let i = 3; i <= Math.sqrt(num); i += 2){
        if(num % i === 0) return false;
    }
    
    return true;
}

export class DiffieHellman { 
  constructor(p, g) {
    if(p <= 0 || g <= 0 || !isPrime(p) || !isPrime(g)){
      throw new Error('');
    }

    this.p = p;
    this.g = g;
  }

  getPublicKey(privateKey) {
    if(privateKey <= 1 || privateKey >= this.p){
      throw new Error("Invalid private key");
    }

    return Number(BigInt(this.g) ** BigInt(privateKey) % BigInt(this.p));
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return Number(BigInt(theirPublicKey) ** BigInt(myPrivateKey) % BigInt(this.p));
  }

  static getPrivateKey(p) {
    return Math.floor(Math.random() * (p - 2)) + 2;
  }
}
