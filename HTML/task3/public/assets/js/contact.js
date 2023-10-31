window.onload = function () {

//

//BANNER IMAGE
document.getElementById("mini-banner-image").src = "assets/img/mini_banner.png";

//MAIN CONTENT
let header = "Contact";
let bubTitle = "Have You Any Project? Please Drop a Message"
let description = "Get in touch and let me know how i can help. Fill out the form and Ill be in touch as soon as possible.";

document.getElementById("contact-header").innerHTML = header;
document.getElementById("contact-subtitle").innerHTML = bubTitle;
document.getElementById("contact-description").innerHTML = description;


//CONTACT DETAILS
let address = '<b> <i class="fa-solid fa-location-dot"></i> Address:</b> 28 Doornkraal, Annadale, Polokwane 0699';
let phone = '<b> <i class="fa-solid fa-mobile"></i> Phone:</b> 066 469 8002';
let email = '<b> <i class="fa-solid fa-envelope"></i> Email:</b> felender7@gmail.com';

document.getElementById("address").innerHTML = address;
document.getElementById("phone").innerHTML = phone;
document.getElementById("email").innerHTML = email;

//SOCAILS

document.getElementById("github").innerHTML ='<a href="https://github.com/felender7" target="_blank"><i class="fa-brands fa-square-github git-icon"></i></a>';
document.getElementById("stackoverflow").innerHTML = '<a href="https://stackoverflow.com/users/8264229/felender" target="_blank"><i class="fa-brands fa-stack-overflow stack-overflow-icon "></i></a>';
document.getElementById("slack").innerHTML = '<a href="#"><i class="fa-brands fa-slack slack-icon "></i></a>';
document.getElementById("linked-in").innerHTML = '<a href="https://www.linkedin.com/in/tlangelani-felender-hlungwani-a54949194/?original_referer=https%3A%2F%2Fmail.google.com%2F" target="_blank"><i class="fa-brands fa-linkedin linked-in-icon"></i></a>'

}
