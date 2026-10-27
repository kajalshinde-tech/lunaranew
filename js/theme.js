(function () {
  function storedTheme() { try { return localStorage.getItem('lunara-theme'); } catch (_) { return null; } }
  function apply(theme) {
    document.documentElement.dataset.theme = theme;
    document.querySelectorAll('.theme-toggle').forEach(function (button) {
      button.setAttribute('aria-pressed', String(theme === 'dark'));
      button.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' theme');
      button.querySelector('.theme-symbol').textContent = theme === 'dark' ? '☀' : '☾';
      button.querySelector('.theme-label').textContent = theme === 'dark' ? 'Light' : 'Dark';
    });
  }
  apply(storedTheme() || 'light');
  document.addEventListener('click', function (event) {
    if (event.target.closest('.theme-toggle')) {
      var theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      apply(theme); try { localStorage.setItem('lunara-theme', theme); } catch (_) {}
    }
    var menu = event.target.closest('.menu-toggle');
    if (menu) { var open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); document.querySelector('.creative-nav').classList.toggle('menu-open', open); }
  });
  document.addEventListener('lunara:header-ready', function () { apply(document.documentElement.dataset.theme); });
  window.addEventListener('storage', function (event) { if (event.key === 'lunara-theme') apply(event.newValue || 'light'); });
})();
