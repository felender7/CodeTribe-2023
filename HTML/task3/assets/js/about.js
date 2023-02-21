
window.onload = function () {


    //CONTENT
    let fullName = "Tlangelani Hlungwani"
    let title = "About me";
    let  subTitle = "Need a Creative Product? I can Help You!";
    let aboutMe = " Hi! Im " + fullName + ` , and Im a developer who has passion for building clean web applications with
    intuitive functionality. I enjoy the process of turning ideas into reality using creative
    solutions. Im always curious about learning new skills, tools, and concepts. In addition to
    working on various solo full stack projects, I have worked with creative teams, which involves
    daily stand-ups and communications, source control, and project management.`


   document.getElementById("about-title").innerHTML = title;
   document.getElementById("about-subtitle").innerHTML = subTitle;
   document.getElementById("about-me").innerHTML = aboutMe;
 

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

        {
            institution: "Academy International",
            qualification: "Diploma in Programming",
            yearObtained: 2008
        },

    );
        
        let listUl = "<tr> <th><b>#</b></th><th><b>Institution </b></th>  <th><b>Qualification </b></th> <th><b>Year Obtained </b></th>";

        for(i = 0; i < QuilificationsList.length;i++ ){
            let numbers = i+1;
            listUl += "<tr><td>"  + numbers +  "</td><td>" + QuilificationsList[i].institution + "</td> <td> " + QuilificationsList[i].qualification + "</td><td> " + QuilificationsList[i].yearObtained + "</td></tr>";
        }
        listUl += "</tr>";
    document.getElementById("qualificationList").innerHTML = listUl;


    //SKILLS and TOOLS SECTION - ABOUT PAGE
    //Skills 

    let SkillsList = new Array(

        {
            img: "assets/img/icons/html5.png",
            skillsName : "html"
        },
        {
            img: "assets/img/icons/css3.png",
            skillsName : "css"
        },

        {
            img: "assets/img/icons/javascript.png",
            skillsName : "javascript"
        },

        {
            img: "assets/img/icons/react.png",
            skillsName : "react"

        },
        {
            img: "assets/img/icons/firebase.png",
            skillsName : "firebase"
        },
    
    )

    let listSkillsUl = ""

      for(s = 0;s < SkillsList.length; s++)
      {
        listSkillsUl += "<div class='bg-dark rounded shadow-sm p-2 skills'><img src='" + SkillsList[s].img + "' class='img-fluid'/>" + "<p>" + SkillsList[s].skillsName + "</p> </div>" 
      }
     
      
    listSkillsUl +="";
    document.getElementById("skills").innerHTML = listSkillsUl;

   //Tools 

   let ToolsList = new Array(

    {
        img: "assets/img/icons/git.png",
        skillsName : "git"
    },
    {
        img: "assets/img/icons/command.png",
        skillsName : "cmd"
    },

    {
        img: "assets/img/icons/npm.png",
        skillsName : "npm"
    },

    {
        img: "assets/img/icons/adobe-xd.png",
        skillsName : "Adobe-xd"

    },
    {
        img: "assets/img/icons/slack.png",
        skillsName : "slack"
    },

)

    let listToolsUl = ""

    for(t = 0;t < ToolsList.length; t++)
    {
        listToolsUl += "<div class='bg-secondary rounded shadow-sm p-2 skills'><img src='" + ToolsList[t].img + "' class='img-fluid'/>" + "<p>" + ToolsList[t].skillsName + "</p> </div>" 
    }
    
    
    listToolsUl +="";
    document.getElementById("tools").innerHTML = listToolsUl;


    //PROJECTS SECTION - ABOUT PAGE
    //Project
    let projectName ="<i class='fa-solid fa-folder'></i> Work Local";
    let discription = "work local provides a more efficient and effective way of creating a platform where Job Seekers can upload their CV's and Qualifications...";
    
    document.getElementById("project-title").innerHTML = projectName;
    document.getElementById("project-description").innerHTML = discription;
   
    //SKILLS SECTION - ABOUT PAGE 
    //skills
    let skillTitle = "My skills";
    let skillSubtitle = "What My Programming Skills Included?"; 
    let skillDescription = "I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies."

    document.getElementById("skills-title").innerHTML = skillTitle;
    document.getElementById("skills-subtitle").innerHTML = skillSubtitle;
    document.getElementById("skills-description").innerHTML = skillDescription;

    //EXPRIENCE SECTION - ABOUT PAGE 
    //Exprience
    let exprienceTitle = "Experience";
    let exprienceSubTitle = "3+ Years of Experience";
    let exprienceDescription = "I have been developing sites and apps for 3 years and i know for sure the main trends and directions of modern design, I have been a visionary and a reliable software engineering partner for world-class brands. You will get a decent result as you expect.";
    
    document.getElementById("exprience-title").innerHTML = exprienceTitle;
    document.getElementById("exprience-subtitle").innerHTML = exprienceSubTitle;
    document.getElementById("exprience-description").innerHTML = exprienceDescription;
    document.getElementById("years-of-exprience").innerHTML = '<i class="fa-solid fa-certificate"></i> 3+ Years of Experience';
    document.getElementById("completed-projects").innerHTML = '<i class="fa-solid fa-folder"></i> 70+ Completed Projects'
}


