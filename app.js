const btn = document.querySelector("#btn")
const billAmount = document.querySelector("#bill-amount")
const cashGiven = document.querySelector("#cash-given")
const message = document.querySelector("#error-message")
const numOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000,500,100,50,20,10,1];

btn.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
    if (billAmount.value > 0 ) {
        if (cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }else{
            showMessage("The amount should be atleast be equal to the bill amount");
        }

    } else {
       showMessage("Invalid Bill Amount");
    }
});

function calculateChange (amountToBeReturned) {
    for ( let i = 0; i < availableNotes.length; i++){
        const numOfNotes = Math.trunc(
            amountToBeReturned / availableNotes[i]
        );
        amountToBeReturned %= availableNotes[i]; 
        numOfNotes[i].innerText = numberOfNotes;
    }

}

function hideMessage (){
    message.style.display = "none";

}

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
};