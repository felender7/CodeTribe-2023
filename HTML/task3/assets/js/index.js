
window.onload = function () {
    // HERO SECTION - HOME PAGE
    let firstName = 'Felender';
    let postion = 'And Im a Front-end // Back-end Developer';
    let dot = "<span class='small-box blink'>.</span>";
    document.getElementById("hero-title").innerHTML = 'I am ' + firstName + dot;
    document.getElementById("hero-subtitle").innerHTML = postion;


    //BIO SECTION - HOME PAGE

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
    document.getElementById("boi-image").src = "/assets/img/illustrations/bio-avator.png";


    //EDUCATION SECTION - ABOUT PAGE

    //Quilifications
    let QuilificationsList = new Array(
        {
            institution: "MTN Business App Academy",
            qualification: "APP Development (NQF Level 5)",
            yearObtained: 2021
        },

        {
            institution: "HyperionDevy",
            qualification: "Software Engineering",
            yearObtained: 2020
        },

        {
            institution: "CTU Training",
            qualification: "A+ and N+ Certification",
            yearObtained: 2012
        },

    );
    
    let listUl = "<div>";
    for(i = 0; i < QuilificationsList.length;i++ ){
        listUl +=
        "<table style='width: 100%; margin: 8px; border:1px solid grey; border-radius: 16px;'> <tr><td>Item: " +
        QuilificationsList[i].institution +
        "</td></tr> <tr><td>Price: " +
        QuilificationsList[i].qualification +
        "</td></tr></table>";
    }
    listUl += "</div>";
  document.getElementById("qualificationList").innerHTML = "<td>" + "hello" + "</td>";

}
