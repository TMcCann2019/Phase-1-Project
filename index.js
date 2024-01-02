fetch ("http://localhost:3000/DogErrors")
    .then ((resp) => resp.json())
    .then ((data) => renderDogErrors(data))

function renderDogErrors(dogErrorsArr){
    dogErrorsArr.forEach((dogErrorsObj) => {
        const div = document.querySelector('.status')
        const h2 = document.createElement('h2')
        const img = document.createElement('img')
        const code = document.createElement('p')
        const btn = document.createElement('button')
        code.textContent = 'Code : ' + dogErrorsObj.code
        img.src = dogErrorsObj.image
        h2.textContent = 'Name : ' + dogErrorsObj.title
        btn.textContent = "Likes"

        div.appendChild(img)
        div.appendChild(code)
        div.appendChild(h2)
        div.appendChild(btn)

        // btn.addEventListener('click', handleLikeClick)
        // const currLikes = currLikes + 1
        // function handleLikeClick(){
            // btn.textContent = `${currLikes} Likes`
        // }
    })
}

// const form = document.querySelector('form')

// form.addEventListener('submit', (e) => handleNewDogStatus(e))

// function handleNewDogStatus(e){
    // e.preventDefault()
    // const newDogErrorsObj = {
    //     key : e.target.key.value
    //     key : e.target.key.value
    // }
    // renderDogErrors([newDogErrorsObj])
// }