document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container-cards');
    if (container) {
        Object.keys(bancoDeDadosLivros).forEach(livroId => {
            const livro = bancoDeDadosLivros[livroId];
            const cardHTML = `
                <article class="card-livro">
                    <img src="${livro.imagem}" alt="Capa do livro ${livro.titulo}">
                    <div class="conteudo-card">
                        <h3>${livro.titulo}</h3>
                        <p class="autor-card">Autor: ${livro.autor}</p>
                        <a href="detalhes.html?id=${livroId}" class="botao-card">Detalhes</a>
                    </div>
                </article>
            `;

            container.innerHTML += cardHTML;
        });
    }
    const inputBuscaLivro = document.getElementById('busca-livro');
    const inputBuscaAutor = document.getElementById('busca-autor');

    function filtrarLivros() {
        const termoBuscaLivro = inputBuscaLivro.value.toLowerCase();
        const termoBuscaAutor = inputBuscaAutor.value.toLowerCase();
        
        const todosOsLivros = document.querySelectorAll('.card-livro');

        todosOsLivros.forEach(livroCard => {
            const tituloLivro = livroCard.querySelector('h3').textContent.toLowerCase();
            const autorLivro = livroCard.querySelector('.autor-card').textContent.toLowerCase();

            const correspondeAoLivro = tituloLivro.includes(termoBuscaLivro);
            const correspondeAoAutor = autorLivro.includes(termoBuscaAutor);

            if (correspondeAoLivro && correspondeAoAutor) {
                livroCard.style.display = 'flex';
            } else {
                livroCard.style.display = 'none';
            }
        });
    }
    if (inputBuscaLivro && inputBuscaAutor) {
        inputBuscaLivro.addEventListener('keyup', filtrarLivros);
        inputBuscaAutor.addEventListener('keyup', filtrarLivros);
    }
});