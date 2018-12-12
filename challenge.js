const timer = document.getElementById('counter')
const plus = document.getElementById('+')
const minus = document.getElementById('-')
const heart = document.getElementById('<3')
const pause = document.getElementById('pause')
const formEl = document.getElementById('comment-form')
const comments = document.getElementById('list')
const likeList = document.getElementsByClassName('likes')[0]
let isPaused = false
let likesCount = 0
let totalLikes = {}

let timerInterval = window.setInterval(incrementTimer, 1000)
function pauseTimer() {
  if(isPaused) {
    isPaused = false
    heart.disabled = false
    plus.disabled = false
    minus.disabled = false
    pause.innerText="Pause"
  }else {
    isPaused = true
    heart.disabled = true
    plus.disabled = true
    minus.disabled = true
    pause.innerText="Resume"
  }
}

function incrementTimer() {
  if (!isPaused) {
    ++timer.innerText
  }
}

function decrementTimer() {
  if (!isPaused) {
    --timer.innerText
  }
}

function addComments(text){
  const comment = document.createElement('p')
  comment.innerText = text
  comments.append(comment)
}

function addLikes(){
  const second = timer.innerText
  const like = document.createElement('li')
  like.setAttribute("id", second)
  like.innerText = `${second} has been liked ${++likesCount} times`
  // (timer.innerText === second)? ++likesCount : likesCount = 0
  likeList.append(like)

}

plus.addEventListener('click', incrementTimer)
minus.addEventListener('click', decrementTimer)
pause.addEventListener('click', pauseTimer)
formEl.addEventListener('submit', function(event) {
  event.preventDefault()
  let textEl = document.getElementById('add-comment')
  addComments(textEl.value)
  textEl.value = ''
})
heart.addEventListener('click', addLikes)
