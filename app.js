// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07,  
    "GBP": 0.87   
};


const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD;
};


const fromDollarToYen = (dollar) => {
    let dollarToEuro = dollar / oneEuroIs.USD; 
    return dollarToEuro * oneEuroIs.JPY;     
};

const fromYenToPound = (yen) => {
    let yenToEuro = yen / oneEuroIs.JPY; 
    return yenToEuro * oneEuroIs.GBP;    
};

// Exportamos las funciones para usarlas en las pruebas
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound, sum };

