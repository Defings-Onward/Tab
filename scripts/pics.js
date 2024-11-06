const pictures = [
    {
        original: '<div class="imagess"><video autoplay muted class="vid"><source src="image/istockphoto-869584204-640_adpp_is.mp4" type="video/mp4"></video></div>',
        blur: '<img src="image/pimage-blur.png" class="imagesb">',
        quote: '"Gain access and experience <br>to live CBT questions  before <br>your actual Exams"'
    },
    {
        original: '<img src="image/pimage2.png" class="images">',
        blur: '<img src="image/pimage2-blur.png" class="imagesb">',
        quote: '"Solve Complex Questions"'
    },
    {
        original: '<img src="image/pimage1.png" class="images">',
        blur: '<img src="image/pimage-blur.png" class="imagesb">',
        quote: '"Discover Your Errors"'
    },
    {
        original: '<img src="image/pimage3.png" class="images">',
        blur: '<img src="image/pimage3-blur.png" class="imagesb">',
        quote: '"Interact with Friends for Solutions"'
    },
    {
        original: '<img src="image/pimage4.png" class="images">',
        blur: '<img src="image/pimage4-blur.png" class="imagesb">',
        quote: '"Implement those Solutions"'
    }
]
let i = 0 

function pics() {
    if (i < 5) {
        i++
    } else {
        i = 0
    }
    let imgs;
    let quotes;
    pictures.forEach(() => {
        imgs = `<div class="contain">${pictures[i].blur}${pictures[i].original}</div>`
        quotes = `${pictures[i].quote}`
    })
    document.querySelector('.contain').innerHTML = imgs
    document.querySelector('.p').innerHTML = quotes
    document.querySelector('.contain').style.opacity = "1"
    document.querySelector('.contain').style.transition = "2.35s"
    document.querySelector('.p').style.opacity = "1"
    document.querySelector('.p').style.transition = "2.35s" 
}
function styles() {
    if(i < 5 || i == 0) {
        document.querySelector('.contain').style.opacity = "0.2"
        document.querySelector('.contain').style.transition = "2.35s"
        document.querySelector('.p').style.opacity = "0"
        document.querySelector('.p').style.transition = "2.35s" 
    }
    
}
setInterval(styles, 12999)
setInterval(pics, 13000)

const element = document.querySelector('.iframes')
console.log(element.getAttribute("src"))
if (element.getAttribute("src") == "signup-templates/1st-stage.html"){
    document.querySelector('.btn-previous').innerHTML = 'Cancel'
} else {
    document.querySelector('.btn-previous').innerHTML = 'Back'
}
document.addEventListener('click', function(event) {
    if (event.target.className == 'btn-next') {
        
    if (element.getAttribute("src") == "signup-templates/1st-stage.html") {
        document.querySelector('.btn-previous').innerHTML = 'Back'
    element.setAttribute("src", "signup-templates/2nd-stage.html")
    } else if (element.getAttribute("src") == "signup-templates/2nd-stage.html") {
        element.setAttribute("src", "signup-templates/3rd-stage.html")
        document.querySelector('.btn-previous').innerHTML = 'Back'
    }
    
    const info = document.querySelector('.p-i')
    info.innerHTML = 'Required Info' 
    } else if (event.target.className == 'btn-previous') {
        if (element.getAttribute("src") == "signup-templates/3rd-stage.html") {
        
            element.setAttribute("src", "signup-templates/2nd-stage.html")
            } else if (element.getAttribute("src") == "signup-templates/2nd-stage.html") {
                element.setAttribute("src", "signup-templates/1st-stage.html")
            }
    }
    else if(event.target.id == 'signins') {
        
        const signin = document.getElementById('signins')
        const signup = document.getElementById('signups')
        if (signin.innerHTML == 'Sign in') {
            element.setAttribute("src", "signup-templates/login.html")
        element.style.height = '200px'
        signup.innerHTML = 'Sign in/'
        signin.innerHTML = 'Sign up'
        document.querySelector('.main-idea').style.maxHeight = '300px'
        } else {
            element.setAttribute("src", "signup-templates/1st-stage.html")
            element.style.height = '300px'
            signup.innerHTML = 'Sign up/'
            signin.innerHTML = 'Sign in'
        }
        
    }
    
})
