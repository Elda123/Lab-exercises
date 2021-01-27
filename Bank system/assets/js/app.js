let bankSystem = {
    amount: 0,
    balance_acc1: 200,
    balance_acc2: 800,
    acc1_number: 1001,
    acc2_number: 1002,
    to: "",

    deposit: function (amount) {
        this.balance_acc1 = parseInt(amount) + this.balance_acc1;
        return amount;
    },
    withdraw: function (amount) {
        let impossible;
        if (parseInt(amount) <= this.balance_acc1 - 80) {
            this.balance_acc1 = this.balance_acc1 - parseInt(amount);
            impossible = "you have successfully withdrew " + amount + " from account 1";
        }
        else {
            impossible = "you can not withdraw " + amount + " birr your balance is insufficient";
        }
        return impossible;
    },
    checkBalance: function () {
        return this.balance_acc1;
    },
    transfer: function (amount, to) {
        let msg;
        if ((to == "1") && (this.balance_acc1 > parseInt(amount) + 80)) {
            this.balance_acc1 = this.balance_acc1 - parseFloat(amount);
            this.balance_acc2 = this.balance_acc2 + parseFloat(amount);
            msg = (" you have sucessfuly transfered " + amount + " birr to account 2");
        }
        else {
            msg = " you don't have sufficient balance to transfer this much amount"
        }

        if (to == "2") {
            this.balance_acc2 = this.balance_acc2 - parseFloat(amount);
            this.balance_acc1 = this.balance_acc1 + parseFloat(amount);
            msg = (" you have sucessfuly transfered " + amount + " birr to account 1");
        }

        return msg;
    }


}
let choice, toContinue = "1";
(function () {

    while (toContinue == "1") {

        choice = prompt(`choose which service you want to use: 
1.deposit               2.balance check
3.withdrawal         4.transfer `);
        if (choice == "1") {
            amount = prompt("Enter the amount to deposit");
            console.log("you have successfully deposited " + bankSystem.deposit(amount) + " to account 1")

        }
        else if (choice == "3") {
            amount = prompt("Enter the amount to withdraw");
            console.log(bankSystem.withdraw(amount));
        }
        else if (choice == "2") {
            console.log("the current amount you have is : " + bankSystem.checkBalance());
        }

        else if (choice == "4") {
            to = prompt(`     1) transfer from account 1 to account 2
    2) transfer from account 2 to account 1`);
            amount = prompt("Enter the amount you want to transfer")
            console.log(bankSystem.transfer(amount, to));
        }
        toContinue = prompt("Enter 1 to continue / enter any other key to quit operation");
    }
})();