// Можно добавить JavaScript для анимации или других функций
window.onload = function() {
    document.body.style.opacity = 0;
    setTimeout(function() {
        document.body.style.transition = 'opacity 1s';
        document.body.style.opacity = 1;
    }, 100);
};

// Анимация для появления элементов
document.querySelectorAll('.button').forEach(button => {
    button.style.transform = 'translateY(20px)';
    button.style.opacity = '0';
    setTimeout(() => {
        button.style.transition = 'transform 0.5s, opacity 0.5s';
        button.style.transform = 'translateY(0)';
        button.style.opacity = '1';
    }, 1000);
});
