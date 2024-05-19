const chart = new Chart("chartInformation", {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Nhiệt độ",
          borderColor: "red",
          backgroundColor: "red",
          lineTension: 0,
          data: [],
          fill: false,
        },
        {
          label: "Độ ẩm",
          borderColor: "blue",
          backgroundColor: "blue",
          lineTension: 0,
          data: [],
          fill: false,
        },
        {
          label: "Ánh sáng",
          borderColor: "gold",
          backgroundColor: "gold",
          lineTension: 0,
          data: [],
          fill: false,
        },
      ],
    },
    options: {
      onClick: function (event, elements) {
        if (elements.length > 0) {
          const datasetIndex = elements[0].datasetIndex;
          const meta = chart.getDatasetMeta(datasetIndex);
  
          meta.hidden = !meta.hidden;
  
          chart.update();
        }
      },
  
      scales: {
        x: {
          title: {
            display: true,
            text: "Time",
          },
        },
      },
  
      onHover(event) {
        event.target.style.cursor = "default";
      },
  
      // hover: {
      //     onHover: (event) => {
      //     event.target.style.cursor  = 'pointer';
      // }
      // },
    },
  });

  function updateTemperatureColor(temp) {
    const informationTempBox = document.getElementById('temperatureValue');
    const informationTempColor = document.getElementById('temperatureColor');

    if (temp > 80) {
      informationTempColor.style.background = 'rgb(159, 0, 0)';
      
    } else if (temp > 60) {
      informationTempColor.style.background = 'red';
    } else if (temp > 40) {
      informationTempColor.style.background = 'rgb(230, 49, 49)';
    } else if (temp > 20) {
      informationTempColor.style.background = 'rgb(237, 90, 90)';
    } else {
      informationTempColor.style.background = 'rgb(236, 136, 136)';
    }
  
    // Update the content of the temperature box
    informationTempBox.innerText = temp + "°C";
  }

// Humid Color
  function updateHumidityColor(humid) {
    const informationHumidBox = document.getElementById('humidityValue');
    const informationHumidColor = document.getElementById('humidityColor');
  
    if (humid > 80) {
      informationHumidColor.style.background = 'rgb(0, 112, 149)';
    } else if (humid > 60) {
      informationHumidColor.style.background = 'rgb(0, 141, 188)';
    } else if (humid > 40) {
      informationHumidColor.style.background = 'rgb(0, 170, 226)';
    } else if (humid > 20) {
      informationHumidColor.style.background = 'rgb(96, 194, 227)';
    } else {
      informationHumidColor.style.background = 'lightblue';
    }
  
    // Update the content of the humidity box
    informationHumidBox.innerText = humid + "%";
  }

  
  function updateLightColor(light) {
    const informationLightBox = document.getElementById('lightValue');
    const informationLightColor = document.getElementById('lightColor');
  
    if (light > 800) {
      informationLightColor.style.background = 'rgb(226, 226, 0)';
    } else if (light > 600) {
      informationLightColor.style.background = 'rgb(225, 225, 43)';
    } else if (light > 400) {
      informationLightColor.style.background = 'rgb(225, 225, 101)';
    } else if (light > 200) {
      informationLightColor.style.background = 'rgb(225, 225, 151)';
    } else {
      informationLightColor.style.background = 'rgb(226, 226, 183)';
    }
  
    // Update the content of the light box
    informationLightBox.innerText = light + " LUX";
  }
function updateChart() {
    const temp = Math.floor(Math.random() * 101);
    const humid = Math.floor(Math.random() * 101);
    const light = Math.floor(Math.random() * 101);

    if (chart.data.labels.length > 10) {
        chart.data.datasets.forEach(dataset => {
            dataset.data.shift();
        });
        chart.data.labels.shift();
    }

    chart.data.datasets[0].data.push(temp);
    chart.data.datasets[1].data.push(humid);
    chart.data.datasets[2].data.push(light);
    chart.data.labels.push(new Date().toLocaleTimeString());

    document.getElementById("temperatureValue").innerText = temp + "°C";
    document.getElementById("humidityValue").innerText = humid + "%";
    document.getElementById("lightValue").innerText = light + " LUX";
    
    updateTemperatureColor(temp);
    updateHumidityColor(humid);
    updateLightColor(light);
    chart.update();

}
setInterval(updateChart, 1000);

function on_light(){
  var onButton = document.getElementById("lightOn");
  var offButton = document.getElementById("lightOff");

  onButton.style.backgroundColor = "green";
  offButton.style.backgroundColor = "transparent";
  document.getElementById('light-img').src='img/lighton.png';

} 
function off_light(){
  var onButton = document.getElementById("lightOn");
  var offButton = document.getElementById("lightOff");

  offButton.style.backgroundColor = "red";
  onButton.style.backgroundColor = "transparent";
  document.getElementById('light-img').src='img/lightoff.png';
}
function on_fan(){
  var onButton = document.getElementById("fanOn");
  var offButton = document.getElementById("fanOff");

  onButton.style.backgroundColor = "green";
  offButton.style.backgroundColor = "transparent";
  document.getElementById('fan-img').src='img/fanon2.gif';

} 
function off_fan(){
  var onButton = document.getElementById("fanOn");
  var offButton = document.getElementById("fanOff");

  offButton.style.backgroundColor = "red";
  onButton.style.backgroundColor = "transparent";
  document.getElementById('fan-img').src='img/fanoff2.gif';
}  