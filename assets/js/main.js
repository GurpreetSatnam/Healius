$(window).scroll(function () {
    if ($(this).scrollTop() > 60) {
        $('.nav').addClass('sticky')
    } else {
        $('.nav').removeClass('sticky')
    }
});





$(document).ready(function () {
    $('#increase').click(function () {
        modifyFontSize('increase');
    });
    $('#decrease').click(function () {
        modifyFontSize('decrease');
    });
    $('#reset').click(function () {
        modifyFontSize('reset');
    })

    function modifyFontSize(action) {
        var divElement = $('.multi-fontszie');
        var currentFontSize = parseInt(divElement.css('font-size'));
        if (action == 'increase')
            currentFontSize += 3;
        else if (action == 'decrease')
            currentFontSize -= 3;
        else
            currentFontSize = 16;
        divElement.animate({
            'fontSize': currentFontSize
        }, 300);
    }
});



function printPage() {
    window.print();
}

$(document).ready(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
    });
});



var button = document.getElementById('highlights-btn');

button.onclick = function () {
    var element = document.getElementById('myElement');

    // Check if the element has the class 'highlight'
    if (element.classList.contains('highlight')) {
        // Remove the class if it exists
        element.classList.remove('highlight');
    } else {
        // Add the class if it doesn't exist
        element.classList.add('highlight');
    }
};




document.addEventListener('DOMContentLoaded', function () {
    var readMoreBtn = document.querySelector('.read-more-btn');
    var readLessBtn = document.querySelector('.read-less-btn');
    var hiddenContent = document.querySelector('.hidden-content');
    var dots = document.querySelector(".dots");

    readMoreBtn.addEventListener('click', function () {
        hiddenContent.style.display = 'inline';
        dots.style.display = "none";
        readMoreBtn.style.display = 'none';
        readLessBtn.style.display = 'inline-block';
    });

    readLessBtn.addEventListener('click', function () {
        hiddenContent.style.display = 'none';
        dots.style.display = "inline";
        readMoreBtn.style.display = 'inline-block';
        readLessBtn.style.display = 'none';
    });
});




$('.latest-report').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1,
            touchDrag: false,
            mouseDrag: false
        },
        600: {
            items: 2,
            touchDrag: false,
            mouseDrag: false
        },
        1000: {
            items: 2,
            touchDrag: false,
            mouseDrag: false
        }
    }
})
$('.card-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1,
            touchDrag: true,
            mouseDrag: true
        },
        600: {
            items: 2,
            touchDrag: true,
            mouseDrag: true
        },
        1000: {
            items: 2,
            touchDrag: false,
            mouseDrag: false
        }
    }
})


//custome scroll
jQuery(document).ready(function () {
    jQuery('.scrollbar-external').scrollbar({
        "autoScrollSize": false,
        "scrollx": $('.external-scroll_x'),
        "scrolly": $('.external-scroll_y')
    });
});

//patient-feddback


function updateFileName() {
    var fileInput = document.getElementById('upload');
    var fileNameSpan = document.getElementById('file-name');
    fileNameSpan.textContent = fileInput.files[0].name;
}

//pathlogy-and-invest-in-us-page
window.addEventListener('scroll', function () {
    var section3 = document.getElementById('section3');
    var section6 = document.getElementById('section6');

    var section3Heading = section3.querySelector('.fixed-heading');

    var section3Rect = section3.getBoundingClientRect();
    var section6Rect = section6.getBoundingClientRect();

    if (section3Rect.top <= 0 && section6Rect.top > 0) {
        section3Heading.classList.add('fixed');
    } else {
        section3Heading.classList.remove('fixed');
    }
});


//spyscroll
const navigation = document.querySelector('.navigation');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting === true) {
            const uid = entry.target.dataset.sectionName;

            const active = navigation.querySelector('li.active');
            if (active !== null) {
                active.classList.remove('active');
            }

            const button = navigation.querySelector('a[href="#' + uid + '"]');
            if (button !== null) {
                button.parentNode.classList.add('active');
            }
        }
    });
}, {
    root: document,
    rootMargin: '-10% 0px -90% 0px'
});
const stickySection = document.querySelectorAll('[data-section-name]');
stickySection.forEach((elm, idx) => {
    observer.observe(elm);
});
// smooth anchor move
const buttons = navigation.querySelectorAll('a');
buttons.forEach((elm, idx) => {
    elm.addEventListener('click', e => {
        e.preventDefault();
        const uid = elm.getAttribute('href').replace('#', '');
        document.querySelector('[data-section-name="' + uid + '"]').scrollIntoView({
            behavior: 'smooth'
        });
    });
});





//faq-mobile-dropdown
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.dropdown-menu').forEach(function (element) {
        element.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    })
    if (window.innerWidth < 992) {

        // close all inner dropdowns when parent is closed
        document.querySelectorAll('.navbar .dropdown').forEach(function (everydropdown) {
            everydropdown.addEventListener('hidden.bs.dropdown', function () {
                // after dropdown is hidden, then find all submenus
                this.querySelectorAll('.submenu').forEach(function (everysubmenu) {
                    // hide every submenu as well
                    everysubmenu.style.display = 'none';
                });
            })
        });

        document.querySelectorAll('.dropdown-menu a').forEach(function (element) {
            element.addEventListener('click', function (e) {

                let nextEl = this.nextElementSibling;
                if (nextEl && nextEl.classList.contains('submenu')) {
                    // prevent opening link if link needs to open dropdown
                    e.preventDefault();
                    console.log(nextEl);
                    if (nextEl.style.display == 'block') {
                        nextEl.style.display = 'none';
                    } else {
                        nextEl.style.display = 'block';
                    }

                }
            });
        })
    }
});


//faq
