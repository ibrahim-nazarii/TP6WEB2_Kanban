// Smooth active-link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((a) => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((s) => observer.observe(s));

// Contact form handler
function handleSubmit(e) {
  e.preventDefault();
  const feedback = document.getElementById('feedback');
  feedback.textContent = '✓ Message sent! We\'ll be in touch soon.';
  e.target.reset();
  setTimeout(() => (feedback.textContent = ''), 4000);
}
