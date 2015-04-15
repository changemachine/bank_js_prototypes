$(document).ready(function() {

    //requires the form under this 'document', allows the document see whats going on
    $("form#sign-up").submit(function(event) {
        event.preventDefault();
    //prototype at the beginning, along with its properties and methods
        var BankAccount = {
            balance: 0,
            accountName: '',
            withdraw: function(amount) {
                this.balance = this.balance - amount;
            },
            deposit: function(amount) {
                this.balance = this.balance + amount;
            }
        };
        //create new variables and save the input values in relation to the properties in the object
        var inputName = $("input#account-name").val();
        var inputBal = $("input#account-bal").val();
        //passing the prototype into the object to assign new values  to the properties
        var myAccount = Object.create(BankAccount);
        myAccount.balance = inputBal;
        myAccount.accountName = inputName;

        //shows the name input
        $('#account-name-display').text(this.accountName);
        //hides the the deposit-withdraw and balance
        $("#account-hide").show();


    });

});
