window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}

// Get the modal
document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("myModal");
    var sectionImages = document.querySelectorAll(".section img");
    var modalImg = document.getElementById("modalImg");
    var captionText = document.getElementById("caption");
    var span = document.getElementsByClassName("close")[0];

    sectionImages.forEach(function (image) {
        image.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    span.addEventListener("click", function () {
        modal.style.display = "none";
    });
});



