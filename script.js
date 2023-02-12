
window.onload = function() {
    whodat();
    //run js code here
}


let song = '';

function whodat() {
    song = prompt('Who is your favorite artist?').toLowerCase();
    if(song != 'nba youngboy' ){
        alert('Wrong Answer!!😈');

    }else {
        alert('Mines too ;) ');
    }

}


function getTextareaValue(){
    var textarea = document.getElementById('textarea');
    var value = textarea.value;
    alert('Thanks for your feedback.');

};



var mysong = new Audio ();
mysong.src = 'song.mp3';

const playsong = () =>{
    mysong.play();
}

const pausesong = () =>{
    mysong.pause();
}
