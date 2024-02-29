const input = document.querySelector('input');
const btn = document.querySelector('button');

const image = document.querySelector('#photo');
const temp = document.querySelector('#deg');
const city = document.querySelector('#city');

const humidity = document.querySelector('#hum');
const speed = document.querySelector('#spd');
const hImg = document.querySelector('#hum-img');
const sImg = document.querySelector('#spd-img');

const key = "5001d5cdf706e69d0d084658d4d4931c";
btn.addEventListener('click' , (e)=>{
    const ip = input.value;
    input.value = "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ip}&appid=${key}`
   update(url);
})
async function update(url)
{
    let obj = await fetch(url);
    obj = await obj.json();
    if(obj.cod == 404)
    {
        city.innerHTML = `${obj.message}`;
        temp.textContent = `---`;
        humidity.textContent = `---`
        speed.textContent = `---`
        hImg.setAttribute('src' ,"")
        sImg.setAttribute('src' ,"")
        console.log('---');

    }
    else
    {
        city.innerHTML = obj.name
        let t = parseInt(obj.main.temp) - 273;
        temp.textContent = `${t.toFixed(1)}${'\u00B0'} C`;
        humidity.textContent = `${obj.main.humidity}%`
        speed.textContent = `${obj.wind.speed} Km/h`
        hImg.setAttribute('src' ,"./images/humidity.png")
        sImg.setAttribute('src' ,"./images/wind.png")
        console.log(obj.weather[0].main);

        if(obj.weather[0].main == "Clouds")
        {
            image.setAttribute('src' , "./images/clouds.png")
        }
        else if(obj.weather[0].main == "Haze")
        {
            image.setAttribute('src' , "./images/mist.png")
            console.log(true);
        }
        
        else if(obj.weather[0].main == "Clear")
        {
            image.setAttribute('src' , "./images/clear.png")
            console.log(true);
        }
        else if(obj.weather[0].main == "Rain")
        {
            image.setAttribute('src' , "./images/rain.png")
            console.log(true);
        }
        else if(obj.weather[0].main == "Snow")
        {
            image.setAttribute('src' , "./images/snow.png")
            console.log(true);
        }
        
        console.log(temp);
    }
    console.log(obj);
}

