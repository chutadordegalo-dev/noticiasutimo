function alternartema() {
    document.body.classList.toggle("escuro");
}

document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.querySelector(".formulario");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const titulo = document.querySelector('input[type="text"]').value.trim();
        const autor = document.querySelectorAll('input[type="text"]')[1].value.trim();
        const imagem = document.querySelector('input[type="url"]').value.trim();
        const categoria = document.querySelector("select").value;
        const resumo = document.querySelector("textarea").value.trim();

        if (
            titulo === "" ||
            autor === "" ||
            imagem === "" ||
            resumo === ""
        ) {
            alert("Preencha todos os campos.");
            return;
        }

        const noticia = {
            titulo,
            autor,
            categoria,
            imagem,
            resumo,
            data: new Date().toLocaleDateString("pt-BR")
        };

        console.log("Notícia cadastrada:");
        console.log(noticia);

        alert("Notícia cadastrada com sucesso!");

        formulario.reset();
    });

});