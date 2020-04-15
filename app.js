const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNum(num) {
    return Math.round(num*100)/100 ;
}

function ctoFandK (){
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp = cTemp + 273.15;
    fahrenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
}

function ftoCandK () {
    const fTemp = parseFloat(fahrenheitInput.value);
    console.log(fTemp)
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp + 459.67) * (5/9);
    celciusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);
}

function ktoCandF () {
    const kTemp = parseFloat(kelvinInput.value);
    console.log(kTemp)
    const cTemp = kTemp - 273.15;
    const fTemp = (kTemp * (9/5)) - 459.67;
    celciusInput.value = roundNum(cTemp);
    fahrenheitInput.value = roundNum(fTemp);
}

function main() {
    celciusInput.addEventListener('input',() => ctoFandK());
    fahrenheitInput.addEventListener('input',() => ftoCandK());
    kelvinInput.addEventListener('input',() => ktoCandF());
    
}

main();