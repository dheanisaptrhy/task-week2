let projects=[]
let total=""
function addProject(event){
    event.preventDefault()

    //inisialisasi
    let name = document.getElementById('input-name').value
    let startDate = document.getElementById('input-start-date').value
    let endDate = document.getElementById('input-end-date').value
    let description = document.getElementById('input-description').value
    let image = document.getElementById('input-project-image')
    let technologies = document.getElementsByName('check')
    image = URL.createObjectURL(image.files[0])

    //change value checkbox
    document.getElementById('input-nodejs').value = `<span><i class="fab fa-node-js fa-2x"></i></span>`
    document.getElementById('input-nextjs').value = `<span><i class="fab fa-react fa-2x"></i></span>`
    document.getElementById('input-reactjs').value = `<span><i class="fab fa-js-square fa-2x"></i></span>`
    document.getElementById('input-typescript').value =`<span><i class="fab fa-js-square fa-2x"></i></span>`

    //nambahin semua value dari checkbox
    for(let i=0; i<technologies.length;i++){
        if(technologies[i].checked){
            total += technologies[i].value + ""
        }
    }
    //
    // getDistanceTime(startDate, endDate)
    const countStart = new Date(startDate)
    const countEnd = new Date(endDate)

    //masukin ke object
    let project = {
        name, countStart, countEnd, description, image, total
    }
    //masukin object project ke dalem array projects
    projects.push(project)
    //panggil method renderproject buat nampilin projek baru


    console.log(startDate)
    renderProject()
    total=""
    // console.table(projects)
    // console.log(total)
    // console.log(getDistanceMonth(startDate,endDate))
    // console.log(getDistanceDay(startDate,endDate))
}

function getDistanceMonth(start,end){
    const countStart = new Date(start)
    const countEnd = new Date(end)
    
    var months = (countStart.getFullYear() - countEnd.getFullYear())*12
    months -= countStart.getMonth();
    months += countEnd.getMonth();
    return months <= 0 ? 0 : months + ' bulan'
}

function getDistanceDay(start,end){
    const countStart = new Date(start)
    const countEnd = new Date(end)

    const miliseconds = 1000
    const secondsInMinute = 60
    const minuteInHours =  60
    const secondsInHour = secondsInMinute * minuteInHours
    const hoursInDay = 23
    const MonthInDay = 30

    const distance = countEnd - countStart
    const dayDistance = distance / (miliseconds*secondsInHour*hoursInDay)
    // const monthDistance = dayDistance / MonthInDay

    if (dayDistance>=1){
        return ` & ${Math.floor(dayDistance)} hari`
    } else{
        return ""
    }
}

function renderProject(){
    let projectContainer = document.getElementById('project-content')
    projectContainer.innerHTML = firstProjectContent()

    for(let i=0; i<projects.length;i++){
        projectContainer.innerHTML += `
            <div class="project">
                <a href="detail-project.html">
                    <div class="pict">
                        <image class="pict-class" src="${projects[i].image}"/>
                    </div>
                    <div class="header-project">
                        <h3>${projects[i].name}</h3>
                        <p>Durasi : ${getDistanceMonth(projects[i].countStart, projects[i].countEnd)}</p>
                    </div>
                    <div class="content">
                        <p>${projects[i].description}</p>
                    </div>
                    <div class="icon-tech">
                        ${projects[i].total}
                    </div>
        
                    <div class="button-group">
                        <button class="btn-edit">Edit</button>
                        <button class="btn-delete">Delete</button>
                    </div>
                </a>
            </div>`
    }
}

