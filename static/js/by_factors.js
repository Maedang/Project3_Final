const merged_url = "../static/json/merged_ten_countries.json"; 
function Build_Plots(metric){
  d3.json(merged_url).then((merged) =>{
    over_fifty = merged['over fifty']
    console.log('Over fifty dataset:', over_fifty)
    console.log(metric)
    let AUS = over_fifty.filter(sample => sample.Code == 'AUS').map(sample => sample[metric])
    console.log(AUS)
    let brazil = over_fifty.filter(sample => sample.Code == 'BRA').map(sample => sample[metric])
    console.log(brazil)
    let england = over_fifty.filter(sample => sample.Code == 'ENG').map(sample => sample[metric])
    console.log(england)
    let ghana = over_fifty.filter(sample => sample.Code == 'GHA').map(sample => sample[metric])
    console.log(ghana)
    let japan = over_fifty.filter(sample => sample.Code == 'JPN').map(sample => sample[metric])
    console.log(japan)
    let mexico = over_fifty.filter(sample => sample.Code == 'MEX').map(sample => sample[metric])
    console.log(mexico)
    let morocco = over_fifty.filter(sample => sample.Code == 'MAR').map(sample => sample[metric])
    console.log(morocco)
    let netherlands = over_fifty.filter(sample => sample.Code == 'NLD').map(sample => sample.metric)
    console.log(netherlands)
    let south_korea = over_fifty.filter(sample => sample.Code == 'KOR').map(sample => sample.metric)
    console.log(south_korea)
    let united_states = over_fifty.filter(sample => sample.Code == 'USA').map(sample =>sample.metric)
    console.log(united_states)
    let years = over_fifty.filter(sample => sample.Code == 'AUS').map(country => country.Year);
    console.log("years", years)
    
    
    const data = {
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
      const config = {
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
    const myChart = new Chart(
      document.getElementById('myChart'),
        config
        );
        
        
})
}; 
function init(){
  let dropdownMenu = d3.select("#selDataset"); 
  let metric = ['Alcohol (50-69)', 'Drug Use (50-69)', 'High BMI (50-69)', 
  'High Blood Pressure (50-69)', 'Smoking (50-69)']
  metric.forEach(function(sample) {
    dropdownMenu.append("option")
                .text(sample)
                .property("value",sample);
  });
  Build_Plots(metric[0]);

}; 

function optionChanged(new_metric){
  Build_Plots(new_metric); 
};

init(); 