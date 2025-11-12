"use strict";

// BURGER MENU
document.addEventListener("click", handleClick);

function handleClick(e) {
    const targetElement = e.target;
    if (targetElement.closest('.header__burger')) {
        document.body.classList.toggle('burger-open');
        document.body.classList.toggle('no-scroll');
    }
}

// TABS FIRST

document.addEventListener("DOMContentLoaded", function() {
    const TabsParent = document.querySelector('[data-tabs-first]');
    if (!TabsParent) return;

    const tabsButtons = Array.from(TabsParent.querySelectorAll('[data-tabs-button]'));
    const tabsElements = Array.from(TabsParent.querySelectorAll('[data-tabs-element]'));

    // Скрываем все элементы, кроме первого
    tabsElements.forEach((el, i) => {
        el.hidden = i !== 0;
    });

    // Активируем первый таб
    if (tabsButtons.length > 0) {
        tabsButtons[0].classList.add('active');
    }

    // Обработка кликов по табам
    TabsParent.addEventListener("click", function(e) {
        const clicked = e.target.closest('[data-tabs-button]');
        if (!clicked) return;

        const activeButton = TabsParent.querySelector('[data-tabs-button].active');
        if (activeButton) activeButton.classList.remove('active');

        clicked.classList.add('active');
        const index = tabsButtons.indexOf(clicked);

        // Скрываем/показываем контент
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

    // Скрываем все элементы, кроме первого
    tabsElements.forEach((el, i) => {
        el.hidden = i !== 0;
    });

    // Активируем первый таб
    if (tabsButtons.length > 0) {
        tabsButtons[0].classList.add('active');
    }

    // Обработка кликов по табам
    TabsParent.addEventListener("click", function(e) {
        const clicked = e.target.closest('[data-tabs-button]');
        if (!clicked) return;

        const activeButton = TabsParent.querySelector('[data-tabs-button].active');
        if (activeButton) activeButton.classList.remove('active');

        clicked.classList.add('active');
        const index = tabsButtons.indexOf(clicked);

        // Скрываем/показываем контент
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

    // Скрываем все элементы, кроме первого
    tabsElements.forEach((el, i) => {
        el.hidden = i !== 0;
    });

    // Активируем первый таб
    if (tabsButtons.length > 0) {
        tabsButtons[0].classList.add('active');
    }

    // Обработка кликов по табам
    TabsParent.addEventListener("click", function(e) {
        const clicked = e.target.closest('[data-tabs-button]');
        if (!clicked) return;

        const activeButton = TabsParent.querySelector('[data-tabs-button].active');
        if (activeButton) activeButton.classList.remove('active');

        clicked.classList.add('active');
        const index = tabsButtons.indexOf(clicked);

        // Скрываем/показываем контент
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

    const newFunctionsVideo = document.querySelectorAll('.new-functions__video');
    const newFunctionsModal = document.querySelector('.new-functions__modal')

    newFunctionsVideo.forEach(elem => {
        elem.addEventListener('click', (e) => {
            e.preventDefault()

            newFunctionsModal.classList.add('active');
            newFunctionsModal.querySelector('video').src = elem.dataset.video
        })
    });

        newFunctionsModal.addEventListener('click', (e) => {
        if(e.target !== e.currentTarget) return;

        newFunctionsModal.classList.remove('active');
        newFunctionsModal.querySelector('video').src = ''
    })

// SLIDER FEEDBACK

document.addEventListener("DOMContentLoaded", function () {
    const sliderFeedbacks = document.querySelectorAll(".feedback__block");

    if (sliderFeedbacks.length) {
        sliderFeedbacks.forEach((container) => {
            const swiperFeedback = new Swiper(container, {
                slidesPerView: 1.7,
                spaceBetween: 24,
                loop: true,

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

            // Функция для выравнивания высоты слайдов
            function equalizeSlides() {
                const slides = container.querySelectorAll(".feedback__slide");
                if (!slides.length) return;

                let maxHeight = 0;
                // Сбрасываем высоту всех слайдов перед вычислением
                slides.forEach(slide => slide.style.height = "auto");

                // Находим максимальную высоту среди слайдов
                slides.forEach(slide => {
                    const h = slide.offsetHeight;
                    if (h > maxHeight) maxHeight = h;
                });

                // Устанавливаем одинаковую максимальную высоту для всех слайдов
                slides.forEach(slide => slide.style.height = `${maxHeight}px`);
            }

            // На случай загрузки изображений позже
            window.addEventListener("load", () => {
                // Используем setTimeout, чтобы дать время на загрузку изображений
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
                slidesPerView: 2.2,
                spaceBetween: 16,
                loop: true,

                navigation: {
                    prevEl: container.querySelector(".evaluation__swiper-button-prev"),
                    nextEl: container.querySelector(".evaluation__swiper-button-next"),
                },

                pagination: {
                    el: container.querySelector(".evaluation__swiper-pagination"),
                    clickable: true,
                },

                on: {
                    init: equalizeSlides,
                    resize: equalizeSlides,
                    update: equalizeSlides,
                },
            });

            // Функция для выравнивания высоты слайдов
            function equalizeSlides() {
                const slides = container.querySelectorAll(".evaluation__slide");
                if (!slides.length) return;

                let maxHeight = 0;
                // Сбрасываем высоту всех слайдов перед вычислением
                slides.forEach(slide => slide.style.height = "auto");

                // Находим максимальную высоту среди слайдов
                slides.forEach(slide => {
                    const h = slide.offsetHeight;
                    if (h > maxHeight) maxHeight = h;
                });

                // Устанавливаем одинаковую максимальную высоту для всех слайдов
                slides.forEach(slide => slide.style.height = `${maxHeight}px`);
            }

            // На случай загрузки изображений позже
            window.addEventListener("load", () => {
                // Используем setTimeout, чтобы дать время на загрузку изображений
                setTimeout(equalizeSlides, 50);
            });

        });
    }
});

// SLIDER APPS

document.addEventListener("DOMContentLoaded", function () {
    const sliderApps = document.querySelectorAll(".apps__swiper");

    if (sliderApps.length) {
        sliderApps.forEach((container) => {
            const swiperApps = new Swiper(container, {
                slidesPerView: 1,
                loop: true,

                navigation: {
                    prevEl: container.querySelector(".apps__swiper-button-prev"),
                    nextEl: container.querySelector(".apps__swiper-button-next"),
                },

                pagination: {
                    el: container.querySelector(".apps__swiper-pagination"),
                    clickable: true,
                },

                on: {
                    init: equalizeSlides,
                    resize: equalizeSlides,
                    update: equalizeSlides,
                },
            });

            // Функция для выравнивания высоты слайдов
            function equalizeSlides() {
                const slides = container.querySelectorAll(".apps__slide");
                if (!slides.length) return;

                let maxHeight = 0;
                // Сбрасываем высоту всех слайдов перед вычислением
                slides.forEach(slide => slide.style.height = "auto");

                // Находим максимальную высоту среди слайдов
                slides.forEach(slide => {
                    const h = slide.offsetHeight;
                    if (h > maxHeight) maxHeight = h;
                });

                // Устанавливаем одинаковую максимальную высоту для всех слайдов
                slides.forEach(slide => slide.style.height = `${maxHeight}px`);
            }

            // На случай загрузки изображений позже
            window.addEventListener("load", () => {
                // Используем setTimeout, чтобы дать время на загрузку изображений
                setTimeout(equalizeSlides, 50);
            });

        });
    }
});
