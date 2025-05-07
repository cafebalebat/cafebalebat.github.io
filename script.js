document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', function() {
    document.querySelectorAll('.menu-item').forEach(menu => menu.classList.remove('active'));
    this.classList.add('active');
  });
});
let lastScrollY = window.scrollY;

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');

  // Mengecek arah scroll
  if (window.scrollY > lastScrollY) {
    // Jika scroll ke bawah, sembunyikan header
    header.classList.add('hide');
  } else {
    // Jika scroll ke atas, tampilkan header
    header.classList.remove('hide');
  }
  
  lastScrollY = window.scrollY; // Update posisi scroll terakhir
});