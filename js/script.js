const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');

if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const galleryImages = [
  'assets/product-1.svg',
  'assets/product-2.svg',
  'assets/product-3.svg',
  'assets/product-4.svg',
];

const galleryMainImage = document.getElementById('gallery-main-image');
const thumbButtons = document.querySelectorAll('.thumb');
const dotButtons = document.querySelectorAll('.dot');
const prevButton = document.querySelector('.gallery-arrow-prev');
const nextButton = document.querySelector('.gallery-arrow-next');
let currentImageIndex = 0;

function updateGallery(index) {
  currentImageIndex = (index + galleryImages.length) % galleryImages.length;
  galleryMainImage.src = galleryImages[currentImageIndex];

  thumbButtons.forEach((button, idx) => {
    button.classList.toggle('is-active', idx === currentImageIndex);
  });

  dotButtons.forEach((button, idx) => {
    button.classList.toggle('is-active', idx === currentImageIndex);
  });
}

thumbButtons.forEach((button) => {
  button.addEventListener('click', () => updateGallery(Number(button.dataset.image)));
});

dotButtons.forEach((button) => {
  button.addEventListener('click', () => updateGallery(Number(button.dataset.image)));
});

prevButton?.addEventListener('click', () => updateGallery(currentImageIndex - 1));
nextButton?.addEventListener('click', () => updateGallery(currentImageIndex + 1));

const productForm = document.getElementById('product-form');
const selectionSummary = document.getElementById('selection-summary');
const addToCartLink = document.getElementById('add-to-cart-link');
const purchaseOptionCards = document.querySelectorAll('.purchase-option');
const optionCards = document.querySelectorAll('.option-card');

const fragranceLabels = {
  'floral-veil': 'Floral Veil',
  'midnight-amber': 'Midnight Amber',
  'citrus-bloom': 'Citrus Bloom',
};

const purchaseLabels = {
  'one-time': 'One-time purchase',
  'single-subscription': 'Single Subscription',
  'double-subscription': 'Double Subscription',
};

function syncSelectedCards() {
  optionCards.forEach((card) => {
    const input = card.querySelector('input');
    card.classList.toggle('is-selected', input.checked);
  });
}

function toggleSubscriptionPanels(selectedPurchase) {
  document.querySelectorAll('.subscription-panel').forEach((panel) => {
    panel.classList.remove('is-open');
  });

  if (selectedPurchase === 'single-subscription') {
    document.getElementById('single-subscription')?.classList.add('is-open');
  }

  if (selectedPurchase === 'double-subscription') {
    document.getElementById('double-subscription')?.classList.add('is-open');
  }
}

function updateAddToCart() {
  const formData = new FormData(productForm);
  const fragrance = formData.get('fragrance');
  const purchaseType = formData.get('purchaseType');

  selectionSummary.textContent = `${fragranceLabels[fragrance]} · ${purchaseLabels[purchaseType]}`;
  addToCartLink.href = `https://example.com/cart?fragrance=${encodeURIComponent(fragrance)}&purchase=${encodeURIComponent(purchaseType)}`;

  toggleSubscriptionPanels(purchaseType);
  syncSelectedCards();
}

productForm?.addEventListener('change', updateAddToCart);
updateAddToCart();

const statsGrid = document.getElementById('stats-grid');
const counters = document.querySelectorAll('.count-up');
let hasCounted = false;

function animateCount(counter) {
  const target = Number(counter.dataset.target);
  const duration = 1500;
  const startTime = performance.now();

  function step(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    counter.textContent = String(Math.floor(progress * target));

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      counter.textContent = String(target);
    }
  }

  requestAnimationFrame(step);
}

const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasCounted) {
        counters.forEach(animateCount);
        hasCounted = true;
        statsObserver.disconnect();
      }
    });
  },
  { threshold: 0.35 }
);

if (statsGrid) {
  statsObserver.observe(statsGrid);
}
