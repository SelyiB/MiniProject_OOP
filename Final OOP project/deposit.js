class DepositPage {
    constructor() {
        //receive data from menu page
        const paradepo = new URLSearchParams(window.location.search);
        this.account = paradepo.get("account");
        this.name = paradepo.get("N");
        this.balance = parseInt(paradepo.get("balance"));

        this.display1 = document.getElementById("display1");
        this.display2 = document.getElementById("display2");
        this.display3 = document.getElementById("display3");

        this.confirmButton = document.getElementById("confirm_button");
        this.confirmButton.addEventListener("click", this.handleConfirm.bind(this));
        //create countdown popup
        this.popup = document.getElementById("popup");
        this.countdownTimer = document.getElementById("countdown-timer");
    }

    handleConfirm() {
        const inputDeposit = parseInt(document.getElementById("input-deposit").value);
        //check user input
        if (!Number.isNaN(inputDeposit) && inputDeposit > 0) {
            this.balance += inputDeposit;
            this.display3.textContent = "Balance : " + this.balance;
            
            //show popup
            this.popup.style.display = "block";
            
            let timeLeft = 5;
            this.countdownTimer.textContent = `Will be return to main page in ${timeLeft} seconds`;
            const countdownInterval = setInterval(() => {
                timeLeft--;
                this.countdownTimer.textContent = `Will be return to main page in ${timeLeft} seconds`;
                if (timeLeft === 0) {
                    clearInterval(countdownInterval);
                    this.popup.style.display = "none";
    
                    window.location.href = "main.html";
                }
            }, 1000);
        }
        else {
            this.display3.textContent = "Error: Invalid input";
        }
    }
    
    init() {
        if (this.account && this.name && Number.isInteger(this.balance)) {
            this.display1.textContent = "Name    : " + this.name;
            this.display2.textContent = "Account : " + this.account;
            this.display3.textContent = "Balance : " + this.balance;
        } else {
            this.display3.textContent = "ERROR";
        }
    }
}
//use code
const depositPage = new DepositPage();
depositPage.init();
