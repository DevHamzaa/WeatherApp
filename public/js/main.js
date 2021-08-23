const env = require("env");
env.config();
self.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submitButton");
  const cityName = document.getElementById("cityName");
  const CityNameDisplay = document.getElementById("city_name");
  const temp_real_val = document.getElementById("temp_real_val");
  const TempratureStatus = document.getElementById("temp_status");
  const dataHide = document.querySelector(".middle_layer");
  const getInfo = async (event) => {
    event.preventDefault();
    let cityValue = cityName.value;
    if (cityValue === "") {
      CityNameDisplay.innerText = "Write city name before you search";
      dataHide.classList.add("data_hide");
    } else {
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q="${cityValue}git "&units=metric&appid=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
        console.log[arrData];
        CityNameDisplay.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
        temp_real_val.innerText = arrData[0].main.temp;
        const tempMood = arrData[0].weather[0].main;
        if (tempMood == "Clear") {
          TempratureStatus.innerHTML =
            "<i class='fas ico fa-sun' style= ' color: #eccc68;'></i>";
        } else if (tempMood == "Clouds") {
          TempratureStatus.innerHTML =
            "<i class='fas ico fa-cloud' style= ' color: #f1f2f6;'></i>";
        } else if (tempMood == "Rain") {
          TempratureStatus.innerHTML =
            "<i class='fas ico fa-cloud-rain' style= 'color: #a4b0be ;'></i>";
        } else {
          TempratureStatus.innerHTML =
            "<i class='fas ico fa-cloud' style= 'color: #f1f2f6;'></i>";
        }
        dataHide.classList.remove("data_hide");
      } catch {
        CityNameDisplay.innerText =
          "Invalid City Name Please enter a valid city name";
        dataHide.classList.add("data_hide");
      }
    }
  };
  submitBtn.addEventListener("click", getInfo);
});
