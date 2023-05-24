const apiKey = 'c0k0WgD2uCtdB03NGxld02oBokOdV9SUgKLpRhow'
const mainContent = document.querySelector('.main-content')
const button = document.querySelector('#search')
const marsRoverPic = document.querySelector('#roverPic')
const description = document.querySelector('#description')
const roverPicTitle = document.querySelector('#pic-title')

// const i = function getRandomPic() {
//     return Math.round(Math.random() * 10)
// }

document.addEventListener("DOMContentLoaded", (event) => {
    marsRoverPic.style.visibility = 'hidden';
})

button.addEventListener('click', async () => {
    newSearch = () => {
        marsRoverPic.style.visibility = 'visible';
    }
    newSearch()
    // Testing out generating a random image from Curiosity's Mast camera, incl description & other info:
        let randomNum = Math.round(Math.random() * 100)
        let response = await axios.get(`https://images-api.nasa.gov/search?q=curiosity-mars-mastcam&media_type=image`)
        let mastCamArray = response.data.collection.items[randomNum]
        let mastCamTitle = mastCamArray.data[0].title
        console.log(mastCamTitle)
        roverPicTitle.innerHTML = `<h3>${mastCamTitle}</h3>`
        let mastCamPic = mastCamArray.links[0].href
        marsRoverPic.innerHTML = `<img src="${mastCamPic}" />`
        let mastCamBlurb = mastCamArray.data[0].description_508
        description.innerHTML = `<p>${mastCamBlurb}</p>`


    // Original idea of searching for Curiosity rover pics by Mars sol:
        //     let searchInput = document.querySelector('input').value;
        //     let response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${apiKey}&sol=${searchInput}`)
        //     console.log(response)
        //     let marsPicArray = response.data.photos
        //     console.log(marsPicArray)
        //     if (marsPicArray.length > 0) {
        //         let marsPic = response.data.photos[0].img_src
        //         marsRoverPic.innerHTML = `<img src="${marsPic}" />`
        //     }
        //     else {
        //         description.innerHTML = `No photo found. Please try a different Sol.`
        //     }
})

