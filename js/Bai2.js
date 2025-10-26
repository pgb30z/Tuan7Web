document.addEventListener('DOMContentLoaded', function() {
    const txtIncome = document.getElementById('txtIncome');
    const btnState = document.getElementById('btnState');
    const rbtnType = document.getElementsByName('moneyType');
    const selectCar = document.getElementById('rbtnType');
    const imgCar = document.querySelector('.col-3 img');
    const priceDisplay = document.querySelector('.col-3 .fs-4');

    // Function to get the checked value of radio buttons
    function getCheckedValue(radioButtons) {
        for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                return radioButtons[i].value;
            }
        }
        return null;
    }

    // Event listener for the select dropdown
    selectCar.addEventListener('change', function() {
        const selectedOption = selectCar.value.split(';');
        const imgSrc = selectedOption[0].trim();
        const price = selectedOption[1].trim();

        imgCar.src = imgSrc;
        priceDisplay.textContent = `Giá: ${price} USD`;
    });

    // Event listener for the Update button
    document.getElementById('btnUpdate').addEventListener('click', function() {
        const incomeValue = parseFloat(txtIncome.value);
        const outcomeInput = document.getElementById('txtOutcome');
        const selectedMoneyType = getCheckedValue(rbtnType);

        if (selectedMoneyType === '1') { // Vàng
            outcomeInput.value = incomeValue;
        } else if (selectedMoneyType === '0') { // USD
            const selectedOption = selectCar.value.split(';');
            const carPrice = parseFloat(selectedOption[1].trim());
            outcomeInput.value = incomeValue * carPrice;
        }
    });

    // Event listener for the income input blur event
    txtIncome.addEventListener('blur', function() {
        const value = txtIncome.value;
        if (value && !isNaN(value) && value > 0) {
            btnState.classList.remove('disabled');
        } else {
            btnState.classList.add('disabled');
        }
    });
});