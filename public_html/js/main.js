function contentLoaded() {

  const container = document.getElementById('container');
  const header = document.getElementById('header');
  const menuIcon = document.getElementById('menu-icon');
  const navMenu = document.getElementById('nav-menu');
  const menuLinks = document.querySelectorAll('.menu-link');

  // Desplegar el Menú
  function toggleMenu() {
    if(header.classList.contains('menu-expanded')) {

      // Si el Menú está desplegado:
      setTimeout(function () {
        header.classList.remove('menu-expanded');
        navMenu.classList.remove('expand');
      }, 10);
      // Rehabilitar Scroll
      enableScroll();

    } else {

      // Si el Menú no está desplegado
      header.classList.add('menu-expanded');
      navMenu.classList.add('expand');
      // Deshabilitar Scroll mientras esté expandido el Menú
      disableScroll();
    }
  }
  // Cerrar el Menu
  // function closeMenu() {
  //   setTimeout(function () {
  //     header.classList.remove('menu-expanded');
  //     navMenu.classList.remove('expand');
  //   }, 10);
  //   enableScroll();
  // }

  // Habilitar y deshabilitar Scroll dependiendo del estado del Menú
  function preventScroll(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
  function disableScroll() {
    console.log("Disable");
    container.addEventListener('wheel', preventScroll);
  }
  function enableScroll() {
    console.log("Enable");
    container.removeEventListener('wheel', preventScroll);
  }

  menuIcon.addEventListener('click', toggleMenu);
  menuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  })

}
