// Enum tanımı
const Currency = {
    USD: 'USD',
    EUR: 'EUR',
    TRY: 'TRY',
    GBP: 'GBP'
};

// Döviz kurları
const exchangeRates = {
    [Currency.USD]: {
        [Currency.TRY]: 30.50,
        [Currency.EUR]: 0.85,
        [Currency.GBP]: 0.73
    },
    [Currency.EUR]: {
        [Currency.TRY]: 34.18,
        [Currency.USD]: 1.18,
        [Currency.GBP]: 0.86
    },
    [Currency.TRY]: {
        [Currency.USD]: 0.031,
        [Currency.EUR]: 0.029,
        [Currency.GBP]: 0.025
    },
    [Currency.GBP]: {
        [Currency.USD]: 1.37,
        [Currency.EUR]: 1.17,
        [Currency.TRY]: 38.16
    }
};

// Döviz dönüşümü
const exchangeCurrency = (amount, fromCurrency, toCurrency) => {
    return new Promise((resolve, reject) => {
        if (fromCurrency in exchangeRates && toCurrency in exchangeRates[fromCurrency]) {
            const exchangeRate = exchangeRates[fromCurrency][toCurrency];
            const exchangedAmount = amount * exchangeRate;
            resolve(exchangedAmount.toFixed(2) + ' ' + toCurrency);
        } else {
            reject('Exchange rate not found!');
        }
    });
};

// Döviz dönüşümü gerçekleştirme
const performExchange = async (amount, fromCurrency, toCurrency) => {
    try {
        const exchangedAmount = await exchangeCurrency(amount, fromCurrency, toCurrency);
        console.log(amount + ' ' + fromCurrency + ' exchanged to ' + exchangedAmount);
    } catch (error) {
        console.error('Error:', error);
    }
};

// Örnek kullanım: 100 USD'yi EUR'ye dönüştürme
performExchange(5000, Currency.USD, Currency.TRY);