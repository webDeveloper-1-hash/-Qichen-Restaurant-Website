
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });

    // Hero Slider
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      slides[index].classList.add('active');
      dots[index].classList.add('active');
      currentSlide = index;
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function startSlider() {
      slideInterval = setInterval(nextSlide, 5000);
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        clearInterval(slideInterval);
        showSlide(index);
        startSlider();
      });
    });

    startSlider();

    // Menu Category Filter
    const menuCategories = document.querySelectorAll('.menu-category');
    const menuItems = document.querySelectorAll('.menu-item');

    menuCategories.forEach(category => {
      category.addEventListener('click', () => {
        menuCategories.forEach(c => c.classList.remove('active'));
        category.classList.add('active');

        const filter = category.dataset.category;

        menuItems.forEach(item => {
          if (filter === 'all' || item.dataset.category === filter) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

    // Gallery Filter
    const galleryFilters = document.querySelectorAll('.gallery-filter');
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryFilters.forEach(filter => {
      filter.addEventListener('click', () => {
        galleryFilters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');

        const filterValue = filter.dataset.filter;

        galleryItems.forEach(item => {
          if (filterValue === 'all' || item.dataset.category === filterValue) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

    // Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = lightbox.querySelector('span');

    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
      });
    });

    closeLightbox.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });

    // Form Submissions
    document.getElementById('bookingForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your booking request! We will confirm shortly.');
      this.reset();
    });

    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you within 24 hours.');
      this.reset();
    });

    // Newsletter
    document.querySelector('.newsletter button').addEventListener('click', function() {
      const email = document.querySelector('.newsletter input').value;
      if (email) {
        alert('Thank you for subscribing to our newsletter!');
        document.querySelector('.newsletter input').value = '';
      } else {
        alert('Please enter your email address.');
      }
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Header Scroll Effect
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (window.scrollY > 100) {
        header.style.padding = '10px 0';
      } else {
        header.style.padding = '20px 0';
      }
    });
