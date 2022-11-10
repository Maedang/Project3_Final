const merged_url = "../static/json/merged_ten_countries.json"; 
function Build_Plots(year){
  d3.json(merged_url).then((merged) =>{
    let countries = merged.countries; 
    let over_fifty = merged['over fifty']
    let result= over_fifty.filter(each_sample => each_sample.Year == year);
    let alcohol = result.map(each_sample => each_sample['Alcohol (50-69)'])
    let drug_use = result.map(each_sample => each_sample['Drug Use (50-69)'])
    let BMI = result.map(each_sample => each_sample['High BMI (50-69)'])
    let blood_pressure = result.map(each_sample => each_sample['High Blood Pressure (50-69)'])
    let smoking = result.map(each_sample => each_sample['Smoking (50-69)'])
    let data = {
      labels: countries,
      datasets: [
        {
          label: 'Alcohol',
          data: alcohol,
          orderColor: 'rgba(255, 26, 104, 1)',
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
            label: 'High BMI',
            data: BMI,
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.7)',
            borderWidth: 1
        }, 
        {
            label: 'Blood Pressure',
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
  }; 

  let config = {
    type: 'bar',
    data: data,
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Death Risk Factors of 10 Countries'
        },
      },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        },
      y: {
        stacked: true
            
        }
      }
    }
  };
    
// render init block
  if (Chart.getChart("myChart")){
    Chart.getChart("myChart").destroy();
  }
  let myChart = new Chart(document.getElementById('myChart'), config);
  }); 
}

function init(){
  let dropdownMenu = d3.select("#selDataset"); 
  d3.json(merged_url).then((merged) => {
    let over_fifty = merged['over fifty']
    let years = over_fifty.filter(country =>country.Code == 'AUS').map(country => country.Year)
    years.forEach(function(year) {
    dropdownMenu.append("option")
                .text(year)
                .property("value",year);
  });

  Build_Plots(years[0]);

  })
};

function optionChanged(year){
  Build_Plots(year);
  
};

init(); 
