class Wallet {
 constructor(money) {
  let _money = money
  //get actual wallet walue
  this.getWalletValue = () => _money;

  //check if player have enough money
  this.checkCanPlay = (value) => {
   if (_money >= value) return true;
   return false;
  }

  // changing wallet value
  this.changeWallet = (value, type = "+") => {
   if (typeof value === "number" && !isNaN(value)) {
    if (type === "+") {
     return _money += value;
    } else if (type === "-") {
     return _money -= value;
    } else {
     throw new Error("wrong action type")
    }

   } else {
    // console.log(typeof value);
    throw new Error("wrong number")
   }
  }
 }
}

const wallet = new Wallet(200)
