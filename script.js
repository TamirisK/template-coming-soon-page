const day = document.querySelector('.day .numb')
const hour = document.querySelector('.hour .numb')
const min = document.querySelector('.min .numb')
const sec = document.querySelector('.sec .numb')

let currentDay = new Date().getDate()
let currentMonth = new Date().getMonth() + 1
let currentYear = new Date().getFullYear()

// console.log('Day: ' + currentDay + ', Month: ' + currentMonth + ', Year: ' + currentYear + '.');


let timer = setInterval(() => {
  let currentDate = new Date().getTime()
  let launchDate = new Date('Sep 1, 2023 00:00:00').getTime()
  let duration = launchDate - currentDate

  let days = Math.floor(duration / (1000 * 60 * 60 * 24))
  let hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((duration % (1000 * 60)) / 1000)

  day.innerHTML = days
  hour.innerHTML = hours
  min.innerHTML = minutes
  sec.innerHTML = seconds

  if(days < 10){
    day.innerHTML = '0' + days
  }
  if(hours < 10){
    hour.innerHTML = '0' + hours
  }
  if(minutes < 10){
    min.innerHTML = '0' + minutes
  }
  if(seconds < 10){
    sec.innerHTML = '0' + seconds
  }

  if(duration < 0){
    clearInterval(timer)
  }

}, 1000);