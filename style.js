function predict(){
    let result = Math.floor(Math.random() * 100);
    let validate = document.getElementById("validnumber").value
    let win = ""
    let loss = ""

    if (result==validate){
        win = ` YOU WIN. Your predicted number is ${validate} and the potential number is ${result} `
    }
    
    else{
        loss = ` YOU LOSS. Your predicted number is ${validate} and the potential number is ${result}` 
    }

    document.getElementById("win").innerHTML = win;
    document.getElementById("loss").innerHTML = loss;
}
