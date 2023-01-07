const fetchCryptoData = async () => {[[[]]]
    const requestUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';
    const response = await fetch(requestUrl,{
        method:"GET"
    });
    const cryptoData = await response.json();

    cryptoData.forEach((name) => {

        // const coLor = name.price_change_24h > 0 ? "green" : "red"
        // if(document.getElementById('color').innerHTML > 0){
        //     document.getElementById('color').style.color="Green"
        // }else{
        //     document.getElementById('color').style.color="Red"
        // }

        data += "<tr>"

        data += `<td style="padding: 20px 5px 5px 5px; text-align: left"><img src="${name.image}" alt="coin" height="30px" style="margin-left: 30px"/> ${name.name} <td>`

        data += `<td style="text-align: left"> ${name.symbol.toUpperCase()} <td>`

        data += `<td style="text-align: right"> $${name.current_price} <td>`
        
        data += `<td style="text-align: right "> $${name.total_volume} <td>`;

        data += `<td id="clr" style="color:green; text-align: right "> 
        ${name.price_change_24h.toFixed(2)}% <td>`;

        data += `<td style="text-align: right"> Mkt Cap:${name.market_cap} <td>`;"<tr>";

    });

    document.getElementById("data").innerHTML = data
   
}

document.addEventListener('DOMContentLoaded',fetchCryptoData)