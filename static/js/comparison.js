
const merged_url = "../static/json/merged_ten_countries.json"; 

function Alcohol_Plot(year){
  d3.json(merged_url).then((merged) =>{
    let countries = merged.countries; 
    let over_fifty=  merged['over fifty'].filter(each_sample => each_sample.Year == year).map(each_country => each_country['Alcohol (50-69)']);
    let under_fifty =  merged['under fifty'].filter(each_sample => each_sample.Year == year).map(each_country => each_country['Alcohol (15-49)']);
    let data = {
        labels: countries,
        datasets: [
            {
            label: 'Under fifty (15-49)',
            data: under_fifty,
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.5)', 
            borderWidth: 1
        }, 
        {
            label: 'Over 50 (50 - 69)',
            data: over_fifty, 
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)', 
            borderWidth: 1
        }, 
       
    ]
    }
      // config 
      let config = {
        type: 'bar',
        grouped:'true',
        data: data,
        options: {
          plugins: {
            title: {
              display: true,
              text: "Alcohol"
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
      if (Chart.getChart("Chart1")){
        Chart.getChart("Chart1").destroy();
      }
      let myChart = new Chart(
        document.getElementById('Chart1'),
        config
      ); 
}); 
}

function Drug_Plot(year){
  d3.json(merged_url).then((merged) =>{
    let countries = merged.countries; 
    let over_fifty=  merged['over fifty'].filter(each_sample => each_sample.Year == year).map(each_country => each_country['Drug Use (50-69)']);
    let under_fifty =  merged['under fifty'].filter(each_sample => each_sample.Year == year).map(each_country => each_country['Drug Use (15-49)']); 
    let data = {
        labels: countries,
        datasets: [
            {
            label: 'Under fifty (15-49)',
            data: under_fifty,
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.5)', 
            borderWidth: 1
        }, 
        {
            label: 'Over 50 (50 - 69)',
            data: over_fifty, 
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)', 
            borderWidth: 1
        }, 
       
    ]
    }
      // config 
      let config = {
        type: 'bar',
        grouped:'true',
        data: data,
        options: {
          plugins: {
            title: {
              display: true,
              text: "Drug Use"
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
      if (Chart.getChart("Chart2")){
        Chart.getChart("Chart2").destroy();
      }
      let myChart = new Chart(
        document.getElementById('Chart2'),
        config
      ); 
}); 
}

function BMI_Plot(year){
  d3.json(merged_url).then((merged) =>{
    let countries = merged.countries; 
    let over_fifty=  merged['over fifty'].filter(each_sample => each_sample.Year == year).map(each_country => each_country['High BMI (50-69)']);
    let under_fifty =  merged['under fifty'].filter(each_sample => each_sample.Year == year).map(each_country => each_country['High BMI (15-49)']); 
    let data = {
        labels: countries,
        datasets: [
            {
            label: 'Under fifty (15-49)',
            data: under_fifty,
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.5)', 
            borderWidth: 1
        }, 
        {
            label: 'Over 50 (50 - 69)',
            data: over_fifty, 
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)', 
            borderWidth: 1
        }, 
       
    ]
    }
      // config 
      let config = {
        type: 'bar',
        grouped:'true',
        data: data,
        options: {
          plugins: {
            title: {
              display: true,
              text: "High IBM"
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
      if (Chart.getChart("Chart3")){
        Chart.getChart("Chart3").destroy();
      }
      let myChart = new Chart(
        document.getElementById('Chart3'),
        config
      ); 
}); 
}
function BloodPressure_Plot(year){
  d3.json(merged_url).then((merged) =>{
    let countries = merged.countries; 
    let over_fifty=  merged['over fifty'].filter(each_sample => each_sample.Year == year).map(each_country => each_country['High Blood Pressure (50-69)']);
    let under_fifty =  merged['under fifty'].filter(each_sample => each_sample.Year == year).map(each_country => each_country['High Blood Pressure (15-49)']); 
    let data = {
        labels: countries,
        datasets: [
            {
            label: 'Under fifty (15-49)',
            data: under_fifty,
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.5)', 
            borderWidth: 1
        }, 
        {
            label: 'Over 50 (50 - 69)',
            data: over_fifty, 
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)', 
            borderWidth: 1
        }, 
       
    ]
    }
      // config 
      let config = {
        type: 'bar',
        grouped:'true',
        data: data,
        options: {
          plugins: {
            title: {
              display: true,
              text: "High Blood Pressure"
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
      if (Chart.getChart("Chart4")){
        Chart.getChart("Chart4").destroy();
      }
      let myChart = new Chart(
        document.getElementById('Chart4'),
        config
      ); 
}); 
}
function Smoking_Plot(year){
  d3.json(merged_url).then((merged) =>{
    let countries = merged.countries; 
    let over_fifty=  merged['over fifty'].filter(each_sample => each_sample.Year == year).map(each_country => each_country['Smoking (50-69)']);
    let under_fifty =  merged['under fifty'].filter(each_sample => each_sample.Year == year).map(each_country => each_country['Smoking (50-69)']); 
    let data = {
        labels: countries,
        datasets: [
            {
            label: 'Under fifty (15-49)',
            data: under_fifty,
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.5)', 
            borderWidth: 1
        }, 
        {
            label: 'Over 50 (50 - 69)',
            data: over_fifty, 
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)', 
            borderWidth: 1
        }, 
       
    ]
    }
      // config 
      let config = {
        type: 'bar',
        grouped:'true',
        data: data,
        options: {
          plugins: {
            title: {
              display: true,
              text: "Smoking"
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
      if (Chart.getChart("Chart5")){
        Chart.getChart("Chart5").destroy();
      }
      let myChart = new Chart(
        document.getElementById('Chart5'),
        config
      ); 
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

  Alcohol_Plot(years[0]);
  Drug_Plot(years[0]); 
  BMI_Plot(years[0]); 
  BloodPressure_Plot(years[0]); 
  Smoking_Plot(years[0]); 

  })
};

function optionChanged(year){
  Alcohol_Plot(year); 
  Drug_Plot(year); 
  BMI_Plot(year); 
  BloodPressure_Plot(year); 
  Smoking_Plot(year); 
};

init(); 
