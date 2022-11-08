
const merged_url = "../static/json/merged_ten_countries.json"; 

function Build_Plots(year){
  d3.json(merged_url).then((merged) =>{
    console.log("Merged dataset", merged)
    let countries = merged.countries; 
    console.log("Ten countries are:", countries); 
    over_fifty = merged['over fifty']
    console.log('Over fifty dataset:', over_fifty)
    let year_2019= over_fifty.filter(each_sample => each_sample.Year == year);
    console.log("Year 2019", year_2019)
    let over_fifty_2019 = year_2019.map(each_country => each_country['Alcohol (50-69)']); 
    console.log("Over_fifty array",over_fifty_2019)
    
    under_fifty = merged['under fifty']
    console.log('Under fifty dataset:', under_fifty)
    let under_year_2019= under_fifty.filter(each_sample => each_sample.Year ==2019);
    console.log("Year 2019", under_year_2019)
    let under_fifty_2019 = under_year_2019.map(each_country => each_country['Alcohol (15-49)']); 
    console.log("Under_fifty array",under_fifty_2019)
    const data = {
        labels: countries,
        datasets: [
            {
            label: 'Under fifty (15-49)',
            data: under_fifty_2019,
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.5)', 
            borderWidth: 1
        }, 
        {
            label: 'Over 50 (50 - 69)',
            data: over_fifty_2019, 
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)', 
            borderWidth: 1
        }, 
       
    ]
    }
        
          
    
    
      // config 
      const config = {
        type: 'bar',
        grouped:'true',
        data,
        options: {
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
    
}); 

}


function init(){
  let dropdownMenu = d3.select("#selDataset"); 
  d3.json(merged_url).then((merged) => {
    let countries = merged.countries; 
    let over_fifty = merged['over fifty']
    let years = over_fifty.filter(country =>country.Code == 'AUS').map(country => country.Year)
    years.forEach(function(sample) {
    dropdownMenu.append("option")
                .text(sample)
                .property("value",sample);
  });

  Build_Plots(years[0]);

  })
};

function optionChanged(new_option){
  Build_Plots(new_option); 
};

init(); 
