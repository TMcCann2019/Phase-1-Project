fetch ("http://localhost:3000/DogErrors")
    .then ((resp) => resp.json())
    .then ((data) => renderDogErrors(data))

function renderDogErrors(dogErrorsArr){
    dogErrorsArr.forEach((dogErrorsObj) => {
        const div = document.querySelector('.status')

        const h2 = document.createElement('h2')
        h2.textContent = 'Name : ' + dogErrorsObj.title

        const img = document.createElement('img')
        img.src = dogErrorsObj.image

        const code = document.createElement('h3')
        code.textContent = 'Code : ' + dogErrorsObj.code

        const btn = document.createElement('button')
        btn.textContent = "Likes"

        div.appendChild(img)
        div.appendChild(code)
        div.appendChild(h2)
        div.appendChild(btn)

        btn.addEventListener('click', handleLikeClick)
        let currLikes = dogErrorsObj.likes
        function handleLikeClick(){
            currLikes = currLikes + 1
            btn.textContent = `${currLikes} Likes`
            fetch(`http://localhost:3000/DogErrors/${dogErrorsObj.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({likes: currLikes}),
            })
            .then (console.log)
        }

        img.addEventListener('mouseover', (e) => handleMouseOver(e))
        function handleMouseOver(e){
            e.preventDefault()
            img.style.boxShadow = "10px 20px 30px blue"
        }
    })
}

const form = document.querySelector('form')

form.addEventListener('submit', (e) => handleNewDogStatus(e))

function handleNewDogStatus(e){
    e.preventDefault()
    console.log(e)
    const newDogErrorsObj = {
        "title" : e.target.title.value,
        "image" : e.target.image.value,
        "code" : e.target.code.value
    }
    renderDogErrors([newDogErrorsObj])

    fetch(`http://localhost:3000/DogErrors/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newDogErrorsObj)
    })
}