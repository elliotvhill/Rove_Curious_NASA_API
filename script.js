const apiKey = 'c0k0WgD2uCtdB03NGxld02oBokOdV9SUgKLpRhow'
let urlApi = 'https://images-api.nasa.gov/search?q=curiosity-mars-mastcam&media_type=image'
const mainContent = document.querySelector('.main-content')
const button = document.querySelector('#search')
const marsRoverPic = document.querySelector('#roverPic')
const blurb = document.querySelector('#blurb')
const description = document.querySelector('#description')
const roverPicTitle = document.querySelector('#pic-title')


function navMenu() {
    let menu = document.getElementById('#links')
    if (menu.style.display === 'block') {
        menu.style.display === 'none'
    } else {
        menu.style.display === 'block'
    }
}


document.addEventListener("DOMContentLoaded", (event) => {
    marsRoverPic.style.visibility = 'hidden';
})

button.addEventListener('click', async () => {
    newSearch = () => {
        marsRoverPic.style.visibility = 'visible';
    }
    newSearch()
        let randomNum = Math.round(Math.random() * 100)
        let response = await axios.get(`${urlApi}`)
        let mastCamArray = response.data.collection.items[randomNum]
        let mastCamTitle = mastCamArray.data[0].title
        console.log(mastCamTitle)
        roverPicTitle.innerHTML = `<h3>${mastCamTitle}</h3>`
        let mastCamPic = mastCamArray.links[0].href
        marsRoverPic.innerHTML = `<img src="${mastCamPic}" />`
        let mastCamBlurb = mastCamArray.data[0].description_508
        blurb.innerHTML = `<p>${mastCamBlurb}</p>`
        // let longerDescription = mastCamArray.data[0].description
        // description.innerHTML = `<p>${longerDescription}</p>`










})











