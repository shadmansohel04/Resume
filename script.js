document.addEventListener('DOMContentLoaded', function () {
    var aboutMe = document.querySelector('.hide');
    
    var form = document.querySelector('form');

    aboutMe.classList.add('show');

    window.addEventListener("scroll", downUp)

    window.addEventListener('scroll', reveal);
    addSmoothScrollListeners();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        send();
    });

    var navbutton = document.querySelector('.NavIcon');

    navbutton.addEventListener('click', showNav);

});

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}

function addSmoothScrollListeners() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
}

function send(){

    Email.send({
        SecureToken : "2084371b-1b50-4a1b-8ef3-fde0bc105f18",
        To : 'shadman2354@gmail.com',
        From : "shadman2354@gmail.com",
        Subject : "New Email Inquiry",
        Body : "First Name: " + document.getElementById('firstName').value + "<br>Last Name: " + document.getElementById('last').value + "<br>Email Address: " + document.getElementById('address').value + "<br>Subject: " + document.getElementById('subject').value +"<br>Message: " + document.getElementById('message').value
    }).then(
      message => alert(message)
    );

}

function showNav() {
    var navmobile = document.querySelector('.nav-list-mobile');
    var main = document.querySelector('.name');

    if (navmobile.classList.contains('showNav')) {
        main.classList.remove('hideName');
        navmobile.classList.remove('showNav');
    } else {
        main.classList.add('hideName');
        navmobile.classList.add('showNav');
    }
}

let prev = 0

function downUp(){
    console.log("reunn")
    var width = window.innerWidth
    if(width < 768){
        return
    }
    var header = document.querySelector("header")
    let scrollTop = window.scrollY
    if(scrollTop > prev){
        header.classList.add("removeHeader")
    }
    else{
        header.classList.remove("removeHeader")
    }
    prev = scrollTop

}