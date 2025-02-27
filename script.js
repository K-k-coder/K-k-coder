document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("fade-in");
});
// Função para redirecionar para o Rickroll
function rickroll() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

// Mostrar o botão secreto ao pressionar Ctrl + Alt + R (desktop) ou toque (mobile)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.altKey && e.key === 'r') {
        document.getElementById('rickroll').style.display = 'inline-block';  // Mostrar o botão
    }
});

// Permitir mostrar o botão também tocando na tela em dispositivos móveis
document.addEventListener('touchstart', function(e) {
    if (e.touches.length === 1) {
        document.getElementById('rickroll').style.display = 'inline-block';  // Mostrar o botão
    }
});
// Função para redirecionar para o Rickroll
function rickroll() {
    window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0";
}
