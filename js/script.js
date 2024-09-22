
// history button 
document.getElementById('btn-history').addEventListener('click', function () {
    const btnHistory = getInputFieldValueById('btn-history');
    btnHistory.classList.add('bg-[#B4F461]', 'py-3', 'px-8', 'rounded-lg', 'font-medium', 'text-xl')

    const donationContainer = getInputFieldValueById('donation-container');
    donationContainer.classList.add('hidden')

    const btnDonation = getInputFieldValueById('btn-donation');
    btnDonation.classList.remove('bg-[#B4F461]', 'py-3', 'px-8', 'rounded-lg', 'font-medium', 'text-xl')
    btnDonation.classList.add('border-2', 'py-3', 'px-8', 'rounded-lg', 'font-medium', 'text-xl')

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
})

// donate now 1
document.getElementById('donate-now-1').addEventListener('click', function () {
    const donate1Value = parseFloat(getInputFieldValueById('donate-value-1').value)

    const donate1DefaultValue = parseFloat(getTextFieldValueById('donate-1-default-value').innerText);

    const amountTotal = donate1DefaultValue + donate1Value;
    const donate1Element = document.getElementById('donate-1-default-value');
    donate1Element.innerText = amountTotal;

    const myBalance = parseFloat(getTextFieldValueById('my-balance').innerText);
    const latestBalance = myBalance - donate1Value;

    const myBalanceElement = document.getElementById('my-balance');
    myBalanceElement.innerText = latestBalance;
})

// donate now 2
document.getElementById('donate-now-2').addEventListener('click', function () {
    const donate2Value = parseFloat(getInputFieldValueById('donate-value-2').value)

    const donate2DefaultValue = parseFloat(getTextFieldValueById('donate-2-default-value').innerText);
  
    const amountTotal = donate2DefaultValue + donate2Value;
    const donate2Element = document.getElementById('donate-2-default-value')
    donate2Element.innerText = amountTotal;

    const myBalance = parseFloat(getTextFieldValueById('my-balance').innerText);
    const latestBalance = myBalance - donate2Value;

    const myBalanceElement = document.getElementById('my-balance');
    myBalanceElement.innerText = latestBalance;
    
})