$(function () {
        let Confirmed = document.getElementById('Confirmed');
        let Death = document.getElementById('Death');
        let Hospitalized = document.getElementById('hospital');
        let Recovered = document.getElementById('Recovered');
        
        fetch("https://covid19.th-stat.com/api/open/today")

        .then(response => response.json().then(data => {
            console.log(data);
            Confirmed.innerHTML = data.Confirmed;
            Hospitalized.innerHTML = data.Hospitalized;
            Death.innerHTML = data.Deaths;
            Recovered.innerHTML = data.Recovered;
        
        }))
        
    
        .catch(err => {
            console.log(err);
        });
   



    let Bangkok = document.getElementById('Bangkok');
    let Phuket = document.getElementById('Phuket'); 
    let Nonthaburi = document.getElementById('Nonthaburi');
    let Yala = document.getElementById('Yala');
    let SamutPrakan = document.getElementById('SamutPrakan');
    let Songkhla = document.getElementById('Songkhla');
    let Pattani = document.getElementById('Pattani');
    let Chonburi = document.getElementById('Chonburi');
    let ChiangMai = document.getElementById('ChiangMai');
   
    fetch("https://covid19.th-stat.com/api/open/cases/sum")
    .then(response => response.json().then(province => {
        console.log(province);
        Bangkok.innerHTML = province.Bangkok;
        Phuket.innerHTML = province.Phuket;
        Nonthaburi.innerHTML = province.Nonthaburi;
        Yala.innerHTML = Yala.Phuket;
        SamutPrakan.innerHTML = province.SamutPrakan;
        Songkhla.innerHTML = province.Songkhla;
        Pattani.innerHTML = province.Pattani;
        Chonburi.innerHTML = province.Chonburi;
        ChiangMai.innerHTML = province.ChiangMai; 
    
    }))
    

    .catch(err => {
        console.log(err);
    });


 })