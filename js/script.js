
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