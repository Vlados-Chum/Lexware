"use strict";

// TABS FIRST

document.addEventListener("DOMContentLoaded", function() {
    const TabsParent = document.querySelector('[data-tabs-first]');
    if (!TabsParent) return;

    const tabsButtons = Array.from(TabsParent.querySelectorAll('[data-tabs-button]'));
    const tabsElements = Array.from(TabsParent.querySelectorAll('[data-tabs-element]'));

    tabsElements.forEach((el, i) => {
        el.hidden = i !== 0;
    });

    if (tabsButtons.length > 0) {
        tabsButtons[0].classList.add('active');
    }

    TabsParent.addEventListener("click", function(e) {
        const clicked = e.target.closest('[data-tabs-button]');
        if (!clicked) return;

        const activeButton = TabsParent.querySelector('[data-tabs-button].active');
        if (activeButton) activeButton.classList.remove('active');

        clicked.classList.add('active');
        const index = tabsButtons.indexOf(clicked);

        tabsElements.forEach((tab, i) => {
            tab.hidden = i !== index;
        });
    });
});

// TABS SECOND

document.addEventListener("DOMContentLoaded", function() {
    const TabsParent = document.querySelector('[data-tabs-second]');
    if (!TabsParent) return;

    const tabsButtons = Array.from(TabsParent.querySelectorAll('[data-tabs-button]'));
    const tabsElements = Array.from(TabsParent.querySelectorAll('[data-tabs-element]'));

    tabsElements.forEach((el, i) => {
        el.hidden = i !== 0;
    });

    if (tabsButtons.length > 0) {
        tabsButtons[0].classList.add('active');
    }

    TabsParent.addEventListener("click", function(e) {
        const clicked = e.target.closest('[data-tabs-button]');
        if (!clicked) return;

        const activeButton = TabsParent.querySelector('[data-tabs-button].active');
        if (activeButton) activeButton.classList.remove('active');

        clicked.classList.add('active');
        const index = tabsButtons.indexOf(clicked);

        tabsElements.forEach((tab, i) => {
            tab.hidden = i !== index;
        });
    });
});

// TABS THIRD

document.addEventListener("DOMContentLoaded", function() {
    const TabsParent = document.querySelector('[data-tabs-third]');
    if (!TabsParent) return;

    const tabsButtons = Array.from(TabsParent.querySelectorAll('[data-tabs-button]'));
    const tabsElements = Array.from(TabsParent.querySelectorAll('[data-tabs-element]'));

    tabsElements.forEach((el, i) => {
        el.hidden = i !== 0;
    });

    if (tabsButtons.length > 0) {
        tabsButtons[0].classList.add('active');
    }

    TabsParent.addEventListener("click", function(e) {
        const clicked = e.target.closest('[data-tabs-button]');
        if (!clicked) return;

        const activeButton = TabsParent.querySelector('[data-tabs-button].active');
        if (activeButton) activeButton.classList.remove('active');

        clicked.classList.add('active');
        const index = tabsButtons.indexOf(clicked);

        tabsElements.forEach((tab, i) => {
            tab.hidden = i !== index;
        });
    });
});

// SLIDER WATCH

document.addEventListener("DOMContentLoaded", function () {
    const sliderWatch = document.querySelectorAll(".my-money__swiper");

    if (sliderWatch.length) {
        sliderWatch.forEach((container) => {

            const swiperWatch = new Swiper(container, {
                slidesPerView: 1,
                loop: true,

                navigation: {
                prevEl: container.querySelector(".my-money__swiper-button-prev"),
                nextEl: container.querySelector(".my-money__swiper-button-next"),
            },

            pagination: {
                el: container.querySelector(".my-money__swiper-pagination"),
                clickable: true,
            },
                
            });
        });
    }
});

