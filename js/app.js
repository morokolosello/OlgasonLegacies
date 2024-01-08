const filter_btns = document.querySelectorAll(".filter-btn");
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const records_wrap = document.querySelector(".records");
const records_numbers = document.querySelectorAll(".number");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");


function aboutCardShowText() {
    var dots = document.getElementById("aboutDots");
    var moreText = document.getElementById("aboutMore");
    var btnText = document.getElementById("btnAboutReadMore");
  
    if (dots.style.display === "inline") {
      dots.style.display = "none";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "inline";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function sevOneCardShowText() {
    var dots = document.getElementById("sevDotsOne");
    var moreText = document.getElementById("sevMoreOne");
    var btnText = document.getElementById("btnSevOneReadMore");
  
    if (dots.style.display === "inline") {
      dots.style.display = "none";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "inline";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }          
  

  function ellOneCardShowText() {
    var dots = document.getElementById("ellDotsOne");
    var moreText = document.getElementById("ellMoreOne");
    var btnText = document.getElementById("btnEllOneReadMore");
  
    if (dots.style.display === "inline") {
      dots.style.display = "none";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "inline";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }         

  

  function tweOneCardShowText() {
    var dots = document.getElementById("tweDotsOne");
    var moreText = document.getElementById("tweMoreOne");
    var btnText = document.getElementById("btnTweOneReadMore");
  
    if (dots.style.display === "inline") {
      dots.style.display = "none";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "inline";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }         
  








  function sevTwoCardShowText() {
    var moreText = document.getElementById("sevDotsTwo");
    var dots = document.getElementById("sevMoreTwo");
    var btnText = document.getElementById("btnSevTwoReadMore");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
    } else {
        moreText.style.display = "none";
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
    }
}


function newsTwoCardShowText() {
    var moreText = document.getElementById("newsDotsTwo");
    var dots = document.getElementById("newsMoreTwo");
    var btnText = document.getElementById("btnNewsTwoReadMore");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
    } else {
        moreText.style.display = "none";
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
    }
}



  function sevThreeCardShowText() {
    var dots = document.getElementById("sevDotsThree");
    var moreText = document.getElementById("sevMoreThree");
    var btnText = document.getElementById("btnSevThreeReadMore");
  
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
    } else {
        moreText.style.display = "none";
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
    }
  }





  

function firstCardShowText() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("btn firstReadMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}




function secondCardShowText() {
    var dots = document.getElementById("secondDots");
    var moreText = document.getElementById("secondMore");
    var btnText = document.getElementById("btn secondReadMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";

    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";

    }
}



function thirdCardShowText() {
    var dots = document.getElementById("thirdDots");
    var moreText = document.getElementById("thirdMore");
    var btnText = document.getElementById("btn thirdReadMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";

    }
}

function forthCardShowText() {
    var dots = document.getElementById("forthDots");
    var moreText = document.getElementById("forthMore");
    var btnText = document.getElementById("btn forthReadMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";

    }
}

function firthCardShowText() {
    var dots = document.getElementById("firthDots");
    var moreText = document.getElementById("firthMore");
    var btnText = document.getElementById("btn firthReadMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";

    }
}

function sixCardShowText() {
    var dots = document.getElementById("sixDots");
    var moreText = document.getElementById("sixMore");
    var btnText = document.getElementById("btn sixReadMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";

    }
}

function showSkills() {
    var dots = document.getElementById("nothing");
    var moreText = document.getElementById("moreSkills");
    var btnText = document.getElementById("btn expandSkills");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "More Skills";
        moreText.style.display = "none";
        btnText.style.backgroundColor = '#00ff00'
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Hide skills";
        moreText.style.display = "inline";
        btnText.style.backgroundColor = '#F81894'

    }
}

function closeMenu() {
    navbar.classList.remove("open");

}

hamburger_menu.addEventListener("click", () => {
    if (!navbar.classList.contains("open")) {
        navbar.classList.add("open");
    } else {
        closeMenu();
    }
})

links.forEach((link) => link.addEventListener("click", () => closeMenu()));

filter_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        filter_btns.forEach((button) => button.classList.remove("active"));
        btn.classList.add("active");

        let filterValue = btn.dataset.filter;

        $(".grid").isotope({ filter: filterValue });
    });
});

$('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    transitionDuration: '0.6s',
});

window.addEventListener("scroll", () => {
    skillsEffect();
    countUp();

});

function checkScroll(el) {
    let rect = el.getBoundingClientRect();
    if (window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
}

function skillsEffect() {
    if (!checkScroll(skills_wrap)) return;
    skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}

function countUp() {
    if (!checkScroll(records_wrap)) return;
    records_numbers.forEach((numb) => {
        const updateCount = () => {
            let currentNum = +numb.innerText;
            let maxNum = +numb.dataset.num;
            let speed = 6000;
            const increment = Math.ceil(maxNum / speed);

            if (currentNum < maxNum) {
                numb.innerText = currentNum + increment;
                setTimeout(updateCount, 1);
            } else {
                numb.innerText = maxNum + "+";
            }
        };

        setTimeout(updateCount, 400);
    });
}




let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

showSlides(); // Initial call to start the slideshow
