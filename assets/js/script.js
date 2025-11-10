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