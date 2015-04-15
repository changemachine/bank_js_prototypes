//prototype always at the top of the page; global
    var BankAccount = {
        balance: 0,
        accountName: '',
        //add the NaN method to have inputs made on one or the other
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

    //global variable, will need it on both forms
    var myAccount;


$(document).ready(function() {
    $("#account-name").focus();
    //allows the document see whats going on beginning with the first submit form
    $("form#sign-up").submit(function(event) {
        event.preventDefault();
        // <----- this is the add name and amount box ----->
        //create new variables and save the input values from the prototype
        var inputName = $("input#account-name").val();
        var inputBal =  Math.abs(parseInt($("input#account-bal").val()));
        //passing the prototype into the object to assign new values  to the properties
        myAccount = Object.create(BankAccount);
        myAccount.balance = inputBal;
        myAccount.accountName = inputName;

        //shows the name input 'myAccount.accountName', instead of 'this' due to being outside the object
        $("#account-name-display").text(myAccount.accountName);
        $("#balance").text(myAccount.balance.toLocaleString());
        //reveals the hidden deposit-withdraw and balance forms, hides the sign-up form
        $("#account-hide").show();
        //hides the new - account after entering the name and amount.
        $("#new-account").hide();



    });
        // <----- this is the add deposit or withdraw ----->
        $("#cha-ching").submit(function(event) {
            event.preventDefault();
            // $("#deposit").focus();
            var inputDepositString = $("input#deposit").val();
            var inputWithdrawString = $("input#withdraw").val();
            var inputDeposit =  Math.abs(parseInt(inputDepositString));
            var inputWithdraw =  Math.abs(parseInt(inputWithdrawString));

            if (inputDeposit >0 && inputWithdraw > 0) {
                alert("Only 1 field at a time, please!")
            }
            else {
                myAccount.deposit(inputDeposit);
                myAccount.withdraw(inputWithdraw);
            }
            // var commaDisplay =
            $("#balance").text(myAccount.balance.toLocaleString());
            //this will empty the deposit/withdraw amount after entering the value
            $("input#deposit").val('');
            $("input#withdraw").val('');

        });

});
