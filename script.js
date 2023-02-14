
window.onload = function() {
    whodat();
    agree()
    //run js code here
}


let song = '';

function whodat() {
    song = prompt('Who is your favorite artist?')
    .split(" ")
    .join("")
    .toLowerCase();
    console.log(song);
    if(song != 'nbayoungboy' ){
        alert('Wrong Answer!!😈');
    }else {
        alert('Mines too ;) ');
    }


}
let statement = '';

function agree(){
    statement = prompt('Rate how satisfied you are with your answer 1-5 ');
    if(statement != "5"){
        alert("I Don't Care");
        for(var i = 0; i < 2; i++){
            createImages();
            setTimeout(removeImage, 2000);
        }
           
    }else{
        alert("Thanks ;)");

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

function createImages() {
     var div = document.getElementById("x");
     let img = document.createElement("IMG");
     img.src = "JavaPic.jpg";
     img.classList.add("image")
     div.appendChild(img);
    //  for (let i = 0; i = 3; i++){
        
    // }
    // x.setAttribute("src", "JavaPic.jpg");
    // x.setAttribute("width", "304");
    // x.setAttribute("height", "228");
    // x.setAttribute("alt", "The Pulpit Rock");
    // document.body.appendChild(x);
  }
 
//   for (let i = 0; i = 3; i++){
//     createImages(), i;
//     createImages(), i;
// }

//  setTimeout(removeImage, 5000);

function removeImage(){
    let images =  document.querySelectorAll(".image");
    images[0].remove();
    images[1].remove();

}