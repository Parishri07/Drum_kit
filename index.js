//Detecting button press

var numberOfClicks= document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfClicks;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
    })
}

// we donot pass parenthesis with the function handleClick.. if we pass with parenthesis, it will be called as soon as the event listener is added but we want it to be called when the button is clicked.. thus dont add parenthesis with function name


// you can replace handleClick in above statement to anonymous function(which does not have name) (not just the function name but the full anonymous function is replaced)


//Detecting key press

addEventListener("keypress",function(event){
    makeSound(event.key);
})


function makeSound(key){
    switch(key){
        case 'w':
            var tom1 =  new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
    
        case 'a':
            var tom2 =  new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;
    
        case 's':
            var tom3 =  new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;
    
        case 'd':
            var tom4 =  new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;
    
        case 'j':
            var snare =  new Audio('sounds/snare.mp3');
            snare.play();
        break;
    
        case 'k':
            var crash =  new Audio('sounds/crash.mp3');
            crash.play();
        break;
    
        case 'l':
            var kickBass =  new Audio('sounds/kick-bass.mp3');
            kickBass.play();
        break;
    
        default:
            console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+ currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}

