
//function Hero
function Hero() {
    let firstName = 'Felender';
    let postion = 'And Im a Front-end // Back-end Developer'
    document.getElementById("hero-title").innerHTML = 'I am ' + firstName + " <span style='color:#16a085;  animation: blink-animation 1s steps(5, start) infinite;-webkit-animation: blink-animation 1s steps(5, start) infinite;' >.</span";
    document.getElementById("hero-subtitle").innerHTML = postion;
}

//function Bio
function Boi() {
 let bioFullname = "Tlangelani Hlungwani";
 let bioSubTitle = "Need a Creative Product? I can Help You!";
 let boiAbout = `Im a developer who has passion for building clean web applications with\n
 intuitive functionality. I enjoy the process of turning ideas into reality using creative
 solutions. Im always curious about learning new skills, tools, and concepts. In addition to
 working on various solo full stack projects, I have worked with creative teams, which involves
 daily stand-ups and communications, source control, and project management`


 

 document.getElementById("bio-fullname").innerHTML = 'Hi, Im ' + bioFullname;
 document.getElementById("bio-subtitle").innerHTML = bioSubTitle;
 document.getElementById("bio-about").innerHTML = boiAbout;


 
}











Hero()
Boi() 

