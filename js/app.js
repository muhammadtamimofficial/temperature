const input_feild = document.getElementById('input-feild');
const inputBtn = document.getElementById('input-btn')
const tempLogo = document.getElementById('temp-logo')
const cityName = document.getElementById('city-name')
const temp = document.getElementById('temp')
const position = document.getElementById('position')
// api key
const API_KEY = '05de733ce77a58492d3a02fdc5361868';

// load data on api and convart json 
const loadData = (inputData) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputData}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
}
inputBtn.addEventListener('click', () => {
    loadData(input_feild.value);
    // empty input feild 
    input_feild.value = '';
})
// display api data 
const displayData = (data) => {
    cityName.innerText = data.name;
    temp.innerText = data.main.temp;
    position.innerText = data.weather[0].main;
    // temp logo set with url 
    const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    tempLogo.setAttribute('src', url)
}
// if click on 'Enter' button then search
input_feild.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        inputBtn.click();
    }
})

// visit site add show Dhaka weather information 
loadData('Dhaka');