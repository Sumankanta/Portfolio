document.addEventListener("DOMContentLoaded", () => {
  // Counter Animation
  function counter(id, start, end, duration) {
    const obj = document.getElementById(id);
    let current = start;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const step = Math.abs(Math.floor(duration / range));

    const timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, step);
  }

  counter("count1", 50, 1287, 3000);
  counter("count2", 100, 1297, 4000);
  counter("count3", 20, 387, 5000);
  counter("count4", 30, 1597, 6000);

  // Typed.js initialization
  if (document.querySelector(".typing")) {
    new Typed(".typing", {
      strings: ["Web Designer", "Web Developer", "Data Analyst", "UI/UX Designer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  }
  
});

const progressBars = document.querySelectorAll(".progress-bar");

progressBars.forEach((bar) => {
  const value = bar.getAttribute("data-skill");
  bar.style.width = value + "%";
});

