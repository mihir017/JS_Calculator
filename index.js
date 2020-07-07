console.log('This is the calculator program');

let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('Button text is ',buttonText);
        if(buttonText == 'x'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = '';
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            if(screen.value == ''){
                screen.value == '';
            }
            else{
                screen.value = eval(screenValue); 
            }
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}