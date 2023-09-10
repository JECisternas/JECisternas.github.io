function navigatorName(){
  let agent = navigator.userAgent
  let navigators = ["Chrome", "Firefox", "Safari","Edge"]
  for (let i in navigators){
    if(agent.indexOf(navigators[i]) !=-1)
      return navigators[i]
  }
}

let body = document.getElementById('id-body')
let nameContact = document.getElementById('id-name')
let emailContact = document.getElementById('id-email')
let subjectContact = document.getElementById('id-subject')
let messageContact = document.getElementById('id-message')
let submit = document.getElementById('id-submit')
let statusEmail = document.getElementById('id-status-email')
let imgMenu = document.getElementById('id-img-menu')
let imgSkills = document.getElementById('id-img-skills')
let imgProject = document.getElementById('id-img-prj')
// let imgBlog = document.getElementById('id-img-blog') // FOR A FUTURE IMPLEMENTATION

const firstName = document.getElementById('id-div-name') 
const lastName = document.getElementById('id-div-last-name') 
const web_dev = document.getElementById('id-web-dev')
const nav = document.getElementById('id-nav')
const nav_sticky = document.getElementById('id-nav-sticky')
const menu = document.getElementById('id-menu')
const menu_sticky = document.getElementById('id-menu-sticky')
const svg_name = document.getElementById('id-svg-name')
const svg_last_name = document.getElementById('id-svg-last-name')
const linesContainer = document.getElementById('id-div-container')
const logo_html = document.getElementById('id-html')
const logo_css = document.getElementById('id-css')
// const aside_blog = document.getElementById('id-aside-blog')
// const main_blog = document.getElementById('id-main-blog')
// const footer_blog = document.getElementById('id-footer-blog')

let H = linesContainer.clientHeight
let W = linesContainer.clientWidth
let N = Math.floor(H / 40)
let positionTop =  Math.floor(N/4) * 50 + 50
let positionLeft =  Math.floor(W/2) - 300
let line 
  for (let i=0; i < N; i++){
    line = document.createElement("div")
    line.classList = 'lines' 
    line.id = 'id-lines' 
    linesContainer.appendChild(line)
}
let lines = document.getElementById('id-lines')

let arrImg_prj = Array.from(document.getElementsByClassName('img-prj'));
let arrItems = Array.from(document.getElementsByClassName('menu-item'))
let arrTitle = Array.from(document.getElementsByClassName('title'))
let arrLines = Array.from(document.getElementsByClassName('lines'))
let arrSkills = Array.from(document.getElementsByClassName('skills-type'))
let arrDocs = Array.from(document.getElementsByClassName('docs'))
let Hhello
let HfirstName
let HlastName
let HwebDev
// let clsList



submit.addEventListener('click', (event) =>{
  
  // let name = nameContact.value
  let email = emailContact.value
  // let subtect = subjectContact.value
  // let message = messageContact.value
  
  if(email.length >5 && email.includes('@') && email.includes('.')){
    statusEmail.style.visibility = 'hidden'
  }else{
    event.preventDefault()
    statusEmail.style.visibility = 'visible' 
  }
})

let hello = document.getElementById('id-hello')

let helloMoving = [
  { transform: 'translateY(0) scale(1, 1) rotate(0)', easing: 'ease-in' },
  { transform: 'translateY(0) scale(1.1, .9) rotate(0)' },
  { transform: 'translateY(-10%) scale(.9, 1.1) rotate(0)', offset: .4 },
  { transform: 'translateY(-10%) scale(1, 1) rotate(10deg)', offset: .5 },
  { transform: 'translateY(-10%) scale(1, 1) rotate(-10deg)', offset: .7 },
  { transform: 'translateY(-10%) scale(1,1) rotate(0deg)', offset: .8, easing: 'ease-in' },
  { transform: 'translateY(0) scale(1, 1) rotate(0)' }
]

function movingHello(){
  hello.animate(helloMoving, { id:'helloIm', duration: 1000, iterations: 1 });
}
movingTimer = setInterval(movingHello, 5000);
movingHello()


lines.addEventListener('animationend', () => {
  hello.style.top = positionTop +'px'
  hello.style.left = positionLeft +'px'
  hello.style.display = 'block'
  
  Hhello = (parseInt(hello.style.top.substr(0,3)) - 80)
  
  firstName.style.top =  (positionTop -100) +'px'
  firstName.style.left = (positionLeft + 230) + 'px'
  firstName.style.display = 'block'
  HfirstName = (parseInt(firstName.style.top.substr(0,3)) + 15)
  
  lastName.style.top =  (positionTop - 106) +'px'
  lastName.style.left = (positionLeft + 400) + 'px'
  lastName.style.display = 'block'
  HlastName = (parseInt(lastName.style.top.substr(0,3)) + 15)
  
  web_dev.style.top =  (positionTop + 100) +'px'
  web_dev.style.left = (positionLeft) + 'px'
  web_dev.style.display = 'block'
  HwebDev = (parseInt(web_dev.style.top.substr(0,3)) + 20)
  
})

web_dev.addEventListener('animationend', () => {
  nav.style.top = H - 50 + 'px'
  nav.style.opacity = '1'
})

