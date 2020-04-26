$(function () {

    var url = "https://pomber.github.io/covid19/timeseries.json";
    var no = 1;
    var sum = 0;
    $.getJSON(url, function (result) {

        
        for (var country in result) {

            var row = `<tr>
                        <th scope="row">${no}</th>
                        <td>
                        <a href="country.html?country=${country}">${country}</a>
                        </td>
                    </tr>`;

            $("#data").append(row);
            no++;
        
          var total = `<h1 scope="total"> ${no} </h1>`;  
        }
        
        $("#cap").append(total);
    });

        var url1 = "https://api.covid19api.com/summary";
        $.getJSON( url1, function(result){
            
            for (var global in result ){
              
            var text1 =`<h1 scope="text">${global.TotalConfirmed}</h1>`;
            var text2 =`<h1 scope="text">${global.TotalRecovered}</h1>`;
            var text3 =`<h1 scope="text">${global.TotalDeaths}</h1>`;
                console.log(result);
                
              
 
            }
            
            $("#confirm").append(text1);
            $("#recovered").append(text2);
            $("#death").append(text3);
        });

        let Confirmed = document.getElementById('Confirmed');
        let Death = document.getElementById('Death');
        let Recovered = document.getElementById('Recovered');
        
        fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "adfc52c44amsh606254c7c8f0cacp1fbe0ejsn0f99b718f00f"
            }
        })
        .then(response => response.json().then(data => {
            console.log(data);
            Confirmed.innerHTML = data.total_cases;
            Death.innerHTML = data.total_deaths;
            Recovered.innerHTML = data.total_recovered;
        
        }))
        .catch(err => {
            console.log(err);
        });




        
})