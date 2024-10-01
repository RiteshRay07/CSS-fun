const typingText = document.querySelector('.typing-text p');
const inputField = document.querySelector('.inputfield');
const time = document.querySelector('.time span b');
const mistake = document.querySelector('.mistake span');
const wpm = document.querySelector('.wpm span');
const cpm = document.querySelector('.cpm span');
const btn = document.querySelector('button');


//set values
let timer;
let maxTime=60;
let timeLeft = maxTime;
let charIndex=0;
let mistakes=0;
let isTyping=false;


function loadParagraph(){
    const paragraph = ["Avoid Daydreaming about the years to come.","You are the most important person in your whole life.","Always be true to who you are and ignore what other people have to say about you.","Always be true to who you are and ignore what other people have to say about you.","Only demonstrate your strength when its really required.","Most important thing in this whole universe is, Subscribe to my channel"];
    const randomIndex = Math.floor(Math.random()*paragraph.length);
    typingText.innerHTML='';
    for(const char of paragraph[randomIndex]){
        typingText.innerHTML+= `<span>${char}</span>`;
    }
    console.log( typingText.innerHTML)  
    console.log(typingText.querySelectorAll('span')[0])
    typingText.querySelectorAll('span')[0].classList.add('active');
    document.addEventListener('keydown',()=>{
        inputField.focus()
    })
    typingText.addEventListener('click',()=>{
        inputField.focus()
    })
}


//handle user input
function initTyping(){
    const char = typingText.querySelectorAll('span');
    const typedChar = inputField.value.charAt(charIndex);
    console.log(char.length)
    if(charIndex<char.length && timeLeft>0){
        if(!isTyping){
            timer = setInterval(initTime,1000);
            isTyping=true;
        }
        if(char[charIndex].innerText === typedChar){
            char[charIndex].classList.add('correct');
            console.log('correct');
        }
        else{
            mistakes++;
            char[charIndex].classList.add('incorrect');
            console.log(mistakes)
        }
        charIndex++;
        char[charIndex].classList.add('active');
        mistake.innerText=mistakes;
        cpm.innerText = charIndex-mistakes;
    }
    else{
        clearInterval(timer);
    }

}

function initTime(){
    if(timeLeft>0){
        timeLeft--;
        time.innerText = timeLeft;
        const wpmVal = Math.round(((charIndex-mistakes)/5)/(maxTime-timeLeft)*60);
        wpm.innerText = wpmVal;
    }
    else{
        clearInterval(timer);
    }
}
function reset(){
    loadParagraph();
    clearInterval(timer);
    time.innerText=  maxTime;
    inputField.value='';
    charIndex=0;
    mistakes=0;
    isTyping=false;
    mistake.innerText = 0;
    wpm.innerText = 0;
    cpm.innerText=0;
}
inputField.addEventListener('input',initTyping);
btn.addEventListener('click',reset);
loadParagraph();