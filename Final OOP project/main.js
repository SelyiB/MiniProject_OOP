class LoginForm {
  constructor(bank, accountInput, passwordInput, output) {
    this.bank = bank;
    this.accountInput = accountInput;
    this.passwordInput = passwordInput;
    this.output = output;

    this.submitButton = document.getElementById("submit-button");
    this.submitButton.addEventListener("click", this.handleSubmit.bind(this));
  }
  //check data input
  handleSubmit() {
    const account = this.accountInput.value.trim();
    const password = this.passwordInput.value.trim();

    if (account === "" || password === "") {
      this.output.textContent = "Please enter both account and password";
      return;
    }

    const match = this.bank.authenticateUser(account, password);
    if (match) {
      this.navigateToMenuPage(match);
    } else {
      this.output.textContent = "Incorrect";
    }
  }
  //sent data and user to the next page
  navigateToMenuPage(match) {
    const params = new URLSearchParams();
    params.append("account", match.account);
    params.append("N", match.name);
    params.append("balance", match.balance);
    window.location.href = "menu.html?" + params.toString();
  }
}

class User {
  constructor(account, password, name, balance) {
    this.account = account;
    this.password = password;
    this.name = name;
    this.balance = balance;
  }
  //match input with data
  matchesInput(accountInput, passwordInput) {
    return this.account === accountInput && this.password === passwordInput;
  }
}

class Bank {
  constructor(userData) {
    this.userData = userData;
  }
  //check ความถูกต้อง
  authenticateUser(account, password) {
    const match = this.userData.find(user => user.matchesInput(account, password));
    return match;
  }
}
//fix data
const bank = new Bank([
  new User("1", "1", "Non Preavarin", 100),
  new User("2", "2", "Anuwat Janton", 200),
  new User("3", "3", "Pudis Dama-U", 300)
]);

const accountInput = document.getElementById("input-account");
const passwordInput = document.getElementById("input-password");
const output = document.getElementById("output");
//use class
const loginForm = new LoginForm(bank, accountInput, passwordInput, output);