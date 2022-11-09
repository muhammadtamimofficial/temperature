const input_feild = document.getElementById('input-feild');
const inputBtn = document.getElementById('input-btn')
const tempLogo = document.getElementById('temp-logo')
const cityName = document.getElementById('city-name')
const temp = document.getElementById('temp')
const position = document.getElementById('position')
// console.log(input_feild);
// api key
const API_KEY = '05de733ce77a58492d3a02fdc5361868';
// api link
// https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric
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
    console.log(data.main.temp);

}