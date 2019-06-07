
var total=document.querySelectorAll("button").length;

for(var i=0; i<total; i++)
{
document.querySelectorAll("button")[i].addEventListener("click",
    function () {
        var button_hit = this.innerHTML;
        sound_play(button_hit);
        animation(button_hit);
    });
}

document.addEventListener("keypress",function(event){
    var key_pressed=event.key;
    sound_play(key_pressed);
    animation(key_pressed);
})

function sound_play(current_key){
    switch (current_key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");//doesnt work for audio.
            crash.play();
        break;
        case "a":
            var tom_4 = new Audio("sounds/tom-4.mp3");//doesnt work for audio.
            tom_4.play();
            break;
        case "s":
            var kick = new Audio("sounds/kick-bass.mp3");//doesnt work for audio.
            kick.play();
            break;
        case "d":
            var snare = new Audio("sounds/snare.mp3");//doesnt work for audio.
            snare.play();
            break;
        case "j":
            var tom_1 = new Audio("sounds/tom-1.mp3");//doesnt work for audio.
            tom_1.play();
            break;
        case "k":
            var tom_2 = new Audio("sounds/tom-2.mp3");//doesnt work for audio.
            tom_2.play();
            break;
        case "l":
            var tom_3 = new Audio("sounds/tom-3.mp3");//doesnt work for audio.
            tom_3.play();
            break;
        default: console.log(button_hit);
    }
}

function animation(key_pressed){
    document.querySelector("."+key_pressed).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key_pressed).classList.remove("pressed");
    },200)
}