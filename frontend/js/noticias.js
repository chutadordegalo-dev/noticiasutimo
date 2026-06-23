function alternartema() {
    var body = document.body;

    if (body.classList.contains("claro")) {
        body.classList.remove("claro");
        body.classList.add("escuro");
    }
    else {
        body.classList.remove("escuro");
        body.classList.add("claro");
    }
}

function mudar_titulo() {
    element.innerText = "Notícias do Mundo";
}

function abrir_lightbox(element) {
    var lightbox = document.getElementById("lightbox");
    var lightbox_img = document.getElementById("lightbox-img");

    lightbox_img.src = element.src;
    lightbox.style.display = "flex";
}

function fechar_lightbox() {
    document.getElementById("lightbox").style.display = "none";
}

async function exibir_noticias() {
    const section = document.getElementById("noticias");
    section.innerHTML = "<h2>Aguarde, carregando documento...</h2>";

    const resposta = await fetch("https://noticias-backend-gudu-3000.up.railway.app/noticias");
    const noticias = await resposta.json();

    var html = "";

    noticias.forEach(noticia => {
        html += `
            <article class="noticia">
                <img src="${noticia.caminho_imagem}" onclick="abrir_lightbox(this)" alt="${noticia.titulo}">
                <h2>${noticia.titulo}</h2>
                <p>${noticia.conteudo}</p>
                <a href="${noticia.link}">Leia mais...</a>
            </article>
        `;
    });

    section.innerHTML = html;
}