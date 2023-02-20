
window.onload = function () {

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


    //SKILLS SECTION - ABOUT PAGE
    //Skills and Tools

    let SkillsList = new Array(

        {
            img: "/assets/img/icons/html5.png",
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

}
