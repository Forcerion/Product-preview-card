const productLink = document.querySelector(".product-link")
const main = document.querySelector('main')

productLink.addEventListener("click", function(e) {
    e.preventDefault()
    
    const audio = document.createElement('audio')
    audio.src = "/rbx-death-sound.mp3"
    main.appendChild(audio)
    audio.play()
})