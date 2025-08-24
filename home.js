const validPin = 1234;
const transactionData = [];

// function to get value number
function getInputValueNumber(id) {
  // const input = document.getElementById(id);
  // const values = input.value;
  // const number = parseInt(values);
  // return number;
  const inputNumber = parseInt(document.getElementById(id).value);
  return inputNumber;
}

// function to get value
function getInputValue(id) {
  const inputValue = document.getElementById(id).value;
  return inputValue;
}

//function to get inner text
function getInnerText(id) {
  const innerTextNumber = parseInt(document.getElementById(id).innerText);
  return innerTextNumber;
}

// function to set inner text
function setInnerText(value) {
  const availableBalance = document.getElementById("balance");
  availableBalance.innerText = value;
  return availableBalance;
}

// function to toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// function to btn toggle
function btnToggle(id){
     const formBtn = document.getElementsByClassName("form-btn");
     for (const item of formBtn) {
       item.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
       item.classList.add("border-gray-300", "bg-white");
     }
     document
       .getElementById(id)
       .classList.remove("border-gray-300", "bg-white");
     document
       .getElementById(id)
       .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}



// add money feature
document.getElementById("addMoney-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const bank = getInputValue("bank-name");
  const bankNumber = getInputValue("bank-number");
  const amount = getInputValueNumber("amount-number");
  if(amount < 1){
    alert('Invalid amount');
    return;
  }
  const pin = getInputValueNumber("pin-number");
  if (bankNumber.length < 11) {
    alert("Invalid account number");
    return;
  }
  if (pin !== validPin) {
    alert("Invalid pin number");
    return;
  }
  const availableBalance = getInnerText("balance");
  const totalBalance = amount + availableBalance;
  setInnerText(totalBalance);
    alert("Money added successfully");

  const data = {
    name: 'Add money',
    date: new Date().toLocaleTimeString()
  }
  transactionData.unshift(data);
});

// cash out feature
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const agentNumber = getInputValue("agent-number");
  const availableBalance = getInnerText("balance");
  const cashOutAmount = getInputValueNumber("cash-out-amount");
  if(cashOutAmount <= 0){
    alert('Invalid amount');
    return;
  }
  if(cashOutAmount > availableBalance){
    alert('Insufficient balance')
    return;
  }
  const pin = getInputValueNumber("pin");
  if (agentNumber.length < 11) {
    alert("Invalid account number");
    return;
  }
  if (pin !== validPin) {
    alert("Invalid pin number");
    return;
  }
  const remainingBalance = availableBalance - cashOutAmount;
  setInnerText(remainingBalance);
  alert("Withdraw successful");

  const data = {
    name: "Cash out",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.unshift(data);
});

// transfer feature
document.getElementById("transferBtn").addEventListener("click", function (e) {
  e.preventDefault();
  const userAccount = getInputValue("user-account");
  const transferAmount = getInputValueNumber("transfer-amount");
  const transferPin = getInputValueNumber("transfer-pin");
  const availableBalance = getInnerText('balance');
  if(userAccount.length !== 11){
    alert('Invalid account number');
    return;
  }
  if(transferPin !== validPin){
    alert('Invalid pin number');
    return;
  }
  if(transferAmount > availableBalance){
    alert('Insufficient balance');
    return;
  }
  if(transferAmount < 1){
    alert('Invalid amount');
    return;
  }

  const remainingBalance = availableBalance - transferAmount;
  setInnerText(remainingBalance);
  alert('Balance transferred successfully');

   const data = {
     name: "Transfer",
     date: new Date().toLocaleTimeString(),
   };
   transactionData.unshift(data);
});

// bonus feature
document.getElementById('bonusBtn').addEventListener('click', function(e){
    e.preventDefault();
    alert('Invalid coupon')
})

// pay bill feature
document.getElementById('payBillBtn').addEventListener('click', function(e){
    e.preventDefault();
    const billerAccount = getInputValue("biller-account");
    const payAmount = getInputValueNumber("pay-amount");
    const availableBalance = getInnerText('balance')
    const payPin = getInputValueNumber("pay-pin");
    if(billerAccount.length < 11){
        alert('Invalid account number');
        return;
    }
    if(payAmount > availableBalance){
        alert('Insufficient balance');
        return;
    }
    if(payAmount < 1){
        alert('Invalid amount');
        return;
    }
    if(payPin !== validPin){
        alert('Invalid pin number');
        return;
    }
    const remainingBalance = availableBalance - payAmount;
    setInnerText(remainingBalance);
    alert('Bill paid successfully')

    const data = {
      name: "Bill Pay",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.unshift(data);
})

// mobile recharge feature
document.getElementById("rechargeBtn").addEventListener('click', function(e){
    e.preventDefault();
    const mobileNumber = getInputValue("mobile-number");
    const rechargeAmount = getInputValueNumber('recharge-amount');
    const availableBalance = getInnerText('balance');
    const rechargePin = getInputValueNumber('recharge-pin');
    if(mobileNumber.length !== 11){
        alert("Invalid mobile number");
        return;
    }
    if (rechargeAmount < 20) {
      alert("Invalid amount");
      return;
    }
    if (rechargeAmount > availableBalance) {
      alert("Insufficient balance");
      return;
    }
    if (rechargePin !== validPin) {
      alert("Invalid pin number");
      return;
    }
    const remainingBalance = availableBalance - rechargeAmount;
    setInnerText(remainingBalance);
    alert('Mobile recharged successfully')

    const data = {
      name: "Mobile Recharge",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.unshift(data);
});

// transaction feature
document.getElementById("transaction-btn").addEventListener('click', function(){
    const transactionContainer = document.getElementById("transaction-data");
    transactionContainer.innerText = "";
    for(const data of transactionData){
        const div = document.createElement('div');
        div.innerHTML = `
             <div class=" mx-auto mt-4">
                <div class="flex justify-between items-center bg-white px-[16px] py-[13px] rounded-xl">
                    <div class="flex justify-between items-center gap-2">
                        <div class="p-[11px] rounded-full bg-[#F4F5F7]">
                            <img src="./assets/wallet1.png" alt="">
                        </div>
                        <div>
                            <h2 class="font-semibold text-[#080808] opacity-[70%]">${data.name}</h2>
                            <p class="text-[12px] text-[#080808] opacity-[70%] mt-[6px]">${data.date}</p>
                        </div>
                    </div>
                    <div class="text-[#080808] opacity-[70%]">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
            </div>
        `
        transactionContainer.appendChild(div);
    }
});

// function for log out
document.getElementById("log-out-btn").addEventListener('click', function(){
    window.location.href = "./index.html";
});


// toggle feature
document.getElementById("add-money-btn").addEventListener("click", function () {
    handleToggle("add-money-section");
    btnToggle("add-money-btn");
});

document.getElementById("cash-out-btn").addEventListener("click", function () {
    handleToggle("cash-out-section");
    btnToggle("cash-out-btn");  
});

document.getElementById("transfer-btn").addEventListener("click", function () {
    handleToggle("transfer-section");
    btnToggle("transfer-btn");
});

document.getElementById("bonus-btn").addEventListener("click", function () {
    handleToggle("bonus-section");
    btnToggle("bonus-btn");
});

document.getElementById("pay-bill-btn").addEventListener("click", function () {
    handleToggle("pay-bill-section");
    btnToggle("pay-bill-btn");
});

document.getElementById("recharge-btn").addEventListener("click", function () {
    handleToggle("recharge-section");
    btnToggle("recharge-btn");
});

document.getElementById("transaction-btn").addEventListener("click", function () {
    handleToggle("transaction-section");
    btnToggle("transaction-btn");
});
