let month= [
    'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sept', 'Okt', 'Nov', 'Des'
]

const startDate = new Date('2022-02-04')
const endDate = new Date("2022-06-04")
getDistanceMonth(startDate,endDate)

let date= document.getElementById('date')
date.innerHTML = `  ${getDate(startDate)} - ${getDate(endDate)}`

let duration = document.getElementById('duration')
duration.innerHTML =`Durasi : ${getDistanceMonth(startDate,endDate)}`

console.log(startDate)
console.log(endDate)
console.log(getDistanceMonth(startDate,endDate))

function getDistanceMonth(start,end){
    const countStart = new Date(start)
    const countEnd = new Date(end)
            
    var months = (countStart.getFullYear() - countEnd.getFullYear())*12
    months -= countStart.getMonth();
    months += countEnd.getMonth();
    return months <= 0 ? 0 : months + ' bulan'
}

function getDate(time){
    let date= time.getDate()
    let monthIndex = time.getMonth()
    let year = time.getFullYear()

    return `${date} ${month[monthIndex]} ${year}`
}