const merged_url = "../static/json/merged_ten_countries.json"; 
function Build_Plots(factor){
  d3.json(merged_url).then((merged) =>{
    over_fifty = merged['over fifty']
    let AUS = over_fifty.filter(sample => sample.Code == 'AUS').map(sample => sample[factor])
    let brazil = over_fifty.filter(sample => sample.Code == 'BRA').map(sample => sample[factor])
    let england = over_fifty.filter(sample => sample.Code == 'ENG').map(sample => sample[factor])
    let ghana = over_fifty.filter(sample => sample.Code == 'GHA').map(sample => sample[factor])
    let japan = over_fifty.filter(sample => sample.Code == 'JPN').map(sample => sample[factor])
    let mexico = over_fifty.filter(sample => sample.Code == 'MEX').map(sample => sample[factor])
    let morocco = over_fifty.filter(sample => sample.Code == 'MAR').map(sample => sample[factor])
    let netherlands = over_fifty.filter(sample => sample.Code == 'NLD').map(sample => sample.factor)
    let south_korea = over_fifty.filter(sample => sample.Code == 'KOR').map(sample => sample.factor)
    let united_states = over_fifty.filter(sample => sample.Code == 'USA').map(sample =>sample.factor)
    let years = over_fifty.filter(sample => sample.Code == 'AUS').map(country => country.Year);
    
    let data = {
      labels: years,
      datasets: [
        {
          label: "Australia",
          data: AUS,
          borderColor: 'rgba(153, 102, 255, 1)',
          backgroundColor: 'rgba(153, 102, 255, 0.7)', 
          borderWidth: 1
        }, 
        {
          label: "Brazil",
          data: brazil, 
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.7)', 
          borderWidth: 1
          }, 

          {
            label: 'England',
            data: england, 
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.7)', 
            borderWidth: 1
          },

          {
            label: "Ghana",
            data: ghana, 
            borderColor: 'rgba(64, 224, 208, 1)',
            backgroundColor: 'rgba(64, 244, 208, 0.7)', 
            borderWidth: 1
          }, 
          {
            label: "Japan",
            data: japan,
            borderColor: 'rgba(154, 205, 50, 1)',
            backgroundColor: 'rgba(154, 205, 50, 0.7)', 
            borderWidth: 1
          }, 
          {
            label: "Mexico",
            data: mexico,
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.7)', 
            borderWidth: 1
          }, 
          {
            label: "Morocco",
            data: morocco,
            borderColor: 'rgba(255, 127, 80, 1)',
            backgroundColor: 'rgba(255, 127, 80, 0.7)', 
            borderWidth: 1
          }, 
          {
            label: "Netherlands",
            data: netherlands,
            borderColor: 'rgba(255, 26, 104, 1)',
            backgroundColor: 'rgba(255, 26, 104, 0.7)', 
            borderWidth: 1
          }, 
          {
            label: "South Korea",
            data: south_korea,
            borderColor: 'rgba(205, 92, 92, 1)',
            backgroundColor: 'rgba(205, 92, 92, 0.7)', 
            borderWidth: 1
          }, 
          {
            label: "United States",
            data: united_states,
            borderColor: 'rgba(169, 169, 169, 1)',
            backgroundColor: 'rgba(169, 169, 169, 0.7)', 
            borderWidth: 1
          }
        ]}
       
  // config 
     let config = {
        type: 'line',
        data,
        ptions: {
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
  let myChart = new Chart(document.getElementById('myChart') , config);
        
        
})
}; 
function init(){
  let dropdownMenu = d3.select("#selDataset"); 
  let factors = ['Alcohol (50-69)', 'Drug Use (50-69)', 'High BMI (50-69)', 
  'High Blood Pressure (50-69)', 'Smoking (50-69)']
  factors.forEach(function(factor) {
    dropdownMenu.append("option")
                .text(factor)
                .property("value",factor);
  });
  Build_Plots(factors[0]);

}; 

function optionChanged(factor){
  Build_Plots(factor); 
};

init(); 