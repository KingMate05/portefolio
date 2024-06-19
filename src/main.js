import "./scss/app.scss";

// Fonction pour gérer l'accordéon
const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
  header.addEventListener("click", function () {
    const content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      // Fermer les autres panneaux ouverts
      document.querySelectorAll(".accordion-content").forEach((item) => {
        item.style.maxHeight = null;
      });

      // Ouvrir le panneau cliqué
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// Fonction pour gérer le retour en haut
document
  .getElementById("scrollToTopButton")
  .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

// Fonction pour gérer le bouton sparkle
document.getElementById("sparkleButton").addEventListener("click", function () {
  // Chemin vers votre fichier PDF
  var pdfPath = "/assets/CV.pdf";

  // Créer un lien
  var link = document.createElement("a");
  link.href = pdfPath;
  link.target = "_blank"; // Ouvrir dans un nouvel onglet

  // Simuler le clic sur le lien
  link.click();
});

document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("hnav");
  var stickyOffset = header.offsetTop;

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > stickyOffset) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuBurger = document.getElementById("menu-burger");
  const navLinks = document.getElementById("nav-links");

  menuBurger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    menuBurger.classList.toggle("toggle");
  });
});
