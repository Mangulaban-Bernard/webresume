
document.addEventListener("DOMContentLoaded", () => {

  
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".navbar a");
  
    navLinks.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
  
  
    const scrollButton = document.createElement("button");
    scrollButton.textContent = "↑ Top";
    scrollButton.className = "scroll-to-top";
    document.body.appendChild(scrollButton);
  
    window.addEventListener("scroll", () => {
      scrollButton.style.display = window.scrollY > 200 ? "block" : "none";
    });
  
    scrollButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  

    const menuButton = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");
  
    if (menuButton && navbar) {
      menuButton.addEventListener("click", () => {
        navbar.classList.toggle("open");
      });
    }
    const skills = document.querySelectorAll(".left-column ul li");
  
    skills.forEach(skill => {
      skill.addEventListener("mouseover", () => {
        skill.style.color = "#007BFF";
        skill.style.fontWeight = "bold";
      });
  
      skill.addEventListener("mouseout", () => {
        skill.style.color = "";
        skill.style.fontWeight = "";
      });
    });
    const footer = document.querySelector(".footer p");
    if (footer) {
      const year = new Date().getFullYear();
      footer.textContent = `© ${year} Our Website. All rights reserved.`;
    }
  });