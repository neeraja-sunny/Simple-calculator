// function to display content

function displayContent(content){
   result.value += content 
}

// clear input

function calcClear(){
    result.value = ""
}

// result

function calcOutput(){
    result.value = eval(result.value) 
}

// backspace

function removeLastdigit(){
    result.value = result.value.slice(0,-1)
}
