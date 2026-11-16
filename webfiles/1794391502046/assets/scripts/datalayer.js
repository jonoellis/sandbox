/* Reconstruction: replace with the real datalayer.js from mygov.scot if needed */
(function () {
  window.dataLayer = window.dataLayer || [];
  var s = document.getElementById('gtm-datalayer') || document.currentScript;
  if (!s) return;
  window.dataLayer.push({
    siteid: s.getAttribute('data-siteid'),
    uuid: s.getAttribute('data-uuid'),
    format: s.getAttribute('data-format'),
    usertype: s.getAttribute('data-usertype'),
    datecreated: s.getAttribute('data-datecreated'),
    lastupdated: s.getAttribute('data-lastupdated')
  });
})();
