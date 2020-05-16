class BankAccount {
  constructor(balance, history) {
    this.balance = balance;
    this.history = history;
    this.counter = 0;
  }

  current() {
    this.counter++
    this.history.push({ action: "get balance", time: this.counter, result: "success" });
    return this.balance;
  }

  append(amount) {
    this.counter++
    if (amount > 0) {
      this.balance += amount;
      this.history.push({action: "append "+amount,time:  this.counter,result: "success",});
    } else {
      this.history.push({action: "append "+amount,time:  this.counter,result: "error",});
    }
    return this.balance;
  }

  substract(amount) {
    this.counter++

    if (this.balance - amount < 0) {
      this.history.push({action: "substract "+amount,time:  this.counter,result: "error",});
    } else {
      this.balance = this.balance - amount;
      this.history.push({action: "substract "+amount,time:  this.counter,result: "success",});
    }
    return this.balance;
  }

  merge(account){
    this.counter++

    this.balance+=account.balance
    this.history=this.history.concat(account.history)
    this.history.push({action: "merge",time:  this.counter,result: "success",});
    this.history = this.history.sort((a, b) => (a.time > b.time) ? 1 : -1)
    return this.balance;
  }

  getHistory(){
    return this.history;
  }
  
}



module.exports = BankAccount;
