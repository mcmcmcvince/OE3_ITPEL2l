const { alertController } = require("@ionic/core");

const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelButton = document.querySelector('#btn-clear');
const addButton = document.querySelector('#btn-add');
const expensesList = document.querySelector('#expenses-list');
const totalExpenses = document.querySelector('#total-expenses');
const alertInputControl = document.querySelector(ion-alert);

let myTotalExpenses = 0;

const clear = () =>{
    reasonInput.value = '';
    amountInput.value = '';
};

const inputAlert = () =>{
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header ='Warning';
    alert.subHeader = 'Input Alert....'
    alert.message = 'Please Enter Amount & Reason';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    alert.present();
}

//clear button eventListener
cancelButton.addEventListener('click', clear);

//add button eventListener
addButton.addEventListener('click', () =>{
    const reasonEntered = reasonInput.value;
    const amountEntered = amountInput.value;
    if(reasonEntered.trim().length <= 0 || amountEntered <= 0 || amountEntered.trim().length <= 0 ){
        inputAlert();
        return;
    }
    const newExpenses = document.createElement('ion-item');
    newExpenses.textContent = reasonEntered + ':P' + amountEntered;
    expensesList.appendChild(newExpenses);

    myTotalExpenses += +amountEntered;
    totalExpenses.textContent = myTotalExpenses;
    console.log(myTotalExpenses);

    clear();
});
