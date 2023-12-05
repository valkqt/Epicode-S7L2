class Global {
    constructor(){
        this.form = document.querySelector('form')
        this.inputField = document.getElementById('username')
        this.resultBox = document.querySelector('[disabled]')
        this.cancel = document.querySelector('[type=button]')
        this.counter = document.getElementById('counter')
    }
}


const global = new Global()


function countUp() {
    window.sessionStorage.setItem('timer', (parseInt(global.counter.textContent) + 1) )
    global.counter.textContent++

}

function timerStart() {
    if (window.sessionStorage.getItem('timer')) {
        global.counter.textContent = window.sessionStorage.getItem('timer')
    } 
}

function activateButtons() {
    global.form.addEventListener('submit', (event) => {

        event.preventDefault()

        if (global.inputField.value === "") {
            return
        }
    
        window.localStorage.setItem('username', global.inputField.value)
        global.resultBox.value = global.inputField.value
        global.inputField.value = ""
    
    })
    
    global.cancel.addEventListener('click', () => {
        if (window.localStorage.getItem('username')) {
            window.localStorage.removeItem('username')
            global.resultBox.value = ""
        }
    
    })
    
}

activateButtons()
timerStart()
window.setInterval(countUp, 1000)