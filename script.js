processApi("Kerala");
const searchbar = document.getElementById('searchbar');
const formsubmit = document.getElementById("button-addon1");
formsubmit.addEventListener("click", (e) => {
    processApi(searchbar.value);
    searchbar.value = "";
    e.preventDefault();
})

function processApi(cityname) {
    console.log(cityname);
    const url = 'http://api.weatherapi.com/v1/current.json?key=d163009cd62b49b895e151812232501&q=' + cityname;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a607ea20fbmshc2697e0e3eeae7dp1843bajsn56e27d1b284a',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            let date = "";
            console.log(data);
            humidity.innerHTML = data.current.humidity;
            pressure_mb.innerHTML = data.current.pressure_mb;
            locationname.innerHTML = data.location.name;
            date = data.location.localtime;
            wind_kph.innerHTML = data.current.wind_kph;
            vis_km.innerHTML = data.current.vis_km;
            let str = date[8] + date[9] + " " + month(date[5] + date[6]) + " " + date[0] + date[1] + date[2] + date[3];
            locationlocaltime.innerHTML = str;
            currentconditiontext.innerHTML = data.current.condition.text;
            weatherpic.src = data.current.condition.icon;
            currenttemp_c.innerHTML = data.current.temp_c;
            console.log(data.current.temp_c);
        });
    const url2 = 'https://api.weatherapi.com/v1/astronomy.json?key=d163009cd62b49b895e151812232501&q=' + cityname;
    fetch(url2, options)
        .then((response) => response.json())
        .then((data) => {
            astronomyastrosunset.innerHTML = data.astronomy.astro.sunset;
            astronomyastrosunrise.innerHTML = data.astronomy.astro.sunrise;
        });
}

function month(str) {
    if (str === "01") {
        return "January";
    }
    if (str === "02") {
        return "February";
    }
    if (str === "03") {
        return "March";
    }
    if (str === "04") {
        return "April";
    }
    if (str === "05") {
        return "May";
    }
    if (str === "06") {
        return "June";
    }
    if (str === "07") {
        return "July";
    }
    if (str = "08") {
        return "August";
    }
    if (str === "09") {
        return "September";
    }
    if (str === "10") {
        return "October";
    }
    if (str === "11") {
        return "November";
    }
    if (str === "12") {
        return "December";
    }
}

function scrollToDiv(event, targetId) {
    event.preventDefault();

    const targetDiv = document.getElementById(targetId);

    if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
}
