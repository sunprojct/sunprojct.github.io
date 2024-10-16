// Ждем полной загрузки страницы
window.onload = function() {
    document.body.classList.add('loaded'); // Добавляем класс для плавного появления

    // Анимация для появления кнопок
    const buttons = document.querySelectorAll('.button');
    buttons.forEach((button, index) => {
        button.style.transform = 'translateY(20px)';
        button.style.opacity = '0';
        setTimeout(() => {
            button.style.transition = 'transform 0.5s, opacity 0.5s';
            button.style.transform = 'translateY(0)';
            button.style.opacity = '1';
        }, 1000 + index * 300); // Каждая кнопка появляется с задержкой
    });
};
