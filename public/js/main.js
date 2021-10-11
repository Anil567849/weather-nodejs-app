
const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city-name');

const temp = document.getElementById('temp');
const temp_real = document.getElementById('tempReal');
const temp_status = document.getElementById('temp-status');

const dataHide = document.querySelector('.middle-layer');


const getInfo = async(event) => { 
    event.preventDefault();
    console.log('hii');
    let city = cityName.value;
    if(city === ""){
        city_name.innerText = "Please type something";
        dataHide.classList.add('data-hide');
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=94a7856e6ca89d09463bf5b8e65d0023`;
            const response = await fetch(url);
            
            //convert to json to object
            const data = await response.json();
            
            // convert to array of objects
            const arrData = [data];
            
            temp_real.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
            dataHide.classList.remove('data-hide');
            

            city_name.innerText = city;
        }catch{
            city_name.innerText = "Please type correctly";   
            dataHide.classList.add('data-hide');
        }
    }
    
    
}

submitBtn.addEventListener('click', getInfo);