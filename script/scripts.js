// Script para manipular navegação ativa
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('nav ul li a.active').classList.remove('active');
        this.classList.add('active');
    });
});

// Animação ao clicar nos cards
document.querySelectorAll('.card').forEach((card, index) => {
    card.addEventListener('click', function() {
        alert('Você clicou no prato ' + (index + 1) + '!');
    });
});
