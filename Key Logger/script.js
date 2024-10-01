let startBtn = document.getElementById('startbtn');
    let stopBtn = document.getElementById('endbtn');
    let strokeLogDiv = document.getElementById('strokeLog');
    let keyLogDiv = document.getElementById('keyLog');
    startBtn.addEventListener('click',function(){
        document.addEventListener('keydown',handleDown)
        document.addEventListener('keyup',handleUp)
    })
    stopBtn.addEventListener('click',function(){
        document.removeEventListener('keydown',handleDown)
        document.removeEventListener('keyup',handleUp)
        strokeLogDiv.textContent = 'Your Logged Key will Appear Here'
        keyLogDiv.textContent = ''
    })
    function handleDown(e){
        strokeLogDiv.textContent = `You Pressed key ${e.key} down`
        keyLogDiv.textContent = 'Key is down'
    }
    function handleUp(e){
        strokeLogDiv.textContent = `You Pressed key ${e.key} up`
        keyLogDiv.textContent = 'Key is Up' 
    }