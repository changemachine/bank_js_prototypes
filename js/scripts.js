//prototype at the beginning, along with its properties and methods
    var BankAccount = {
        balance: 0,
        accountName: '',
        withdraw: function(amount) {
            if(isNaN(amount)) {
                amount = 0;
            }
            this.balance = this.balance - amount;
        },
        deposit: function(amount) {
            if(isNaN(amount)){
                amount = 0;
            }
            this.balance = this.balance + amount;
        }
    };

    var myAccount;

$(document).ready(function() {

    //requires the form under this 'document', allows the document see whats going on
    $("form#sign-up").submit(function(event) {
        event.preventDefault();
        // <----- this is the add name and amount box ----->
        //create new variables and save the input values in relation to the properties in the object
        var inputName = $("input#account-name").val();
        var inputBal = parseInt($("input#account-bal").val());
        //passing the prototype into the object to assign new values  to the properties
        myAccount = Object.create(BankAccount);
        myAccount.balance = inputBal;
        myAccount.accountName = inputName;

        //shows the name input 'myAccount.accountName', instead of 'this' due to being outside the object
        $("#account-name-display").text(myAccount.accountName);
        $("#balance").text(myAccount.balance);
        //reveals the hidden deposit-withdraw and balance forms, hides the sign-up form
        $("#account-hide").show();
        //hides the new - account after entering the name and amount.
        $("#new-account").hide();

        console.log(myAccount.balance);

    });
        // <----- this is the add deposit or withdraw ----->
        $("#cha-ching").submit(function(event) {
            event.preventDefault();
            var inputDepositString = $("input#deposit").val();
            var inputWithdrawString = $("input#withdraw").val();
            var inputDeposit = parseInt(inputDepositString);
            var inputWithdraw = parseInt(inputWithdrawString);
            console.log(inputDeposit);
            console.log(inputWithdraw);
            if (inputDeposit >0 && inputWithdraw > 0) {
                alert("Only 1 field at a time, please!")
            }
            else {
                myAccount.deposit(inputDeposit);
                myAccount.withdraw(inputWithdraw);
            }



            $("#balance").text(myAccount.balance);

        });
// debugger;

});