function firstProjectContent(){
    return `
    <div class="project">
                <a href="detail-project.html">
                    <div class="pict">
                        <image class="pict-class" src="assets/20211228_173015.jpg"/>
                    </div>
                    <div class="header-project">
                        <h3>Dumbways Mobile App - 2021</h3>
                        <p>Durasi : 3 bulan</p>
                    </div>
                    <div class="content">
                        <p>App that used for dumbways student, it was deployed and can downloaded on playstore. Happy download</p>
                    </div>
                    <div class="icon-tech">
                        <span><i class="fab fa-node-js fa-2x"></i></span>
                        <span><i class="fab fa-react fa-2x"></i></span>
                        <span><i class="fab fa-js-square fa-2x"></i></span>
                        <span><i class="fab fa-js-square fa-2x"></i></span>
                    </div>
        
                    <div class="button-group">
                        <button class="btn-edit">Edit</button>
                        <button class="btn-delete">Delete</button>
                    </div>
                </a>
            </div>

            <div class="project">
                <a href="detail-project.html">
                    <div class="pict">
                        <image class="pict-class" src="assets/20211228_173015.jpg"/>
                    </div>
                    <div class="header-project">
                        <h3>Dumbways Mobile App - 2021</h3>
                        <p>Durasi : 3 bulan</p>
                    </div>
                    <div class="content">
                        <p>App that used for dumbways student, it was deployed and can downloaded on playstore. Happy download</p>
                    </div>
                    <div class="icon-tech">
                        <span><i class="fab fa-node-js fa-2x"></i></span>
                        <span><i class="fab fa-react fa-2x"></i></span>
                        <span><i class="fab fa-js-square fa-2x"></i></span>
                        <span><i class="fab fa-js-square fa-2x"></i></span>
                    </div>
        
                    <div class="button-group">
                        <button class="btn-edit">Edit</button>
                        <button class="btn-delete">Delete</button>
                    </div>
                </a>
            </div>

            <div class="project">
                <a href="detail-project.html">
                    <div class="pict">
                        <image class="pict-class" src="assets/20211228_173015.jpg"/>
                    </div>
                    <div class="header-project">
                        <h3>Dumbways Mobile App - 2021</h3>
                        <p>Durasi : 3 bulan</p>
                    </div>
                    <div class="content">
                        <p>App that used for dumbways student, it was deployed and can downloaded on playstore. Happy download</p>
                    </div>
                    <div class="icon-tech">
                        <span><i class="fab fa-node-js fa-2x"></i></span>
                        <span><i class="fab fa-react fa-2x"></i></span>
                        <span><i class="fab fa-js-square fa-2x"></i></span>
                        <span><i class="fab fa-js-square fa-2x"></i></span>
                    </div>
        
                    <div class="button-group">
                        <button class="btn-edit">Edit</button>
                        <button class="btn-delete">Delete</button>
                    </div>
                </a>
            </div>

            <div class="project">
                <a href="detail-project.html">
                    <div class="pict">
                        <image class="pict-class" src="assets/20211228_173015.jpg"/>
                    </div>
                    <div class="header-project">
                        <h3>Dumbways Mobile App - 2021</h3>
                        <p>Durasi : 3 bulan</p>
                    </div>
                    <div class="content">
                        <p>App that used for dumbways student, it was deployed and can downloaded on playstore. Happy download</p>
                    </div>
                    <div class="icon-tech">
                        <span><i class="fab fa-node-js fa-2x"></i></span>
                        <span><i class="fab fa-react fa-2x"></i></span>
                        <span><i class="fab fa-js-square fa-2x"></i></span>
                        <span><i class="fab fa-js-square fa-2x"></i></span>
                    </div>
        
                    <div class="button-group">
                        <button class="btn-edit">Edit</button>
                        <button class="btn-delete">Delete</button>
                    </div>
                </a>
            </div>

            <div class="project">
                <a href="detail-project.html">
                    <div class="pict">
                        <image class="pict-class" src="assets/20211228_173015.jpg"/>
                    </div>
                    <div class="header-project">
                        <h3>Dumbways Mobile App - 2021</h3>
                        <p>Durasi : 3 bulan</p>
                    </div>
                    <div class="content">
                        <p>App that used for dumbways student, it was deployed and can downloaded on playstore. Happy download</p>
                    </div>
                    <div class="icon-tech">
                        <span><i class="fab fa-node-js fa-2x"></i></span>
                        <span><i class="fab fa-react fa-2x"></i></span>
                        <span><i class="fab fa-js-square fa-2x"></i></span>
                        <span><i class="fab fa-js-square fa-2x"></i></span>
                    </div>
        
                    <div class="button-group">
                        <button class="btn-edit">Edit</button>
                        <button class="btn-delete">Delete</button>
                    </div>
                </a>
            </div>`
}