// MODALS

   document.addEventListener('DOMContentLoaded', function () {
   const triggers = document.querySelectorAll('.new-functions__video');
   const modal = document.querySelector('.new-functions__modal');

   if (!modal || !triggers.length) return;

   const modalInner = modal.querySelector('.new-functions__modal-inner');
   const modalVideo = modal.querySelector('video');

   if (!modalInner || !modalVideo) return;

   function openModal(src) {
      if (!src) return;

      modalVideo.src = src;
      modalVideo.currentTime = 0;
      modal.classList.add('active');

      const playPromise = modalVideo.play();
      if (playPromise && typeof playPromise.then === 'function') {
         playPromise.catch(() => {
         });
      }
   }

   function closeModal() {
      modal.classList.remove('active');
      modalVideo.pause();
      modalVideo.currentTime = 0;
      modalVideo.removeAttribute('src');
      modalVideo.load();
   }

   triggers.forEach(elem => {
      elem.addEventListener('click', (e) => {
         e.preventDefault();
         const src = elem.dataset.video;
         openModal(src);
      });
   });

   document.addEventListener('click', (e) => {
      if (!modal.classList.contains('active')) return;

      const target = e.target;

      if (modalInner.contains(target)) return;

      if ([...triggers].some(tr => tr.contains(target))) return;

      closeModal();
   });

   document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
         closeModal();
      }
   });
});

// SLIDER FEEDBACK

document.addEventListener("DOMContentLoaded", function () {
    const sliderFeedbacks = document.querySelectorAll(".feedback__block");

    if (sliderFeedbacks.length) {
        sliderFeedbacks.forEach((container) => {
            const swiperFeedback = new Swiper(container, {
                slidesPerView: 1,
                spaceBetween: 24,
                loop: true,
                breakpoints: {
            480: {
               slidesPerView: 1,
            },
            576: {
               slidesPerView: 1,
            },
            768: {
               slidesPerView: 1.4,
            },
            1024: {
               slidesPerView: 1.8, 
            }
         },

                navigation: {
                    prevEl: container.querySelector(".feedback__swiper-button-prev"),
                    nextEl: container.querySelector(".feedback__swiper-button-next"),
                },

                pagination: {
                    el: container.querySelector(".feedback__swiper-pagination"),
                    clickable: true,
                },

                on: {
                    init: equalizeSlides,
                    resize: equalizeSlides,
                    update: equalizeSlides,
                },
            });

            function equalizeSlides() {
                const slides = container.querySelectorAll(".feedback__slide");
                if (!slides.length) return;

                let maxHeight = 0;
                slides.forEach(slide => slide.style.height = "auto");

                slides.forEach(slide => {
                    const h = slide.offsetHeight;
                    if (h > maxHeight) maxHeight = h;
                });

                slides.forEach(slide => slide.style.height = `${maxHeight}px`);
            }

            window.addEventListener("load", () => {
                setTimeout(equalizeSlides, 50);
            });

        });
    }
});

// SLIDER EVALUATION

document.addEventListener("DOMContentLoaded", function () {
    const sliderEvaluation = document.querySelectorAll(".evaluation__swiper");

    if (sliderEvaluation.length) {
        sliderEvaluation.forEach((container) => {

            const swiperEvaluation = new Swiper(container, {
                slidesPerView: 2,
                loop: true,
                spaceBetween: 16,
                slidesPerGroup: 1,
                breakpoints: {
            480: {
               slidesPerView: 1,
            },
            576: {
               slidesPerView: 1,
            },
            768: {
               slidesPerView: 1.2,
            },
            1024: {
               slidesPerView: 2, 
            }
         },

                navigation: {
                prevEl: container.querySelector(".evaluation__swiper-button-prev"),
                nextEl: container.querySelector(".evaluation__swiper-button-next"),
            },

            pagination: {
                el: container.querySelector(".evaluation__swiper-pagination"),
                clickable: true,
            },
                
            });
        });
    }
});



// SLIDER APPS

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".apps__swiper").forEach((container) => {
    const swiperApps = new Swiper(container, {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      observer: true,
      observeParents: true,
      preloadImages: true,
      watchSlidesProgress: true,

      navigation: {
        prevEl: container.querySelector(".apps__swiper-button-prev"),
        nextEl: container.querySelector(".apps__swiper-button-next"),
      },
      pagination: {
        el: container.querySelector(".apps__swiper-pagination"),
        clickable: true,
      },
      on: {
        imagesReady() { this.update(); },
        resize() { this.update(); },
      },
    });

    function equalizeSlides() {
      const slides = container.querySelectorAll(".apps__slide");
      if (!slides.length) return;
      slides.forEach(s => s.style.height = "auto");
      const max = Math.max(...[...slides].map(s => s.offsetHeight));
      slides.forEach(s => s.style.height = max + "px");
    }

    window.addEventListener("load", () => {
      swiperApps.update();
    });
  });
});

