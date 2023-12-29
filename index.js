fetch ("URL")
    .then ((resp) => resp.json())
    .then ((data) => renderDogErrors(data))

function renderDogErrors(dogErrorsArr){
    dogErrorsArr.forEach((dogErrorsObj) => {
        const h1 = document.querySelector(".dogStatus")
        const img = document.createElement('img')
        const title = document.createElement('p')
        title.textContent = dogErrorsObj.status_code
        img.src = dogErrorsObj.image
        h1.textContent = dogErrorsObj.title
    })
    const btn = document.querySelector('.likes')
    btn.addEventListener('click', handleLikeClick)

    function handleLikeClick(){

    }
}

const form = document.querySelector('form')

form.addEventListener('submit', handleNewDogStatus)