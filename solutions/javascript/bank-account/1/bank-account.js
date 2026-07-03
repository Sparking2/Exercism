//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {

    
  constructor() {
    this.currentBalance = 0;
    this.isOpen = false;
  }

  open() {
    if(this.isOpen) throw new ValueError();
    
    this.currentBalance = 0;
    this.isOpen = true;
  }

  close() {
    if(!this.isOpen) throw new ValueError();
    
    this.isOpen = false;
  }

  deposit(input) {
    if(!this.isOpen || input <= 0) throw new ValueError();
    
    this.currentBalance += input;
  }

  withdraw(input) {
    if(!this.isOpen || input > this.currentBalance || input <= 0)
      throw new ValueError();
    
    this.currentBalance -= input;
  }

  get balance() {
    if(!this.isOpen) throw new ValueError();
    
    return this.currentBalance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
