fetch ("http://localhost:3000/DogErrors")
    .then ((resp) => resp.json())
    .then ((data) => renderDogErrors(data))

function renderDogErrors(dogErrorsArr){
    dogErrorsArr.forEach((dogErrorsObj) => {
        const div = document.querySelector('.status')
        const h1 = document.createElement('h1')
        const img = document.createElement('img')
        const title = document.createElement('p')
        title.textContent = dogErrorsObj.code
        img.src = dogErrorsObj.image
        h1.textContent = dogErrorsObj.title

        div.appendChild(h1)
        
    })
    // const btn = document.querySelector('.likes')
    // btn.addEventListener('click', handleLikeClick)

    // function handleLikeClick(){

    // }
}

// const form = document.querySelector('form')

// form.addEventListener('submit', handleNewDogStatus)