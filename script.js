document.addEventListener("DOMContentLoaded", () => {
  // 🌟 Custom star cursor
  const cursor = document.querySelector('.cursor');
  let timeout;

  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.classList.add('active');
    clearTimeout(timeout);
    timeout = setTimeout(() => cursor.classList.remove('active'), 150);
  });

  // ✨ Click sparkle animation
  document.addEventListener('click', () => {
    cursor.classList.add('click');
    setTimeout(() => cursor.classList.remove('click'), 400);
  });

  // 🧭 Navbar scroll highlight
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });

  // 👋 Typewriter Greeting
  const greeting = document.getElementById('greeting');
  const text = "👋 Hi, I'm JETTI MANOJ KUMAR";
  if (greeting) {
    let i = 0;
    function typeEffect() {
      if (i < text.length) {
        greeting.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
      }
    }
    typeEffect();
  }
});
