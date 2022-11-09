const input_feild = document.getElementById('input-feild');
const inputBtn = document.getElementById('input-btn')
const tempLogo = document.getElementById('temp-logo')
const cityName = document.getElementById('city-name')
const temp = document.getElementById('temp')
const position = document.getElementById('position')
// api key
const API_KEY = '05de733ce77a58492d3a02fdc5361868';
inputBtn.addEventListener('click', () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input_feild.value}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
})
const displayData = (data) => {
    cityName.innerText = data.name;
    temp.innerText = data.main.temp;
    position.innerText = data.weather[0].main;
    // temp logo set with url 
    const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    tempLogo.setAttribute('src', url)
    // empty input feild 
    input_feild.value = '';
}