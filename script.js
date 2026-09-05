(function () {
  const body = document.body;
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  const theme = document.querySelector('#theme-toggle');
  const savedTheme = localStorage.getItem('duetrack-theme');
  if (savedTheme === 'dark') body.classList.add('dark');
  if (theme) {
    theme.textContent = body.classList.contains('dark') ? '☀' : '☾';
    theme.addEventListener('click', function () {
      body.classList.toggle('dark');
      const dark = body.classList.contains('dark');
      localStorage.setItem('duetrack-theme', dark ? 'dark' : 'light');
      theme.textContent = dark ? '☀' : '☾';
      theme.setAttribute('aria-label', dark ? 'Activer le mode clair' : 'Activer le mode sombre');
    });
  }
  if (menu && nav) {
    menu.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        menu.setAttribute('aria-expanded', 'false');
      });
    });
  }
  document.querySelectorAll('[data-year]').forEach(function (node) {
    node.textContent = new Date().getFullYear();
  });
}());
