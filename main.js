const swiper = new Swiper(".mon-slider", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 3000,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((tab) => {
        tab.classList.remove("tab-active");
      });
      const contents = document.querySelectorAll(".content");
      contents.forEach((content) => {
        content.classList.remove("active");
      });

      this.classList.add("tab-active");
      if (this.classList.contains("tab-concerts")) {
        document.querySelector(".concerts").classList.add("active");
      } else if (this.classList.contains("tab-photographie")) {
        document.querySelector(".photographie").classList.add("active");
      } else if (this.classList.contains("tab-cinéma")) {
        document.querySelector(".cinéma").classList.add("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleModeButton = document.getElementById("toggleModeButton");

  toggleModeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });
});
