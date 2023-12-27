fetch ("URL")
    .then ((resp) => resp.json())
    .then ((data) => renderDogErrors(data))

function renderDogErrors(dogErrorsArr){
    dogErrorsArr.forEach((dogErrorsObj) => {
        
    })
    Btn.addEventListener('click', handleLikeClick)
}

form.addEventListener('submit', handleNewDogStatus)