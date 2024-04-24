
const convertButton = document.querySelector(".convert-Button"); //1  mapenado meu button
const currencytSelect = document.querySelector(".currency-select");


function convertValues() {
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // real
    const currencyValueConverted = document.querySelector(".currency-value");// outras moedas 
    const inputCurrencyValue = document.querySelector(".input-currency").value;//3 pegando o valor do meu input



    const DolarToday = 5.2;//  4 criando a variavel pra dar valor ao doolar e assim com esse valor dividir pelo valor do input
    const Eurotoday = 6.2;

    if (currencytSelect.value == 'dolar') {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / DolarToday);

    }

    if (currencytSelect.value == 'Euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / Eurotoday) // se no select estiver como euro, vai entrar esse codigo 

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);

}

function currencySelect(){
const currencyName = document.getElementById("currencyName")
const CurrencyImg = document.querySelector(".ImgDolar")


if (currencytSelect.value == "dolar"){
    currencyName.innerHTML = " Dolar americano"
    CurrencyImg.scr= "."  // ./assets/estados-unidos (1) 1.png
}

if (currencytSelect.value == "Euro"){
    currencyName.innerHTML = "Euro"
    CurrencyImg.scr = "./assets/Euro.png"
}

}
currencytSelect.addEventListener("change", currencySelect)
convertButton.addEventListener("click", convertValues);
