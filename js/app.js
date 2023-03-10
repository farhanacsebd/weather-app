// get this api 1st
const API_KEY = `2035d75895dc3fc37469c13508195825`;

const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const displayTemperature = data =>{
    // console.log(data.main.temp);
    /* const temperature = document.getElementById('temperature')
    temperature.innerText = data.main.temp; */
    setInnerTextById('temperature',data.main.temp)
    setInnerTextById('condition',data.weather[0].main)
    // console.log(data.weather[0].main);

  
    // weather icon settings 
    const url = ` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('image-icon');
    imgIcon.setAttribute('src', url);
}

const setInnerTextById  = (id,text) =>{
    const temperature = document.getElementById(id)
    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click',function(){
    const inputField = document.getElementById('inputField');
    const city = inputField.value;
    document.getElementById('city').innerText = city;
    loadTemperature(city)
})
loadTemperature('dhaka')
