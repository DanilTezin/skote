let panel = document.getElementById("panel");
function vis(){
    let drop = document.getElementById("drop");
    if(drop.style.visibility == "visible") drop.style.visibility = "hidden"
    else drop.style.visibility = "visible"  
}
let panel1 = document.getElementById("panel1");
function vis1(){
    let drop1 = document.getElementById("drop1");
    if(drop1.style.visibility == "visible") drop1.style.visibility = "hidden"
    else drop1.style.visibility = "visible"  
}

var lastMode = "";

let textTextArea = '';
let textAreaMode = '';
let lastButton;
let textArea = document.getElementById("txtarea")

function setModTextArea(id){
    document.getElementById(id).value = document.getElementById(id).value += "<strong>" + "</strong>"
}

function setValueTextArea(event,mode){
    if(mode == 'clear'){
        document.execCommand(lastMode)
        lastButton.style.backgroundColor = "white"
        lastButton.style.color = "black"
        lastButton = ''
        lastMode = ''
        return 0
    }else{
        document.execCommand(mode);
    document.execCommand(lastMode)
    lastMode = mode;
    console.log(lastMode)
    if(lastButton){
        lastButton.classList.remove('active')     
       lastButton.style.backgroundColor = "white"
    }
    event.target.style.backgroundColor = "#bfbfbf"
    event.target.style.color = "black"
    lastButton = event.target
    }
    
}