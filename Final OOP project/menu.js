//receive data from the login page
const params = new URLSearchParams(window.location.search);
const account = params.get("account");
const N = params.get("N");
const balance = parseInt(params.get("balance"));
if (account && N && Number.isInteger(balance)) {
    //show data that get from login page
    document.getElementById("displayN").textContent = "Name    : "+N;
    document.getElementById("displayI").textContent = "Account : "+account;
    document.getElementById("displayB").textContent = "Balance : "+balance;
}

withdraw_button.addEventListener("click", function() {
    //sent data to next page
    const parawith = new URLSearchParams();
    parawith.append("account", account);
    parawith.append("N", N);
    parawith.append("balance", balance);
    window.location.href = "withdraw.html?" + parawith.toString();
});

deposit_button.addEventListener("click", function() {
    //sent data to next page
    const paradepo = new URLSearchParams();
    paradepo.append("account", account);
    paradepo.append("N", N);
    paradepo.append("balance", balance);
    window.location.href = "deposit.html?" + paradepo.toString();
});

transfer_button.addEventListener("click", function() {
    //sent data to next page
    const paratran = new URLSearchParams();
    paratran.append("account", account);
    paratran.append("N", N);
    paratran.append("balance", balance);
    window.location.href = "transfer.html?" + paratran.toString();
});

