//Create class
class BankAccount {
    constructor(account, N, balance) {
      this.account = account;
      this.N = N;
      this.balance = balance;
    }
    //function account data
    displayAccountInfo() {
      document.getElementById("display1").textContent = "Name    : " + this.N;
      document.getElementById("display2").textContent = "Account : " + this.account;
      document.getElementById("display3").textContent = "Balance : " + this.balance;
    }
    //function withdraw
    withdrawMoney() {
      //check input data
      const input_withdraw = parseInt(document.getElementById("input-withdraw").value);
      if (!Number.isNaN(input_withdraw) && input_withdraw <= this.balance && input_withdraw > 0) {
        this.balance -= input_withdraw;
        document.getElementById("display3").textContent = "Balance : " + this.balance;
        
        //create countdown popup
        const popup = document.getElementById("popup");
        popup.style.display = "block";
  
        let timeLeft = 5;
        const countdownTimer = document.getElementById("countdown-timer");
        countdownTimer.textContent = `Will be return to main page in ${timeLeft} seconds`;
        const countdownInterval = setInterval(() => {
          timeLeft--;
          countdownTimer.textContent = `Will be return to main page in ${timeLeft} seconds`;
          if (timeLeft === 0) {
            clearInterval(countdownInterval);
            popup.style.display = "none";
  
            window.location.href = "main.html";
          }
        }, 1000);
      } else {
        document.getElementById("output").textContent = "Error : Invalid input!";
      }
    }
  }
  
  // get data from menu page
  const parawith = new URLSearchParams(window.location.search);
  const account = parawith.get("account");
  const N = parawith.get("N");
  let balance = parseInt(parawith.get("balance"));
  
  //use code
  if (account && N && Number.isInteger(balance)) {
    const bankAccount = new BankAccount(account, N, balance);
    bankAccount.displayAccountInfo();
  
    const confirm_button = document.getElementById("confirm_button");
    confirm_button.addEventListener("click", () => bankAccount.withdrawMoney());
  } else {
    document.getElementById("display3").textContent = "ERROR";
  }
  