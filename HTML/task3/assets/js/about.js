
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

    );
    
    let listUl = "<tr> <th><b>#</b></th><th><b>Institution </b></th>  <th><b>Qualification </b></th> <th><b>Year Obtained </b></th>";

    for(i = 0; i < QuilificationsList.length;i++ ){
        let numbers = i+1;
        console.log(numbers)
        listUl += "<tr><td>"  + numbers +  "</td><td>" + QuilificationsList[i].institution + "</td> <td> " + QuilificationsList[i].qualification + "</td><td> " + QuilificationsList[i].yearObtained + "</td></tr>";
    }
    listUl += "</tr>";
  document.getElementById("qualificationList").innerHTML = listUl;

}
