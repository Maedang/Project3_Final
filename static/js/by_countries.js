var merged_url = "../static/json/merged_ten_countries.json"; 

function Build_Plots(country){
d3.json(merged_url).then((merged) =>{
  let over_fifty = merged['over fifty']
  let result= over_fifty.filter(each_sample => each_sample.Country == country);
  let smoking = result.map(country => country['Smoking (50-69)']);
  let alcohol = result.map(country => country['Alcohol (50-69)']);
  let blood_pressure = result.map(country => country['High Blood Pressure (50-69)']);
  let drug_use = result.map(country => country['Drug Use (50-69)']);
  let BMI = result.map(country => country['High BMI (50-69)']);
  console.log("BMI", BMI)
  let years = result.map(country => country.Year);

  let myChart = null; 
  let data = {
      labels: years,
      datasets: [
          {
          label: "Alcohol",
          data: alcohol,
          borderColor: 'rgba(255, 26, 104, 1)',
          backgroundColor: 'rgba(255, 26, 104, 0.7)', 
          borderWidth: 1
      }, 
      {
          label: "Drug Use",
          data: drug_use, 
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.7)', 
          borderWidth: 1
      }, 
      {
          label: 'Body Max Index',
          data: BMI, 
          borderColor: 'rgba(255, 206, 86, 1)',
          backgroundColor: 'rgba(255, 206, 86, 0.7)', 
          borderWidth: 1
      },
      {
          label: "Blood Pressure",
          data: blood_pressure, 
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.7)', 
          borderWidth: 1
      }, 
      {
          label: "Smoking",
          data: smoking,
          borderColor: 'rgba(153, 102, 255, 1)',
          backgroundColor: 'rgba(153, 102, 255, 0.7)', 
          borderWidth: 1
      }
  ]
  }
  let config = {
    type: 'line',
    data: data,
    options: {
      plugins: {
        title: {
          display: true,
          text: `Death factors of ${country}.`
        },
      },
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  // render init block
  if (Chart.getChart("myChart")){
      Chart.getChart("myChart").destroy();
    }
  myChart = new Chart(document.getElementById('myChart'),config);
}); 
}; 

function init(){
  let dropdownMenu = d3.select("#selDataset"); 
  d3.json(merged_url).then((data) => {
    let country_names = data.countries; 
    country_names.forEach(function(country) {
    dropdownMenu.append("option")
                .text(country)
                .property("value", country);
  });
  Build_Plots(data.countries[0]);

  })
};

function optionChanged(country){
  Build_Plots(country); 
};

init(); 

