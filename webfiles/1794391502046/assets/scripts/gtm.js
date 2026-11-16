/* Reconstruction: replace with the real gtm.js from mygov.scot if needed */
(function () {
  var s = document.getElementById('gtm-script') || document.currentScript;
  var id = s && s.getAttribute('data-containerid');
  if (!id) return;
  window.dataLayer = window.dataLayer || [];
  (function (w, d, t, l, i) {
    w[l] = w[l] || [];
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var f = d.getElementsByTagName(t)[0], j = d.createElement(t), dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', id);
})();
