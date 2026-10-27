/**
 * LUNARA — Component Loader
 * Dynamically injects shared header and footer into every page.
 * Automatically highlights the active nav link based on the current filename.
 */

(function () {
  'use strict';

  /** Resolve the correct relative path prefix based on HTML file location */
  function getBasePath() {
    // All HTML files are at root level, so components/ is always relative
    return '';
  }

  /** Fetch & inject an HTML component into a target element by ID */
  function loadComponent(targetId, componentPath, callback) {
    var el = document.getElementById(targetId);
    if (!el) return;

    fetch(componentPath)
      .then(function (res) {
        if (!res.ok) throw new Error('Failed to load: ' + componentPath);
        return res.text();
      })
      .then(function (html) {
        el.outerHTML = html; // Replace placeholder with real markup
        if (typeof callback === 'function') callback();
      })
      .catch(function (err) {
        console.warn('[LUNARA Components]', err.message);
      });
  }

  /** Add "active" class to the nav link matching the current page */
  function highlightActiveNav() {
    var path = window.location.pathname;
    var file = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    var pageKey = file.replace('.html', '');

    document.querySelectorAll('[data-page]').forEach(function (link) {
      if (link.getAttribute('data-page') === pageKey) {
        link.classList.add('active');
      }
    });
  }

  /** Re-initialise Bootstrap Offcanvas after header injection */
  function initOffcanvas() {
    var offcanvasEl = document.getElementById('offcanvasMenu');
    if (offcanvasEl && typeof bootstrap !== 'undefined' && bootstrap.Offcanvas) {
      // Bootstrap auto-initialises via data attrs, but manually init if needed
      bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
    }
    highlightActiveNav();
    document.dispatchEvent(new Event('lunara:header-ready'));
  }

  // Boot: inject header then footer when DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    var base = getBasePath();
    loadComponent('header', base + 'components/header.html', initOffcanvas);
    loadComponent('footer', base + 'components/footer.html');
  });
})();

