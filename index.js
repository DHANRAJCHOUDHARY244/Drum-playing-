var numberOfrumButton=document.querySelectorAll('.drum').length;
for (let index = 0; index < numberOfrumButton; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click",function() {
    makeSound(this.innerHTML);
    animationButton(this.innerHTML);
        
    })
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    animationButton(event.key)
})
function makeSound(a){
    switch (a) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'k':
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'l':
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    
        default:
    }
}
function animationButton(currentKey){
    var activeButton=document.querySelector('.'+currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    },100);

}