for(let i = 0; i < arrDocs.length; i++){
  arrDocs[i].addEventListener('click', e => {
    const elementClicked = e.target
    const attrib = elementClicked.getAttribute('src')
    window.open(attrib);  
  })
}
let Wd, Hd
const setVisible = () => {
  Wd = document.documentElement.clientWidth
  Hd = document.documentElement.clientHeight
  positionLeft =  Math.floor(W/2) - 300
  if(Wd < 767){

    hello.style.left='10px'
    hello.style.top = Hhello + 'px'

    firstName.style.left = '0'
    firstName.style.top = HfirstName + 'px'
    hello.style.fontSize = '20px'

    lastName.style.left = '130px'
    lastName.style.top = HlastName + 'px'
   
    svg_name.style.width = '150px'
    svg_last_name.style.width = '150px'
    
    web_dev.style.left = '10px'
    web_dev.style.fontSize = '20px'
    web_dev.style.top = HwebDev + 'px'
    web_dev.style.width = '400px'

    nav.style.top = (Hd - 50) + 'px'
    nav.style.height = '30px'
    menu.style.height = '30px'
    nav_sticky.style.height = '30px'
    menu_sticky.style.height = '30px'

    for(let i = 0; i < arrItems.length; i++){
      arrItems[i].style.fontSize = '8px'
      arrItems[i].style.height = '30px'
    }
    for(let i = 0; i < arrTitle.length; i++){
      arrTitle[i].style.top = '30px'
      arrTitle[i].style.fontSize = '1rem'
      arrTitle[i].style.height = '40px'
    }
    

  // }else if (W < 991){  
  //   about.style.fontSize = '1.2rem'
  //   about.style.padding = '50px'
  //   paragraph.style.lineHeight = '1.5rem'

    

  }else if (Wd < 1920){
    positionLeft =  Math.floor(W/2) - 300
    hello.style.top = positionTop +'px'
    hello.style.left = positionLeft +'px'
    hello.style.fontSize = '50px'
    
    firstName.style.top =  (positionTop -100) +'px'
    firstName.style.left = (positionLeft + 230) + 'px'
    svg_name.style.width = '280px'
    
    lastName.style.top =  (positionTop - 106) +'px'
    lastName.style.left = (positionLeft + 400) + 'px'
    svg_last_name.style.width = '280px'
    
    web_dev.style.top =  (positionTop + 100) +'px'
    web_dev.style.left = (positionLeft) + 'px'
    web_dev.style.fontSize = '50px'

    nav.style.top = (Hd - 50)+ 'px'
    nav.style.height = '50px'
    menu.style.height = '50px'
    nav_sticky.style.height = '50px'
    menu_sticky.style.height = '50px'

    for(let i = 0; i < arrItems.length; i++){
      arrItems[i].style.fontSize = '20px'
      arrItems[i].style.height = '50px'
    }
    for(let i = 0; i < arrTitle.length; i++){
      arrTitle[i].style.top = '50px'
      arrTitle[i].style.fontSize = '3rem'
      arrTitle[i].style.height = '80px'}
  }

  
}

addEventListener('resize',setVisible )

addEventListener('scroll', () => {
  if(scrollY === 0) {
    for(let i = 0; i < arrLines.length; i++){
      arrLines[i].style.opacity = '.3'
    }  
    movingTimer = setInterval(movingHello, 5000);
    movingHello()
  }else{
    for(let i = 0; i < arrLines.length; i++){
       arrLines[i].style.opacity = '0'
     }
     clearInterval(movingTimer)
     
    if(navigatorName() === "Chrome"){

        if (imgMenu.y <= 0){ 
          nav_sticky.classList.add('animate-nav')
        }else{
          nav_sticky.classList.remove('animate-nav')
        }
        if (imgSkills.y - 50 <= 0){ 
          for(let i = 0; i < arrSkills.length; i++){
            arrSkills[i].classList.add('animate-skills')
          }
        }
        // if (imgBlog.y - 50 <= 0){ 
        //   aside_blog.classList.add('animate-aside-blog')
        //   main_blog.classList.add('animate-main-blog')
        //   footer_blog.classList.add('animate-footer-blog')
        // }
    }else{     
        if (scrollY >= imgMenu.y){ 
          nav_sticky.classList.add('animate-nav')
        }else{
          nav_sticky.classList.remove('animate-nav')
        }
        if (scrollY>= imgSkills.y - 50){ 
          for(let i = 0; i < arrSkills.length; i++){
            arrSkills[i].classList.add('animate-skills')
          }
        }
        // if (scrollY>= imgBlog.y - 50){ 
        //   aside_blog.classList.add('animate-aside-blog')
        //   main_blog.classList.add('animate-main-blog')
        //   footer_blog.classList.add('animate-footer-blog')
        // }
    }
  }
  let imgPrjY = imgProject.y - 500
  for(let i = 0; i < arrImg_prj.length; i++) {


    if(navigatorName() === "Chrome"){
      if(arrImg_prj[i].y < 450 ){
        arrImg_prj[i].classList.add('animate-prj')
      }
    }else{
      if(W < 767){
        if(scrollY > imgPrjY){
          arrImg_prj[i].classList.add('animate-prj')
          imgPrjY += 395 +(i*i)
        }
      }else{  
          if(scrollY > imgPrjY){
            arrImg_prj[i].classList.add('animate-prj')
            imgPrjY += 550
          }
      }    
    }      
  }
})
