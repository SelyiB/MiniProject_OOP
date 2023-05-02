class User {
    constructor(account, password, name, balance) {
        this.account = account;
        this.password = password;
        this.name = name;
        this.balance = balance;
    }

    matchesInput(accountInput, passwordInput) {
        return this.account === accountInput && this.password === passwordInput;
    }
}
//fix data
const userData = [  
    new User("1", "1", "Non Preavarin", 100),
    new User("2", "2", "Anuwat Janton", 200),
    new User("3", "3", "Pudis Dama-U", 300)
];

const submitButton = document.getElementById("submit-button");
let yourname = "";
let youraccount = "";
let yourbalance = 0;
//condition if user click the submit_button
submitButton.addEventListener("click", function() {
    const accountInput = document.getElementById("input-account");
    const account = accountInput.value.trim();

    if (account == "") {
        output1.textContent = "Please enter an account";
        return;
    }
    //if input_data match with database
    const match = userData.find(user => user.account == account);
    if (match) {
        yourname = match.name;
        youraccount = match.account;
        yourbalance = match.balance;

        if(yourname==myname){
            document.getElementById("displayyou1").textContent = "Name    : -";
            document.getElementById("displayyou2").textContent = "Account : -";
            document.getElementById("displayyou3").textContent = "Balance : -";
            output1.textContent = "This is your account change account";
        }
        else{
            document.getElementById("displayyou1").textContent = "Name    : "+yourname;
            document.getElementById("displayyou2").textContent = "Account : "+youraccount;
            document.getElementById("displayyou3").textContent = "Balance : "+yourbalance;
            output1.textContent = "";
        }
    } else {
        output1.textContent = "Account not found";
        document.getElementById("displayyou1").textContent = "Name    : -";
        document.getElementById("displayyou2").textContent = "Account : -";
        document.getElementById("displayyou3").textContent = "Balance : -";
    }
});
const confirmButton = document.getElementById("confirm-button");
//if user click confirm_button
confirmButton.addEventListener("click", function() {
    const transferamount = parseInt(document.getElementById("input-amount").value);
    if(transferamount > mybalance && input_withdraw > 0){
        output2.textContent = "Your money is not enough to make this payment"
    }
    else{
        mybalance -= transferamount;
        yourbalance += transferamount;
        document.getElementById("displaymy1").textContent = "Name    : "+myname;
        document.getElementById("displaymy2").textContent = "Account : "+myaccount;
        document.getElementById("displaymy3").textContent = "Balance : "+mybalance;
        document.getElementById("displayyou1").textContent = "Name    : "+yourname;
        document.getElementById("displayyou2").textContent = "Account : "+youraccount;
        document.getElementById("displayyou3").textContent = "Balance : "+yourbalance;
        //create countdown popup
        const popup = document.getElementById("popup");
        popup.style.display = "block";

        //show popup
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

    }
});
//receive data from menu
const paratran = new URLSearchParams(window.location.search);
const myaccount = paratran.get("account");
const myname = paratran.get("N");
let mybalance = parseInt(paratran.get("balance"));
//show data that get from menu
if (myaccount && myname && Number.isInteger(mybalance)) {
    document.getElementById("displaymy1").textContent = "Name    : "+myname;
    document.getElementById("displaymy2").textContent = "Account : "+myaccount;
    document.getElementById("displaymy3").textContent = "Balance : "+mybalance;
} else {
    document.getElementById("displaymy3").textContent = "ERROR";
}
