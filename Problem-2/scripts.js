document.getElementById('convertButton').addEventListener('click', function() {
    const sourceCurrency = document.getElementById('sourceCurrency').value;
    const targetCurrency = document.getElementById('targetCurrency').value;
    const amount = document.getElementById('amount').value;

    const apiKey = '1ccea20a0b7b9a5621b0c617';
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${sourceCurrency}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const rate = data.conversion_rates[targetCurrency];
            const convertedAmount = (amount * rate).toFixed(2);
            document.getElementById('result').innerHTML = `
                <p>${amount} ${sourceCurrency} is approximately ${convertedAmount} ${targetCurrency}</p>
                <p>Exchange rate: 1 ${sourceCurrency} = ${rate} ${targetCurrency}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching exchange rate', error);
            document.getElementById('result').textContent = 'Error fetching exchange rate.';
        });
});

