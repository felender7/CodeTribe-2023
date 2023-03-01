

//HEAD FUNCTION TO RENDER NAVBAR
function Header() {

    document.getElementById("nav-bar").innerHTML =

        ` <div class="container">
                <a class="navbar-brand" href="index.html"><img src="assets/img/logo.png" width="150px"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li id="nav-item-1" class="nav-item">
                            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li id="nav-item-2" class="nav-item">
                            <a class="nav-link" href="about.html">About</a>
                        </li>
                        <li id="nav-item-3" class="nav-item">
                            <a class="nav-link" href="contacts.html">Contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
    `


}

//FOOTER FUNCTION TO RENDER FOOTER CONTENT
function Footer() {
    document.getElementById("footer").innerHTML =
        `
    <div class="container">
    <div class="row">
        <div class="col col-md-3">
            <h4>Address</h4>
            <hr>
            28 Doornkraal <br>Annadale <br> Polokwane 0699
        </div>
        <div class="col col-md-3">
            <h4>Quick Links</h4>
            <hr>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About </a></li>
                <li><a href="contacts.html">Get in touch</a></li>
            </ul>
        </div>
        <div class="col col-md-3">
            <h4>Get in Touch</h4>
            <hr>
            <a href="tel:0664698002"><i class="fa-solid fa-mobile"></i> 066 469 8002 </a><br>
            <a href="mailto:felender7@gmail.com"><i class="fa-solid fa-envelope-open-text"></i> felender7@gmail.com </a><br>
            <a href="https://felnder7.github.io/"><i class="fa-solid fa-link"></i> felender7.github.io</a>
        </div>
        <div class="col col-md-3">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.4316889640045!2d27.944177015030306!3d-26.215159383432933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950a1ee1d0e155%3A0xd85afeff8e7c2bec!2s144%20New%20Canada%20Rd%2C%20Randburg%2C%201709!5e0!3m2!1sen!2sza!4v1602409193877!5m2!1sen!2sza"
                width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""
                aria-hidden="false" tabindex="0"></iframe>
        </div>
    </div>
</div>

<br>

<div class="container text-center">
    <div class="row">
        <div class="col ">
            <ul style="display: inline-flex; gap: 2px;">
                <li><a href="https://github.com/felender7" target="_blank"><i class="fa-brands fa-square-github icons fa-2x shadow-sm"></i></a></li>
                <li><a href="https://stackoverflow.com/users/8264229/felender" target="_blank"><i class="fa-brands fa-stack-overflow icons fa-2x "></i></a> </li>
                <li><a href="#"><i class="fa-brands fa-slack icons fa-2x "></i></a></li>
                <li><a href="https://www.linkedin.com/in/tlangelani-felender-hlungwani-a54949194/?original_referer=https%3A%2F%2Fmail.google.com%2F" target="_blank"><i class="fa-brands fa-linkedin icons fa-2x shadow-sm"></i></a></li>
            </ul>
            <br>
            <br>

            <small>
                Copyright ©2023 All rights reserved | felender.io | <span>
                    Made with <i class="fa fa-heart pulse text-danger"></i> in <a
                        href="https://github.com/felender7">South Africa &#127487;&#127462;</a></span>
            </small>

        </div>
    </div>
</div>
    
    `
}
Header()
Footer()



