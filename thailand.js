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
    })
$(function(){
    let provinced = document.getElementById('provinces')
     
    fetch("https://covid19.th-stat.com/api/open/cases/sum")
    .then(response => response.json().then(data =>{
        console.log(data);
        data.forEach(data => {
        provinced.innerHTML = `<tr>
        <th scope="provinced">${data.province}</th>
        <td>${data.province}</td>
        <td>${data.province.value}</td>

      </tr>`; });
        
        }))
        
})

