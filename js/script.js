
// history button 
document.getElementById('btn-history').addEventListener('click', function () {
    const btnHistory = getInputFieldValueById('btn-history');
    btnHistory.classList.add('bg-[#B4F461]', 'py-3', 'px-8', 'rounded-lg', 'font-medium', 'text-xl')

    const donationContainer = getInputFieldValueById('donation-container');
    donationContainer.classList.add('hidden')

    const btnDonation = getInputFieldValueById('btn-donation');
    btnDonation.classList.remove('bg-[#B4F461]', 'py-3', 'px-8', 'rounded-lg', 'font-medium', 'text-xl')
    btnDonation.classList.add('border-2', 'py-3', 'px-8', 'rounded-lg', 'font-medium', 'text-xl')

    const historySection = document.getElementById('history-section');
    historySection.classList.remove('hidden')

})

// donation button
document.getElementById('btn-donation').addEventListener('click', function () {

    const btnDonation = getInputFieldValueById('btn-donation')
    btnDonation.classList.add('bg-[#B4F461]', 'py-3', 'px-8', 'rounded-lg', 'font-medium', 'text-xl')

    const donationContainer = getInputFieldValueById('donation-container');
    donationContainer.classList.remove('hidden')

    const btnHistory = getInputFieldValueById('btn-history');
    btnHistory.classList.remove('bg-[#B4F461]', 'py-3', 'px-8', 'rounded-lg', 'font-medium', 'text-xl');
    btnHistory.classList.add('border-2', 'py-3', 'px-8', 'rounded-lg', 'font-medium', 'text-xl')

    const historySection = document.getElementById('history-section');
    historySection.classList.add('hidden')
})

// donate now 1
document.getElementById('donate-now-1').addEventListener('click', function () {
    const donate1Value = parseFloat(getInputFieldValueById('donate-value-1').value)

    // check value is not a number
    if (isNaN(donate1Value)) {
        return alert('Provide a valid number')
    }
    // check value less then 0
    if (donate1Value < 0) {
        return alert('Please provide a positive value')
    }

    const donate1DefaultValue = parseFloat(getTextFieldValueById('donate-1-default-value').innerText);

    const amountTotal = donate1DefaultValue + donate1Value;
    const donate1Element = document.getElementById('donate-1-default-value');


    const myBalance = parseFloat(getTextFieldValueById('my-balance').innerText);
    const latestBalance = myBalance - donate1Value;

    // check main balance more then donate
    if (myBalance < donate1Value) {
        return alert('Do not have that much money')
    }

    donate1Element.innerText = amountTotal;
    const myBalanceElement = document.getElementById('my-balance');
    myBalanceElement.innerText = latestBalance;

    if (donate1Value) {
        alert('successfully donate')
    }

    // update history
    const donation1Title = getTextFieldValueById('donation-1-title').innerText;
    const historyContainer = document.getElementById('history-container');
    const div = document.createElement('div');
    div.innerHTML = `  
   <div class="space-y-4 border-2 rounded-2xl p-8">
        <p class="font-bold text-xl">${donate1Value} Taka ${donation1Title}</p>
        <p>Date : ${new Date().toLocaleString()}</p>
    </div>
   `
    historyContainer.appendChild(div)
})

// donate now 2
document.getElementById('donate-now-2').addEventListener('click', function () {
    const donate2Value = parseFloat(getInputFieldValueById('donate-value-2').value)

    // check value is not a number
    if (isNaN(donate2Value)) {
        return alert('Provide a valid number')
    }
    // check value less then 0
    if (donate2Value < 0) {
        return alert('Please provide a positive value')
    }

    const donate2DefaultValue = parseFloat(getTextFieldValueById('donate-2-default-value').innerText);

    const amountTotal = donate2DefaultValue + donate2Value;
    const donate2Element = document.getElementById('donate-2-default-value')

    const myBalance = parseFloat(getTextFieldValueById('my-balance').innerText);
    const latestBalance = myBalance - donate2Value;

    // check main balance more then donate
    if (myBalance < donate2Value) {
        return alert('Do not have that much money')
    }

    donate2Element.innerText = amountTotal;
    const myBalanceElement = document.getElementById('my-balance');
    myBalanceElement.innerText = latestBalance;

    if (donate2Value) {
        alert('successfully donate')
    }

    // update history
    const donation2Title = getTextFieldValueById('donation-2-title').innerText;
    const historyContainer = document.getElementById('history-container');
    const div = document.createElement('div');
    div.innerHTML = `  
     <div class="space-y-4 border-2 rounded-2xl p-8">
          <p class="font-bold text-xl">${donate2Value} Taka ${donation2Title}</p>
          <p>Date : ${new Date().toLocaleString()}</p>
      </div>
     `
    historyContainer.appendChild(div)
})

// donate now 3
document.getElementById('donate-now-3').addEventListener('click', function () {
    const donate3Value = parseFloat(getInputFieldValueById('donate-value-3').value);

    // check value is not a number
    if (isNaN(donate3Value)) {
        return alert('Provide a valid number')
    }
    // check value less then 0
    if (donate3Value < 0) {
        return alert('Please provide a positive value')
    }

    const donate3DefaultValue = parseFloat(getTextFieldValueById('donate-3-default-value').innerText);

    const amountTotal = donate3DefaultValue + donate3Value;
    const donate3Element = document.getElementById('donate-3-default-value');

    const myBalance = parseFloat(getTextFieldValueById('my-balance').innerText);
    const latestBalance = myBalance - donate3Value;

    // check main balance more then donate
    if (myBalance < donate3Value) {
        return alert('Do not have that much money')
    }

    donate3Element.innerText = amountTotal;
    const myBalanceElement = document.getElementById('my-balance');
    myBalanceElement.innerText = latestBalance;

    if (donate3Value) {
        alert('successfully donate')
    }

    // update history
    const donation3Title = getTextFieldValueById('donation-3-title').innerText;
    const historyContainer = document.getElementById('history-container');
    const div = document.createElement('div');
    div.innerHTML = `  
   <div class="space-y-4 border-2 rounded-2xl p-8">
        <p class="font-bold text-xl">${donate3Value} Taka ${donation3Title}</p>
        <p>Date : ${new Date().toLocaleString()}</p>
    </div>
   `
    historyContainer.appendChild(div)
})
