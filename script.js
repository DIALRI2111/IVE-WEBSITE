// Debounce Utility Function
function debounce(func, wait = 100) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// Highlight menu aktif berdasarkan scroll
const highlightMenuOnScroll = () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav ul li a');

  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      currentSection = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(currentSection)) {
      link.classList.add('active');
    }
  });
};

window.addEventListener('scroll', debounce(highlightMenuOnScroll, 100));

// Scroll slider video
function scrollSlider(direction) {
  const slider = document.getElementById('videoSlider');
  if (!slider) return;
  const scrollAmount = 340;
  slider.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

// Cek ketersediaan video YouTube (safe fallback)
function checkVideoAvailability(iframe) {
  if (!iframe || !iframe.src) return;
  const checkTimeout = setTimeout(() => {
    if (iframe && !iframe.contentDocument) {
      handleVideoError(iframe, iframe.src);
    }
  }, 3000); // 3 detik waktu tunggu

  iframe.onerror = () => {
    clearTimeout(checkTimeout);
    handleVideoError(iframe, iframe.src);
  };
}

// Tangani video error fallback
function handleVideoError(iframe, videoUrl) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'video-error';
  errorDiv.innerHTML = `Video tidak tersedia. <a href="${videoUrl}" target="_blank" rel="noopener noreferrer">Tonton di YouTube</a>`;
  iframe.parentNode.replaceChild(errorDiv, iframe);
}

// Toggle hamburger menu
function toggleMenu() {
  const menu = document.querySelector("nav ul");
  if (menu) {
    menu.classList.toggle("show");
  }
}
