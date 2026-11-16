/* Minimal stand-in for the design-system cookie notification */
(function () {
  var NAME = 'cookie-preferences-mygovscot';
  var notice = document.getElementById('cookie-notice');
  var confirmBox = document.getElementById('cookie-confirm');
  window.dataLayer = window.dataLayer || [];

  function getPrefs() {
    var m = document.cookie.match(new RegExp('(?:^|; )' + NAME + '=([^;]*)'));
    try { return m ? JSON.parse(decodeURIComponent(m[1])) : null; } catch (e) { return null; }
  }
  function save(prefs) {
    document.cookie = NAME + '=' + encodeURIComponent(JSON.stringify(prefs)) +
      '; path=/; max-age=' + 60 * 60 * 24 * 365 + '; SameSite=Lax';
    window.dataLayer.push({ event: 'cookie-preferences-updated', cookiePreferences: prefs });
    notice.classList.add('fully-hidden');
    confirmBox.classList.remove('fully-hidden');
  }

  var existing = getPrefs();
  if (existing) {
    notice.classList.add('fully-hidden');
    window.dataLayer.push({ event: 'cookie-preferences-loaded', cookiePreferences: existing });
  }

  document.querySelector('.js-accept-all-cookies').addEventListener('click', function () {
    save({ essential: true, usage: true });
  });
  document.querySelector('.js-accept-essential-cookies').addEventListener('click', function () {
    save({ essential: true, usage: false });
  });
})();
