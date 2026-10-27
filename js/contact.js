(function () {
  'use strict';
  var form = document.getElementById('contact-form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;
    var data = new FormData(form);
    var topic = data.get('subject');
    var recipient = topic === 'Partnership' ? 'partnerships@lunara.club' : 'support@lunara.buzz';
    var body = 'Name: ' + data.get('name').trim() + '\nEmail: ' + data.get('email').trim();
    if (data.get('phone').trim()) body += '\nPhone: ' + data.get('phone').trim();
    body += '\n\n' + data.get('message').trim();
    var url = 'mailto:' + recipient + '?subject=' + encodeURIComponent('Lunara — ' + topic) + '&body=' + encodeURIComponent(body);
    var fallback = document.getElementById('email-fallback');
    fallback.href = url;
    fallback.hidden = false;
    document.getElementById('contact-status').textContent = 'Your email draft is ready. Send it from your email app to complete your message. If your app does not open, use the draft link below or email ' + recipient + ' directly.';
    window.location.href = url;
  });
})();
