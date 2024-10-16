document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-up'); // Выбираем все элементы с классом fade-up
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`; // Задержка для каждого элемента
        element.classList.add('fade-up'); // Добавляем класс для анимации
    });
});