// ONE-SYSTEM TABS-SLIDER

document.addEventListener('DOMContentLoaded', () => {
  const tabSliders = document.querySelectorAll('.tabs-slider');

  tabSliders.forEach(root => {
    const tabButtons = [...root.querySelectorAll('.tabs-slider__btn')];
    const swiperContainer = root.querySelector('.tabs-slider__swiper');
    const nextBtn = root.querySelector('.tabs-slider__swiper-button-next');
    const prevBtn = root.querySelector('.tabs-slider__swiper-button-prev');
    const tabsInfo = document.querySelectorAll('.one-system__wrapper-tabs'); 

    const swiperTabs = new Swiper(swiperContainer, {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: false,
      pagination: {
        el: root.querySelector('.tabs-slider__pagination'),
        clickable: true,
      },
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      on: {
        init() {
          setActiveTab(this.realIndex);
          setActiveInfo(this.realIndex); 
        },
        slideChange() {
          setActiveTab(this.realIndex);
          setActiveInfo(this.realIndex); 
        },
      },
    });

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const index = Number(btn.dataset.slide) || 0;
        swiperTabs.slideTo(index, 400);
      });
    });

    function setActiveTab(realIndex) {
      tabButtons.forEach(b => b.classList.remove('is-active'));
      const btn = tabButtons[realIndex];
      if (btn) btn.classList.add('is-active');
    }

    function setActiveInfo(index) {
      tabsInfo.forEach((section, i) => {
        section.classList.remove('active');
        if (i === index) {
          section.classList.add('active');
        }
      });
    }
  });
});

// FIRST VIDEO MUTED

document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('videoIframe');
    const iframeWindow = iframe.contentWindow;
    let isMuted = true;

    const videoContainer = document.getElementById('videoContainer');
    
    videoContainer.addEventListener('click', function() {
        if (isMuted) {
            iframeWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
            isMuted = false;
        } else {
            iframeWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
            isMuted = true;
        }
    });
});

// WINNER TABS-SLIDER

document.addEventListener('DOMContentLoaded', function () {
    const winnerSliders = document.querySelectorAll('.winner-slider');

    winnerSliders.forEach(root => {
        const winnerButtons = [...root.querySelectorAll('.winner-slider__btn')];
        const swiperContainer = root.querySelector('.winner-slider__swiper');
        const nextBtn = root.querySelector('.winner-slider__swiper-button-next');
        const prevBtn = root.querySelector('.winner-slider__swiper-button-prev');

        const swiperWinner = new Swiper(swiperContainer, {
            slidesPerView: 1,
            spaceBetween: 16,
            loop: false,
            pagination: {
                el: root.querySelector('.winner-slider__pagination'),
                clickable: true,
            },
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },
            on: {
                init() {
                    setActiveTab(this.realIndex); 
                },
                slideChange() {
                    setActiveTab(this.realIndex);
                },
            },
        });

        
        winnerButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const index = Number(btn.dataset.slide); 
                swiperWinner.slideTo(index, 400); 
            });
        });

        function setActiveTab(realIndex) {
            winnerButtons.forEach(b => b.classList.remove('is-active')); 
            const btn = winnerButtons[realIndex];
            if (btn) btn.classList.add('is-active'); 
        }
    });
});

// THUMB SLIDER

