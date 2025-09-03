const CASH_BUTTON = document.getElementById("CashButton")
const CLICK_UPGRADE_BUTTON = document.getElementById("ClickUpgrade")
const PASSIVE_UPGRADE_BUTTON = document.getElementById("PassiveUpgrade")

const CASH_PER_CLICK_INCREASE_AMOUNT = 0.20;
const PASSIVE_CASH_INCREASE_AMOUNT = 0.10;

const CASH_PER_CLICK_UPGRADE_PRICE = 10;
const PASSIVE_CASH_UPGRADE_PRICE = 20;

var currentBalance = 0;
var cashPerClick = 1;
var passiveCash = 0;

const cashAmount = document.getElementById("Balance");
const cashPerClickText = document.getElementById("CashPerClickText");
const passiveCashText = document.getElementById("PassiveCashText");


function GetButtonColor(price) {
    var buttonColor = "#ff0000ff";

    if (currentBalance - price >= 0) {
        buttonColor = "#00FF00";
    }

    return buttonColor
}

function UpdateBalance() {
    if (!cashAmount) {
        return null
    }

    cashAmount.textContent = "$" + String(currentBalance.toFixed(2));

    CLICK_UPGRADE_BUTTON.style.backgroundColor = GetButtonColor(CASH_PER_CLICK_UPGRADE_PRICE);
    PASSIVE_UPGRADE_BUTTON.style.backgroundColor = GetButtonColor(PASSIVE_CASH_UPGRADE_PRICE);
}

function wait(seconds) {
    var ms = seconds * 1000;

    return new Promise(resolve => setTimeout(resolve, ms));
}

async function SetPassiveCash() {
    while (true) {
        await wait(1);

        currentBalance = parseFloat((currentBalance + passiveCash).toFixed(2));
        UpdateBalance();
    }
}

function IncreaseCash() {
    currentBalance = parseFloat((currentBalance + cashPerClick).toFixed(2));

    UpdateBalance();
}

function IncreaseCashPerClick() {
    if (!cashPerClickText) {
        return null
    }

    if (currentBalance - CASH_PER_CLICK_UPGRADE_PRICE < 0) {
        return null
    }
    
    currentBalance = parseFloat((currentBalance - CASH_PER_CLICK_UPGRADE_PRICE).toFixed(2));
    
    UpdateBalance();
    
    cashPerClick = parseFloat((cashPerClick + CASH_PER_CLICK_INCREASE_AMOUNT).toFixed(2));
    
    cashPerClickText.textContent = "$" + String(cashPerClick) + "/click";
}

function IncreasePassiveCash() {
    if (!passiveCashText) {
        return null
    }

    if (currentBalance - PASSIVE_CASH_UPGRADE_PRICE < 0) {
        return null
    }
    
    currentBalance = parseFloat((currentBalance - PASSIVE_CASH_UPGRADE_PRICE).toFixed(2));
    
    UpdateBalance();
    
    passiveCash = parseFloat((passiveCash + PASSIVE_CASH_INCREASE_AMOUNT).toFixed(2));
    
    passiveCashText.textContent = "$" + String(passiveCash) + "/s";
}

CASH_BUTTON.addEventListener("click", IncreaseCash);
CLICK_UPGRADE_BUTTON.addEventListener("click", IncreaseCashPerClick);
PASSIVE_UPGRADE_BUTTON.addEventListener("click", IncreasePassiveCash);

UpdateBalance();
SetPassiveCash();