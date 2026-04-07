// Hamburger menu functions
function toggleNavbar(isOpen) {
  const navbar = document.querySelector(".dropdown");
  if (navbar) {
    navbar.style.transform = isOpen ? "translateX(0px)" : "translateX(15rem)";
  }
}

function hamburg() {
  toggleNavbar(true);
}

function cancel() {
  toggleNavbar(false);
}

// General Typewriter Effect Function
function typeWriterEffect(element, texts, speed = 100) {
  let textIndex = 0;
  let charIndex = 0;

  function type() {
    if (element && charIndex < texts[textIndex].length) {
      element.innerHTML += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, speed);
    } else if (element) {
      setTimeout(erase, 1000);
    }
  }

  function erase() {
    if (element && element.innerHTML.length > 0) {
      element.innerHTML = element.innerHTML.slice(0, -1);
      setTimeout(erase, 50);
    } else if (element) {
      textIndex = (textIndex + 1) % texts.length;
      charIndex = 0;
      setTimeout(type, 500);
    }
  }

  type(); // Start the typewriter effect
}

// Initialize everything when page loads
window.onload = function () {
  const homeTypewriter = document.querySelector("#home-typewriter");
  const aboutTypewriter = document.querySelector("#about-typewriter");
  const certificationTypewriter = document.querySelector("#certification-typewriter");
  const projectTypewriter = document.querySelector("#project-typewriter");
  const contactTypewriter = document.querySelector("#contact-typewriter");

  if (homeTypewriter) {
    typeWriterEffect(homeTypewriter, ["Informatika"]);
  }

  if (aboutTypewriter) {
    typeWriterEffect(aboutTypewriter, ["Temukan lebih banyak tentang saya"]);
  }

  if (certificationTypewriter) {
    typeWriterEffect(certificationTypewriter, ["Sertifikat yang telah saya peroleh"]);
  }

  if (projectTypewriter) {
    typeWriterEffect(projectTypewriter, ["Beberapa proyek yang telah saya kerjakan"]);
  }

  if (contactTypewriter) {
    typeWriterEffect(contactTypewriter, ["Jangan ragu untuk menghubungi saya"]);
  }
};

// Initialize AOS
document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});
