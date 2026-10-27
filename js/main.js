/* ==========================================================================
   LUNARA — Main JavaScript
   Navbar scroll, animations, lightbox, smooth scroll
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Navbar scroll effect ----------
  const handleNavbarScroll = () => {
    const navbar = document.querySelector('.header-lunara');
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    }
  };
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  // Call once on load in case page is already scrolled
  handleNavbarScroll();

  // ---------- Scroll-triggered animations (IntersectionObserver) ----------
  const animatedEls = document.querySelectorAll('.animate-on-scroll');
  if (animatedEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    animatedEls.forEach(el => observer.observe(el));
  }

  // ---------- Active nav link highlight ----------
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.header-lunara .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ---------- Smooth scroll for same-page anchors ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---------- Counter animation ----------
  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-counter'));
          const suffix = el.getAttribute('data-suffix') || '';
          let current = 0;
          const step = Math.ceil(target / 60);
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = current.toLocaleString() + suffix;
          }, 25);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => counterObserver.observe(c));
  }

  // ---------- Chatbot Integration ----------
  const chatbotHTML = `
    <style>
      @keyframes chatbotPulse {
        0%, 100% { box-shadow: 0 0 0 0 rgba(255,45,117,0.5); }
        50% { box-shadow: 0 0 0 12px rgba(255,45,117,0); }
      }
      #chatbot-toggle { animation: chatbotPulse 2.5s infinite; }
      #chatbot-toggle:hover { transform: scale(1.1) !important; }
      #chatbot-messages::-webkit-scrollbar { width: 4px; }
      #chatbot-messages::-webkit-scrollbar-track { background: transparent; }
      #chatbot-messages::-webkit-scrollbar-thumb { background: rgba(255,45,117,0.4); border-radius: 4px; }
      .chatbot-pill:hover { opacity: 0.8; transform: scale(1.03); }
    </style>
    <div id="lunara-chatbot" style="position:fixed;bottom:24px;right:24px;z-index:9999;font-family:'Inter',sans-serif;">
      <!-- Chat Window -->
      <div id="chatbot-window" style="display:none;width:330px;max-height:480px;background:#0f0f1a;border:1px solid rgba(255,45,117,0.25);border-radius:20px;box-shadow:0 15px 50px rgba(0,0,0,0.7);flex-direction:column;overflow:hidden;margin-bottom:15px;">
        <!-- Header -->
        <div style="background:linear-gradient(135deg,#ff2d75,#a855f7);padding:14px 16px;display:flex;justify-content:space-between;align-items:center;gap:10px;">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-size:1rem;">🤖</div>
            <div>
              <div style="font-weight:700;font-size:0.95rem;color:white;">Lunara Assistant</div>
              <div style="font-size:0.72rem;color:rgba(255,255,255,0.7);display:flex;align-items:center;gap:5px;"><span style="width:7px;height:7px;border-radius:50%;background:#00ff88;display:inline-block;"></span> Online</div>
            </div>
          </div>
          <button id="chatbot-close" style="background:rgba(255,255,255,0.1);border:none;color:white;font-size:1rem;cursor:pointer;border-radius:50%;width:30px;height:30px;display:flex;align-items:center;justify-content:center;transition:background 0.2s;">✕</button>
        </div>
        <!-- Messages -->
        <div id="chatbot-messages" style="flex-grow:1;padding:14px;background:rgba(0,0,0,0.3);overflow-y:auto;display:flex;flex-direction:column;gap:10px;font-size:0.88rem;min-height:250px;max-height:300px;">
          <div style="background:rgba(255,255,255,0.08);padding:10px 13px;border-radius:14px 14px 14px 4px;align-self:flex-start;max-width:85%;color:rgba(255,255,255,0.9);line-height:1.5;">
            Hi there! 👋 I'm Luna, your nightlife assistant. How can I help you?
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;">
            <button class="chatbot-pill" data-reply="For FAQs, visit our Help Center or ask me anything below!" style="background:rgba(255,255,255,0.05);color:#06b6d4;border:1px solid rgba(6,182,212,0.5);padding:5px 11px;border-radius:20px;cursor:pointer;font-size:0.78rem;transition:all 0.2s;">📋 FAQs</button>
            <button class="chatbot-pill" data-reply="For support, email us at support@lunara.buzz — we respond within 24 hours!" style="background:rgba(255,255,255,0.05);color:#ff2d75;border:1px solid rgba(255,45,117,0.5);padding:5px 11px;border-radius:20px;cursor:pointer;font-size:0.78rem;transition:all 0.2s;">🎧 User Support</button>
            <button class="chatbot-pill" data-reply="You can navigate to: Home, About, Safety Check, Partners, or Contact Us!" style="background:rgba(255,255,255,0.05);color:#a855f7;border:1px solid rgba(168,85,247,0.5);padding:5px 11px;border-radius:20px;cursor:pointer;font-size:0.78rem;transition:all 0.2s;">🗺️ Navigation</button>
            <button class="chatbot-pill" data-reply="To book a table, browse our partner venues and hit 'View Club' to proceed!" style="background:rgba(255,255,255,0.05);color:#f0c040;border:1px solid rgba(240,192,64,0.5);padding:5px 11px;border-radius:20px;cursor:pointer;font-size:0.78rem;transition:all 0.2s;">🎟️ Book a Table</button>
          </div>
        </div>
        <!-- Input -->
        <div style="padding:10px 14px;background:#121212;border-top:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;gap:8px;">
          <input id="chatbot-input" type="text" placeholder="Ask me anything…" style="flex-grow:1;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:white;outline:none;padding:8px 12px;border-radius:20px;font-size:0.85rem;font-family:inherit;">
          <button id="chatbot-send" style="background:linear-gradient(135deg,#ff2d75,#a855f7);border:none;color:white;cursor:pointer;font-size:1rem;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform 0.2s;">➤</button>
        </div>
      </div>
      <!-- Floating Button -->
      <button id="chatbot-toggle" style="width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#ff2d75,#a855f7);border:none;color:white;font-size:1.5rem;cursor:pointer;display:flex;justify-content:center;align-items:center;transition:transform 0.3s ease;margin-left:auto;">
        💬
      </button>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', chatbotHTML);

  const chatbotToggle = document.getElementById('chatbot-toggle');
  const chatbotWindow = document.getElementById('chatbot-window');
  const chatbotClose  = document.getElementById('chatbot-close');
  const chatbotInput  = document.getElementById('chatbot-input');
  const chatbotSend   = document.getElementById('chatbot-send');
  const chatbotMsgs   = document.getElementById('chatbot-messages');

  function addMessage(text, isUser = false) {
    const div = document.createElement('div');
    div.style.cssText = isUser
      ? 'background:linear-gradient(135deg,#ff2d75,#a855f7);padding:10px 13px;border-radius:14px 14px 4px 14px;align-self:flex-end;max-width:85%;color:white;line-height:1.5;margin-top:4px;'
      : 'background:rgba(255,255,255,0.08);padding:10px 13px;border-radius:14px 14px 14px 4px;align-self:flex-start;max-width:85%;color:rgba(255,255,255,0.9);line-height:1.5;margin-top:4px;';
    div.textContent = text;
    chatbotMsgs.appendChild(div);
    chatbotMsgs.scrollTop = chatbotMsgs.scrollHeight;
  }

  function handleSend() {
    const val = chatbotInput.value.trim();
    if (!val) return;
    addMessage(val, true);
    chatbotInput.value = '';
    setTimeout(() => {
      addMessage("Thanks for reaching out! For detailed help, email us at support@lunara.buzz 🌙", false);
    }, 600);
  }

  chatbotToggle.addEventListener('click', () => {
    const isOpen = chatbotWindow.style.display !== 'none';
    chatbotWindow.style.display = isOpen ? 'none' : 'flex';
    chatbotToggle.textContent = isOpen ? '💬' : '✕';
  });

  chatbotClose.addEventListener('click', () => {
    chatbotWindow.style.display = 'none';
    chatbotToggle.textContent = '💬';
  });

  chatbotSend.addEventListener('click', handleSend);
  chatbotInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleSend(); });


});


