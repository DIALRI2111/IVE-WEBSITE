// Highlight menu aktif berdasarkan scroll
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
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

function scrollSlider(direction) {
  const slider = document.getElementById('videoSlider');
  const scrollAmount = 340;
  slider.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}
function checkVideoAvailability(iframe) {
  // Cek apakah iframe dapat dimuat dengan baik
  if (iframe.contentWindow.location.href.includes('https://www.youtube.com')) {
    // Video berhasil dimuat
    return;
  }
  // Jika iframe tidak dapat dimuat, tampilkan fallback
  handleVideoError(iframe, iframe.src);
}

function handleVideoError(iframe, videoUrl) {
  // Gantikan iframe dengan pesan error dan link ke YouTube
  iframe.outerHTML = `<div class="video-error">Video tidak tersedia. <a href="${videoUrl}" target="_blank">Tonton di YouTube</a></div>`;
}
// Di JavaScript
function toggleMenu() {
  document.querySelector("nav ul").classList.toggle("show");
}

