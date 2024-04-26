
const convertButton = document.querySelector(".convert-Button"); 
const currencytSelect = document.querySelector(".currency-select");
const SelectConvert = document.getElementById("select-a-convert");


     function convertValues() {
        const currencyValueConverted = document.querySelector(".currency-value");
        const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
        const inputCurrencyValue = document.querySelector(".input-currency").value;


            const DolarToday = 5.2;
            const Eurotoday =5.7;
            const LibraToday = 6.4;
            const BitcoinToday = 328;



    if (currencytSelect.value == "dolar") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / DolarToday);
        }


        if (currencytSelect.value == "Euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / Eurotoday) // se no select estiver como euro, vai entrar esse codigo 
            }
    

            if (currencytSelect.value == "Libra"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style:"currency",
            currency:"GBP"
            }).format(inputCurrencyValue/LibraToday)    
            }


            if (currencytSelect.value == "Real") {
                currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency:"BRL"
                }).format(inputCurrencyValue)
                }
            

                if(currencytSelect.value == "Bitcoin"){
                    currencyValueConverted.innerHTML = inputCurrencyValue/BitcoinToday
                 }


            if ( SelectConvert.value == "Euro"){
                currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
                style: "currency",
                currency: "EUR"
                }).format(inputCurrencyValue)
                }


                if (SelectConvert.value == 'dolar') {
                    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD"
                    }).format(inputCurrencyValue)
                    }


                    if (SelectConvert.value == "Libra"){
                        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
                        style:"currency",
                        currency:"GBP"
                        }).format(inputCurrencyValue)   
                        }


                        if (SelectConvert.value == "Real") {
                            currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency:"BRL"
                            }).format(inputCurrencyValue)
                            }  

}




function currencyChange(){
const currencyName = document.getElementById("currencyName")
const ImgDolar = document.querySelector("#Img-dolar")

if ( currencytSelect.value == "Bitcoin"){
currencyName.innerHTML = "Bitcoin"
ImgDolar.src= "./assets/bitcoin 1.png"
}


if(currencytSelect.value == "Real"){
currencyName.innerHTML = "Real"
ImgDolar.src = "./assets/real 2.png"
}


if (currencytSelect.value == "Libra"){
    currencyName.innerHTML = "Libra"
    ImgDolar.src = "./assets/libra 1.png"
}


if (currencytSelect.value == "dolar"){
    currencyName.innerHTML = " Dólar Americano"
    ImgDolar.src = "./assets/estados-unidos (1) 1.png" 
}


if ( currencytSelect.value == "Euro"){
    currencyName.innerHTML = "Euro"
    ImgDolar.src = "./assets/Euro.png"
}

convertValues()

}

function CurrencyAchange(){

    const NameCurrency = document.getElementById("Name-Currency");
    const Imgconvert = document.querySelector("#Imgconvert");
   
    


        if ( SelectConvert.value == "Bitcoin"){
        NameCurrency.innerHTML = "Bitcoin"
        Imgconvert.src= "./assets/bitcoin 1.png"
        
        }

        if(SelectConvert.value == "Real"){
            NameCurrency.innerHTML = "Real"
            Imgconvert.src = "./assets/real 2.png"
            
            }

            if (SelectConvert.value == "Libra"){
                NameCurrency.innerHTML = "Libra"
                Imgconvert.src = "./assets/libra 1.png"
                
            }
            
            if (SelectConvert.value == "dolar"){
                NameCurrency.innerHTML = " Dólar Americano"
                Imgconvert.src = "./assets/estados-unidos (1) 1.png" 
            }
            if (SelectConvert.value == "Euro"){
                NameCurrency.innerHTML = "Euro"
                Imgconvert.src = "./assets/Euro.png"
    
            }
        convertValues()
        
}


currencytSelect.addEventListener("change", currencyChange)
convertButton.addEventListener("click", convertValues);
SelectConvert.addEventListener("change", CurrencyAchange)