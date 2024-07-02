function handleModal() {
    const buttons = document.querySelectorAll(".openPost__button")
    const modalContainer = document.querySelector("#modalContainerPosts")

    buttons
    .forEach(button =>{
        button.addEventListener('click', (event) => {
            
            const post = event.target.closest(".post__container")
            const userPost = post.querySelector(".userPost__container").innerHTML
            modalContainer.querySelector(".userPost__container").innerHTML=userPost
            const userPostTitles = post.querySelector(".post__titles").innerHTML
            modalContainer.querySelector(".post__titles").innerHTML=userPostTitles
            const userPostContent = post.querySelector(".post__content").innerHTML
            modalContainer.querySelector(".post__content").innerHTML=userPostContent
    
    
            modalContainer.showModal()
    
            closeModal()
        })
    
    })
}

function closeModal() {
    const button = document.querySelector("#closeModal")
    const modalContainer = document.querySelector("#modalContainerPosts")
    
    button.addEventListener('click', () => {
        modalContainer.close()
    })
}
handleModal()
