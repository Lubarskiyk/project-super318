function headerAnimatedto() {
  window.addEventListener('scroll', function () {
    const sectionNotHeader = document.querySelector('#howworks');
    const header = document.querySelector('.header');
    const sectionPosition = sectionNotHeader.getBoundingClientRect().top;
    if (sectionPosition < 0 && !header.classList.contains('headerbacground')) {
      header.classList.add('headerbacground');
    }
    if (sectionPosition > 0 && header.classList.contains('headerbacground')) {
      header.classList.remove('headerbacground');
    }
  });
}
headerAnimatedto();