document.addEventListener('DOMContentLoaded', function () {
   const sections = document.querySelectorAll('.worktime');

   if (!sections.length) return;

   sections.forEach(function (section) {
      const mainSliderEl = section.querySelector('.worktime__slider');
      const thumbsSliderEl = section.querySelector('.worktime__thumbs');

      if (!mainSliderEl || !thumbsSliderEl) return;

      const prevBtn = section.querySelector('.worktime__swiper-button-prev');
      const nextBtn = section.querySelector('.worktime__swiper-button-next');
      const mainPaginationEl = section.querySelector('.worktime__pagination');
      const thumbsPaginationEl = section.querySelector('.worktime__pagination-thumb');

      const thumbsOptions = {
         slidesPerView: 2,
         spaceBetween: 10,
         watchSlidesProgress: true,
         slideToClickedSlide: true,
         breakpoints: {
            480: {
               slidesPerView: 3,
            },
            576: {
               slidesPerView: 4,
            },
            768: {
               slidesPerView: 4,
            },
            1024: {
               slidesPerView: 5, 
            }
         }
      };

      if (thumbsPaginationEl) {
         thumbsOptions.pagination = {
            el: thumbsPaginationEl,
            clickable: true
         };
      }

      const thumbsSwiper = new Swiper(thumbsSliderEl, thumbsOptions);

      const mainOptions = {
         slidesPerView: 1,       
         speed: 600,
         centeredSlides: false,
         spaceBetween: 150,
         navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn
         },
         thumbs: {
            swiper: thumbsSwiper
         },
         observer: true,
         observeParents: true
      };

      if (mainPaginationEl) {
         mainOptions.pagination = {
            el: mainPaginationEl,
            clickable: true
         };
      }

      const mainSwiper = new Swiper(mainSliderEl, mainOptions);
   });
});


// PAGE SIDE

document.addEventListener('DOMContentLoaded', function () {
   const fixedSide = document.querySelector('.account__fixed-side');
   const accountSection = document.getElementById('account');

   if (!fixedSide || !accountSection) return;

   const menuLinks = fixedSide.querySelectorAll('a[href^="#"]');
   if (!menuLinks.length) return;

   const MOBILE_BREAKPOINT = 480;

   const items = [];

   menuLinks.forEach(link => {
      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;

      const id = hash.slice(1);
      const section = document.getElementById(id);
      if (!section) return;

      const li = link.closest('li');
      if (!li) return;

      items.push({ id, section, li, link });
   });

   if (!items.length) return;

   let accountTop = accountSection.getBoundingClientRect().top + window.scrollY;

   const isMobile = () => window.innerWidth < MOBILE_BREAKPOINT;

   function clearActive() {
      items.forEach(i => i.li.classList.remove('is-active'));
   }

   function setActiveBySection(section) {
      const item = items.find(i => i.section === section);
      if (!item) return;

      clearActive();
      item.li.classList.add('is-active');
   }

   function handleMobileVisibility() {
      if (isMobile()) {
         fixedSide.classList.remove('is-visible');
         fixedSide.classList.add('is-hidden-mobile');
         clearActive();
         return true; // значит, сейчас мобильный вид и дальше логику не запускаем
      } else {
         fixedSide.classList.remove('is-hidden-mobile');
         return false;
      }
   }

   function updateOnScroll() {
      // если мобильный, просто выходим
      if (handleMobileVisibility()) return;

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const viewportBottom = scrollY + viewportHeight;
      const viewportCenter = scrollY + viewportHeight / 2;

      if (viewportBottom > accountTop) {
         fixedSide.classList.add('is-visible');
      } else {
         fixedSide.classList.remove('is-visible');
      }

      if (viewportCenter < accountTop) {
         clearActive();
         return;
      }

      let current = null;
      let currentTop = -Infinity;

      items.forEach(item => {
         const rect = item.section.getBoundingClientRect();
         const top = rect.top + window.scrollY;
         const bottom = top + item.section.offsetHeight;

         if (viewportCenter >= top && viewportCenter < bottom) {
            if (top > currentTop) {
               currentTop = top;
               current = item;
            }
         }
      });

      clearActive();

      if (current) {
         current.li.classList.add('is-active');
      }
   }

   menuLinks.forEach(link => {
      link.addEventListener('click', function () {
         const hash = this.getAttribute('href');
         if (!hash || hash === '#') return;

         const id = hash.slice(1);
         const section = document.getElementById(id);
         if (!section) return;

         setTimeout(updateOnScroll, 200);
      });
   });

   window.addEventListener('resize', () => {
      accountTop = accountSection.getBoundingClientRect().top + window.scrollY;
      updateOnScroll();
   });

   window.addEventListener('scroll', updateOnScroll);

   const initialHash = window.location.hash;
   if (initialHash) {
      const link = fixedSide.querySelector('a[href="' + initialHash + '"]');
      if (link) {
         const id = initialHash.slice(1);
         const section = document.getElementById(id);
         if (section) {
            setTimeout(() => {
               setActiveBySection(section);
               updateOnScroll();
            }, 200);
         }
      } else {
         updateOnScroll();
      }
   } else {
      updateOnScroll();
   }
});
