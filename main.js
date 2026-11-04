(function () {
  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Mobile nav
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Proposal form validation.
  // NOTE: set the form's `action` attribute to your form handler (e.g. a CRM
  // webhook or Formspree endpoint). Until then, submissions are only validated
  // client-side and are not sent anywhere.
  var form = document.querySelector('.proposal-form');
  if (form) {
    var status = form.querySelector('.form-status');
    form.addEventListener('submit', function (e) {
      var email = form.elements.email;
      var consent = form.elements.consent;
      status.className = 'form-status';

      if (!email.value || !email.checkValidity()) {
        e.preventDefault();
        status.textContent = 'Please enter a valid email address.';
        status.classList.add('error');
        email.focus();
        return;
      }
      if (!consent.checked) {
        e.preventDefault();
        status.textContent = 'Please agree to the terms to continue.';
        status.classList.add('error');
        consent.focus();
        return;
      }

      var action = form.getAttribute('action');
      if (!action || action === '#') {
        e.preventDefault();
        status.textContent = 'Thanks! We’ll be in touch shortly. Prefer to talk now? Call (256) 777-8848.';
        status.classList.add('success');
        form.reset();
      }
    });
  }
})();
