// script.js

function toggleMode() {
    const html = document.documentElement;
    const img = document.getElementById('avatar-img');

    // Alterna a classe 'light' no elemento <html>
    html.classList.toggle("light");

    // Lógica para Trocar a Imagem do Perfil
    if (html.classList.contains("light")) {
        // Se estiver no MODO LIGHT:
        // Assume que existe o arquivo 'avatar-light.png'
        img.setAttribute("src", "./assets/avatar-light.png");
        img.setAttribute("alt", "Foto de Lucas Alves sorrindo, usando óculos de sol, em modo light.");
    } else {
        // Se estiver no MODO DARK (retornando):
        // Assume que o arquivo base é 'avatar.png' (Corrigindo o possível erro 'avata.png')
        img.setAttribute("src", "./assets/avatar.png");
        img.setAttribute("alt", "Foto de Lucas Alves sorrindo, usando óculos de sol, em modo dark.");
    }
}