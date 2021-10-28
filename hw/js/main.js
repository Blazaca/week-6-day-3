let items = 0
const getData = () =>{
    let year = document.querySelector('#year')
    let round = document.querySelector('#round')
    fetch(`https://ergast.com/api/f1/${year.value}/${round.value}/driverStandings.json`)
  .then(response => response.json())
  .then(f1_data => {
    // let driver_num = 0
    // let driver_list = Object.values(f1_data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0])
    // console.log(driver_list)
    // Array.driver_list.foreach(driver =>{
    //     driver_num++
    //     console.log(driver_num)
    // })
      for(let i = 0; i < 7; i++){
        try{let name = document.getElementById(`name-${i}`);
        name.insertAdjacentHTML('beforeend', `${f1_data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName}`);
        let nation = document.getElementById(`nation-${i}`);
        nation.insertAdjacentHTML('beforeend', `${f1_data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].nationality}`);
        let sponsor = document.getElementById(`sponsor-${i}`);
        sponsor.insertAdjacentHTML('beforeend', `${f1_data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name}`);
        let points = document.getElementById(`points-${i}`);
        points.insertAdjacentHTML('beforeend', `${f1_data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points}`);
        items++
        }catch (error){
            console.error(error);
        }
      }
  })
};
const clearData = () =>{
    for(let i = 0; i < 7; i++){
        let name = document.getElementById(`name-${i}`);
        name.innerHTML = '';
        let nation = document.getElementById(`nation-${i}`);
        nation.innerHTML = '';
        let sponsor = document.getElementById(`sponsor-${i}`);
        sponsor.innerHTML = '';
        let points = document.getElementById(`points-${i}`);
        points.innerHTML = '';
      }
}
// let element = document.getElementById('name-1').textContent
// console.log(element)
// const showMore = () =>{
//     for(i = 0; i > 1000; i++){
//         if(items % 7 != 0){
//             alert('There are no more racers to display')
//         }
//     }
// }